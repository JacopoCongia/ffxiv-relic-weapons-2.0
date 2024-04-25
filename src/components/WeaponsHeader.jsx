import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { BsCheckLg } from "react-icons/bs";

import useWeaponsData from "../hooks/use-weapons-data";

function WeaponsHeader({
  category,
  counter,
  name,
  patchInfo,
  weapons,
  weapon,
  tool,
}) {
  const { visibility, handleVisibility } = useWeaponsData();

  const totalWeapons =
    weapons[0].wpnJobShort === "PLD" ? weapons.length - 1 : weapons.length;
  const check =
    counter?.length === totalWeapons ? (
      <BsCheckLg className="mr-2 text-[20px] text-green-500 sm:text-[28px]" />
    ) : null;

  const customStyle = weapon
    ? "bg-sky-900 text-white"
    : tool
    ? "bg-[#F3D9B1] text-[#4e3727]"
    : "";

  return (
    <div
      onClick={() => handleVisibility(category, visibility[category])}
      className={`mb-[1px] flex cursor-pointer items-center justify-center gap-2 px-5 py-3 text-[16px] hover:opacity-95 sm:text-[20px] ${customStyle}`}
    >
      <p className="flex items-center text-[14px] font-bold sm:text-[18px] ">
        {check} {counter?.length}/{totalWeapons}
      </p>
      <h4 className="ml-auto mr-auto text-center text-[16px] font-bold sm:text-[22px]">
        {name}
        <span
          className={`block text-[12px] sm:text-[16px] ${
            weapon ? "text-green-500" : tool ? "text-green-600" : ""
          }`}
        >
          {patchInfo}
        </span>
      </h4>
      {!visibility[category] ? (
        <GoChevronDown className="text-2xl sm:text-3xl" />
      ) : (
        <GoChevronUp className="text-2xl sm:text-3xl" />
      )}
    </div>
  );
}

export default WeaponsHeader;
