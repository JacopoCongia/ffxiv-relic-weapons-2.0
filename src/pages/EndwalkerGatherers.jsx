import ItemsSection from "../components/features/weapons/ItemsSection.jsx";
import Header from "../components/layout/Header.jsx";
import useWeaponsData from "../hooks/use-weapons-data";
import toolsSectionData from "../data/toolsSectionData.js";

function EndwalkerGatherers() {
  const { weapons: items, ownedWeapons } = useWeaponsData();

  return (
    <div className="duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header dol guide={toolsSectionData.endwalker.guide} />
      {toolsSectionData.endwalker.gatherers.map((section) => (
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

export default EndwalkerGatherers;
