import { motion } from "motion/react";

import { GoChevronDown } from "react-icons/go";
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

  const totalWeapons = weapon
    ? weapons.length - 1
    : tool
      ? weapons.length
      : null;

  const check =
    counter?.length === totalWeapons ? (
      <BsCheckLg className="mr-2 text-[20px] text-green-500 sm:text-[28px]" />
    ) : null;

  const customStyle = weapon
    ? "bg-headerWeaponsSection text-white"
    : tool
      ? "bg-headerToolsSection text-[#4e3727]"
      : "";

  return (
    <div
      onClick={() => handleVisibility(category, visibility[category])}
      className={`mb-[1px] flex cursor-pointer items-center justify-center gap-2 px-5 py-3 text-[16px] hover:opacity-95 sm:text-[20px] ${customStyle}`}
    >
      <p className="flex items-center text-[14px] font-bold sm:text-[18px]">
        {check} {counter?.length}/{totalWeapons}
      </p>
      <h4 className="ml-auto mr-auto text-center text-[16px] font-bold sm:text-[22px]">
        {name}
        <span
          className={`block text-[12px] sm:text-[16px] ${
            weapon ? "text-[#02B680]" : tool ? "text-green-600" : ""
          }`}
        >
          {patchInfo}
        </span>
      </h4>
      <motion.div
        animate={{ rotate: visibility[category] ? 180 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="flex items-center justify-center"
      >
        <GoChevronDown className="text-2xl sm:text-3xl" />
      </motion.div>
    </div>
  );
}

export default WeaponsHeader;
