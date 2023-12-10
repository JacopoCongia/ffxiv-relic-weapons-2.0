import data from "../../data";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";

function Shadowbringers() {
  const { weapons, checkAll, uncheckAll } = useWeaponsData();

  // const resistanceCounter = useWeaponsCounter(weapons.resistance);
  // const augmentedResistanceCounter = useWeaponsCounter(
  //   weapons.augmentedResistance
  // );
  // const recollectionCounter = useWeaponsCounter(weapons.recollection);
  // const lawsOrderCounter = useWeaponsCounter(weapons.lawsOrder);
  // const augmentedLawsOrderCounter = useWeaponsCounter(
  //   weapons.augmentedLawsOrder
  // );
  // const bladesCounter = useWeaponsCounter(weapons.blades);

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Resistance" />
      <WeaponsSection
        weapons={weapons.resistance}
        totalWeapons={17}
        name="Resistance Weapons"
        patchInfo="iLvl 485 (Patch 5.25)"
        type="resistance"
        materials={data.materials}
        tomestones={data.tomestones.poetics}
        tomestoneAmount={1000}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.augmentedResistance}
        totalWeapons={17}
        name="Augmented Resistance Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
        type="augmentedResistance"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.recollection}
        totalWeapons={17}
        name="Recollection Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
        type="recollection"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.lawsOrder}
        totalWeapons={17}
        name="Law's Order Weapons"
        patchInfo="iLvl 510 (Patch 5.45)"
        type="lawsOrder"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.augmentedLawsOrder}
        totalWeapons={17}
        name="Augmented Law's Order Weapons"
        patchInfo="iLvl 515 (Patch 5.45)"
        type="augmentedLawsOrder"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.blades}
        totalWeapons={17}
        name="Blade's Weapons"
        patchInfo="iLvl 535 (Patch 5.55)"
        type="blades"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
    </div>
  );
}

export default Shadowbringers;
