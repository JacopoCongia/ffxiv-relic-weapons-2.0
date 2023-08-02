import { useContext } from "react";
import WeaponsDataContext from "../context/weaponsData";

function useWeaponsData() {
  return useContext(WeaponsDataContext);
}

export default useWeaponsData;
