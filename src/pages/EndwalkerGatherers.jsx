import ToolsContainer from "../components/ToolsContainer";
import ToolsTable from "../components/ToolsTable";
import ToolsHeader from "../components/ToolsHeader";
import useWeaponsData from "../hooks/use-weapons-data";
import data from "../../data";
import { useCounter } from "../hooks/use-counter";

function EndwalkerGatherers() {
  const { weapons: tools, ownedWeapons } = useWeaponsData();

  const splendorousCounter = useCounter(ownedWeapons, "splendorousGatherers");
  const augmentedSplendorousCounter = useCounter(
    ownedWeapons,
    "augmentedSplendorousGatherers"
  );
  const crystallineCounter = useCounter(ownedWeapons, "crystallineGatherers");
  const choraZoisCrystallineCounter = useCounter(
    ownedWeapons,
    "choraZoisCrystallineGatherers"
  );
  const brilliantCounter = useCounter(ownedWeapons, "brilliantGatherers");
  const vrandticVisionarysCounter = useCounter(
    ownedWeapons,
    "vrandticVisionarysGatherers"
  );
  const lodestarCounter = useCounter(ownedWeapons, "lodestarGatherers");

  return (
    <div className="min-[1000px]:pl-[250px] duration-[0.5s]">
      <ToolsHeader name={"Splendorous"} />
      <ToolsContainer
        tools={tools.splendorousGatherers}
        category={"splendorousGatherers"}
        counter={splendorousCounter}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            You will get your first tool by completing the quest
            <a
              className="underline flex items-center underline-offset-[5px] hover:text-[#dddddd]"
              href="https://ffxiv.consolegameswiki.com/wiki/An_Original_Improvement"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[25px]"
                src="/icons/feature_quest.png"
              />
              An Original Improvement
            </a>
          </p>
          <p className="flex gap-1 justify-center items-center flex-wrap">
            Each subsequent tool can be acquired for
            <span className="font-bold">1500</span>
            <img
              className="w-[22px]"
              src="/icons/white_gatherers_scrip.png"
            />
            White Gatherer Scrips from Quinnana, in The Crystarium
          </p>
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Augmented Splendorous"} />
      <ToolsContainer
        tools={tools.augmentedSplendorousGatherers}
        category={"augmentedSplendorousGatherers"}
        counter={augmentedSplendorousCounter}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            Miner and Botanist need <span className="font-bold">180</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/splendorous_crafters_component.png"
            />
            Splendorous Components per Tool which means
            <span className="font-bold">60</span> Collectables at maximum
            collectability.
          </p>
          <p className="flex gap-2 justify-center flex-wrap">
            Fisher needs <span className="font-bold">60</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/splendorous_crafters_component.png"
            />
            Splendorous Components per Tool which means
            <span className="font-bold">30</span> Collectables at maximum
            collectability.
          </p>
          <ToolsTable
            minerMaterialOne={data.materials[28]}
            minerMaterialTwo={data.materials[24]}
            minerMaterialThree={data.materials[30]}
            botanistMaterialOne={data.materials[29]}
            botanistMaterialTwo={data.materials[25]}
            botanistMaterialThree={data.materials[31]}
            fisherMaterialOne={data.materials[32]}
            fisherMaterialTwo={data.materials[26]}
            fisherMaterialThree={data.materials[33]}
            fisherMaterialFour={data.materials[27]}
          />
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Crystalline"} />
      <ToolsContainer
        tools={tools.crystallineGatherers}
        category={"crystallineGatherers"}
        counter={crystallineCounter}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            Miner and Botanist need <span className="font-bold">210</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/adaptive_crafters_component.png"
            />
            Adaptive Components per Tool which means
            <span className="font-bold">70</span> Collectables at maximum
            collectability.
          </p>
          <p className="flex gap-2 justify-center flex-wrap">
            Fisher needs <span className="font-bold">80</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/adaptive_crafters_component.png"
            />
            Adaptive Fishing Rod Components and{" "}
            <span className="font-bold">80</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/adaptive_crafters_component.png"
            />
            Adaptive Fishing Reel Components per tool which means
            <span className="font-bold">40</span> Collectables at maximum
            collectability.
          </p>
          <ToolsTable
            minerMaterialOne={data.materials[38]}
            minerMaterialTwo={data.materials[34]}
            minerMaterialThree={data.materials[40]}
            botanistMaterialOne={data.materials[39]}
            botanistMaterialTwo={data.materials[35]}
            botanistMaterialThree={data.materials[41]}
            fisherMaterialOne={data.materials[42]}
            fisherMaterialTwo={data.materials[36]}
            fisherMaterialThree={data.materials[43]}
            fisherMaterialFour={data.materials[37]}
          />
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Chora Zoi's Crystalline"} />
      <ToolsContainer
        tools={tools.choraZoisCrystallineGatherers}
        category={"choraZoisCrystallineGatherers"}
        counter={choraZoisCrystallineCounter}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            Miner and Botanist need <span className="font-bold">210</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/customized_miners_component.png"
            />
            Customized Components per Tool which means
            <span className="font-bold">70</span> Collectables at maximum
            collectability.
          </p>
          <p className="flex gap-2 justify-center flex-wrap">
            Fisher needs <span className="font-bold">80</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/customized_fishing_rod_component.png"
            />
            Customized Fishing Rod Components and
            <span className="font-bold">80</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/customized_fishing_reel_component.png"
            />
            Customized Fishing Reel Components per tool which means
            <span className="font-bold">40</span> Collectables at maximum
            collectability.
          </p>
          <ToolsTable
            minerMaterialOne={data.materials[48]}
            minerMaterialTwo={data.materials[44]}
            minerMaterialThree={data.materials[50]}
            botanistMaterialOne={data.materials[49]}
            botanistMaterialTwo={data.materials[45]}
            botanistMaterialThree={data.materials[51]}
            fisherMaterialOne={data.materials[52]}
            fisherMaterialTwo={data.materials[46]}
            fisherMaterialThree={data.materials[53]}
            fisherMaterialFour={data.materials[47]}
          />
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Brilliant"} />
      <ToolsContainer
        tools={tools.brilliantGatherers}
        category={"brilliantGatherers"}
        counter={brilliantCounter}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            Miner and Botanist need <span className="font-bold">210</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/brilliant_miners_component.png"
            />
            Brilliant Components per Tool which means
            <span className="font-bold">70</span> Collectables at maximum
            collectability.
          </p>
          <p className="flex gap-2 justify-center flex-wrap">
            Fisher needs <span className="font-bold">80</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/brilliant_fishing_rod_component.png"
            />
            Brilliant Fishing Rod Components and
            <span className="font-bold">80</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/brilliant_fishing_reel_component.png"
            />
            Brilliant Fishing Reel Components per tool which means
            <span className="font-bold">40</span> Collectables at maximum
            collectability.
          </p>
          <ToolsTable
            minerMaterialOne={data.materials[58]}
            minerMaterialTwo={data.materials[54]}
            minerMaterialThree={data.materials[60]}
            botanistMaterialOne={data.materials[59]}
            botanistMaterialTwo={data.materials[55]}
            botanistMaterialThree={data.materials[61]}
            fisherMaterialOne={data.materials[62]}
            fisherMaterialTwo={data.materials[56]}
            fisherMaterialThree={data.materials[63]}
            fisherMaterialFour={data.materials[57]}
          />
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Vrandtic Visionary's"} />
      <ToolsContainer
        tools={tools.vrandticVisionarysGatherers}
        category={"vrandticVisionarysGatherers"}
        counter={vrandticVisionarysCounter}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            Miner and Botanist need <span className="font-bold">220</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/inspirational_miners_component.png"
            />
            Inspirational Components per Tool which means
            <span className="font-bold">110</span> Collectables at maximum
            collectability.
          </p>
          <p className="flex gap-2 justify-center flex-wrap">
            Fisher needs <span className="font-bold">170</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/inspirational_fishers_component.png"
            />
            Inspirational Fisher&apos;s Components per tool which means
            <span className="font-bold">22-43</span> Collectables at maximum
            collectability.
          </p>
          <ToolsTable
            minerMaterialOne={data.materials[64]}
            minerMaterialTwo={data.materials[65]}
            minerMaterialThree={data.materials[66]}
            botanistMaterialOne={data.materials[67]}
            botanistMaterialTwo={data.materials[68]}
            botanistMaterialThree={data.materials[69]}
            fisherMaterialOne={data.materials[70]}
            fisherMaterialTwo={data.materials[72]}
            fisherMaterialThree={data.materials[71]}
            fisherMaterialFour={data.materials[72]}
          />
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Lodestar"} />
      <ToolsContainer
        tools={tools.lodestarGatherers}
        category={"lodestarGatherers"}
        counter={lodestarCounter}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            Miner and Botanist need <span className="font-bold">220</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/nightforged_miners_component.png"
            />
            Nightforged Components per Tool which means
            <span className="font-bold">110</span> Collectables at maximum
            collectability.
          </p>
          <p className="flex gap-2 justify-center flex-wrap">
            Fisher needs <span className="font-bold">170</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/nightforged_fishers_component.png"
            />
            Nightforged Fisher&apos;s Components per tool which means
            <span className="font-bold">68</span> Collectables at maximum
            collectability.
          </p>
          <ToolsTable
            minerMaterialOne={data.materials[73]}
            minerMaterialTwo={data.materials[74]}
            minerMaterialThree={data.materials[75]}
            botanistMaterialOne={data.materials[76]}
            botanistMaterialTwo={data.materials[77]}
            botanistMaterialThree={data.materials[78]}
            fisherMaterialOne={data.materials[79]}
            fisherMaterialTwo={data.materials[81]}
            fisherMaterialThree={data.materials[80]}
            fisherMaterialFour={data.materials[81]}
          />
        </div>
      </ToolsContainer>
    </div>
  );
}

export default EndwalkerGatherers;
