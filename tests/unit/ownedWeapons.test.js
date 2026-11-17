// Unit tests for the selection and counter logic in src/utilities/ownedWeapons.js
// (used by context/weaponsData.jsx, hooks/use-counter.js and ItemsHeader).
// Run with `npm test`.
import { describe, expect, test } from "vitest";
import data from "../../src/data/data.js";
import {
  addItems,
  countMainHand,
  isOwned,
  ownedMainHand,
  removeItems,
  toOwnedEntry,
  toggleItem,
} from "../../src/utilities/ownedWeapons.js";

// Real data: Penumbrae has a PLD sword + shield and one weapon per other job
const penumbrae = data.penumbrae;
const pldSword = penumbrae.find((i) => i.wpnJobShort === "PLD" && !i.shield);
const pldShield = penumbrae.find((i) => i.wpnJobShort === "PLD" && i.shield);
const warAxe = penumbrae.find((i) => i.wpnJobShort === "WAR");
const umbraeSword = data.umbrae.find(
  (i) => i.wpnJobShort === "PLD" && !i.shield,
);

const ids = (owned) => owned.map((entry) => entry.id);

describe("toOwnedEntry", () => {
  test("keeps only what is saved to Firestore", () => {
    expect(toOwnedEntry(pldShield)).toEqual({
      id: pldShield.id,
      name: pldShield.wpnName,
      category: "penumbrae",
      shield: true,
    });
    expect(toOwnedEntry(warAxe).shield).toBeNull();
  });
});

describe("toggleItem", () => {
  test("selecting a non-PLD weapon adds only that weapon", () => {
    const owned = toggleItem([], warAxe, penumbrae);
    expect(ids(owned)).toEqual([warAxe.id]);
  });

  test("deselecting a non-PLD weapon removes only that weapon", () => {
    const owned = addItems([], [warAxe, pldSword, pldShield]);
    expect(ids(toggleItem(owned, warAxe, penumbrae))).toEqual([
      pldSword.id,
      pldShield.id,
    ]);
  });

  test("selecting the PLD sword also selects the shield", () => {
    const owned = toggleItem([], pldSword, penumbrae);
    expect(ids(owned).sort()).toEqual([pldSword.id, pldShield.id].sort());
  });

  test("selecting the PLD shield also selects the sword", () => {
    const owned = toggleItem([], pldShield, penumbrae);
    expect(ids(owned).sort()).toEqual([pldSword.id, pldShield.id].sort());
  });

  test("deselecting either PLD item removes both", () => {
    const owned = addItems([], [pldSword, pldShield, warAxe]);
    expect(ids(toggleItem(owned, pldSword, penumbrae))).toEqual([warAxe.id]);
    expect(ids(toggleItem(owned, pldShield, penumbrae))).toEqual([warAxe.id]);
  });

  test("selecting a PLD item when only its pair is owned adds no duplicate", () => {
    const owned = addItems([], [pldShield]);
    // The sword isn't owned, so this selects: the shield is already there
    const result = toggleItem(owned, pldSword, penumbrae);
    expect(ids(result).sort()).toEqual([pldSword.id, pldShield.id].sort());
  });

  test("PLD pairing stays within the item's category", () => {
    const owned = addItems([], [umbraeSword]);
    const result = toggleItem(owned, pldSword, penumbrae);
    expect(ids(result).sort()).toEqual(
      [umbraeSword.id, pldSword.id, pldShield.id].sort(),
    );
  });

  test("toggling twice gets back to where it started", () => {
    const start = addItems([], [warAxe]);
    const once = toggleItem(start, pldSword, penumbrae);
    expect(toggleItem(once, pldSword, penumbrae)).toEqual(start);
  });

  test("doesn't change the list it's given", () => {
    const owned = addItems([], [warAxe]);
    const copy = structuredClone(owned);
    toggleItem(owned, pldSword, penumbrae);
    toggleItem(owned, warAxe, penumbrae);
    expect(owned).toEqual(copy);
  });
});

describe("addItems (Check All)", () => {
  test("adds every item in the category", () => {
    const owned = addItems([], penumbrae);
    expect(ids(owned)).toEqual(ids(penumbrae));
  });

  test("adds no duplicates when some items are already owned", () => {
    const owned = addItems([], [warAxe, pldSword]);
    const result = addItems(owned, penumbrae);
    expect(result).toHaveLength(penumbrae.length);
    expect(new Set(ids(result)).size).toBe(penumbrae.length);
    // Items already owned keep their place at the front
    expect(ids(result).slice(0, 2)).toEqual([warAxe.id, pldSword.id]);
  });

  test("running it twice changes nothing", () => {
    const once = addItems([], penumbrae);
    expect(addItems(once, penumbrae)).toEqual(once);
  });

  test("leaves other categories alone", () => {
    const owned = addItems([], [umbraeSword]);
    const result = addItems(owned, penumbrae);
    expect(result[0]).toEqual(toOwnedEntry(umbraeSword));
    expect(result.filter((e) => e.category === "umbrae")).toHaveLength(1);
  });
});

describe("removeItems (Uncheck All)", () => {
  test("removes every item in the category", () => {
    const owned = addItems([], penumbrae);
    expect(removeItems(owned, penumbrae)).toEqual([]);
  });

  test("leaves other categories alone", () => {
    const owned = addItems(addItems([], data.umbrae), penumbrae);
    const result = removeItems(owned, penumbrae);
    expect(ids(result)).toEqual(ids(data.umbrae));
  });

  test("does nothing when nothing in the category is owned", () => {
    const owned = addItems([], [umbraeSword]);
    expect(removeItems(owned, penumbrae)).toEqual(owned);
  });
});

describe("isOwned", () => {
  test("checks by id", () => {
    const owned = addItems([], [warAxe]);
    expect(isOwned(owned, warAxe.id)).toBe(true);
    expect(isOwned(owned, pldSword.id)).toBe(false);
  });
});

describe("counters", () => {
  test("ownedMainHand leaves out shields and other categories", () => {
    const owned = addItems(addItems([], [umbraeSword]), [
      pldSword,
      pldShield,
      warAxe,
    ]);
    expect(ids(ownedMainHand(owned, "penumbrae"))).toEqual([
      pldSword.id,
      warAxe.id,
    ]);
    expect(ids(ownedMainHand(owned, "umbrae"))).toEqual([umbraeSword.id]);
    expect(ownedMainHand(owned, "anemos")).toEqual([]);
  });

  test("countMainHand leaves out the shield", () => {
    expect(countMainHand(penumbrae)).toBe(penumbrae.length - 1);
    expect(countMainHand([pldSword, pldShield])).toBe(1);
    expect(countMainHand([])).toBe(0);
  });

  test("with everything owned, the counter matches the total", () => {
    const owned = addItems([], penumbrae);
    expect(ownedMainHand(owned, "penumbrae")).toHaveLength(
      countMainHand(penumbrae),
    );
  });

  test("tool categories have no shields, so every tool counts", () => {
    const tools = data.splendorousCrafters;
    expect(countMainHand(tools)).toBe(tools.length);
    expect(ownedMainHand(addItems([], tools), "splendorousCrafters")).toEqual(
      addItems([], tools),
    );
  });
});
