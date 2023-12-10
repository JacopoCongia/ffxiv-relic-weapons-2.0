import { createContext, useState, useEffect } from "react";
import { addToDb, getWeapons } from "../../firebase";

import data from "../../data";

import useAuth from "../hooks/use-auth";

const WeaponsDataContext = createContext();

function WeaponsDataProvider({ children }) {
  const [weapons, setWeapons] = useState(data);
  const [test, setTest] = useState([]);
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

  function selectWeapon(id) {
    const isItInArray = test.some((el) => el === id);

    console.log(test);

    if (!isItInArray) {
      setTest((prevTest) => {
        return [...prevTest, id];
      });
    } else {
      const removedWeapon = test.filter((element) => element !== id);
      setTest(removedWeapon);
    }
  }

  ////////////////////////////////////////////

  function checkAll(allChecked) {
    const checkedWeapons = allChecked.map((el) => {
      return el.id;
    });

    const filteredWeapons = checkedWeapons.filter((el) => {
      return !test.includes(el);
    });

    setTest((prevTest) => {
      return [...prevTest, ...filteredWeapons];
    });
  }

  function uncheckAll(allUnchecked) {
    const uncheckedWeapons = allUnchecked.map((el) => {
      return el.id;
    });

    const filteredWeapons = test.filter((el) => !uncheckedWeapons.includes(el));

    setTest(filteredWeapons);
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
    uncheckAll,
    test // Testing new weapon sorting
  };

  return (
    <WeaponsDataContext.Provider value={valuesToShare}>
      {children}
    </WeaponsDataContext.Provider>
  );
}

export { WeaponsDataProvider };
export default WeaponsDataContext;
