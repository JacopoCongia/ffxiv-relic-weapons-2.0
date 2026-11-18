// Tool sections for the Crafters and Gatherers pages, in page order. Each
// section's `id` is the key into data.js; the page shows its tools and an
// owned/total counter. Tools have no materials: the site only tracks which
// ones you own, and `guide` links to an outside guide for the whole set,
// shown under the page title.
const toolsSectionData = {
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
