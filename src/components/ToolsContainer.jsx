import Tool from "./Tool";

function ToolsContainer({ tools, category, type, children }) {
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
      <div className="bg-neutral-300 py-4 text-[1.5rem] font-bold text-center">
        {category}
      </div>
      <div className="flex flex-wrap items-center justify-center p-[3em] gap-5">
        {toolsEl}
      </div>
      <div>{children}</div>
    </>
  );
}

export default ToolsContainer;
