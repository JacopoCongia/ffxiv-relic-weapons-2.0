import sectionData from "../data/sectionData.js";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/layout/Header.jsx";
import ItemsSection from "../components/features/weapons/ItemsSection.jsx";

// One page for every DoW/DoM expansion: `expansion` is the key into
// sectionData (e.g. "dawntrail"), `title` is the relic name shown in the header.
function ExpansionPage({ expansion, title }) {
  const { weapons, ownedWeapons } = useWeaponsData();

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title={title} dow />
      {sectionData[expansion].map((section) => (
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
          notes={section.notes}
          type={"weapon"}
        />
      ))}
    </div>
  );
}

export default ExpansionPage;
