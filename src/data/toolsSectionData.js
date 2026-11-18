// Tool sections for the Crafters and Gatherers pages, in page order. Each
// section's `id` is the key into data.js; the page shows its tools and an
// owned/total counter. Tools have no materials: the site only tracks which
// ones you own, and `guide` links to an outside guide for the whole set,
// shown under the page title.
const toolsSectionData = {
  dawntrail: {
    guide: {
      label: "Cosmic Tools on the FFXIV Wiki",
      url: "https://ffxiv.consolegameswiki.com/wiki/Cosmic_Tools",
    },
    crafters: [
      {
        id: "cosmicPrototypeV01Crafters",
        name: "Cosmic Tools Prototype v0.1",
        category: "cosmicPrototypeV01Crafters",
        patchInfo: "iLvl 10 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV02Crafters",
        name: "Cosmic Tools Prototype v0.2",
        category: "cosmicPrototypeV02Crafters",
        patchInfo: "iLvl 30 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV03Crafters",
        name: "Cosmic Tools Prototype v0.3",
        category: "cosmicPrototypeV03Crafters",
        patchInfo: "iLvl 55 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV04Crafters",
        name: "Cosmic Tools Prototype v0.4",
        category: "cosmicPrototypeV04Crafters",
        patchInfo: "iLvl 150 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV05Crafters",
        name: "Cosmic Tools Prototype v0.5",
        category: "cosmicPrototypeV05Crafters",
        patchInfo: "iLvl 290 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV06Crafters",
        name: "Cosmic Tools Prototype v0.6",
        category: "cosmicPrototypeV06Crafters",
        patchInfo: "iLvl 430 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV07Crafters",
        name: "Cosmic Tools Prototype v0.7",
        category: "cosmicPrototypeV07Crafters",
        patchInfo: "iLvl 560 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV08Crafters",
        name: "Cosmic Tools Prototype v0.8",
        category: "cosmicPrototypeV08Crafters",
        patchInfo: "iLvl 690 (Patch 7.21)",
      },
      {
        id: "cosmicCrafters",
        name: "Cosmic Tools",
        category: "cosmicCrafters",
        patchInfo: "iLvl 720 (Patch 7.21)",
      },
      {
        id: "cosmicV11Crafters",
        name: "Cosmic Tools v1.1",
        category: "cosmicV11Crafters",
        patchInfo: "iLvl 725 (Patch 7.31)",
      },
      {
        id: "cosmicV12Crafters",
        name: "Cosmic Tools v1.2",
        category: "cosmicV12Crafters",
        patchInfo: "iLvl 730 (Patch 7.31)",
      },
      {
        id: "cosmicV13Crafters",
        name: "Cosmic Tools v1.3",
        category: "cosmicV13Crafters",
        patchInfo: "iLvl 735 (Patch 7.31)",
      },
      {
        id: "cosmicV14Crafters",
        name: "Cosmic Tools v1.4",
        category: "cosmicV14Crafters",
        patchInfo: "iLvl 740 (Patch 7.31)",
      },
      {
        id: "stellarCrafters",
        name: "Stellar Tools",
        category: "stellarCrafters",
        patchInfo: "iLvl 750 (Patch 7.31)",
      },
      {
        id: "stellarV11Crafters",
        name: "Stellar Tools v1.1",
        category: "stellarV11Crafters",
        patchInfo: "iLvl 755 (Patch 7.41)",
      },
      {
        id: "stellarV12Crafters",
        name: "Stellar Tools v1.2",
        category: "stellarV12Crafters",
        patchInfo: "iLvl 760 (Patch 7.41)",
      },
      {
        id: "hyperCrafters",
        name: "Hypertools",
        category: "hyperCrafters",
        patchInfo: "iLvl 765 (Patch 7.41)",
      },
      {
        id: "hyperV11Crafters",
        name: "Hypertools v1.1",
        category: "hyperV11Crafters",
        patchInfo: "iLvl 770 (Patch 7.51)",
      },
      {
        id: "hyperV12Crafters",
        name: "Hypertools v1.2",
        category: "hyperV12Crafters",
        patchInfo: "iLvl 775 (Patch 7.51)",
      },
      {
        id: "starsCrafters",
        name: "Tools of Stars",
        category: "starsCrafters",
        patchInfo: "iLvl 780 (Patch 7.51)",
      },
    ],
    gatherers: [
      {
        id: "cosmicPrototypeV01Gatherers",
        name: "Cosmic Tools Prototype v0.1",
        category: "cosmicPrototypeV01Gatherers",
        patchInfo: "iLvl 10 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV02Gatherers",
        name: "Cosmic Tools Prototype v0.2",
        category: "cosmicPrototypeV02Gatherers",
        patchInfo: "iLvl 30 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV03Gatherers",
        name: "Cosmic Tools Prototype v0.3",
        category: "cosmicPrototypeV03Gatherers",
        patchInfo: "iLvl 55 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV04Gatherers",
        name: "Cosmic Tools Prototype v0.4",
        category: "cosmicPrototypeV04Gatherers",
        patchInfo: "iLvl 150 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV05Gatherers",
        name: "Cosmic Tools Prototype v0.5",
        category: "cosmicPrototypeV05Gatherers",
        patchInfo: "iLvl 290 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV06Gatherers",
        name: "Cosmic Tools Prototype v0.6",
        category: "cosmicPrototypeV06Gatherers",
        patchInfo: "iLvl 430 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV07Gatherers",
        name: "Cosmic Tools Prototype v0.7",
        category: "cosmicPrototypeV07Gatherers",
        patchInfo: "iLvl 560 (Patch 7.21)",
      },
      {
        id: "cosmicPrototypeV08Gatherers",
        name: "Cosmic Tools Prototype v0.8",
        category: "cosmicPrototypeV08Gatherers",
        patchInfo: "iLvl 690 (Patch 7.21)",
      },
      {
        id: "cosmicGatherers",
        name: "Cosmic Tools",
        category: "cosmicGatherers",
        patchInfo: "iLvl 720 (Patch 7.21)",
      },
      {
        id: "cosmicV11Gatherers",
        name: "Cosmic Tools v1.1",
        category: "cosmicV11Gatherers",
        patchInfo: "iLvl 725 (Patch 7.31)",
      },
      {
        id: "cosmicV12Gatherers",
        name: "Cosmic Tools v1.2",
        category: "cosmicV12Gatherers",
        patchInfo: "iLvl 730 (Patch 7.31)",
      },
      {
        id: "cosmicV13Gatherers",
        name: "Cosmic Tools v1.3",
        category: "cosmicV13Gatherers",
        patchInfo: "iLvl 735 (Patch 7.31)",
      },
      {
        id: "cosmicV14Gatherers",
        name: "Cosmic Tools v1.4",
        category: "cosmicV14Gatherers",
        patchInfo: "iLvl 740 (Patch 7.31)",
      },
      {
        id: "stellarGatherers",
        name: "Stellar Tools",
        category: "stellarGatherers",
        patchInfo: "iLvl 750 (Patch 7.31)",
      },
      {
        id: "stellarV11Gatherers",
        name: "Stellar Tools v1.1",
        category: "stellarV11Gatherers",
        patchInfo: "iLvl 755 (Patch 7.41)",
      },
      {
        id: "stellarV12Gatherers",
        name: "Stellar Tools v1.2",
        category: "stellarV12Gatherers",
        patchInfo: "iLvl 760 (Patch 7.41)",
      },
      {
        id: "hyperGatherers",
        name: "Hypertools",
        category: "hyperGatherers",
        patchInfo: "iLvl 765 (Patch 7.41)",
      },
      {
        id: "hyperV11Gatherers",
        name: "Hypertools v1.1",
        category: "hyperV11Gatherers",
        patchInfo: "iLvl 770 (Patch 7.51)",
      },
      {
        id: "hyperV12Gatherers",
        name: "Hypertools v1.2",
        category: "hyperV12Gatherers",
        patchInfo: "iLvl 775 (Patch 7.51)",
      },
      {
        id: "starsGatherers",
        name: "Tools of Stars",
        category: "starsGatherers",
        patchInfo: "iLvl 780 (Patch 7.51)",
      },
    ],
  },
  endwalker: {
    guide: {
      label: "Splendorous Tools on the FFXIV Wiki",
      url: "https://ffxiv.consolegameswiki.com/wiki/Splendorous_Tools",
    },
    crafters: [
      {
        id: "splendorousCrafters",
        name: "Splendorous Tools",
        category: "splendorousCrafters",
        patchInfo: "iLvl 620 (Patch 6.35)",
      },
      {
        id: "augmentedSplendorousCrafters",
        name: "Augmented Splendorous Tools",
        category: "augmentedSplendorousCrafters",
        patchInfo: "iLvl 620 (Patch 6.35)",
      },
      {
        id: "crystallineCrafters",
        name: "Crystalline Tools",
        category: "crystallineCrafters",
        patchInfo: "iLvl 630 (Patch 6.45)",
      },
      {
        id: "choraZoisCrystallineCrafters",
        name: "Chora Zoi's Crystalline Tools",
        category: "choraZoisCrystallineCrafters",
        patchInfo: "iLvl 630 (Patch 6.45)",
      },
      {
        id: "brilliantCrafters",
        name: "Brilliant Tools",
        category: "brilliantCrafters",
        patchInfo: "iLvl 640 (Patch 6.51)",
      },
      {
        id: "vrandticVisionarysCrafters",
        name: "Vrandtic Visionary's Tools",
        category: "vrandticVisionarysCrafters",
        patchInfo: "iLvl 640 (Patch 6.51)",
      },
      {
        id: "lodestarCrafters",
        name: "Lodestar Tools",
        category: "lodestarCrafters",
        patchInfo: "iLvl 660 (Patch 6.51)",
      },
    ],
    gatherers: [
      {
        id: "splendorousGatherers",
        name: "Splendorous Tools",
        category: "splendorousGatherers",
        patchInfo: "iLvl 620 (Patch 6.35)",
      },
      {
        id: "augmentedSplendorousGatherers",
        name: "Augmented Splendorous Tools",
        category: "augmentedSplendorousGatherers",
        patchInfo: "iLvl 620 (Patch 6.35)",
      },
      {
        id: "crystallineGatherers",
        name: "Crystalline Tools",
        category: "crystallineGatherers",
        patchInfo: "iLvl 630 (Patch 6.45)",
      },
      {
        id: "choraZoisCrystallineGatherers",
        name: "Chora Zoi's Crystalline Tools",
        category: "choraZoisCrystallineGatherers",
        patchInfo: "iLvl 630 (Patch 6.45)",
      },
      {
        id: "brilliantGatherers",
        name: "Brilliant Tools",
        category: "brilliantGatherers",
        patchInfo: "iLvl 640 (Patch 6.51)",
      },
      {
        id: "vrandticVisionarysGatherers",
        name: "Vrandtic Visionary's Tools",
        category: "vrandticVisionarysGatherers",
        patchInfo: "iLvl 640 (Patch 6.51)",
      },
      {
        id: "lodestarGatherers",
        name: "Lodestar Tools",
        category: "lodestarGatherers",
        patchInfo: "iLvl 660 (Patch 6.51)",
      },
    ],
  },
};

export default toolsSectionData;
