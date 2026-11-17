// Unit tests for the materials math in src/utilities/materials.js (used by
// Materials.jsx, MaterialCard.jsx and MaterialsContainer.jsx).
// Run with `npm test`.
import { describe, expect, test } from "vitest";
import data from "../../src/data/data.js";
import sectionsData from "../../src/data/sectionData.js";
import {
  displayAmount,
  isMaterialDone,
  remainingMaterial,
  remainingTomestones,
} from "../../src/utilities/materials.js";
import {
  addItems,
  countMainHand,
  ownedMainHand,
} from "../../src/utilities/ownedWeapons.js";

describe("remainingMaterial", () => {
  const material = { reqTotal: 15000, reqPerWeapon: 1000 };

  test("is reqTotal - reqPerWeapon * owned main-hand weapons", () => {
    expect(remainingMaterial(material, 0)).toBe(15000);
    expect(remainingMaterial(material, 1)).toBe(14000);
    expect(remainingMaterial(material, 15)).toBe(0);
  });

  test("can go below 0 (the card clamps it)", () => {
    expect(remainingMaterial(material, 16)).toBe(-1000);
  });

  test("owning a PLD sword and shield counts once", () => {
    const pld = data.penumbrae.filter((i) => i.wpnJobShort === "PLD");
    const owned = addItems([], pld);
    const count = ownedMainHand(owned, "penumbrae").length;
    expect(count).toBe(1);
    expect(remainingMaterial(material, count)).toBe(14000);
  });
});

describe("remainingTomestones", () => {
  test("is per-weapon cost times weapons not owned yet", () => {
    expect(remainingTomestones(21, 0, 1500)).toBe(31500);
    expect(remainingTomestones(21, 20, 1500)).toBe(1500);
    expect(remainingTomestones(21, 21, 1500)).toBe(0);
  });
});

describe("isMaterialDone / displayAmount", () => {
  test("a positive amount is shown as is", () => {
    expect(isMaterialDone(5)).toBe(false);
    expect(displayAmount(5)).toBe(5);
  });

  test("0 is done", () => {
    expect(isMaterialDone(0)).toBe(true);
    expect(displayAmount(0)).toBe(0);
  });

  test("a negative amount is done and shown as 0, never below", () => {
    expect(isMaterialDone(-1000)).toBe(true);
    expect(displayAmount(-1000)).toBe(0);
  });
});

// Checks on the real data, so the math above gives the right numbers
describe("weapon sections in sectionData.js", () => {
  const weaponSections = Object.values(sectionsData).flat();

  test.each(weaponSections.map((s) => [s.category, s]))(
    "%s: owning every weapon leaves no materials or tomestones",
    (category, section) => {
      const items = data[category];
      const owned = ownedMainHand(addItems([], items), category).length;

      for (const material of section.materials) {
        expect(displayAmount(remainingMaterial(material, owned))).toBe(0);
      }
      if (section.tomestones !== null) {
        expect(
          remainingTomestones(
            countMainHand(items),
            owned,
            section.tomestoneAmount,
          ),
        ).toBe(0);
      }
    },
  );

  test.each(weaponSections.map((s) => [s.category]))(
    "%s: has exactly one shield, the PLD one",
    (category) => {
      const shields = data[category].filter((i) => i.shield);
      expect(shields).toHaveLength(1);
      expect(shields[0].wpnJobShort).toBe("PLD");
    },
  );
});
