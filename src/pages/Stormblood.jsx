import materialsData from "../../materialsData";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";

function Stormblood() {
  const { weapons, ownedWeapons, selectWeapon } = useWeaponsData();

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Eurekan" dow />
      <WeaponsSection
        weapons={weapons.antiquated}
        ownedWeapons={ownedWeapons}
        name="Antiquated Weapons"
        patchInfo="iLvl 290 (Patch 4.0)"
        category="antiquated"
        selectWeapon={selectWeapon}
        materials={materialsData.materials.stormblood.antiquated}
        tomestones={null}
        tomestoneAmount={null}
      />
      <WeaponsSection
        weapons={weapons.anemos}
        ownedWeapons={ownedWeapons}
        name="Anemos Weapons"
        patchInfo="iLvl 355 (Patch 4.25)"
        category="anemos"
        selectWeapon={selectWeapon}
        materials={materialsData.materials.stormblood.anemos}
        tomestones={null}
        tomestoneAmount={null}
      />
      <WeaponsSection
        weapons={weapons.elemental}
        ownedWeapons={ownedWeapons}
        name="Elemental Weapons"
        patchInfo="iLvl 370 (Patch 4.36)"
        category="elemental"
        selectWeapon={selectWeapon}
        materials={materialsData.materials.stormblood.elemental}
        tomestones={null}
        tomestoneAmount={null}
      />
      <WeaponsSection
        weapons={weapons.pyros}
        ownedWeapons={ownedWeapons}
        name="Pyros Weapons"
        patchInfo="iLvl 385 (Patch 4.45)"
        category="pyros"
        selectWeapon={selectWeapon}
        materials={materialsData.materials.stormblood.pyros}
        tomestones={null}
        tomestoneAmount={null}
        notes="you will also need to craft 30 different Logos Actions (10 for the first step, 20 for the second step) to get the weapons."
      />
      <WeaponsSection
        weapons={weapons.eureka}
        ownedWeapons={ownedWeapons}
        name="Eureka Weapons"
        patchInfo="iLvl 405 (Patch 4.55)"
        category="eureka"
        selectWeapon={selectWeapon}
        materials={materialsData.materials.stormblood.eureka}
        tomestones={null}
        tomestoneAmount={null}
      />
      <WeaponsSection
        weapons={weapons.physeos}
        ownedWeapons={ownedWeapons}
        name="Physeos Weapons"
        patchInfo="iLvl 405 (Patch 4.55)"
        category="physeos"
        selectWeapon={selectWeapon}
        materials={materialsData.materials.stormblood.physeos}
        tomestones={null}
        tomestoneAmount={null}
        notes="you can get Eureka Fragments from The Baldesion Arsenal"
      />
    </div>
  );
}

export default Stormblood;
