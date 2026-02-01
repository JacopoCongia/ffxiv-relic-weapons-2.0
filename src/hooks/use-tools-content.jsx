import ToolsTable from "../components/features/weapons/ToolsTable.jsx";
import materialsData from "../data/materialsData.js";
import data from "../data/data.js";

export function useToolsContent() {
    const getSectionChildren = (sectionCategory) => {
        switch (sectionCategory) {
            case "splendorousCrafters":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            You will get your first tool by completing the quest
                            <a
                                className="flex items-center underline underline-offset-[5px] hover:text-[#dddddd]"
                                href="https://ffxiv.consolegameswiki.com/wiki/An_Original_Improvement"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="w-[25px]" src="/icons/feature_quest.png"/>
                                An Original Improvement
                            </a>
                        </p>
                        <p className="flex flex-wrap items-center justify-center gap-1">
                            Each subsequent tool can be acquired for
                            <span className="font-bold">1500</span>
                            <img className="w-[22px]" src="/icons/white_crafters_scrip.png"/>
                            White Crafter Scrips from Quinnana, in The Crystarium
                        </p>
                    </div>
                );

            case "augmentedSplendorousCrafters":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            You will need <span className="font-bold">60</span>
                            <img
                                className="w-[22px]"
                                src="/icons/endwalker-icons/materials/splendorous_crafters_component.png"
                            />
                            Splendorous Components per Tool which means
                            <span className="font-bold">20</span> Collectables at maximum
                            collectability.
                        </p>
                    </div>
                );
            case "crystallineCrafters":
                return (
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
                );
            case "choraZoisCrystallineCrafters":
                return (
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
                );
            case "brilliantCrafters":
                return (
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
                );
            case "vrandticVisionarysCrafters":
                return (
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
                );
            case "lodestarCrafters":
                return (
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
                );
            case "splendorousGatherers":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            You will get your first tool by completing the quest
                            <a
                                className="flex items-center underline underline-offset-[5px] hover:text-[#dddddd]"
                                href="https://ffxiv.consolegameswiki.com/wiki/An_Original_Improvement"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="w-[25px]" src="/icons/feature_quest.png"/>
                                An Original Improvement
                            </a>
                        </p>
                        <p className="flex flex-wrap items-center justify-center gap-1">
                            Each subsequent tool can be acquired for
                            <span className="font-bold">1500</span>
                            <img
                                className="w-[22px]"
                                src="/icons/white_gatherers_scrip.png"
                            />
                            White Gatherer Scrips from Quinnana, in The Crystarium
                        </p>
                    </div>
                );
            case "augmentedSplendorousGatherers":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            Miner and Botanist need <span className="font-bold">180</span>
                            <img
                                className="w-[22px]"
                                src="/icons/endwalker-icons/materials/splendorous_crafters_component.png"
                            />
                            Splendorous Components per Tool which means
                            <span className="font-bold">60</span> Collectables at maximum
                            collectability.
                        </p>
                        <p className="flex flex-wrap justify-center gap-2">
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
                );
            case "crystallineGatherers":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            Miner and Botanist need <span className="font-bold">210</span>
                            <img
                                className="w-[22px]"
                                src="/icons/endwalker-icons/materials/adaptive_crafters_component.png"
                            />
                            Adaptive Components per Tool which means
                            <span className="font-bold">70</span> Collectables at maximum
                            collectability.
                        </p>
                        <p className="flex flex-wrap justify-center gap-2">
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
                            minerMaterialOne={materialsData.materials.endwalker.doL.crystalline.connoisseursRedMalachite}
                            minerMaterialTwo={materialsData.materials.endwalker.doL.crystalline.adaptiveMinersComponent}
                            minerMaterialThree={materialsData.materials.endwalker.doL.crystalline.adaptiveFireCrystal}
                            botanistMaterialOne={materialsData.materials.endwalker.doL.crystalline.connoisseursLevinMint}
                            botanistMaterialTwo={materialsData.materials.endwalker.doL.crystalline.adaptiveBotanistsComponent}
                            botanistMaterialThree={materialsData.materials.endwalker.doL.crystalline.adaptiveLightningCrystal}
                            fisherMaterialOne={materialsData.materials.endwalker.doL.crystalline.mirrorImage}
                            fisherMaterialTwo={materialsData.materials.endwalker.doL.crystalline.adaptiveFishingRodComponent}
                            fisherMaterialThree={materialsData.materials.endwalker.doL.crystalline.spangledPirarucu}
                            fisherMaterialFour={materialsData.materials.endwalker.doL.crystalline.adaptiveFishingReelComponent}
                        />
                    </div>
                );
            case "choraZoisCrystallineGatherers":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            Miner and Botanist need <span className="font-bold">210</span>
                            <img
                                className="w-[22px]"
                                src="/icons/endwalker-icons/materials/customized_miners_component.png"
                            />
                            Customized Components per Tool which means
                            <span className="font-bold">70</span> Collectables at maximum
                            collectability.
                        </p>
                        <p className="flex flex-wrap justify-center gap-2">
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
                            minerMaterialOne={materialsData.materials.endwalker.doL.choraZoisCrystalline.connoisseursSoiledFemur}
                            minerMaterialTwo={materialsData.materials.endwalker.doL.choraZoisCrystalline.customizedMinersComponent}
                            minerMaterialThree={materialsData.materials.endwalker.doL.choraZoisCrystalline.customIceCrystal}
                            botanistMaterialOne={materialsData.materials.endwalker.doL.choraZoisCrystalline.connoisseursMiracleApple}
                            botanistMaterialTwo={materialsData.materials.endwalker.doL.choraZoisCrystalline.customizedBotanistsComponent}
                            botanistMaterialThree={materialsData.materials.endwalker.doL.choraZoisCrystalline.customWindCrystal}
                            fisherMaterialOne={materialsData.materials.endwalker.doL.choraZoisCrystalline.goldDustfish}
                            fisherMaterialTwo={materialsData.materials.endwalker.doL.choraZoisCrystalline.customizedFishingRodComponent}
                            fisherMaterialThree={materialsData.materials.endwalker.doL.choraZoisCrystalline.forgivenMelancholy}
                            fisherMaterialFour={materialsData.materials.endwalker.doL.choraZoisCrystalline.customizedFishingReelComponent}
                        />
                    </div>
                );
            case "brilliantGatherers":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            Miner and Botanist need <span className="font-bold">210</span>
                            <img
                                className="w-[22px]"
                                src="/icons/endwalker-icons/materials/brilliant_miners_component.png"
                            />
                            Brilliant Components per Tool which means
                            <span className="font-bold">70</span> Collectables at maximum
                            collectability.
                        </p>
                        <p className="flex flex-wrap justify-center gap-2">
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
                            minerMaterialOne={materialsData.materials.endwalker.doL.brilliant.connoisseurAurumRegisOre}
                            minerMaterialTwo={materialsData.materials.endwalker.doL.brilliant.brilliantMinersComponent}
                            minerMaterialThree={materialsData.materials.endwalker.doL.brilliant.brilliantLightningCluster}
                            botanistMaterialOne={materialsData.materials.endwalker.doL.brilliant.connoisseursCloves}
                            botanistMaterialTwo={materialsData.materials.endwalker.doL.brilliant.brilliantBotanistsComponent}
                            botanistMaterialThree={materialsData.materials.endwalker.doL.brilliant.brilliantEarthCluster}
                            fisherMaterialOne={materialsData.materials.endwalker.doL.brilliant.oilSlick}
                            fisherMaterialTwo={materialsData.materials.endwalker.doL.brilliant.brilliantFishingRodComponent}
                            fisherMaterialThree={materialsData.materials.endwalker.doL.brilliant.gonzalosGrace}
                            fisherMaterialFour={materialsData.materials.endwalker.doL.brilliant.brilliantFishingReelComponent}
                        />
                    </div>
                );
            case "vrandticVisionarysGatherers":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            Miner and Botanist need <span className="font-bold">220</span>
                            <img
                                className="w-[22px]"
                                src="/icons/endwalker-icons/materials/inspirational_miners_component.png"
                            />
                            Inspirational Components per Tool which means
                            <span className="font-bold">110</span> Collectables at maximum
                            collectability.
                        </p>
                        <p className="flex flex-wrap justify-center gap-2">
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
                            minerMaterialOne={materialsData.materials.endwalker.doL.vrandticVisionarys.connoisseursAsphaltum}
                            minerMaterialTwo={materialsData.materials.endwalker.doL.vrandticVisionarys.inspirationalMinersComponent}
                            minerMaterialThree={materialsData.materials.endwalker.doL.vrandticVisionarys.inspirationalWindCluster}
                            botanistMaterialOne={materialsData.materials.endwalker.doL.vrandticVisionarys.connoisseurGianthiveChip}
                            botanistMaterialTwo={materialsData.materials.endwalker.doL.vrandticVisionarys.inspirationalBotanistsComponent}
                            botanistMaterialThree={materialsData.materials.endwalker.doL.vrandticVisionarys.inspirationalFireCluster}
                            fisherMaterialOne={materialsData.materials.endwalker.doL.vrandticVisionarys.deadwoodShadow}
                            fisherMaterialTwo={materialsData.materials.endwalker.doL.vrandticVisionarys.inspirationalFishersComponent}
                            fisherMaterialThree={materialsData.materials.endwalker.doL.vrandticVisionarys.ronkanBullion}
                            fisherMaterialFour={materialsData.materials.endwalker.doL.vrandticVisionarys.inspirationalFishersComponent}
                        />
                    </div>
                );
            case "lodestarGatherers":
                return (
                    <div className="mb-[2em] flex flex-col gap-3 px-[2em] text-center text-white">
                        <p className="flex flex-wrap justify-center gap-2">
                            Miner and Botanist need <span className="font-bold">220</span>
                            <img
                                className="w-[22px]"
                                src="/icons/endwalker-icons/materials/nightforged_miners_component.png"
                            />
                            Nightforged Components per Tool which means
                            <span className="font-bold">110</span> Collectables at maximum
                            collectability.
                        </p>
                        <p className="flex flex-wrap justify-center gap-2">
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
                            minerMaterialOne={materialsData.materials.endwalker.doL.lodestar.connoisseursRawOnyx}
                            minerMaterialTwo={materialsData.materials.endwalker.doL.lodestar.nightforgedMinersComponent}
                            minerMaterialThree={materialsData.materials.endwalker.doL.lodestar.nightforgedIceCluster}
                            botanistMaterialOne={materialsData.materials.endwalker.doL.lodestar.connoisseursGlimshroom}
                            botanistMaterialTwo={materialsData.materials.endwalker.doL.lodestar.nightforgedBotanistsComponent}
                            botanistMaterialThree={materialsData.materials.endwalker.doL.lodestar.nightforgedWaterCluster}
                            fisherMaterialOne={materialsData.materials.endwalker.doL.lodestar.littleBounty}
                            fisherMaterialTwo={materialsData.materials.endwalker.doL.lodestar.nightforgedFishersComponent}
                            fisherMaterialThree={materialsData.materials.endwalker.doL.lodestar.saintFathricsFace}
                            fisherMaterialFour={materialsData.materials.endwalker.doL.lodestar.nightforgedFishersComponent}
                        />
                    </div>
                );
            default:
                return null;
        }
    };
    return {getSectionChildren};
}
