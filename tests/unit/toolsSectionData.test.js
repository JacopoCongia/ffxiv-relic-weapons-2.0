// Checks that every tool section in src/data/toolsSectionData.js has the data
// ToolContent.jsx and ToolsTable.jsx need, so a new tool step can't be added
// half-filled. Run with `npm test`.
import { describe, expect, test } from "vitest";
import data from "../../src/data/data.js";
import toolsSectionData from "../../src/data/toolsSectionData.js";

const sections = Object.values(toolsSectionData).flatMap((expansion) =>
  Object.values(expansion).flat(),
);

// Icons are absolute paths under public/, e.g. "/icons/endwalker-icons/...".
// The file itself may not exist yet: like item cards, tool icons fall back to
// /icons/not_found.png, so a step's data can land before its icons.
function expectIconPath(icon) {
  expect(icon, "icon path").toMatch(/^\/icons\/.+\.png$/);
}

describe.each(sections.map((section) => [section.id, section]))(
  "%s",
  (_id, section) => {
    test("has items in data.js and a name", () => {
      expect(data[section.id]?.length).toBeGreaterThan(0);
      expect(section.category).toBe(section.id);
      expect(section.name).toBeTruthy();
      expect(section.patchInfo).toBeTruthy();
    });

    test("says how to get the tools", () => {
      expect(section.acquire || section.requirements).toBeTruthy();
    });

    test.runIf(section.acquire)("acquire has a quest and a scrip price", () => {
      const { quest, scrip } = section.acquire;
      expect(quest.name).toBeTruthy();
      expect(quest.url).toMatch(/^https:\/\//);
      expect(scrip.material.reqPerWeapon).toBeGreaterThan(0);
      expectIconPath(scrip.material.icon);
      expect(scrip.label).toBeTruthy();
      expect(scrip.vendor).toBeTruthy();
    });

    test.runIf(section.requirements)("requirements are complete", () => {
      for (const requirement of section.requirements) {
        expect(requirement.parts.length).toBeGreaterThan(0);
        for (const part of requirement.parts) {
          expect(part.amount).toBeGreaterThan(0);
          expectIconPath(part.icon);
          expect(part.label).toBeTruthy();
        }
        expect(String(requirement.collectables)).toMatch(/^\d+(-\d+)?$/);
      }
    });

    test.runIf(section.toolsTable)("table rows are complete", () => {
      for (const { job, rows } of section.toolsTable) {
        expect(job).toBeTruthy();
        expect(rows.length).toBeGreaterThan(0);
        for (const { item, reward, rewardAtMax } of rows) {
          expect(item.name).toBeTruthy();
          expect(item.wiki).toMatch(/^https:\/\//);
          expectIconPath(item.icon);
          if (reward) {
            expect(reward.name).toBeTruthy();
            expectIconPath(reward.icon);
            expect(rewardAtMax).toBeGreaterThan(0);
            expect(item.minCollectability).toBeTruthy();
            expect(item.maxCollectability).toBeTruthy();
          }
        }
      }
    });
  },
);
