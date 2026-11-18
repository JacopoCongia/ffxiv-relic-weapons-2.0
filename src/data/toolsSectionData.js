import materialsData from "./materialsData";

// Tool sections for the Crafters and Gatherers pages, in page order.
//
// Besides the fields every section has (see sectionData.js), a tool section
// describes the extra content shown under its items. All three are optional
// and are rendered by ToolContent.jsx, in this order:
//
// - acquire: how to get the first tool (a quest) and the rest (a scrip price).
//     { quest: { name, url }, scrip: { material, label, vendor } }
//   The price is the scrip material's reqPerWeapon.
//
// - requirements: one sentence per entry, e.g. "Fisher needs 80 <icon> Rod
//   Components and 80 <icon> Reel Components per Tool which means 40
//   Collectables at maximum collectability."
//     { lead, parts: [{ amount, icon, label }], collectables }
//   lead defaults to "You will need". collectables can be a number or a
//   string such as "22-43".
//
// - toolsTable: what each gatherer job gathers and trades, shown as a table on
//   wide screens and as one card per job on phones.
//     [{ job, rows: [{ item, reward, rewardAtMax }] }]
//   item and reward are material objects from materialsData.js. A row with a
//   reward is a trade: item (a collectable, which has minCollectability and
//   maxCollectability) is exchanged for 1 reward at min collectability and
//   rewardAtMax rewards at max. A row without a reward is just an item to
//   gather, such as a crystal.

const doH = materialsData.materials.endwalker.doH;
const doL = materialsData.materials.endwalker.doL;
const ICONS = "/icons/endwalker-icons/materials";

const originalImprovement = {
  name: "An Original Improvement",
  url: "https://ffxiv.consolegameswiki.com/wiki/An_Original_Improvement",
};

// Gatherer tool steps all have a Miner, a Botanist and a Fisher table section
// with the same shape, so these build them from the step's materials.
function gathererRows(collectable, reward, crystal) {
  return [{ item: collectable, reward, rewardAtMax: 3 }, { item: crystal }];
}

function fisherRows(rows) {
  return rows.map(([item, reward]) => ({ item, reward, rewardAtMax: 2 }));
}

const toolsSectionData = {
  endwalker: {
    crafters: [
      {
        id: "splendorousCrafters",
        name: "Splendorous Tools",
        category: "splendorousCrafters",
        patchInfo: "iLvl 620 (Patch 6.35)",
        materials: doH.splendorous,
        tomestones: null,
        tomestoneAmount: null,
        acquire: {
          quest: originalImprovement,
          scrip: {
            material: doH.splendorous.whiteCraftersScrip,
            label: "White Crafter Scrips",
            vendor: "Quinnana, in The Crystarium",
          },
        },
      },
      {
        id: "augmentedSplendorousCrafters",
        name: "Augmented Splendorous Tools",
        category: "augmentedSplendorousCrafters",
        patchInfo: "iLvl 620 (Patch 6.35)",
        materials: null,
        tomestones: null,
        requirements: [
          {
            parts: [
              {
                amount: 60,
                icon: `${ICONS}/splendorous_crafters_component.png`,
                label: "Splendorous Components",
              },
            ],
            collectables: 20,
          },
        ],
      },
      {
        id: "crystallineCrafters",
        name: "Crystalline Tools",
        category: "crystallineCrafters",
        patchInfo: "iLvl 630 (Patch 6.45)",
        materials: null,
        tomestones: null,
        requirements: [
          {
            parts: [
              {
                amount: 90,
                icon: `${ICONS}/adaptive_crafters_component.png`,
                label: "Adaptive Components",
              },
            ],
            collectables: 30,
          },
        ],
      },
      {
        id: "choraZoisCrystallineCrafters",
        name: "Chora Zoi's Crystalline Tools",
        category: "choraZoisCrystallineCrafters",
        patchInfo: "iLvl 630 (Patch 6.45)",
        materials: null,
        tomestones: null,
        requirements: [
          {
            parts: [
              {
                amount: 90,
                icon: `${ICONS}/customized_crafters_component.png`,
                label: "Customized Components",
              },
            ],
            collectables: 30,
          },
        ],
      },
      {
        id: "brilliantCrafters",
        name: "Brilliant Tools",
        category: "brilliantCrafters",
        patchInfo: "iLvl 640 (Patch 6.51)",
        materials: null,
        tomestones: null,
        requirements: [
          {
            parts: [
              {
                amount: 90,
                icon: `${ICONS}/brilliant_crafters_component.png`,
                label: "Brilliant Components",
              },
            ],
            collectables: 30,
          },
        ],
      },
      {
        id: "vrandticVisionarysCrafters",
        name: "Vrandtic Visionary's Tools",
        category: "vrandticVisionarysCrafters",
        patchInfo: "iLvl 640 (Patch 6.51)",
        materials: null,
        tomestones: null,
        requirements: [
          {
            parts: [
              {
                amount: 60,
                // From this step on, the Carpenter's component stands in for
                // all the crafters' components.
                icon: `${ICONS}/inspirational_carpenters_component.png`,
                label: "Inspirational Components",
              },
            ],
            collectables: 20,
          },
        ],
      },
      {
        id: "lodestarCrafters",
        name: "Lodestar Tools",
        category: "lodestarCrafters",
        patchInfo: "iLvl 660 (Patch 6.51)",
        materials: null,
        tomestones: null,
        requirements: [
          {
            parts: [
              {
                amount: 60,
                icon: `${ICONS}/nightforged_carpenters_component.png`,
                label: "Nightforged Components",
              },
            ],
            collectables: 20,
          },
        ],
      },
    ],
    gatherers: [
      {
        id: "splendorousGatherers",
        name: "Splendorous Tools",
        category: "splendorousGatherers",
        patchInfo: "iLvl 620 (Patch 6.35)",
        materials: doL.splendorous,
        tomestones: null,
        acquire: {
          quest: originalImprovement,
          scrip: {
            material: doL.splendorous.whiteGatherersScrip,
            label: "White Gatherer Scrips",
            vendor: "Quinnana, in The Crystarium",
          },
        },
      },
      {
        id: "augmentedSplendorousGatherers",
        name: "Augmented Splendorous Tools",
        category: "augmentedSplendorousGatherers",
        patchInfo: "iLvl 620 (Patch 6.35)",
        materials: doL.augmentedSplendorous,
        tomestones: null,
        requirements: [
          {
            lead: "Miner and Botanist need",
            parts: [
              {
                amount: 180,
                icon: doL.augmentedSplendorous.splendorousMinersComponent.icon,
                label: "Splendorous Components",
              },
            ],
            collectables: 60,
          },
          {
            lead: "Fisher needs",
            parts: [
              {
                amount: 60,
                icon: doL.augmentedSplendorous.splendorousFishingRodComponent
                  .icon,
                label: "Splendorous Components",
              },
            ],
            collectables: 30,
          },
        ],
        toolsTable: [
          {
            job: "Miner",
            rows: gathererRows(
              doL.augmentedSplendorous.connoisseursPrismstone,
              doL.augmentedSplendorous.splendorousMinersComponent,
              doL.augmentedSplendorous.splendorousWaterShard,
            ),
          },
          {
            job: "Botanist",
            rows: gathererRows(
              doL.augmentedSplendorous.connoisseursWattlePetribark,
              doL.augmentedSplendorous.splendorousBotanistsComponent,
              doL.augmentedSplendorous.splendorousEarthShard,
            ),
          },
          {
            job: "Fisher",
            rows: fisherRows([
              [
                doL.augmentedSplendorous.platinumSeahorse,
                doL.augmentedSplendorous.splendorousFishingRodComponent,
              ],
              [
                doL.augmentedSplendorous.clavekeeper,
                doL.augmentedSplendorous.splendorousFishingReelComponent,
              ],
            ]),
          },
        ],
      },
      {
        id: "crystallineGatherers",
        name: "Crystalline Tools",
        category: "crystallineGatherers",
        patchInfo: "iLvl 630 (Patch 6.45)",
        materials: doL.crystalline,
        tomestones: null,
        requirements: [
          {
            lead: "Miner and Botanist need",
            parts: [
              {
                amount: 210,
                icon: doL.crystalline.adaptiveMinersComponent.icon,
                label: "Adaptive Components",
              },
            ],
            collectables: 70,
          },
          {
            lead: "Fisher needs",
            parts: [
              {
                amount: 80,
                icon: doL.crystalline.adaptiveFishingRodComponent.icon,
                label: "Adaptive Fishing Rod Components",
              },
              {
                amount: 80,
                icon: doL.crystalline.adaptiveFishingReelComponent.icon,
                label: "Adaptive Fishing Reel Components",
              },
            ],
            collectables: 40,
          },
        ],
        toolsTable: [
          {
            job: "Miner",
            rows: gathererRows(
              doL.crystalline.connoisseursRedMalachite,
              doL.crystalline.adaptiveMinersComponent,
              doL.crystalline.adaptiveFireCrystal,
            ),
          },
          {
            job: "Botanist",
            rows: gathererRows(
              doL.crystalline.connoisseursLevinMint,
              doL.crystalline.adaptiveBotanistsComponent,
              doL.crystalline.adaptiveLightningCrystal,
            ),
          },
          {
            job: "Fisher",
            rows: fisherRows([
              [
                doL.crystalline.mirrorImage,
                doL.crystalline.adaptiveFishingRodComponent,
              ],
              [
                doL.crystalline.spangledPirarucu,
                doL.crystalline.adaptiveFishingReelComponent,
              ],
            ]),
          },
        ],
      },
      {
        id: "choraZoisCrystallineGatherers",
        name: "Chora Zoi's Crystalline Tools",
        category: "choraZoisCrystallineGatherers",
        patchInfo: "iLvl 630 (Patch 6.45)",
        materials: doL.choraZoisCrystalline,
        tomestones: null,
        requirements: [
          {
            lead: "Miner and Botanist need",
            parts: [
              {
                amount: 210,
                icon: doL.choraZoisCrystalline.customizedMinersComponent.icon,
                label: "Customized Components",
              },
            ],
            collectables: 70,
          },
          {
            lead: "Fisher needs",
            parts: [
              {
                amount: 80,
                icon: doL.choraZoisCrystalline.customizedFishingRodComponent
                  .icon,
                label: "Customized Fishing Rod Components",
              },
              {
                amount: 80,
                icon: doL.choraZoisCrystalline.customizedFishingReelComponent
                  .icon,
                label: "Customized Fishing Reel Components",
              },
            ],
            collectables: 40,
          },
        ],
        toolsTable: [
          {
            job: "Miner",
            rows: gathererRows(
              doL.choraZoisCrystalline.connoisseursSoiledFemur,
              doL.choraZoisCrystalline.customizedMinersComponent,
              doL.choraZoisCrystalline.customIceCrystal,
            ),
          },
          {
            job: "Botanist",
            rows: gathererRows(
              doL.choraZoisCrystalline.connoisseursMiracleApple,
              doL.choraZoisCrystalline.customizedBotanistsComponent,
              doL.choraZoisCrystalline.customWindCrystal,
            ),
          },
          {
            job: "Fisher",
            rows: fisherRows([
              [
                doL.choraZoisCrystalline.goldDustfish,
                doL.choraZoisCrystalline.customizedFishingRodComponent,
              ],
              [
                doL.choraZoisCrystalline.forgivenMelancholy,
                doL.choraZoisCrystalline.customizedFishingReelComponent,
              ],
            ]),
          },
        ],
      },
      {
        id: "brilliantGatherers",
        name: "Brilliant Tools",
        category: "brilliantGatherers",
        patchInfo: "iLvl 640 (Patch 6.51)",
        materials: doL.brilliant,
        tomestones: null,
        requirements: [
          {
            lead: "Miner and Botanist need",
            parts: [
              {
                amount: 210,
                icon: doL.brilliant.brilliantMinersComponent.icon,
                label: "Brilliant Components",
              },
            ],
            collectables: 70,
          },
          {
            lead: "Fisher needs",
            parts: [
              {
                amount: 80,
                icon: doL.brilliant.brilliantFishingRodComponent.icon,
                label: "Brilliant Fishing Rod Components",
              },
              {
                amount: 80,
                icon: doL.brilliant.brilliantFishingReelComponent.icon,
                label: "Brilliant Fishing Reel Components",
              },
            ],
            collectables: 40,
          },
        ],
        toolsTable: [
          {
            job: "Miner",
            rows: gathererRows(
              doL.brilliant.connoisseurAurumRegisOre,
              doL.brilliant.brilliantMinersComponent,
              doL.brilliant.brilliantLightningCluster,
            ),
          },
          {
            job: "Botanist",
            rows: gathererRows(
              doL.brilliant.connoisseursCloves,
              doL.brilliant.brilliantBotanistsComponent,
              doL.brilliant.brilliantEarthCluster,
            ),
          },
          {
            job: "Fisher",
            rows: fisherRows([
              [
                doL.brilliant.oilSlick,
                doL.brilliant.brilliantFishingRodComponent,
              ],
              [
                doL.brilliant.gonzalosGrace,
                doL.brilliant.brilliantFishingReelComponent,
              ],
            ]),
          },
        ],
      },
      {
        id: "vrandticVisionarysGatherers",
        name: "Vrandtic Visionary's Tools",
        category: "vrandticVisionarysGatherers",
        patchInfo: "iLvl 640 (Patch 6.51)",
        materials: doL.vrandticVisionarys,
        tomestones: null,
        requirements: [
          {
            lead: "Miner and Botanist need",
            parts: [
              {
                amount: 220,
                icon: doL.vrandticVisionarys.inspirationalMinersComponent.icon,
                label: "Inspirational Components",
              },
            ],
            collectables: 110,
          },
          {
            lead: "Fisher needs",
            parts: [
              {
                amount: 170,
                icon: doL.vrandticVisionarys.inspirationalFishersComponent.icon,
                label: "Inspirational Fisher's Components",
              },
            ],
            collectables: "22-43",
          },
        ],
        toolsTable: [
          {
            job: "Miner",
            rows: gathererRows(
              doL.vrandticVisionarys.connoisseursAsphaltum,
              doL.vrandticVisionarys.inspirationalMinersComponent,
              doL.vrandticVisionarys.inspirationalWindCluster,
            ),
          },
          {
            job: "Botanist",
            rows: gathererRows(
              doL.vrandticVisionarys.connoisseurGianthiveChip,
              doL.vrandticVisionarys.inspirationalBotanistsComponent,
              doL.vrandticVisionarys.inspirationalFireCluster,
            ),
          },
          {
            // From this step on, the rod and reel components are merged into
            // one Fisher's Component, which both fish are traded for.
            job: "Fisher",
            rows: fisherRows([
              [
                doL.vrandticVisionarys.deadwoodShadow,
                doL.vrandticVisionarys.inspirationalFishersComponent,
              ],
              [
                doL.vrandticVisionarys.ronkanBullion,
                doL.vrandticVisionarys.inspirationalFishersComponent,
              ],
            ]),
          },
        ],
      },
      {
        id: "lodestarGatherers",
        name: "Lodestar Tools",
        category: "lodestarGatherers",
        patchInfo: "iLvl 660 (Patch 6.51)",
        materials: doL.lodestar,
        tomestones: null,
        requirements: [
          {
            lead: "Miner and Botanist need",
            parts: [
              {
                amount: 220,
                icon: doL.lodestar.nightforgedMinersComponent.icon,
                label: "Nightforged Components",
              },
            ],
            collectables: 110,
          },
          {
            lead: "Fisher needs",
            parts: [
              {
                amount: 170,
                icon: doL.lodestar.nightforgedFishersComponent.icon,
                label: "Nightforged Fisher's Components",
              },
            ],
            collectables: 68,
          },
        ],
        toolsTable: [
          {
            job: "Miner",
            rows: gathererRows(
              doL.lodestar.connoisseursRawOnyx,
              doL.lodestar.nightforgedMinersComponent,
              doL.lodestar.nightforgedIceCluster,
            ),
          },
          {
            job: "Botanist",
            rows: gathererRows(
              doL.lodestar.connoisseursGlimshroom,
              doL.lodestar.nightforgedBotanistsComponent,
              doL.lodestar.nightforgedWaterCluster,
            ),
          },
          {
            job: "Fisher",
            rows: fisherRows([
              [
                doL.lodestar.littleBounty,
                doL.lodestar.nightforgedFishersComponent,
              ],
              [
                doL.lodestar.saintFathricsFace,
                doL.lodestar.nightforgedFishersComponent,
              ],
            ]),
          },
        ],
      },
    ],
  },
};

export default toolsSectionData;
