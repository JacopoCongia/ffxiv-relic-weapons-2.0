import { createContext } from "react";
import WeaponsContainer from "./WeaponsContainer";
import WeaponsHeader from "./WeaponsHeader";
import MaterialsContainer from "./MaterialsContainer";
import CheckUncheck from "./CheckUncheck";
import useToggle from "../hooks/use-toggle";
import useAuth from "../hooks/use-auth";
import { useCounter } from "../hooks/use-counter";

const WeaponsSectionContext = createContext();

function WeaponsSection({
  weapons,
  ownedWeapons,
  totalWeapons,
  patchInfo,
  category,
  name,
  selectWeapon,
  materials,
  tomestones,
  tomestoneAmount,
  checkAll,
  uncheckAll,
  notes,
}) {
  const [open, setOpen] = useToggle(true);
  const { currentUser } = useAuth();

  const counter = useCounter(ownedWeapons, category);

  return (
    <>
      <WeaponsSectionContext.Provider value={{ open, setOpen }}>
        <WeaponsHeader
          ownedWeapons={ownedWeapons}
          weapons={weapons}
          totalWeapons={totalWeapons}
          patchInfo={patchInfo}
          category={category}
          name={name}
          counter={counter}
        />
      </WeaponsSectionContext.Provider>
      {open && (
        <div className="flex flex-col items-center justify-center m-auto bg-stone-800 py-10 px-[3em] text-white max-w-[1000px]">
          <WeaponsContainer
            weapons={weapons}
            category={category}
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={materials}
            category={category}
            tomestones={tomestones}
            tomestoneAmount={tomestoneAmount}
            notes={notes || null}
            counter={counter}
            totalWeapons={totalWeapons}
          />
          {currentUser?.emailVerified && (
            <CheckUncheck
              weapons={weapons}
              category={category}
              checkAll={checkAll}
              uncheckAll={uncheckAll}
            />
          )}
        </div>
      )}
    </>
  );
}

export default WeaponsSection;
export { WeaponsSectionContext };
