import materialsData from "../../materialsData";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";

function Dawntrail() {
  const { weapons, ownedWeapons } = useWeaponsData();

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Phantom" dow />
      <WeaponsSection
        weapons={weapons.penumbrae}
        ownedWeapons={ownedWeapons}
        name="Penumbrae"
        category="penumbrae"
        patchInfo="iLvl 745 (Patch 7.25)"
        materials={materialsData.materials.dawntrail.dow.penumbrae}
        tomestones={materialsData.tomestones.heliometry}
        tomestoneAmount={1500}
      />
      <WeaponsSection
        weapons={weapons.umbrae}
        ownedWeapons={ownedWeapons}
        name="Umbrae"
        category="umbrae"
        patchInfo="iLvl 760 (Patch 7.35)"
        materials={materialsData.materials.dawntrail.dow.umbrae}
        tomestones={materialsData.tomestones.heliometry}
        tomestoneAmount={1500}
      />
    </div>
  );
}

export default Dawntrail;
