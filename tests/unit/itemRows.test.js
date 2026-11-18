// Unit tests for the item grid row math in src/utilities/itemRows.js (used by
// ItemsContainer.jsx). Run with `npm test`.
import { describe, expect, test } from "vitest";
import {
  balancedItemsPerRow,
  maxItemsPerRow,
  rowWidth,
} from "../../src/utilities/itemRows.js";

describe("maxItemsPerRow", () => {
  test("counts the gaps between items, not after the last one", () => {
    // 3 items of 70px with 20px gaps take exactly 250px
    expect(maxItemsPerRow(250, 70, 20)).toBe(3);
    expect(maxItemsPerRow(249, 70, 20)).toBe(2);
  });

  test("is at least 1, even when one item doesn't fit", () => {
    expect(maxItemsPerRow(50, 70, 20)).toBe(1);
    expect(maxItemsPerRow(500, 0, 20)).toBe(1);
  });
});

describe("balancedItemsPerRow", () => {
  test("splits 16 items into 8 + 8 instead of 15 + 1", () => {
    expect(balancedItemsPerRow(16, 15)).toBe(8);
  });

  test("keeps everything on one row when it fits", () => {
    expect(balancedItemsPerRow(15, 15)).toBe(15);
    expect(balancedItemsPerRow(5, 15)).toBe(5);
  });

  test("never adds rows, and the last row is as full as it can be", () => {
    for (let count = 1; count <= 40; count++) {
      for (let max = 1; max <= 20; max++) {
        const perRow = balancedItemsPerRow(count, max);
        const rows = Math.ceil(count / perRow);
        expect(perRow).toBeLessThanOrEqual(max);
        expect(rows).toBe(Math.ceil(count / max));
        // Fewer empty slots on the last row than there are rows, so a
        // narrower row couldn't hold the same items in the same rows
        const lastRow = count - perRow * (rows - 1);
        expect(perRow - lastRow).toBeLessThanOrEqual(rows - 1);
      }
    }
  });
});

describe("rowWidth", () => {
  test("is the items plus the gaps between them", () => {
    expect(rowWidth(3, 70, 20)).toBe(250);
    expect(rowWidth(1, 70, 20)).toBe(70);
  });
});
