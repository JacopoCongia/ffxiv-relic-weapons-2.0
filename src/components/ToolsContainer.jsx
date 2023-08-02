import Tool from "./Tool";
import { BsCheckLg } from "react-icons/bs";
import { useToolsCounter } from "../hooks/use-weapons-counter";

function ToolsContainer({ tools, category, type, children }) {
  const counter = useToolsCounter(tools);
  const check =
    tools.length - counter.length === tools.length ? (
      <BsCheckLg className="mr-2 text-[1.5rem] text-green-600" />
    ) : null;

  const toolsEl = tools.map((tool) => {
    return (
      <Tool
        key={tool.id}
        tool={tool}
        tools={tools}
        type={type}
      />
    );
  });

  return (
    <>
      <div className="relative bg-[#F3D9B1] text-[#4e3727] py-4 text-[1.5rem] font-bold text-center">
        <p className="absolute flex items-center top-5 left-5 text-[1.2rem] font-[900]">
          {check} {tools.length - counter.length} / {tools.length}
        </p>
        <h1>{category}</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center p-[3em] gap-5">
        {toolsEl}
      </div>
      <div>{children}</div>
    </>
  );
}

export default ToolsContainer;
