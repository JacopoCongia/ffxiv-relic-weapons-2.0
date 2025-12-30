import materialsData from "../../materialsData";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";

function Endwalker() {
  const { weapons, ownedWeapons } = useWeaponsData();

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Manderville" dow />
      <WeaponsSection
        weapons={weapons.manderville}
        ownedWeapons={ownedWeapons}
        name="Manderville"
        category="manderville"
        patchInfo="iLvl 615 (Patch 6.25)"
        materials={materialsData.materials.endwalker.dow.manderville}
        tomestones={materialsData.tomestones.poetics}
        tomestoneAmount={1500}
      />
      <WeaponsSection
        weapons={weapons.amazingManderville}
        ownedWeapons={ownedWeapons}
        name="Amazing Manderville"
        category="amazingManderville"
        patchInfo="iLvl 630 (Patch 6.35)"
        materials={materialsData.materials.endwalker.dow.amazingManderville}
        tomestones={materialsData.tomestones.poetics}
        tomestoneAmount={1500}
      />
      <WeaponsSection
        weapons={weapons.majesticManderville}
        ownedWeapons={ownedWeapons}
        name="Majestic Manderville"
        category="majesticManderville"
        patchInfo="iLvl 645 (Patch 6.45)"
        materials={materialsData.materials.endwalker.dow.majesticManderville}
        tomestones={materialsData.tomestones.poetics}
        tomestoneAmount={1500}
      />
      <WeaponsSection
        weapons={weapons.mandervillous}
        ownedWeapons={ownedWeapons}
        name="Mandervillous"
        category="mandervillous"
        patchInfo="iLvl 665 (Patch 6.55)"
        materials={materialsData.materials.endwalker.dow.mandervillous}
        tomestones={materialsData.tomestones.poetics}
        tomestoneAmount={1500}
      />
    </div>
  );
}

export default Endwalker;
