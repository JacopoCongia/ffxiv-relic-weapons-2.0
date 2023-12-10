import ToolsContainer from "../components/ToolsContainer";
import ToolsHeader from "../components/ToolsHeader";
import useWeaponsData from "../hooks/use-weapons-data";

function EndwalkerCrafters() {
  const { weapons: tools } = useWeaponsData();

  return (
    <div className="min-[1000px]:pl-[250px] duration-[0.5s]">
      <ToolsHeader name={"Splendorous"} />
      <ToolsContainer
        tools={tools.splendorousDoH}
        category={"Crafters"}
        type={"splendorousDoH"}
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
              src="/icons/white_crafters_scrip.png"
            />
            White Crafter Scrips from Quinnana, in The Crystarium
          </p>
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Augmented Splendorous"} />
      <ToolsContainer
        tools={tools.augmentedSplendorousDoH}
        category={"Crafters"}
        type={"augmentedSplendorousDoH"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
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
      <ToolsHeader name={"Crystalline"} />
      <ToolsContainer
        tools={tools.crystallineDoH}
        category={"Crafters"}
        type={"crystallineDoH"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            You will need <span className="font-bold">90</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/adaptive_crafters_component.png"
            />
            Adaptive Components per Tool which means{" "}
            <span className="font-bold">30</span> Collectables at maximum
            collectability.
          </p>
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Chora Zoi's Crystalline"} />
      <ToolsContainer
        tools={tools.choraZoisCrystallineDoH}
        category={"Crafters"}
        type={"choraZoisCrystallineDoH"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            You will need <span className="font-bold">90</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/customized_crafters_component.png"
            />
            Customized Components per Tool which means{" "}
            <span className="font-bold">30</span> Collectables at maximum
            collectability.
          </p>
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Brilliant"} />
      <ToolsContainer
        tools={tools.brilliantDoH}
        category={"Crafters"}
        type={"brilliantDoH"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            You will need <span className="font-bold">90</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/brilliant_crafters_component.png"
            />
            Brilliant Components per Tool which means{" "}
            <span className="font-bold">30</span> Collectables at maximum
            collectability.
          </p>
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Vrandtic Visionary's"} />
      <ToolsContainer
        tools={tools.vrandticVisionarysDoH}
        category={"Crafters"}
        type={"vrandticVisionarysDoH"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            You will need <span className="font-bold">60</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/customized_crafters_component.png"
            />
            Inspirational Components per Tool which means{" "}
            <span className="font-bold">20</span> Collectables at maximum
            collectability.
          </p>
        </div>
      </ToolsContainer>
      <ToolsHeader name={"Lodestar"} />
      <ToolsContainer
        tools={tools.lodestarDoH}
        category={"Crafters"}
        type={"lodestarDoH"}
      >
        <div className="text-white flex flex-col gap-3 mb-[2em] px-[2em] text-center">
          <p className="flex gap-2 justify-center flex-wrap">
            You will need <span className="font-bold">60</span>
            <img
              className="w-[22px]"
              src="/icons/endwalker-icons/materials/nightforged_carpenters_component.png"
            />
            Nightforged Components per Tool which means{" "}
            <span className="font-bold">20</span> Collectables at maximum
            collectability.
          </p>
        </div>
      </ToolsContainer>
    </div>
  );
}

export default EndwalkerCrafters;
