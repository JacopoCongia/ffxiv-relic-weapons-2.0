export const JOBS = {
    combat: {
        // Tanks
        PLD: {id: "PLD", name: "Paladin", mainType: "Sword", offType: "Kite Shield"},
        WAR: {id: "WAR", name: "Warrior", mainType: "Axe"},
        DRK: {id: "DRK", name: "Dark Knight", mainType: "Greatsword"},
        GNB: {id: "GNB", name: "Gunbreaker", mainType: "Gunblade"},

        // Melee DPS
        DRG: {id: "DRG", name: "Dragoon", mainType: "Spear"},
        RPR: {id: "RPR", name: "Reaper", mainType: "War Scythe"},
        MNK: {id: "MNK", name: "Monk", mainType: "Knuckles"},
        SAM: {id: "SAM", name: "Samurai", mainType: "Blade"},
        NIN: {id: "NIN", name: "Ninja", mainType: "Knives"},
        VPR: {id: "VPR", name: "Viper", mainType: "Twinfangs"},

        // Physical Ranged DPS
        BRD: {id: "BRD", name: "Bard", mainType: "Harp Bow"},
        MCH: {id: "MCH", name: "Machinist", mainType: "Arquebus"},
        DNC: {id: "DNC", name: "Dancer", mainType: "Chakrams"},

        // Magical Ranged DPS
        BLM: {id: "BLM", name: "Black Mage", mainType: "Rod"},
        SMN: {id: "SMN", name: "Summoner", mainType: "Index"},
        RDM: {id: "RDM", name: "Red Mage", mainType: "Rapier"},
        PCT: {id: "PCT", name: "Pictomancer", mainType: "Flat Brush"},

        // Healers
        WHM: {id: "WHM", name: "White Mage", mainType: "Cane"},
        SCH: {id: "SCH", name: "Scholar", mainType: "Codex"},
        AST: {id: "AST", name: "Astrologian", mainType: "Star Globe"},
        SGE: {id: "SGE", name: "Sage", mainType: "Milpreves"},
    },

    // Crafters
    crafters: {
        CRP: {id: "CRP", name: "Carpenter", mainType: "Saw"},
        BSM: {id: "BSM", name: "Blacksmith", mainType: "Cross-pein Hammer"},
        ARM: {id: "ARM", name: "Armorer", mainType: "Raising Hammer"},
        GSM: {id: "GSM", name: "Goldsmith", mainType: "Mallet"},
        LTW: {id: "LTW", name: "Leatherworker", mainType: "Round Knife"},
        WVR: {id: "WVR", name: "Weaver", mainType: "Needle"},
        ALC: {id: "ALC", name: "Alchemist", mainType: "Alembic"},
        CUL: {id: "CUL", name: "Culinarian", mainType: "Frypan"},
    },

    // Gatherers
    gatherers: {
        MIN: {id: "MIN", name: "Miner", mainType: "Pickaxe"},
        BTN: {id: "BTN", name: "Botanist", mainType: "Hatchet"},
        FSH: {id: "FSH", name: "Fisher", mainType: "Fishing Rod"},
    }
};