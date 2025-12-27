import { AnimatePresence, motion } from "motion/react";
import WeaponsContainer from "./WeaponsContainer";
import WeaponsHeader from "./WeaponsHeader";
import MaterialsContainer from "./MaterialsContainer";
import CheckUncheck from "./CheckUncheck";
import useAuth from "../hooks/use-auth";
import useWeaponsData from "../hooks/use-weapons-data";
import { useCounter } from "../hooks/use-counter";

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

  return (
    <AnimatePresence initial={false}>
      <WeaponsHeader
        category={category}
        counter={counter}
        name={name}
        patchInfo={patchInfo}
        weapon
        weapons={weapons}
      />
      {visibility[category] && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: {
              height: "auto",
              zIndex: 10,
              overflow: "hidden",
              transitionEnd: { overflow: "visible" },
            },
            collapsed: { height: 0, zIndex: 0, overflow: "hidden" },
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto flex max-w-[1000px] flex-col items-center justify-center bg-stone-800 px-[3em] text-white"
        >
          <div className="flex w-full flex-col items-center py-10">
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
              <CheckUncheck category={category} weapons={weapons} />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WeaponsSection;
