import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import ItemsHeader from "./ItemsHeader.jsx";
import ItemsContainer from "./ItemsContainer.jsx";
import MaterialsContainer from "../materials/MaterialsContainer.jsx";
import CheckUncheck from "../../common/CheckUncheck.jsx";
import useAuth from "../../../hooks/use-auth.js";
import useWeaponsData from "../../../hooks/use-weapons-data.jsx";
import { useCounter } from "../../../hooks/use-counter.js";

function ItemsSection({
  notes,
  items,
  ownedWeapons,
  name,
  category,
  patchInfo,
  materials,
  tomestones,
  tomestoneAmount,
  children,
  type,
}) {
  const { currentUser } = useAuth();
  const { visibility } = useWeaponsData();
  const containerRef = useRef(null);

  // Counter for owned weapons
  const counter = useCounter(ownedWeapons || [], category);

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
      }, 50);
    }
  };

  return (
    <div
      ref={containerRef}
      className="scroll-mt-[112px] min-[600px]:scroll-mt-[140.8px]"
    >
      <ItemsHeader
        name={name}
        items={items}
        category={category}
        counter={counter}
        patchInfo={patchInfo}
        type={type}
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
            <div className="flex w-full flex-col items-center gap-[3em] px-[3em] py-10">
              <ItemsContainer items={items} />
              {type === "weapon" && (
                <MaterialsContainer
                  category={category}
                  counter={counter}
                  materials={materials}
                  notes={notes || null}
                  tomestoneAmount={tomestoneAmount}
                  tomestones={tomestones}
                  items={items}
                />
              )}
              {children && children}
              {currentUser?.emailVerified && (
                <CheckUncheck category={category} items={items} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ItemsSection;
