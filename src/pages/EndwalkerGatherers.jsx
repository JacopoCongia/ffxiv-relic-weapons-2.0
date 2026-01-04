import ItemsSection from "../components/features/weapons/ItemsSection.jsx";
import Header from "../components/layout/Header.jsx";
import useWeaponsData from "../hooks/use-weapons-data";
import { useToolsContent } from "../hooks/use-tools-content.jsx";
import toolsSectionData from "../data/toolsSectionData.js";

function EndwalkerGatherers() {
  const { weapons: items, ownedWeapons } = useWeaponsData();
  const { getSectionChildren } = useToolsContent();

  return (
    <div className="duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header dol />
      {toolsSectionData.endwalker.gatherers.map((section) => (
        <ItemsSection
          key={section.id}
          items={items[section.id]}
          category={section.category}
          name={section.name}
          patchInfo={section.patchInfo}
          type={"tool"}
          ownedWeapons={ownedWeapons}
        >
          {getSectionChildren(section.id)}
        </ItemsSection>
      ))}
    </div>
  );
}

export default EndwalkerGatherers;
