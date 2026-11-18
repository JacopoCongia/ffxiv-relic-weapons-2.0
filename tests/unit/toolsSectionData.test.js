// Checks that every tool section in src/data/toolsSectionData.js has what the
// Crafters and Gatherers pages need, so a new tool step can't be added
// half-filled. Run with `npm test`.
import { describe, expect, test } from "vitest";
import data from "../../src/data/data.js";
import toolsSectionData from "../../src/data/toolsSectionData.js";

const expansions = Object.values(toolsSectionData);
const sections = expansions.flatMap((expansion) => [
  ...expansion.crafters,
  ...expansion.gatherers,
]);

test("each expansion's guide has a label and an https link", () => {
  for (const { guide } of expansions) {
    expect(guide.label).toBeTruthy();
    expect(guide.url).toMatch(/^https:\/\//);
  }
});

test("section ids are unique", () => {
  const ids = sections.map((section) => section.id);
  expect(new Set(ids).size).toBe(ids.length);
});

describe.each(sections.map((section) => [section.id, section]))(
  "%s",
  (_id, section) => {
    test("has tools in data.js", () => {
      expect(data[section.id]?.length).toBeGreaterThan(0);
    });

    test("has a category, name and patch info", () => {
      // ItemsSection counts owned tools by category, so it must match the
      // items' category in data.js
      expect(section.category).toBe(section.id);
      for (const item of data[section.id]) {
        expect(item.category).toBe(section.category);
      }
      expect(section.name).toBeTruthy();
      expect(section.patchInfo).toBeTruthy();
    });
  },
);
