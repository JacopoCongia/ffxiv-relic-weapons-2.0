import ToolsContainer from "../components/ToolsContainer";
import ToolsTable from "../components/ToolsTable";
import ToolsHeader from "../components/ToolsHeader";
import useWeaponsData from "../hooks/use-weapons-data";

function EndwalkerDolDoh() {
  const { weapons: tools } = useWeaponsData();

  return (
    <div className="min-[1000px]:pl-[250px] duration-[0.5s]">
      <ToolsHeader name={"Splendorous"} />
      <ToolsContainer
        tools={tools.splendorous}
        category={"Crafters & Gatherers"}
        type={"splendorous"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em]">
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
            <span className="font-bold">1500</span> White
            <img
              className="w-[22px]"
              src="/icons/white_crafters_scrip.png"
            />
            Crafter /
            <img
              className="w-[22px]"
              src="/icons/white_gatherers_scrip.png"
            />
            Gatherer Scrips from Quinnana, in The Crystarium
          </p>
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Augmented Splendorous"} />
      <ToolsContainer
        tools={tools.augmentedSplendorousDoH}
        category={"Crafters"}
        type={"augmentedSplendorousDoH"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em]">
          <p className="flex gap-2 justify-center flex-wrap">
            You will need <span className="font-bold">60</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/splendorous_crafters_component.png"
            />
            Splendorous Components per Tool which means{" "}
            <span className="font-bold">20</span> Collectables at maximum
            collectability.
          </p>
        </div>
      </ToolsContainer>
      <ToolsContainer
        tools={tools.augmentedSplendorousDoL}
        category={"Gatherers"}
        type={"augmentedSplendorousDoL"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em]">
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
            minerMaterialOne={tools.materials[28]}
            minerMaterialTwo={tools.materials[24]}
            minerMaterialThree={tools.materials[30]}
            botanistMaterialOne={tools.materials[29]}
            botanistMaterialTwo={tools.materials[25]}
            botanistMaterialThree={tools.materials[31]}
            fisherMaterialOne={tools.materials[32]}
            fisherMaterialTwo={tools.materials[26]}
            fisherMaterialThree={tools.materials[33]}
            fisherMaterialFour={tools.materials[27]}
            fishOneCollectability={"110+"}
            fishTwoCollectability={"665+"}
          />
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Crystalline"} />
      <ToolsContainer
        tools={tools.crystallineDoL}
        category={"Gatherers"}
        type={"crystallineDoL"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em]">
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
            minerMaterialOne={tools.materials[38]}
            minerMaterialTwo={tools.materials[34]}
            minerMaterialThree={tools.materials[40]}
            botanistMaterialOne={tools.materials[39]}
            botanistMaterialTwo={tools.materials[35]}
            botanistMaterialThree={tools.materials[41]}
            fisherMaterialOne={tools.materials[42]}
            fisherMaterialTwo={tools.materials[36]}
            fisherMaterialThree={tools.materials[43]}
            fisherMaterialFour={tools.materials[37]}
            fishOneCollectability={"21+"}
            fishTwoCollectability={"998+"}
          />
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Chora Zoi's Crystalline"} />
      <ToolsContainer
        tools={tools.choraZoisCrystallineDoL}
        category={"Gatherers"}
        type={"choraZoisCrystallineDoL"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em]">
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
            minerMaterialOne={tools.materials[48]}
            minerMaterialTwo={tools.materials[44]}
            minerMaterialThree={tools.materials[50]}
            botanistMaterialOne={tools.materials[49]}
            botanistMaterialTwo={tools.materials[45]}
            botanistMaterialThree={tools.materials[51]}
            fisherMaterialOne={tools.materials[52]}
            fisherMaterialTwo={tools.materials[46]}
            fisherMaterialThree={tools.materials[53]}
            fisherMaterialFour={tools.materials[47]}
            fishOneCollectability={"193+"}
            fishTwoCollectability={"758+"}
          />
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Brilliant"} />
      <ToolsContainer
        tools={tools.brilliantDoL}
        category={"Gatherers"}
        type={"brilliantDoL"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em]">
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
            minerMaterialOne={tools.materials[58]}
            minerMaterialTwo={tools.materials[54]}
            minerMaterialThree={tools.materials[60]}
            botanistMaterialOne={tools.materials[59]}
            botanistMaterialTwo={tools.materials[55]}
            botanistMaterialThree={tools.materials[61]}
            fisherMaterialOne={tools.materials[62]}
            fisherMaterialTwo={tools.materials[56]}
            fisherMaterialThree={tools.materials[63]}
            fisherMaterialFour={tools.materials[57]}
            fishOneCollectability={"220+"}
            fishTwoCollectability={"110+"}
          />
        </div>
      </ToolsContainer>
    </div>
  );
}

export default EndwalkerDolDoh;
