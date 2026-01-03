import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";
import Tool from "./Tool.jsx";
import { useCounter } from "../../../hooks/use-counter.js";
import useWeaponsData from "../../../hooks/use-weapons-data.jsx";
import WeaponsHeader from "./WeaponsHeader.jsx";

function ToolsContainer({ tools, category, name, children, patchInfo }) {
  const { ownedWeapons, visibility, handleVisibility } = useWeaponsData();

  const counter = useCounter(ownedWeapons, category);
  const containerRef = useRef(null);

  const toolsEl = tools.map((tool) => {
    return <Tool key={tool.id} tool={tool} />;
  });

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
        name={name}
        weapons={tools}
        handleClick={() => handleVisibility(category, visibility[category])}
        category={category}
        counter={counter}
        patchInfo={patchInfo}
        tool
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
            className="flex flex-col items-center justify-center gap-[2em] bg-stone-800 text-neutral-100"
          >
            <div className="flex flex-wrap items-center justify-center gap-5 p-[3em]">
              {toolsEl}
            </div>
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ToolsContainer;
