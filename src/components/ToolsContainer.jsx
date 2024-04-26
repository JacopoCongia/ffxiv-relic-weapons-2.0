import Tool from "./Tool";
import { useCounter } from "../hooks/use-counter";
import useWeaponsData from "../hooks/use-weapons-data";
import WeaponsHeader from "./WeaponsHeader";

function ToolsContainer({ tools, category, name, children, patchInfo }) {
  const { ownedWeapons, visibility, handleVisibility } = useWeaponsData();

  const counter = useCounter(ownedWeapons, category);

  const toolsEl = tools.map((tool) => {
    return (
      <Tool
        key={tool.id}
        tool={tool}
      />
    );
  });

  return (
    <>
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
        <>
          <div className="flex flex-wrap items-center justify-center gap-5 p-[3em]">
            {toolsEl}
          </div>
          <div>{children}</div>
        </>
      )}
    </>
  );
}

export default ToolsContainer;
