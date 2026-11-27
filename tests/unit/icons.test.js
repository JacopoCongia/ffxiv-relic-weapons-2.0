// Checks that every icon path in src/data/ points to a real file in public/,
// so a typo or a forgotten icon is caught here instead of showing up as the
// not_found.png placeholder on the live site. Run with `npm test`.
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "vitest";
import data from "../../src/data/data.js";
import materialsData from "../../src/data/materialsData.js";

const publicDir = fileURLToPath(new URL("../../public", import.meta.url));

// Item categories whose icons haven't all been added yet, e.g. a new step
// added before its icons. Their missing icons are allowed for now; remove a
// category once its icons are in. Empty: every icon is in place.
const PENDING_ICON_CATEGORIES = [];

const fileExists = (iconPath) => fs.existsSync(publicDir + iconPath);

const items = Object.values(data).flat();

// Every `icon` string anywhere in materialsData (tomestones and materials)
const materialIcons = [];
const collectIcons = (value, where) => {
  if (Array.isArray(value)) {
    value.forEach((child, i) => collectIcons(child, `${where}[${i}]`));
  } else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (key === "icon" && typeof child === "string") {
        materialIcons.push({ where, icon: child });
      } else {
        collectIcons(child, `${where}.${key}`);
      }
    }
  }
};
collectIcons(materialsData, "materialsData");

test("the fallback icon exists", () => {
  // src/utilities/imageFallback.js swaps in this file when an icon is missing
  expect(fileExists("/icons/not_found.png")).toBe(true);
});

describe("item icons (data.js)", () => {
  test("every path starts with /icons/", () => {
    // Without the leading "/" the browser looks for the file relative to the
    // current page's address, which breaks on nested routes
    const bad = items
      .filter((item) => !item.icon.startsWith("/icons/"))
      .map((item) => `${item.id}: ${item.icon}`);
    expect(bad).toEqual([]);
  });

  test("every icon file exists", () => {
    const missing = items
      .filter((item) => !PENDING_ICON_CATEGORIES.includes(item.category))
      .filter((item) => !fileExists(item.icon))
      .map((item) => `${item.id}: ${item.icon}`);
    expect(missing).toEqual([]);
  });

  test.each(PENDING_ICON_CATEGORIES)(
    "pending category %s still has missing icons",
    (category) => {
      // When this fails, all its icons are in: remove the category from
      // PENDING_ICON_CATEGORIES so it gets checked like the others
      const categoryItems = items.filter((item) => item.category === category);
      expect(categoryItems.length).toBeGreaterThan(0);
      expect(categoryItems.some((item) => !fileExists(item.icon))).toBe(true);
    },
  );
});

describe("material and tomestone icons (materialsData.js)", () => {
  test("some icons were found", () => {
    // Guards the walk above: if materialsData changes shape, fail loudly
    expect(materialIcons.length).toBeGreaterThan(0);
  });

  test("every path starts with /icons/", () => {
    const bad = materialIcons
      .filter(({ icon }) => !icon.startsWith("/icons/"))
      .map(({ where, icon }) => `${where}: ${icon}`);
    expect(bad).toEqual([]);
  });

  test("every icon file exists", () => {
    const missing = materialIcons
      .filter(({ icon }) => !fileExists(icon))
      .map(({ where, icon }) => `${where}: ${icon}`);
    expect(missing).toEqual([]);
  });
});
