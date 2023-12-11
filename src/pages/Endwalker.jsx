import data from "../../data";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsSection from "../components/WeaponsSection";
import { useCounter } from "../hooks/use-counter";

function Endwalker() {
  const { weapons, ownedWeapons, checkAll, uncheckAll } = useWeaponsData();

  const mandervilleCounter = useCounter(ownedWeapons, "manderville");
  const amazingMandervilleCounter = useCounter(
    ownedWeapons,
    "amazingManderville"
  );
  const majesticMandervilleCounter = useCounter(
    ownedWeapons,
    "majesticManderville"
  );

  return (
    <div className="w-[100%] duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header title="Manderville" />
      <WeaponsSection
        weapons={weapons.manderville}
        ownedWeapons={ownedWeapons}
        totalWeapons={19}
        name="Manderville"
        category="manderville"
        patchInfo="iLvl 615 (Patch 6.25)"
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={mandervilleCounter}
      />
      <WeaponsSection
        weapons={weapons.amazingManderville}
        ownedWeapons={ownedWeapons}
        totalWeapons={19}
        name="Amazing Manderville"
        category="amazingManderville"
        patchInfo="iLvl 630 (Patch 6.35)"
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={amazingMandervilleCounter}
      />
      <WeaponsSection
        weapons={weapons.majesticManderville}
        ownedWeapons={ownedWeapons}
        totalWeapons={19}
        name="Majestic Manderville"
        category="majesticManderville"
        patchInfo="iLvl 645 (Patch 6.45)"
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        counter={majesticMandervilleCounter}
      />
    </div>
  );
}

export default Endwalker;
