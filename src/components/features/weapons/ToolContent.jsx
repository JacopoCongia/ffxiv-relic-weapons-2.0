import { Fragment } from "react";
import ToolsTable from "./ToolsTable.jsx";
import { showFallbackIcon } from "../../../utilities/imageFallback.js";

// The extra content under a tool section's items, built from the section's
// `acquire`, `requirements` and `toolsTable` fields (see toolsSectionData.js).
// Renders nothing if the section has none of them.

function Acquire({ quest, scrip }) {
  return (
    <>
      <p className="flex flex-wrap justify-center gap-2">
        You will get your first tool by completing the quest
        <a
          className="flex items-center underline underline-offset-[5px] hover:text-[#dddddd]"
          href={quest.url}
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-[25px]" src="/icons/feature_quest.png" />
          {quest.name}
        </a>
      </p>
      <p className="flex flex-wrap items-center justify-center gap-1">
        Each subsequent tool can be acquired for
        <span className="font-bold">{scrip.material.reqPerWeapon}</span>
        <img
          className="w-[22px]"
          src={scrip.material.icon}
          onError={showFallbackIcon}
        />
        {scrip.label} from {scrip.vendor}
      </p>
    </>
  );
}

// "Fisher needs 80 <icon> Rod Components and 80 <icon> Reel Components per
// Tool which means 40 Collectables at maximum collectability."
function Requirement({ lead = "You will need", parts, collectables }) {
  return (
    <p className="flex flex-wrap justify-center gap-2">
      {lead}
      {parts.map((part, index) => (
        <Fragment key={part.label}>
          <span className="font-bold">{part.amount}</span>
          <img
            className="w-[22px]"
            src={part.icon}
            onError={showFallbackIcon}
          />
          {part.label}
          {index < parts.length - 1 ? " and" : " per Tool which means"}
        </Fragment>
      ))}
      <span className="font-bold">{collectables}</span> Collectables at maximum
      collectability.
    </p>
  );
}

function ToolContent({ section }) {
  const { acquire, requirements, toolsTable } = section;
  if (!acquire && !requirements && !toolsTable) return null;

  return (
    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
      {acquire && <Acquire {...acquire} />}
      {requirements?.map((requirement) => (
        <Requirement key={requirement.lead ?? "all"} {...requirement} />
      ))}
      {toolsTable && <ToolsTable jobs={toolsTable} />}
    </div>
  );
}

export default ToolContent;
