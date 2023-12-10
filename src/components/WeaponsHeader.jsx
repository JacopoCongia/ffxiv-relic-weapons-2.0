import { useContext } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { BsCheckLg } from "react-icons/bs";
import { WeaponsSectionContext } from "./WeaponsSection";

function WeaponsHeader({ totalWeapons, name, patchInfo, test }) {
  const { open, setOpen } = useContext(WeaponsSectionContext);

  // const check =
  //   totalWeapons - weaponsCounter === totalWeapons ? (
  //     <BsCheckLg className="mr-2 text-[20px] text-green-500 sm:text-[28px]" />
  //   ) : null;

  // const countTest = test?.filter((el) => {
  //   return el.includes(name);
  // });

  return (
    <div
      className="mb-[1px] flex cursor-pointer items-center justify-center gap-2 bg-sky-900 px-5 py-3 text-[16px] text-white hover:opacity-95 sm:text-[20px]"
      onClick={setOpen}
    >
      {/* <p className="flex items-center text-[14px] font-bold sm:text-[18px] ">
        {check} {totalWeapons - countTest.length}/{totalWeapons}
      </p> */}
      <h4 className="ml-auto mr-auto text-center text-[16px] font-bold sm:text-[22px]">
        {name}
        <span className="block text-[12px] text-green-500 sm:text-[16px]">
          {patchInfo}
        </span>
      </h4>
      {!open ? (
        <GoChevronDown className="text-2xl sm:text-3xl" />
      ) : (
        <GoChevronUp className="text-2xl sm:text-3xl" />
      )}
    </div>
  );
}

export default WeaponsHeader;
