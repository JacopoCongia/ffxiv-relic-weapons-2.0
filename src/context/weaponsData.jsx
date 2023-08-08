import { createContext, useState, useEffect } from "react";
import data from "../../data";
import useAuth from "../hooks/use-auth";
import { addToDb, getWeapons } from "../../firebase";

const WeaponsDataContext = createContext();

function WeaponsDataProvider({ children }) {
  const [weapons, setWeapons] = useState(data);
  const { currentUser } = useAuth();

  function selectWeapon(name, key, wpnCategory) {
    setWeapons((oldWeapons) => ({
      ...oldWeapons,
      [key]: wpnCategory.map((weapon) => {
        return weapon.wpnName === name
          ? {
              ...weapon,
              isSelected: !weapon.isSelected
            }
          : weapon;
      })
    }));
  }

  function checkAll(allChecked, type) {
    setWeapons({
      ...weapons,
      [type]: allChecked
    });
  }

  function uncheckAll(allUnchecked, type) {
    setWeapons({
      ...weapons,
      [type]: allUnchecked
    });
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
        setWeapons(weaponsFromDb);
      }
    }

    if (currentUser?.emailVerified) {
      getWeaponsFromDb();
    } else {
      setWeapons(data);
    }
  }, [currentUser]);

  useEffect(() => {
    // if (weapons !== data) {
    //   localStorage.setItem("weapons", JSON.stringify(weapons));
    // }

    if (currentUser?.emailVerified) {
      addToDb(weapons, currentUser);
    }
  }, [weapons]);

  const valuesToShare = {
    weapons,
    setWeapons,
    selectWeapon,
    checkAll,
    uncheckAll
  };

  return (
    <WeaponsDataContext.Provider value={valuesToShare}>
      {children}
    </WeaponsDataContext.Provider>
  );
}

export { WeaponsDataProvider };
export default WeaponsDataContext;
