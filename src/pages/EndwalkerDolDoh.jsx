import ToolsContainer from "../components/ToolsContainer";
import useWeaponsData from "../hooks/use-weapons-data";

function EndwalkerDolDoh() {
  const { weapons: tools } = useWeaponsData();

  return (
    <div className="min-[1000px]:pl-[250px] duration-[0.5s]">
      <div className="bg-white py-5 text-center text-[2rem] font-bold">
        Splendorous Tools
      </div>
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
      <div className="bg-white py-5 text-center text-[2rem] font-bold">
        Augmented Splendorous Tools
      </div>
      <ToolsContainer
        tools={tools.augmentedSplendorousDoH}
        category={"Crafters"}
        type={"augmentedSplendorousDoH"}
      ></ToolsContainer>
      <ToolsContainer
        tools={tools.augmentedSplendorousDoL}
        category={"Gatherers"}
        type={"augmentedSplendorousDoL"}
      ></ToolsContainer>
    </div>
  );
}

export default EndwalkerDolDoh;
