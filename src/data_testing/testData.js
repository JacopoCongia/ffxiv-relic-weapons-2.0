import {JOBS} from './constants.js';
import {MATERIALS} from './materials.js';

// THE WEAPON GENERATOR
const generateWeapons = ({jobSet, basePath, prefix = "", suffix = "", types = {}}) => {
    return Object.values(jobSet).flatMap(job => {
        const weapons = [];
        const typeName = types[job.id] || job.mainType; // Use override if it exists
        const fullName = `${prefix} ${typeName} ${suffix}`.trim();

        // Matches icon naming convention: lowercase, underscores, remove apostrophes
        const iconName = fullName.toLowerCase().replace(/[']/g, "").replace(/ /g, "_");

        weapons.push({
            id: fullName.replace(/ /g, "_"),
            name: fullName,
            job: job.id,
            icon: `${basePath}/${iconName}.png`,
        });

        if (job.offType) {
            const offName = types[`${job.id}_OFF`] || job.offType;
            const fullOffName = `${prefix} ${offName} ${suffix}`.trim();
            const offIconName = fullOffName.toLowerCase().replace(/[']/g, "").replace(/ /g, "_");

            weapons.push({
                id: fullOffName.replace(/ /g, "_"),
                name: fullOffName,
                job: job.id,
                icon: `${basePath}/${offIconName}.png`,
                isOffhand: true
            });
        }
        return weapons;
    });
};

// THE STAGE FACTORY
const createStage = (config) => {
    const {id, name, expansion, requirements = [], jobSet = JOBS.combat, ...genConfig} = config;
    const jobCount = Object.keys(jobSet).length;

    return {
        id, name, expansion,
        requirements: requirements.map(req => ({
            ...req,
            get totalAmount() {
                return this.count * jobCount;
            } // The Getter
        })),
        weapons: generateWeapons({jobSet, ...genConfig})
    };
};

// THE CONFIGURATION
export const RELIC_STAGES = [
    // ------------------------------------------
    // DAWNTRAIL (Phantom Weapons)
    // ------------------------------------------
    createStage({
        id: "dt_penumbrae",
        name: "Phantom Weapons (Penumbrae)",
        expansion: "Dawntrail",
        requirements: [
            {
                item: MATERIALS.arcanite,
                count: 3
            },
            {
                item: MATERIALS.azurite_demiatma,
                count: 1
            },
            {
                item: MATERIALS.caput_mortuum_demiatma,
                count: 1
            },
            {
                item: MATERIALS.malachite_demiatma,
                count: 1
            },
            {
                item: MATERIALS.orpiment_demiatma,
                count: 1
            },
            {
                item: MATERIALS.realgar_demiatma,
                count: 1
            },
            {
                item: MATERIALS.verdigris_demiatma,
                count: 1
            }
        ],
        basePath: "/icons/dawntrail-icons/penumbrae",
        prefix: "Phantom",
        suffix: "Penumbrae",
        types: {
            // Overrides for phantom weapons
            DRK: "Guillotine",
            GNB: "Bayonet",
            RPR: "War Scythe",
            BRD: "Harp Bow",
            MCH: "Arquebus",
            DNC: "Terpna",
            BLM: "Staff",
            SMN: "Index",
            WHM: "Crook",
            SCH: "Codex", // Default is Codex, but listed explicitly just in case
            AST: "Star Globe",
            SGE: "Pendulums",
            PCT: "Flat Brush"
        }
    }),
    createStage({
        id: "dt_umbrae",
        name: "Phantom Weapons (Umbrae)",
        expansion: "Dawntrail",
        requirements: [
            {
                item: MATERIALS.waxing_arcanite,
                count: 3
            },
            {
                item: MATERIALS.rroneek_glue,
                count: 1
            },
            {
                item: MATERIALS.utohmu_siderite,
                count: 1
            },
            {
                item: MATERIALS.synthetic_dark_matter_alpha,
                count: 1
            },
            {
                item: MATERIALS.synthetic_dark_matter_beta,
                count: 1
            },
            {
                item: MATERIALS.synthetic_dark_matter_gamma,
                count: 1
            },
            {
                item: MATERIALS.aetherwell_array,
                count: 1
            }],
        basePath: "/icons/dawntrail-icons/umbrae",
        prefix: "Phantom",
        suffix: "Umbrae",
        types: {
            DRK: "Guillotine",
            GNB: "Bayonet",
            RPR: "War Scythe",
            BRD: "Harp Bow",
            MCH: "Arquebus",
            DNC: "Terpna",
            BLM: "Staff",
            SMN: "Index",
            WHM: "Crook",
            AST: "Star Globe",
            SGE: "Pendulums",
            PCT: "Flat Brush"
        }
    }),

    // ------------------------------------------
    // ENDWALKER (Manderville)
    // ------------------------------------------
    createStage({
        id: "manderville_base",
        name: "Manderville Weapons",
        expansion: "Endwalker",
        requirements: [{item: MATERIALS.manderium_meteorite, count: 3}],
        basePath: "/icons/endwalker-icons/manderville",
        prefix: "Manderville",
        types: {
            DRK: "Zweihander",
            AST: "Torquetum",
            SGE: "Milpreves",
            SAM: "Samurai Blade", // Matches your file
            MCH: "Revolver",
            MNK: "Knuckles",
            NIN: "Knives"
        }
    }),
    createStage({
        id: "manderville_amazing",
        name: "Amazing Manderville",
        expansion: "Endwalker",
        requirements: [{item: MATERIALS.complementary_chondrite, count: 3}],
        basePath: "/icons/endwalker-icons/amazing-manderville",
        prefix: "Amazing Manderville",
        types: {
            DRK: "Zweihander", AST: "Torquetum", SGE: "Milpreves",
            SAM: "Samurai Blade", MCH: "Revolver"
        }
    }),
    createStage({
        id: "manderville_majestic",
        name: "Majestic Manderville",
        expansion: "Endwalker",
        requirements: [{item: MATERIALS.amplifying_achondrite, count: 3}],
        basePath: "/icons/endwalker-icons/majestic-manderville",
        prefix: "Majestic Manderville",
        types: {
            DRK: "Greatsword", // Back to standard? Check your data.js logic
            GNB: "Bayonet",    // Your file says Bayonet for this step!
            WAR: "Bardiche",
            MNK: "Fists",
            MCH: "Pistol",
            AST: "Orrery",
            SGE: "Wings",
            RDM: "Degen",
            WHM: "Wand"
        }
    }),
    createStage({
        id: "manderville_mandervillous",
        name: "Mandervillous Weapons",
        expansion: "Endwalker",
        requirements: [{item: MATERIALS.cosmic_crystallite, count: 3}],
        basePath: "/icons/endwalker-icons/mandervillous",
        prefix: "Mandervillous",
        types: {
            PLD: "Falchion",
            WAR: "Battleaxe",
            DRG: "Trident",
            RPR: "Zaghnal",
            MNK: "Fists",
            BRD: "Compound Bow",
            MCH: "Revolver",
            SGE: "Wings"
        }
    }),

    // ------------------------------------------
    // SHADOWBRINGERS (Resistance)
    // ------------------------------------------
    createStage({
        id: "shb_resistance",
        name: "Resistance Weapons",
        expansion: "Shadowbringers",
        requirements: [{item: MATERIALS.thavnairian_scalepowder, count: 4}],
        basePath: "/icons/shadowbringers-icons/resistance",
        // Every single weapon has a unique name here
        types: {
            PLD: "Honorbound", PLD_OFF: "Tenacity",
            WAR: "Skullrender", DRK: "Woeborn", GNB: "Crownsblade",
            DRG: "Dreizack", MNK: "Samsara", SAM: "Hoshikiri", NIN: "Honeshirazu",
            BRD: "Brilliance", MCH: "Lawman", DNC: "Enchufla",
            BLM: "Soulscourge", SMN: "Espiritus", RDM: "Talekeeper",
            WHM: "Ingrimm", SCH: "Akademos", AST: "Solstice"
        }
    }),
    createStage({
        id: "shb_augmented_resistance",
        name: "Augmented Resistance",
        expansion: "Shadowbringers",
        requirements: [
            {item: MATERIALS.harrowing_memory, count: 20},
            {item: MATERIALS.sorrowful_memory, count: 20},
            {item: MATERIALS.tortured_memory, count: 20}
        ],
        basePath: "/icons/shadowbringers-icons/augmented-resistance",
        prefix: "Augmented",
        // Reuse the unique names from the previous step
        types: {
            PLD: "Honorbound", PLD_OFF: "Tenacity",
            WAR: "Skullrender", DRK: "Woeborn", GNB: "Crownsblade",
            DRG: "Dreizack", MNK: "Samsara", SAM: "Hoshikiri", NIN: "Honeshirazu",
            BRD: "Brilliance", MCH: "Lawman", DNC: "Enchufla",
            BLM: "Soulscourge", SMN: "Espiritus", RDM: "Talekeeper",
            WHM: "Ingrimm", SCH: "Akademos", AST: "Solstice"
        }
    }),
    createStage({
        id: "shb_recollection",
        name: "Recollection Weapons",
        expansion: "Shadowbringers",
        requirements: [{item: MATERIALS.bitter_memory, count: 6}],
        basePath: "/icons/shadowbringers-icons/augmented-resistance", // Uses same icons usually? Check your files.
        suffix: "Recollection",
        types: {
            PLD: "Honorbound", PLD_OFF: "Tenacity",
            WAR: "Skullrender", DRK: "Woeborn", GNB: "Crownsblade",
            DRG: "Dreizack", MNK: "Samsara", SAM: "Hoshikiri", NIN: "Honeshirazu",
            BRD: "Brilliance", MCH: "Lawman", DNC: "Enchufla",
            BLM: "Soulscourge", SMN: "Espiritus", RDM: "Talekeeper",
            WHM: "Ingrimm", SCH: "Akademos", AST: "Solstice"
        }
    }),
    createStage({
        id: "shb_laws_order",
        name: "Law's Order Weapons",
        expansion: "Shadowbringers",
        requirements: [{item: MATERIALS.loathsome_memory, count: 15}],
        basePath: "/icons/shadowbringers-icons/laws-order",
        prefix: "Law's Order",
        types: {
            DRK: "Zweihander",
            SAM: "Samurai Blade",
            MCH: "Revolver",
            AST: "Astrometer"
        }
    }),
    createStage({
        id: "shb_blades",
        name: "Blade's Weapons",
        expansion: "Shadowbringers",
        requirements: [{item: MATERIALS.raw_emotion, count: 15}],
        basePath: "/icons/shadowbringers-icons/blades",
        prefix: "Blade's",
        // Abstract Nouns for everyone
        types: {
            PLD: "Honor", PLD_OFF: "Fortitude",
            WAR: "Valor", DRK: "Justice", GNB: "Resolve",
            DRG: "Glory", MNK: "Serenity", SAM: "Fealty", NIN: "Subtlety",
            BRD: "Muse", MCH: "Ingenuity", DNC: "Euphoria",
            BLM: "Fury", SMN: "Acumen", RDM: "Temperance",
            WHM: "Mercy", SCH: "Wisdom", AST: "Providence"
        }
    }),

    // ------------------------------------------
    // STORMBLOOD (Eureka)
    // ------------------------------------------
    createStage({
        id: "sb_antiquated",
        name: "Antiquated Weapons",
        expansion: "Stormblood",
        requirements: [{item: MATERIALS.gil, count: 1000}],
        basePath: "/icons/stormblood-icons/antiquated",
        prefix: "Antiquated",
        types: {
            PLD: "Galatyn", PLD_OFF: "Evalach",
            WAR: "Farsha", DRK: "Caladbolg",
            DRG: "Ryunohige", MNK: "Sudarshana Chakra", SAM: "Kiku-ichimonji", NIN: "Nagi",
            BRD: "Failnaught", MCH: "Outsider",
            BLM: "Vanargand", SMN: "Lemegeton", RDM: "Murgleis",
            WHM: "Aymur", SCH: "Organum", AST: "Pleiades"
        }
    }),
    createStage({
        id: "sb_anemos",
        name: "Anemos Weapons",
        expansion: "Stormblood",
        requirements: [
            {item: MATERIALS.protean_crystal, count: 1300},
            {item: MATERIALS.pazuzus_feather, count: 3}
        ],
        basePath: "/icons/stormblood-icons/anemos",
        suffix: "Anemos",
        types: {
            PLD: "Galatyn", PLD_OFF: "Evalach",
            WAR: "Farsha", DRK: "Caladbolg",
            DRG: "Ryunohige", MNK: "Sudarshana Chakra", SAM: "Kiku-ichimonji", NIN: "Nagi",
            BRD: "Failnaught", MCH: "Outsider",
            BLM: "Vanargand", SMN: "Lemegeton", RDM: "Murgleis",
            WHM: "Aymur", SCH: "Organum", AST: "Pleiades"
        }
    }),
    createStage({
        id: "sb_elemental",
        name: "Elemental Weapons",
        expansion: "Stormblood",
        requirements: [
            {item: MATERIALS.pagos_crystal, count: 500},
            {item: MATERIALS.frosted_protean_crystal, count: 31},
            {item: MATERIALS.louhis_ice, count: 5}
        ],
        basePath: "/icons/stormblood-icons/elemental",
        prefix: "Elemental",
        types: {
            PLD: "Sword", PLD_OFF: "Shield",
            WAR: "Battleaxe",
            DRG: "Lance",
            MCH: "Handgonne",
            AST: "Astrometer"
        }
    }),
    createStage({
        id: "sb_pyros",
        name: "Pyros Weapons",
        expansion: "Stormblood",
        requirements: [
            {item: MATERIALS.pyros_crystal, count: 650},
            {item: MATERIALS.penthesileas_flame, count: 5}
        ],
        basePath: "/icons/stormblood-icons/pyros",
        prefix: "Pyros",
        types: {
            PLD: "Sword", PLD_OFF: "Shield",
            WAR: "Battleaxe",
            DRG: "Lance",
            MCH: "Handgonne",
            AST: "Astrometer"
        }
    }),
    createStage({
        id: "sb_eureka",
        name: "Eureka Weapons",
        expansion: "Stormblood",
        requirements: [
            {item: MATERIALS.hydatos_crystal, count: 350},
            {item: MATERIALS.crystalline_scale, count: 5}
        ],
        basePath: "/icons/stormblood-icons/eureka",
        suffix: "Eureka",
        types: {
            PLD: "Antea", PLD_OFF: "Bellerophon", // Note: Shield name differs often, check exact filename if needed
            WAR: "Shamash", DRK: "Xiphias",
            DRG: "Daboya", MNK: "Dumuzis", SAM: "Torigashira", NIN: "Kasasagi",
            BRD: "Circinae", MCH: "Mollfrith",
            BLM: "Paikea", SMN: "Tuah", RDM: "Brunello",
            WHM: "Rose Couverte", SCH: "Jebat", AST: "Albireo"
        }
    }),
];

