import materialsData from "../../materialsData";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";

function Shadowbringers() {
  const { weapons, ownedWeapons } = useWeaponsData();

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Resistance" />
      <WeaponsSection
        weapons={weapons.resistance}
        ownedWeapons={ownedWeapons}
        name="Resistance Weapons"
        patchInfo="iLvl 485 (Patch 5.25)"
        category="resistance"
        materials={materialsData.materials.shadowbringers.resistance}
        tomestones={materialsData.tomestones.poetics}
        tomestoneAmount={1000}
      />
      <WeaponsSection
        weapons={weapons.augmentedResistance}
        ownedWeapons={ownedWeapons}
        name="Augmented Resistance Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
        category="augmentedResistance"
        materials={materialsData.materials.shadowbringers.augmentedResistance}
        tomestones={null}
        tomestoneAmount={null}
      />
      <WeaponsSection
        weapons={weapons.recollection}
        ownedWeapons={ownedWeapons}
        name="Recollection Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
        category="recollection"
        materials={materialsData.materials.shadowbringers.recollection}
        tomestones={null}
        tomestoneAmount={null}
      />
      <WeaponsSection
        weapons={weapons.lawsOrder}
        ownedWeapons={ownedWeapons}
        name="Law's Order Weapons"
        patchInfo="iLvl 510 (Patch 5.45)"
        category="lawsOrder"
        materials={materialsData.materials.shadowbringers.lawsOrder}
        tomestones={null}
        tomestoneAmount={null}
      />
      <WeaponsSection
        weapons={weapons.augmentedLawsOrder}
        ownedWeapons={ownedWeapons}
        name="Augmented Law's Order Weapons"
        patchInfo="iLvl 515 (Patch 5.45)"
        category="augmentedLawsOrder"
        materials={materialsData.materials.shadowbringers.augmentedLawsOrder}
        tomestones={null}
        tomestoneAmount={null}
      />
      <WeaponsSection
        weapons={weapons.blades}
        ownedWeapons={ownedWeapons}
        name="Blade's Weapons"
        patchInfo="iLvl 535 (Patch 5.55)"
        category="blades"
        materials={materialsData.materials.shadowbringers.blades}
        tomestones={null}
        tomestoneAmount={null}
      />
    </div>
  );
}

export default Shadowbringers;
