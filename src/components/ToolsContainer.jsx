import { AnimatePresence, motion } from "motion/react";

import Tool from "./Tool";
import { useCounter } from "../hooks/use-counter";
import useWeaponsData from "../hooks/use-weapons-data";
import WeaponsHeader from "./WeaponsHeader";

function ToolsContainer({ tools, category, name, children, patchInfo }) {
  const { ownedWeapons, visibility, handleVisibility } = useWeaponsData();

  const counter = useCounter(ownedWeapons, category);

  const toolsEl = tools.map((tool) => {
    return <Tool key={tool.id} tool={tool} />;
  });

  return (
    <AnimatePresence initial={false}>
      <WeaponsHeader
        name={name}
        weapons={tools}
        handleClick={() => handleVisibility(category, visibility[category])}
        category={category}
        counter={counter}
        patchInfo={patchInfo}
        tool
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
          <div className="flex flex-wrap items-center justify-center gap-5 p-[3em]">
            {toolsEl}
          </div>
          <div>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ToolsContainer;
