import Tool from "./Tool";
import { BsCheckLg } from "react-icons/bs";

function ToolsContainer({ tools, category, children, counter }) {
  const check =
    counter.length === tools.length ? (
      <BsCheckLg className="mr-2 text-[1.5rem] text-green-600" />
    ) : null;

  const updatedCategory = category.includes("Gatherers")
    ? "Gatherers"
    : "Crafters";

  const toolsEl = tools.map((tool) => {
    return (
      <Tool
        key={tool.id}
        tool={tool}
        tools={tools}
        category={category}
      />
    );
  });

  return (
    <>
      <div className="relative bg-[#F3D9B1] text-[#4e3727] py-4 text-[1.5rem] font-bold text-center">
        <p className="absolute flex items-center top-5 left-5 text-[1.2rem] font-[900]">
          {check} {counter.length} / {tools.length}
        </p>
        <h1>{updatedCategory}</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center p-[3em] gap-5">
        {toolsEl}
      </div>
      <div>{children}</div>
    </>
  );
}

export default ToolsContainer;
