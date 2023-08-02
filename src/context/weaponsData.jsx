import { createContext, useState, useEffect } from "react";
import data from "../../data";

const WeaponsDataContext = createContext();

function WeaponsDataProvider({ children }) {
  const [weapons, setWeapons] = useState(data);

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
    let storedWeapons = JSON.parse(localStorage.getItem("weapons")) || data;

    setWeapons(storedWeapons);
  }, []);

  useEffect(() => {
    if (weapons !== data) {
      localStorage.setItem("weapons", JSON.stringify(weapons));
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
