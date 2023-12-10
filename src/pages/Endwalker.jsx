import data from "../../data";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";

function Endwalker() {
  const { weapons, test, checkAll, uncheckAll } = useWeaponsData();

  // const mandervilleCounter = useWeaponsCounter(weapons.manderville);
  // const amazingMandervilleCounter = useWeaponsCounter(
  //   weapons.amazingManderville
  // );
  // const majesticMandervilleCounter = useWeaponsCounter(
  //   weapons.majesticManderville
  // );

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Manderville" />
      <WeaponsSection
        weapons={weapons.manderville}
        test={test}
        totalWeapons={19}
        name="Manderville"
        patchInfo="iLvl 615 (Patch 6.25)"
        type="manderville"
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.amazingManderville}
        test={test}
        totalWeapons={19}
        name="Amazing Manderville"
        patchInfo="iLvl 630 (Patch 6.35)"
        type="amazingManderville"
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weapons={weapons.majesticManderville}
        test={test}
        totalWeapons={19}
        name="Majestic Manderville"
        patchInfo="iLvl 645 (Patch 6.45)"
        type="majesticManderville"
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
    </div>
  );
}

export default Endwalker;
