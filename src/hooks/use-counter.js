import { ownedMainHand } from "../utilities/ownedWeapons.js";

// Owned main-hand items in a category (shields excluded); the section
// counters and materials use its length
export function useCounter(ownedItems = [], category) {
  return ownedMainHand(ownedItems, category);
}
