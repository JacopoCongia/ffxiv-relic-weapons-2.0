import { motion } from "motion/react";

import { GoChevronDown } from "react-icons/go";
import { BsCheckLg } from "react-icons/bs";

import useWeaponsData from "../../../hooks/use-weapons-data.jsx";

function ItemsHeader({ category, counter, name, patchInfo, items = [], type }) {
  const { visibility, handleVisibility } = useWeaponsData();

  // Filter out shields/off-hands from the total count to match the counter logic
  const mainHandItems = items.filter((item) => !item.shield);
  const totalItems = mainHandItems.length;

  const check =
    counter?.length === totalItems && totalItems > 0 ? (
      <BsCheckLg className="mr-2 text-[20px] text-dark-teal-400 sm:text-[28px]" />
    ) : null;

  const customStyle =
    type === "weapon"
      ? "bg-dark-teal-900/80 hover:dark-teal-800/80 text-dark-teal-100 border-b border-dark-teal-800 hover:bg-dark-teal-800/70"
      : type === "tool"
        ? "bg-headerToolsSection/80 text-headerToolsText hover:bg-headerToolsSection/50 "
        : "";

  return (
    <div
      onClick={() => handleVisibility(category, visibility[category])}
      className={`sticky top-[112px] z-30 mb-[1px] flex cursor-pointer select-none items-center justify-center gap-2 px-5 py-3 text-[16px] backdrop-blur-md transition-colors duration-[0.3s] min-[600px]:top-[140.8px] sm:text-[20px] ${customStyle}`}
    >
      <p className="flex items-center text-[1rem] font-bold min-[600px]:text-[1.1rem]">
        {check} {counter?.length}/{totalItems}
      </p>
      <h1 className="mx-auto text-center text-[1.1rem] font-bold min-[600px]:text-[1.3rem]">
        {name}
        <span
          className={`block text-[0.9rem] min-[600px]:text-[1rem] ${
            type === "weapon"
              ? "text-dark-teal-300"
              : type === "tool"
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

export default ItemsHeader;
