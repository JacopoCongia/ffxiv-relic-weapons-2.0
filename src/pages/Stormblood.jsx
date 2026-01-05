import sectionData from "../data/sectionData.js";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/layout/Header.jsx";
import ItemsSection from "../components/features/weapons/ItemsSection.jsx";

function Stormblood() {
  const { weapons, ownedWeapons } = useWeaponsData();

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Eurekan" dow />
      {sectionData.stormblood.map((section) => (
        <ItemsSection
          key={section.id}
          items={weapons[section.id]}
          ownedWeapons={ownedWeapons}
          name={section.name}
          category={section.id}
          patchInfo={section.patchInfo}
          materials={section.materials}
          tomestones={section.tomestones}
          tomestoneAmount={section.tomestoneAmount}
          type={"weapon"}
          notes={section.notes || null}
        />
      ))}
    </div>
  );
}

export default Stormblood;
