import { createContext, useState, useEffect, useRef } from "react";
import { addToDb, getWeapons } from "../../firebase";

import data from "../data/data.js";
import {
  addItems,
  removeItems,
  toggleItem,
} from "../utilities/ownedWeapons.js";

import useAuth from "../hooks/use-auth";

const WeaponsDataContext = createContext();

// Wait this long after the last change before writing to Firestore, so rapid clicks become one write
const SAVE_DEBOUNCE_MS = 500;

// localStorage key for which sections are open ({ [category]: true/false })
const VISIBILITY_KEY = "visibility";

function readStoredVisibility() {
  try {
    const stored = JSON.parse(localStorage.getItem(VISIBILITY_KEY));
    // Only accept a plain object; anything else (null, a list, a string) is ignored
    if (stored && typeof stored === "object" && !Array.isArray(stored)) {
      return stored;
    }
  } catch {
    // Corrupted JSON, or storage blocked: start with all sections closed
  }
  return {};
}

function WeaponsDataProvider({ children }) {
  const [weapons, setWeapons] = useState(data);
  const [ownedWeapons, setOwnedWeapons] = useState([]);
  const { currentUser } = useAuth();
  // uid whose data has finished loading from Firestore; saving is disabled until then
  // so the empty initial state can never overwrite the user's saved data
  const [loadedForUid, setLoadedForUid] = useState(null);
  // The ownedWeapons array last loaded from or written to Firestore
  const lastSyncedRef = useRef(null);

  // SECTION VISIBILITY START
  // Read once on first render (not on every render), falling back to {} if
  // the stored value is missing or corrupted
  const [visibility, setVisibility] = useState(readStoredVisibility);

  function handleVisibility(category, isOpen) {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [category]: !isOpen,
    }));
  }

  useEffect(() => {
    try {
      localStorage.setItem(VISIBILITY_KEY, JSON.stringify(visibility));
    } catch {
      // Storage can be full or blocked (e.g. some private modes); the
      // open/closed state just won't be remembered
    }
  }, [visibility]);

  // SECTION VISIBILITY END

  // Weapon selection logic (the list changes themselves live in
  // utilities/ownedWeapons.js, where they're unit tested)

  // Select or deselect one item; a PLD item toggles every PLD item in its
  // category, so the sword and shield move together
  function selectWeapon(weapon) {
    setOwnedWeapons((prev) =>
      toggleItem(prev, weapon, weapons[weapon.category]),
    );
  }

  // Select all items in a category
  function checkAll(items) {
    setOwnedWeapons((prev) => addItems(prev, items));
  }

  // Deselect all items in a category
  function uncheckAll(items) {
    setOwnedWeapons((prev) => removeItems(prev, items));
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
        console.error("Failed to save owned weapons", error),
      );
    };

    const timer = setTimeout(save, SAVE_DEBOUNCE_MS);
    // If the tab is hidden or closed before the timer fires, save right away
    const saveIfHidden = () => {
      if (
        document.visibilityState === "hidden" &&
        ownedWeapons !== lastSyncedRef.current
      ) {
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

export { WeaponsDataProvider };
export default WeaponsDataContext;
