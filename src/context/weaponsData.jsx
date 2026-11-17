import {createContext, useState, useEffect, useRef} from "react";
import {addToDb, getWeapons} from "../../firebase";

import data from "../data/data.js";

import useAuth from "../hooks/use-auth";

const WeaponsDataContext = createContext();

// Wait this long after the last change before writing to Firestore, so rapid clicks become one write
const SAVE_DEBOUNCE_MS = 500;

function WeaponsDataProvider({children}) {
    const [weapons, setWeapons] = useState(data);
    const [ownedWeapons, setOwnedWeapons] = useState([]);
    const {currentUser} = useAuth();
    // uid whose data has finished loading from Firestore; saving is disabled until then
    // so the empty initial state can never overwrite the user's saved data
    const [loadedForUid, setLoadedForUid] = useState(null);
    // The ownedWeapons array last loaded from or written to Firestore
    const lastSyncedRef = useRef(null);

    // SECTION VISIBILITY START
    const storedVisibility = JSON.parse(localStorage.getItem("visibility"));

    const [visibility, setVisibility] = useState(storedVisibility || {});

    function handleVisibility(category, isOpen) {
        setVisibility((prevVisibility) => ({
            ...prevVisibility,
            [category]: !isOpen,
        }));
    }

    useEffect(() => {
        localStorage.setItem("visibility", JSON.stringify(visibility));
    }, [visibility]);

    // SECTION VISIBILITY END

    // Weapon selection logic
    function selectWeapon(weapon) {
        const isOwned = ownedWeapons.some((el) => el.id === weapon.id);
        const isPLD = weapon.wpnJobShort === "PLD";

        // Get weapons to process (all PLD weapons in category, or just this one)
        const weaponsToProcess = isPLD
            ? weapons[weapon.category].filter((w) => w.wpnJobShort === "PLD")
            : [weapon];

        // Helper to create weapon object
        const toWeaponObj = (w) => ({
            id: w.id,
            name: w.wpnName,
            category: w.category,
            shield: w.shield || null,
        });

        if (!isOwned) {
            // Add weapons
            setOwnedWeapons((prev) => {
                const newWeapons = weaponsToProcess
                    .filter((w) => !prev.some((el) => el.id === w.id))
                    .map(toWeaponObj);
                return [...prev, ...newWeapons];
            });
        } else {
            // Remove weapons
            const idsToRemove = new Set(weaponsToProcess.map((w) => w.id));
            setOwnedWeapons((prev) => prev.filter((el) => !idsToRemove.has(el.id)));
        }
    }

    // Select all items in a category
    function checkAll(items) {
        setOwnedWeapons((prevOwnedWeapons) => {
            const existingIds = new Set(prevOwnedWeapons.map((item) => item.id));

            const newItemsToAdd = items
                .filter((item) => !existingIds.has(item.id))
                .map((item) => ({
                    id: item.id,
                    name: item.wpnName,
                    category: item.category,
                    shield: item.shield || null,
                }));
            return [...prevOwnedWeapons, ...newItemsToAdd];
        });
    }

    // Deselect all items in a category
    function uncheckAll(items) {
        const idsToRemove = new Set(items.map((item) => item.id)); // create a set of ids to remove
        setOwnedWeapons((prevOwnedWeapons) => {
            return prevOwnedWeapons.filter((item) => !idsToRemove.has(item.id));
        });
    }

    // Load the user's saved weapons when they log in (or switch accounts)
    useEffect(() => {
        setLoadedForUid(null);

        if (!currentUser) {
            lastSyncedRef.current = null;
            setOwnedWeapons([]);
            return;
        }

        let cancelled = false;
        getWeapons(currentUser)
            .then((weaponsFromDb) => {
                if (cancelled) return;
                lastSyncedRef.current = weaponsFromDb;
                setOwnedWeapons(weaponsFromDb);
                setLoadedForUid(currentUser.uid);
            })
            .catch((error) => console.error("Failed to load owned weapons", error));

        return () => {
            cancelled = true;
        };
    }, [currentUser]);

    // Save changes to Firestore (debounced), skipping data that was just loaded from it
    useEffect(() => {
        if (!currentUser || loadedForUid !== currentUser.uid) return;
        if (ownedWeapons === lastSyncedRef.current) return;

        const save = () => {
            lastSyncedRef.current = ownedWeapons;
            addToDb(ownedWeapons, currentUser).catch((error) =>
                console.error("Failed to save owned weapons", error)
            );
        };

        const timer = setTimeout(save, SAVE_DEBOUNCE_MS);
        // If the tab is hidden or closed before the timer fires, save right away
        const saveIfHidden = () => {
            if (document.visibilityState === "hidden" && ownedWeapons !== lastSyncedRef.current) {
                clearTimeout(timer);
                save();
            }
        };
        document.addEventListener("visibilitychange", saveIfHidden);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("visibilitychange", saveIfHidden);
        };
    }, [ownedWeapons, currentUser, loadedForUid]);

    const valuesToShare = {
        weapons,
        setWeapons,
        selectWeapon,
        checkAll,
        uncheckAll,
        ownedWeapons, // Keeps track of selected weapons
        visibility, // Section visibility object
        handleVisibility, // Section visibility change
    };

    return (
        <WeaponsDataContext.Provider value={valuesToShare}>
            {children}
        </WeaponsDataContext.Provider>
    );
}

export {WeaponsDataProvider};
export default WeaponsDataContext;
