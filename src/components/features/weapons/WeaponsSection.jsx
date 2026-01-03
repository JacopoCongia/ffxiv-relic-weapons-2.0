import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import WeaponsContainer from "./WeaponsContainer.jsx";
import WeaponsHeader from "./WeaponsHeader.jsx";
import MaterialsContainer from "../materials/MaterialsContainer.jsx";
import CheckUncheck from "../../common/CheckUncheck.jsx";
import useAuth from "../../../hooks/use-auth.js";
import useWeaponsData from "../../../hooks/use-weapons-data.jsx";
import { useCounter } from "../../../hooks/use-counter.js";

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
  const containerRef = useRef(null);

  const counter = useCounter(ownedWeapons, category);

  // Logic to scroll to the section when the user opens it
  const handleScrollOnOpen = () => {
    if (containerRef.current) {
      setTimeout(() => {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.bottom > windowHeight) {
          containerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <div
      ref={containerRef}
      className="scroll-mt-[112px] min-[600px]:scroll-mt-[140.8px]"
    >
      <WeaponsHeader
        category={category}
        counter={counter}
        name={name}
        patchInfo={patchInfo}
        weapon
        weapons={weapons}
      />
      <AnimatePresence initial={false}>
        {visibility[category] && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            onAnimationComplete={(definition) => {
              if (definition === "open") handleScrollOnOpen();
            }}
            variants={{
              open: {
                height: "auto",
                zIndex: 10,
                overflow: "hidden",
                transitionEnd: { overflow: "visible" },
                opacity: 1,
              },
              collapsed: {
                height: 0,
                zIndex: 0,
                overflow: "hidden",
                opacity: 0,
              },
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto bg-stone-800 text-white"
          >
            <div className="flex w-full flex-col items-center px-[3em] py-10">
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
    </div>
  );
}

export default WeaponsSection;
