import ItemsSection from "../components/features/weapons/ItemsSection.jsx";
import Header from "../components/layout/Header.jsx";
import useWeaponsData from "../hooks/use-weapons-data";
import toolsSectionData from "../data/toolsSectionData.js";

// One page for every expansion's tools: `expansion` is the key into
// toolsSectionData (e.g. "dawntrail"), `role` is "crafters" (DoH) or
// "gatherers" (DoL) and picks the section list and the header title.
function ToolsPage({ expansion, role }) {
  const { weapons: items, ownedWeapons } = useWeaponsData();
  const { guide, [role]: sections } = toolsSectionData[expansion];
  const isCrafters = role === "crafters";

  return (
    <div className="duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header doh={isCrafters} dol={!isCrafters} guide={guide} />
      {sections.map((section) => (
        <ItemsSection
          key={section.id}
          items={items[section.id]}
          category={section.category}
          name={section.name}
          patchInfo={section.patchInfo}
          type={"tool"}
          ownedWeapons={ownedWeapons}
        />
      ))}
    </div>
  );
}

export default ToolsPage;
