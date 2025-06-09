import { createContext, useState, useEffect } from "react";
import { addToDb, getWeapons } from "../../firebase";

import data from "../../data";

import useAuth from "../hooks/use-auth";

const WeaponsDataContext = createContext();

function WeaponsDataProvider({ children }) {
  const [weapons, setWeapons] = useState(data);
  const [ownedWeapons, setOwnedWeapons] = useState([]);
  const { currentUser } = useAuth();

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

  function selectWeapon(weapon) {
    const isItInArray = ownedWeapons.some((el) => el.id === weapon.id);

    if (!isItInArray) {
      if (weapon.wpnJobShort === "PLD") {
        // Find all PLD weapons in the same category (sword and shield)
        const pldWeapons = weapons[weapon.category].filter(
          (w) => w.wpnJobShort === "PLD"
        );
        setOwnedWeapons((prevOwnedWeapons) => {
          // Only add those not already owned
          const newWeapons = pldWeapons
            .filter((w) => !prevOwnedWeapons.some((el) => el.id === w.id))
            .map((w) => ({
              id: w.id,
              name: w.wpnName,
              category: w.category,
              shield: w.shield || null,
            }));
          return [...prevOwnedWeapons, ...newWeapons];
        });
      } else {
        setOwnedWeapons((prevOwnedWeapons) => {
          return [
            ...prevOwnedWeapons,
            {
              id: weapon.id,
              name: weapon.wpnName,
              category: weapon.category,
              shield: weapon.shield || null,
            },
          ];
        });
      }
    } else {
      if (weapon.wpnJobShort === "PLD") {
        // Remove all PLD weapons in the same category (sword and shield)
        const pldWeapons = weapons[weapon.category].filter(
          (w) => w.wpnJobShort === "PLD"
        );
        setOwnedWeapons((prevOwnedWeapons) =>
          prevOwnedWeapons.filter(
            (el) => !pldWeapons.some((w) => w.id === el.id)
          )
        );
      } else {
        const removedWeapon = ownedWeapons.filter(
          (element) => element.id !== weapon.id
        );
        setOwnedWeapons(removedWeapon);
      }
    }
  }

  function checkAll(weapons) {
    const checkedWeapons = weapons.map((el) => {
      return {
        id: el.id,
        name: el.wpnName,
        category: el.category,
        shield: el.shield || null,
      };
    });

    const filteredWeapons = checkedWeapons.filter((el) => {
      return !ownedWeapons.some((element) => element.id === el.id);
    });

    setOwnedWeapons((prevOwnedWeapons) => {
      return [...prevOwnedWeapons, ...filteredWeapons];
    });
  }

  function uncheckAll(weapons) {
    const uncheckedWeapons = weapons.map((el) => {
      return el.id;
    });

    const filteredWeapons = ownedWeapons.filter(
      (el) => !uncheckedWeapons.includes(el.id)
    );

    setOwnedWeapons(filteredWeapons);
  }

  useEffect(() => {
    async function getWeaponsFromDb() {
      const weaponsFromDb = await getWeapons(currentUser);

      if (weaponsFromDb) {
        setOwnedWeapons(weaponsFromDb);
      }
    }

    if (currentUser?.emailVerified) {
      getWeaponsFromDb();
    } else {
      setOwnedWeapons([]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.emailVerified) {
      addToDb(ownedWeapons, currentUser);
    }
  }, [ownedWeapons]);

  const valuesToShare = {
    weapons,
    setWeapons,
    selectWeapon,
    checkAll,
    uncheckAll,
    ownedWeapons, // Testing new weapon sorting
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
