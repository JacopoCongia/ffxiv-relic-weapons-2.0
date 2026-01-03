import sectionData from "../data/sectionData.js";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/layout/Header.jsx";
import WeaponsSection from "../components/features/weapons/WeaponsSection.jsx";

function Endwalker() {
  const { weapons, ownedWeapons } = useWeaponsData();

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Manderville" dow />
      {sectionData.endwalker.map((section) => (
        <WeaponsSection
          key={section.id}
          weapons={weapons[section.id]}
          ownedWeapons={ownedWeapons}
          name={section.name}
          category={section.id}
          patchInfo={section.patchInfo}
          materials={section.materials}
          tomestones={section.tomestones}
          tomestoneAmount={section.tomestoneAmount}
        />
      ))}
    </div>
  );
}

export default Endwalker;
