import ToolsContainer from "../components/ToolsContainer";
import useWeaponsData from "../hooks/use-weapons-data";
import Header from "../components/Header";

function EndwalkerCrafters() {
  const { weapons: tools } = useWeaponsData();

  return (
    <div className="duration-[0.5s] min-[1000px]:pl-[250px]">
      <Header doh />
      <ToolsContainer
        tools={tools.splendorousCrafters}
        category={"splendorousCrafters"}
        name={"Splendorous"}
        patchInfo={"iLvl 570 (Patch 6.35)"}
      >
        <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
          <p className="flex flex-wrap justify-center gap-2">
            You will get your first tool by completing the quest
            <a
              className="flex items-center underline underline-offset-[5px] hover:text-[#dddddd]"
              href="https://ffxiv.consolegameswiki.com/wiki/An_Original_Improvement"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-[25px]" src="/icons/feature_quest.png" />
              An Original Improvement
            </a>
          </p>
          <p className="flex flex-wrap items-center justify-center gap-1">
            Each subsequent tool can be acquired for
            <span className="font-bold">1500</span>
            <img className="w-[22px]" src="/icons/white_crafters_scrip.png" />
            White Crafter Scrips from Quinnana, in The Crystarium
          </p>
        </div>
      </ToolsContainer>
      <ToolsContainer
        tools={tools.augmentedSplendorousCrafters}
        category={"augmentedSplendorousCrafters"}
        name={"Augmented Splendorous"}
        patchInfo={"iLvl 590 (Patch 6.35)"}
      >
        <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
          <p className="flex flex-wrap justify-center gap-2">
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
        tools={tools.crystallineCrafters}
        category={"crystallineCrafters"}
        name={"Crystalline"}
        patchInfo={"iLvl 620 (Patch 6.35)"}
      >
        <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
          <p className="flex flex-wrap justify-center gap-2">
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
      <ToolsContainer
        tools={tools.choraZoisCrystallineCrafters}
        category={"choraZoisCrystallineCrafters"}
        name={"Chora Zoi's Crystalline"}
        patchInfo={"iLvl 625 (Patch 6.45)"}
      >
        <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
          <p className="flex flex-wrap justify-center gap-2">
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
      <ToolsContainer
        tools={tools.brilliantCrafters}
        category={"brilliantCrafters"}
        name={"Brilliant"}
        patchInfo={"iLvl 630 (Patch 6.45)"}
      >
        <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
          <p className="flex flex-wrap justify-center gap-2">
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
      <ToolsContainer
        tools={tools.vrandticVisionarysCrafters}
        category={"vrandticVisionarysCrafters"}
        name={"Vrandtic Visionary's"}
        patchInfo={"iLvl 635 (Patch 6.51)"}
      >
        <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
          <p className="flex flex-wrap justify-center gap-2">
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
      <ToolsContainer
        tools={tools.lodestarCrafters}
        category={"lodestarCrafters"}
        name={"Lodestar"}
        patchInfo={"iLvl 640 (Patch 6.51)"}
      >
        <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
          <p className="flex flex-wrap justify-center gap-2">
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
