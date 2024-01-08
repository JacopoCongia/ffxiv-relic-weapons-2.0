import { createContext, useState, useEffect } from "react";
import { addToDb, getWeapons } from "../../firebase";

import data from "../../data";

import useAuth from "../hooks/use-auth";

const WeaponsDataContext = createContext();

function WeaponsDataProvider({ children }) {
  const [weapons, setWeapons] = useState(data);
  const [ownedWeapons, setOwnedWeapons] = useState([]);
  const { currentUser } = useAuth();

  // function selectWeapon(name, key, wpnCategory) {
  //   setWeapons((oldWeapons) => ({
  //     ...oldWeapons,
  //     [key]: wpnCategory.map((weapon) => {
  //       return weapon.wpnName === name
  //         ? {
  //             ...weapon,
  //             isSelected: !weapon.isSelected
  //           }
  //         : weapon;
  //     })
  //   }));
  // }

  // Testing new method to select weapons

  function selectWeapon(weapon) {
    const isItInArray = ownedWeapons.some((el) => el.id === weapon.id);

    if (!isItInArray) {
      setOwnedWeapons((prevOwnedWeapons) => {
        return [
          ...prevOwnedWeapons,
          {
            id: weapon.id,
            name: weapon.wpnName,
            category: weapon.category,
            shield: weapon.shield || null
          }
        ];
      });
    } else {
      const removedWeapon = ownedWeapons.filter(
        (element) => element.id !== weapon.id
      );
      setOwnedWeapons(removedWeapon);
    }
  }

  ////////////////////////////////////////////

  function checkAll(weapons) {
    const checkedWeapons = weapons.map((el) => {
      return {
        id: el.id,
        name: el.wpnName,
        category: el.category,
        shield: el.shield || null
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
    // const APP_VERSION = "1.0.2";

    // if (
    //   typeof localStorage.APP_VERSION === "undefined" ||
    //   localStorage.APP_VERSION === null
    // ) {
    //   localStorage.setItem("APP_VERSION", APP_VERSION);
    // }

    // if (localStorage.APP_VERSION != APP_VERSION) {
    //   localStorage.clear();
    // }

    // let storedWeapons = JSON.parse(localStorage.getItem("weapons")) || data;

    // setWeapons(storedWeapons);
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
    // if (weapons !== data) {
    //   localStorage.setItem("weapons", JSON.stringify(weapons));
    // }

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
    ownedWeapons // Testing new weapon sorting
  };

  return (
    <WeaponsDataContext.Provider value={valuesToShare}>
      {children}
    </WeaponsDataContext.Provider>
  );
}

export { WeaponsDataProvider };
export default WeaponsDataContext;
