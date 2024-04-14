import data from "../../data";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";

function Stormblood() {
  const { weapons, ownedWeapons, selectWeapon, checkAll, uncheckAll } =
    useWeaponsData();

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Eurekan" />
      <WeaponsSection
        weapons={weapons.antiquated}
        ownedWeapons={ownedWeapons}
        totalWeapons={15}
        name="Antiquated Weapons"
        patchInfo="iLvl 290 (Patch 4.0)"
        category="antiquated"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.anemos}
        ownedWeapons={ownedWeapons}
        totalWeapons={15}
        name="Anemos Weapons"
        patchInfo="iLvl 355 (Patch 4.25)"
        category="anemos"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.elemental}
        ownedWeapons={ownedWeapons}
        totalWeapons={15}
        name="Elemental Weapons"
        patchInfo="iLvl 370 (Patch 4.36)"
        category="elemental"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.pyros}
        ownedWeapons={ownedWeapons}
        totalWeapons={15}
        name="Pyros Weapons"
        patchInfo="iLvl 385 (Patch 4.45)"
        category="pyros"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        notes="you will also need to craft 30 different Logos Actions (10 for the first step, 20 for the second step) to get the weapons."
      />
      <WeaponsSection
        weapons={weapons.eureka}
        ownedWeapons={ownedWeapons}
        totalWeapons={15}
        name="Eureka Weapons"
        patchInfo="iLvl 405 (Patch 4.55)"
        category="eureka"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.physeos}
        ownedWeapons={ownedWeapons}
        totalWeapons={15}
        name="Physeos Weapons"
        patchInfo="iLvl 405 (Patch 4.55)"
        category="physeos"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        notes="you can get Eureka Fragments from The Baldesion Arsenal"
      />
    </div>
  );
}

export default Stormblood;
