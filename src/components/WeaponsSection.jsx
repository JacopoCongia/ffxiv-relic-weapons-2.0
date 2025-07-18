import WeaponsContainer from "./WeaponsContainer";
import WeaponsHeader from "./WeaponsHeader";
import MaterialsContainer from "./MaterialsContainer";
import CheckUncheck from "./CheckUncheck";
import useAuth from "../hooks/use-auth";
import useWeaponsData from "../hooks/use-weapons-data";
import { useCounter } from "../hooks/use-counter";
import { useState, useEffect } from "react";

function WeaponsSection({
  category,
  materials,
  name,
  notes,
  ownedWeapons,
  patchInfo,
  tomestoneAmount,
  tomestones,
  weapons,
}) {
  const { currentUser } = useAuth();
  const { visibility } = useWeaponsData();

  const counter = useCounter(ownedWeapons, category);
  const [isFullyOpen, setIsFullyOpen] = useState(false);

  /* prevent the overflow to be visible when the section is opening
   and ensure it is set to visible after the transition ends */
  useEffect(() => {
    let timeout;
    if (visibility[category]) {
      timeout = setTimeout(() => {
        setIsFullyOpen(true);
      }, 500); // match the duration of the transition in the css
    } else {
      setIsFullyOpen(false);
    }
    return () => clearTimeout(timeout);
  }, [visibility[category], category]);

  return (
    <>
      <WeaponsHeader
        category={category}
        counter={counter}
        name={name}
        patchInfo={patchInfo}
        weapon
        weapons={weapons}
      />
      <div
        className={`
          transition-all duration-500
          ${
            visibility[category]
              ? `max-h-[2000px] py-10 pointer-events-auto ${
                  isFullyOpen ? "overflow-visible" : "overflow-hidden"
                }` // the style gets applied only when the state isFullyOpen is true (after 500ms from the visibility change)
              : "max-h-0 overflow-hidden pointer-events-none" // the style gets applied only when the visibility is false
          }
          flex flex-col items-center justify-center mx-auto bg-stone-800 px-[3em] text-white max-w-[1000px]
        `}
      >
        <WeaponsContainer weapons={weapons} />
        <MaterialsContainer
          category={category}
          counter={counter}
          materials={materials}
          notes={notes || null}
          tomestoneAmount={tomestoneAmount}
          tomestones={tomestones}
          weapons={weapons}
        />
        {currentUser?.emailVerified && (
          <CheckUncheck
            category={category}
            weapons={weapons}
          />
        )}
      </div>
    </>
  );
}

export default WeaponsSection;
