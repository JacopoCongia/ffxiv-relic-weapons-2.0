import data from "../../data";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import { useWeaponsCounter } from "../hooks/use-weapons-counter";
import WeaponsSection from "../components/WeaponsSection";

function Stormblood() {
  const { weapons, selectWeapon, checkAll, uncheckAll } = useWeaponsData();

  const antiquatedCounter = useWeaponsCounter(weapons.antiquated);
  const anemosCounter = useWeaponsCounter(weapons.anemos);
  const elementalCounter = useWeaponsCounter(weapons.elemental);
  const pyrosCounter = useWeaponsCounter(weapons.pyros);
  const eurekaCounter = useWeaponsCounter(weapons.eureka);
  const physeosCounter = useWeaponsCounter(weapons.physeos);

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Eurekan" />
      <WeaponsSection
        weaponsCounter={antiquatedCounter}
        weapons={weapons.antiquated}
        totalWeapons={15}
        name="Antiquated Weapons"
        patchInfo="iLvl 290 (Patch 4.0)"
        type="antiquated"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={anemosCounter}
        weapons={weapons.anemos}
        totalWeapons={15}
        name="Anemos Weapons"
        patchInfo="iLvl 355 (Patch 4.25)"
        type="anemos"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={elementalCounter}
        weapons={weapons.elemental}
        totalWeapons={15}
        name="Elemental Weapons"
        patchInfo="iLvl 370 (Patch 4.36)"
        type="elemental"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={pyrosCounter}
        weapons={weapons.pyros}
        totalWeapons={15}
        name="Pyros Weapons"
        patchInfo="iLvl 385 (Patch 4.45)"
        type="pyros"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        notes="you will also need to craft 30 different Logos Actions (10 for the first step, 20 for the second step) to get the weapons."
      />
      <WeaponsSection
        weaponsCounter={eurekaCounter}
        weapons={weapons.eureka}
        totalWeapons={15}
        name="Eureka Weapons"
        patchInfo="iLvl 405 (Patch 4.55)"
        type="eureka"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={physeosCounter}
        weapons={weapons.physeos}
        totalWeapons={15}
        name="Physeos Weapons"
        patchInfo="iLvl 405 (Patch 4.55)"
        type="physeos"
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
