import Tool from "./Tool";
import { useCounter } from "../hooks/use-counter";
import useWeaponsData from "../hooks/use-weapons-data";
import ToolsHeader from "./ToolsHeader";

function ToolsContainer({ tools, category, name, children }) {
  const { ownedWeapons } = useWeaponsData();

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
      <ToolsHeader
        name={name}
        tools={tools}
        counter={counter}
      />
      <div className="flex flex-wrap items-center justify-center p-[3em] gap-5">
        {toolsEl}
      </div>
      <div>{children}</div>
    </>
  );
}

export default ToolsContainer;
