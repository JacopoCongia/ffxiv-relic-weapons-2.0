import materialsData from "./materialsData";

const toolsSectionData = {
    endwalker: {
        crafters: [
            {
                id: "splendorousCrafters",
                name: "Splendorous Tools",
                category: "splendorousCrafters",
                patchInfo: "iLvl 620 (Patch 6.35)",
                materials: materialsData.materials?.endwalker?.doH?.splendorous || null,
                tomestones: null,
                tomestoneAmount: null,
            },
            {
                id: "augmentedSplendorousCrafters",
                name: "Augmented Splendorous Tools",
                category: "augmentedSplendorousCrafters",
                patchInfo: "iLvl 620 (Patch 6.35)",
                materials:
                    materialsData.materials?.endwalker?.doH?.augmentedSplendorous || null,
                tomestones: null,
            },
            {
                id: "crystallineCrafters",
                name: "Crystalline Tools",
                category: "crystallineCrafters",
                patchInfo: "iLvl 630 (Patch 6.45)",
                materials: null,
                tomestones: null,
            },
            {
                id: "choraZoisCrystallineCrafters",
                name: "Chora Zoi's Crystalline Tools",
                category: "choraZoisCrystallineCrafters",
                patchInfo: "iLvl 630 (Patch 6.45)",
                materials: null,
                tomestones: null,
            },
            {
                id: "brilliantCrafters",
                name: "Brilliant Tools",
                category: "brilliantCrafters",
                patchInfo: "iLvl 640 (Patch 6.51)",
                materials: null,
                tomestones: null,
            },
            {
                id: "vrandticVisionarysCrafters",
                name: "Vrandtic Visionary's Tools",
                category: "vrandticVisionarysCrafters",
                patchInfo: "iLvl 640 (Patch 6.51)",
                materials: null,
                tomestones: null,
            },
            {
                id: "lodestarCrafters",
                name: "Lodestar Tools",
                category: "lodestarCrafters",
                patchInfo: "iLvl 660 (Patch 6.51)",
                materials: null,
                tomestones: null,
            },
        ],
        gatherers: [
            {
                id: "splendorousGatherers",
                name: "Splendorous Tools",
                category: "splendorousGatherers",
                patchInfo: "iLvl 620 (Patch 6.35)",
                materials: materialsData.materials?.endwalker?.doL?.splendorous || null,
                tomestones: null,
            },
            {
                id: "augmentedSplendorousGatherers",
                name: "Augmented Splendorous Tools",
                category: "augmentedSplendorousGatherers",
                patchInfo: "iLvl 620 (Patch 6.35)",
                materials:
                    materialsData.materials?.endwalker?.doL?.augmentedSplendorous || null,
                tomestones: null,
            },
            {
                id: "crystallineGatherers",
                name: "Crystalline Tools",
                category: "crystallineGatherers",
                patchInfo: "iLvl 630 (Patch 6.45)",
                materials: materialsData.materials?.endwalker?.doL?.crystalline || null,
                tomestones: null,
            },
            {
                id: "choraZoisCrystallineGatherers",
                name: "Chora Zoi's Crystalline Tools",
                category: "choraZoisCrystallineGatherers",
                patchInfo: "iLvl 630 (Patch 6.45)",
                materials: materialsData.materials?.endwalker?.doL?.choraZoisCrystalline || null,
                tomestones: null,
            },
            {
                id: "brilliantGatherers",
                name: "Brilliant Tools",
                category: "brilliantGatherers",
                patchInfo: "iLvl 640 (Patch 6.51)",
                materials: materialsData.materials?.endwalker?.doL?.brilliant || null,
                tomestones: null,
            },
            {
                id: "vrandticVisionarysGatherers",
                name: "Vrandtic Visionary's Tools",
                category: "vrandticVisionarysGatherers",
                patchInfo: "iLvl 640 (Patch 6.51)",
                materials: materialsData.materials?.endwalker?.doL?.vrandticVisionarys || null,
                tomestones: null,
            },
            {
                id: "lodestarGatherers",
                name: "Lodestar Tools",
                category: "lodestarGatherers",
                patchInfo: "iLvl 660 (Patch 6.51)",
                materials: materialsData.materials?.endwalker?.doL?.lodestar || null,
                tomestones: null,
            },
        ],
    },
};

export default toolsSectionData;
