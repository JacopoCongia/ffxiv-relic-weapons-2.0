// Unit tests for src/utilities/toolsTable.js (used by ToolsTable.jsx).
// Run with `npm test`.
import { describe, expect, test } from "vitest";
import { rewardRowSpans, tradeGroups } from "../../src/utilities/toolsTable.js";

const rod = { id: "rod" };
const reel = { id: "reel" };
const component = { id: "component" };
const fishA = { id: "a" };
const fishB = { id: "b" };
const crystal = { id: "crystal" };

// Miner/Botanist shape: one trade, then a crystal to gather
const gatherer = [{ item: fishA, reward: component }, { item: crystal }];
// Fisher up to Brilliant: each fish has its own reward
const separate = [
  { item: fishA, reward: rod },
  { item: fishB, reward: reel },
];
// Fisher from Vrandtic on: both fish give the same component
const shared = [
  { item: fishA, reward: component },
  { item: fishB, reward: component },
];

describe("tradeGroups", () => {
  test("skips rows without a reward", () => {
    expect(tradeGroups(gatherer)).toEqual([
      { reward: component, rows: [gatherer[0]] },
    ]);
  });

  test("keeps different rewards apart", () => {
    expect(tradeGroups(separate)).toEqual([
      { reward: rod, rows: [separate[0]] },
      { reward: reel, rows: [separate[1]] },
    ]);
  });

  test("groups consecutive rows with the same reward", () => {
    expect(tradeGroups(shared)).toEqual([{ reward: component, rows: shared }]);
  });
});

describe("rewardRowSpans", () => {
  test("is 1 for each own reward and 0 without one", () => {
    expect(rewardRowSpans(gatherer)).toEqual([1, 0]);
    expect(rewardRowSpans(separate)).toEqual([1, 1]);
  });

  test("spans a shared reward over its rows", () => {
    expect(rewardRowSpans(shared)).toEqual([2, 0]);
  });
});
