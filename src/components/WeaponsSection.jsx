import WeaponsContainer from "./WeaponsContainer";
import WeaponsHeader from "./WeaponsHeader";
import MaterialsContainer from "./MaterialsContainer";
import CheckUncheck from "./CheckUncheck";
import useAuth from "../hooks/use-auth";
import useWeaponsData from "../hooks/use-weapons-data";
import { useCounter } from "../hooks/use-counter";

function WeaponsSection({
  weapons,
  ownedWeapons,
  totalWeapons,
  patchInfo,
  category,
  name,
  materials,
  tomestones,
  tomestoneAmount,
  checkAll,
  uncheckAll,
  notes,
}) {
  const { currentUser } = useAuth();
  const { visibility } = useWeaponsData();

  const counter = useCounter(ownedWeapons, category);

  return (
    <>
      <WeaponsHeader
        category={category}
        counter={counter}
        name={name}
        patchInfo={patchInfo}
        weapons={weapons}
        weapon
      />
      {visibility[category] && (
        <div className="flex flex-col items-center justify-center bg-stone-800 py-10 px-[3em] text-white max-w-[1000px]">
          <WeaponsContainer weapons={weapons} />
          <MaterialsContainer
            category={category}
            counter={counter}
            materials={materials}
            notes={notes || null}
            tomestoneAmount={tomestoneAmount}
            tomestones={tomestones}
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
