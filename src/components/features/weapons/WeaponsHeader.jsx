import { motion } from "motion/react";

import { GoChevronDown } from "react-icons/go";
import { BsCheckLg } from "react-icons/bs";

import useWeaponsData from "../../../hooks/use-weapons-data.jsx";

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
      <BsCheckLg className="mr-2 text-[20px] text-dark-teal-400 sm:text-[28px]" />
    ) : null;

  const customStyle = weapon
    ? "bg-dark-teal-900 text-dark-teal-100 border-b border-dark-teal-800 hover:bg-dark-teal-800/70 transition-colors duration-[0.3s]"
    : tool
      ? "bg-headerToolsSection text-headerToolsText"
      : "";

  return (
    <div
      onClick={() => handleVisibility(category, visibility[category])}
      className={`mb-[1px] flex cursor-pointer select-none items-center justify-center gap-2 px-5 py-3 text-[16px] hover:opacity-95 sm:text-[20px] ${customStyle}`}
    >
      <p className="flex items-center text-[1rem] font-bold min-[600px]:text-[1.1rem]">
        {check} {counter?.length}/{totalWeapons}
      </p>
      <h1 className="mx-auto text-center text-[1.1rem] font-bold min-[600px]:text-[1.3rem]">
        {name}
        <span
          className={`block text-[0.9rem] min-[600px]:text-[1rem] ${
            weapon
              ? "text-dark-teal-300"
              : tool
                ? "text-headerToolsTextPatch"
                : ""
          }`}
        >
          {patchInfo}
        </span>
      </h1>
      <motion.div
        animate={{ rotate: visibility[category] ? 180 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="flex items-center justify-center"
      >
        <GoChevronDown className="text-[1.9rem] sm:text-[2.3rem]" />
      </motion.div>
    </div>
  );
}

export default WeaponsHeader;
