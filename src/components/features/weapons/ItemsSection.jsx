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

  // Counter for owned weapons
  const counter = useCounter(ownedWeapons || [], category);

  return (
    // The header is sticky inside this wrapper, so it stays pinned while
    // you scroll through its open section, then moves on with it
    <div>
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
            <div className="flex w-full flex-col items-center gap-[3em] p-[3em]">
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
              {/* Same rule as ItemCard: any logged-in user can select items */}
              {currentUser && (
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
