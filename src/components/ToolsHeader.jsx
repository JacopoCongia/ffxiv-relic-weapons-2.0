import { BsCheckLg } from "react-icons/bs";

function ToolsHeader({ name, tools, counter }) {
  const check =
    counter.length === tools.length ? (
      <BsCheckLg className="mr-2 text-[1.5rem] text-green-600" />
    ) : null;

  return (
    <div>
      <div className="flex items-center justify-center bg-[#F3D9B1] text-[#4e3727] py-4 px-4 text-[1.5rem] font-bold text-center">
        <p className="flex text-[1.2rem] font-[900]">
          {check} {counter.length} / {tools.length}
        </p>
        <p className="m-auto">{name} Tools</p>
      </div>
    </div>
  );
}

export default ToolsHeader;
