import ToolsContainer from "../components/ToolsContainer";
import ToolsTable from "../components/ToolsTable";
import useWeaponsData from "../hooks/use-weapons-data";
import data from "../../data";
import materialsData from "../../materialsData";

function EndwalkerGatherers() {
  const { weapons: tools } = useWeaponsData();

  return (
    <div className="min-[1000px]:pl-[250px] duration-[0.5s]">
      <div className="py-7 px-4 bg-[#4e3727] text-[#fae6c8] text-center text-[1.9rem] font-[700]">
        Gatherers
      </div>
      <ToolsContainer
        tools={tools.splendorousGatherers}
        category={"splendorousGatherers"}
        name={"Splendorous"}
        patchInfo={"iLvl 570 (Patch 6.35)"}
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
      <ToolsContainer
        tools={tools.augmentedSplendorousGatherers}
        category={"augmentedSplendorousGatherers"}
        name={"Augmented Splendorous"}
        patchInfo={"iLvl 590 (Patch 6.35)"}
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
            minerMaterialOne={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .connoisseursPrismstone
            }
            minerMaterialTwo={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .splendorousMinersComponent
            }
            minerMaterialThree={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .splendorousWaterShard
            }
            botanistMaterialOne={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .connoisseursWattlePetribark
            }
            botanistMaterialTwo={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .splendorousBotanistsComponent
            }
            botanistMaterialThree={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .splendorousEarthShard
            }
            fisherMaterialOne={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .platinumSeahorse
            }
            fisherMaterialTwo={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .splendorousFishingRodComponent
            }
            fisherMaterialThree={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .clavekeeper
            }
            fisherMaterialFour={
              materialsData.materials.endwalker.doL.augmentedSplendorous
                .splendorousFishingReelComponent
            }
          />
        </div>
      </ToolsContainer>
      <ToolsContainer
        tools={tools.crystallineGatherers}
        category={"crystallineGatherers"}
        name={"Crystalline"}
        patchInfo={"iLvl 620 (Patch 6.35)"}
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
            minerMaterialOne={data.materials[39]}
            minerMaterialTwo={data.materials[35]}
            minerMaterialThree={data.materials[41]}
            botanistMaterialOne={data.materials[40]}
            botanistMaterialTwo={data.materials[36]}
            botanistMaterialThree={data.materials[42]}
            fisherMaterialOne={data.materials[43]}
            fisherMaterialTwo={data.materials[37]}
            fisherMaterialThree={data.materials[44]}
            fisherMaterialFour={data.materials[38]}
          />
        </div>
      </ToolsContainer>
      <ToolsContainer
        tools={tools.choraZoisCrystallineGatherers}
        category={"choraZoisCrystallineGatherers"}
        name={"Chora Zoi's Crystalline"}
        patchInfo={"iLvl 625 (Patch 6.45)"}
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
            minerMaterialOne={data.materials[49]}
            minerMaterialTwo={data.materials[45]}
            minerMaterialThree={data.materials[51]}
            botanistMaterialOne={data.materials[50]}
            botanistMaterialTwo={data.materials[46]}
            botanistMaterialThree={data.materials[52]}
            fisherMaterialOne={data.materials[53]}
            fisherMaterialTwo={data.materials[47]}
            fisherMaterialThree={data.materials[54]}
            fisherMaterialFour={data.materials[48]}
          />
        </div>
      </ToolsContainer>
      <ToolsContainer
        tools={tools.brilliantGatherers}
        category={"brilliantGatherers"}
        name={"Brilliant"}
        patchInfo={"iLvl 630 (Patch 6.45)"}
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
            minerMaterialOne={data.materials[59]}
            minerMaterialTwo={data.materials[55]}
            minerMaterialThree={data.materials[61]}
            botanistMaterialOne={data.materials[60]}
            botanistMaterialTwo={data.materials[56]}
            botanistMaterialThree={data.materials[62]}
            fisherMaterialOne={data.materials[63]}
            fisherMaterialTwo={data.materials[57]}
            fisherMaterialThree={data.materials[64]}
            fisherMaterialFour={data.materials[58]}
          />
        </div>
      </ToolsContainer>
      <ToolsContainer
        tools={tools.vrandticVisionarysGatherers}
        category={"vrandticVisionarysGatherers"}
        name={"Vrandtic Visionary's"}
        patchInfo={"iLvl 635 (Patch 6.51)"}
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
            minerMaterialOne={data.materials[65]}
            minerMaterialTwo={data.materials[66]}
            minerMaterialThree={data.materials[67]}
            botanistMaterialOne={data.materials[68]}
            botanistMaterialTwo={data.materials[69]}
            botanistMaterialThree={data.materials[70]}
            fisherMaterialOne={data.materials[71]}
            fisherMaterialTwo={data.materials[73]}
            fisherMaterialThree={data.materials[72]}
            fisherMaterialFour={data.materials[73]}
          />
        </div>
      </ToolsContainer>
      <ToolsContainer
        tools={tools.lodestarGatherers}
        category={"lodestarGatherers"}
        name={"Lodestar"}
        patchInfo={"iLvl 640 (Patch 6.51)"}
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
            minerMaterialOne={data.materials[74]}
            minerMaterialTwo={data.materials[75]}
            minerMaterialThree={data.materials[76]}
            botanistMaterialOne={data.materials[77]}
            botanistMaterialTwo={data.materials[78]}
            botanistMaterialThree={data.materials[79]}
            fisherMaterialOne={data.materials[80]}
            fisherMaterialTwo={data.materials[82]}
            fisherMaterialThree={data.materials[81]}
            fisherMaterialFour={data.materials[82]}
          />
        </div>
      </ToolsContainer>
    </div>
  );
}

export default EndwalkerGatherers;
