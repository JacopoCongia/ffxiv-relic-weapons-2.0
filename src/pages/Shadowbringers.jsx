import data from "../../data";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";
import { useCounter } from "../hooks/use-counter";

function Shadowbringers() {
  const { weapons, ownedWeapons, checkAll, uncheckAll } = useWeaponsData();

  const resistanceCounter = useCounter(ownedWeapons, "resistance");
  const augmentedResistanceCounter = useCounter(
    ownedWeapons,
    "augmentedResistance"
  );
  const recollectionCounter = useCounter(ownedWeapons, "recollection");
  const lawsOrderCounter = useCounter(ownedWeapons, "lawsOrder");
  const augmentedLawsOrderCounter = useCounter(
    ownedWeapons,
    "augmentedLawsOrder"
  );
  const bladesCounter = useCounter(ownedWeapons, "blades");

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Resistance" />
      <WeaponsSection
        weapons={weapons.resistance}
        totalWeapons={17}
        name="Resistance Weapons"
        patchInfo="iLvl 485 (Patch 5.25)"
        category="resistance"
        materials={data.materials}
        tomestones={data.tomestones.poetics}
        tomestoneAmount={1000}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={resistanceCounter}
      />
      <WeaponsSection
        weapons={weapons.augmentedResistance}
        totalWeapons={17}
        name="Augmented Resistance Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
        category="augmentedResistance"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={augmentedResistanceCounter}
      />
      <WeaponsSection
        weapons={weapons.recollection}
        totalWeapons={17}
        name="Recollection Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
        category="recollection"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={recollectionCounter}
      />
      <WeaponsSection
        weapons={weapons.lawsOrder}
        totalWeapons={17}
        name="Law's Order Weapons"
        patchInfo="iLvl 510 (Patch 5.45)"
        category="lawsOrder"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={lawsOrderCounter}
      />
      <WeaponsSection
        weapons={weapons.augmentedLawsOrder}
        totalWeapons={17}
        name="Augmented Law's Order Weapons"
        patchInfo="iLvl 515 (Patch 5.45)"
        category="augmentedLawsOrder"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={augmentedLawsOrderCounter}
      />
      <WeaponsSection
        weapons={weapons.blades}
        totalWeapons={17}
        name="Blade's Weapons"
        patchInfo="iLvl 535 (Patch 5.55)"
        category="blades"
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={bladesCounter}
      />
    </div>
  );
}

export default Shadowbringers;
