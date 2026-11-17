// Pure functions for the owned-items list ({ id, name, category, shield }[])
// kept in context/weaponsData.jsx. Each one returns a new list and never
// changes the one it's given, so they can be passed straight to setState and
// tested without React.

// The entry saved for an item (the same shape is stored in Firestore)
export function toOwnedEntry(item) {
  return {
    id: item.id,
    name: item.wpnName,
    category: item.category,
    shield: item.shield || null,
  };
}

export function isOwned(owned, id) {
  return owned.some((entry) => entry.id === id);
}

// Add every item that isn't owned yet, keeping the existing order
export function addItems(owned, items) {
  const existingIds = new Set(owned.map((entry) => entry.id));
  const newEntries = items
    .filter((item) => !existingIds.has(item.id))
    .map(toOwnedEntry);
  return [...owned, ...newEntries];
}

// Remove every owned entry whose id matches one of the items
export function removeItems(owned, items) {
  const idsToRemove = new Set(items.map((item) => item.id));
  return owned.filter((entry) => !idsToRemove.has(entry.id));
}

// Select or deselect one item. A Paladin (PLD) item moves together with every
// other PLD item in its category, so the sword and shield are always both
// owned or both not owned. `categoryItems` is every item in the item's category.
export function toggleItem(owned, item, categoryItems) {
  const itemsToToggle =
    item.wpnJobShort === "PLD"
      ? categoryItems.filter((other) => other.wpnJobShort === "PLD")
      : [item];

  return isOwned(owned, item.id)
    ? removeItems(owned, itemsToToggle)
    : addItems(owned, itemsToToggle);
}

// Shields don't count as separate weapons: they come with the PLD sword
export function isMainHand(item) {
  return !item.shield;
}

// Owned main-hand entries in one category (what the section counters show)
export function ownedMainHand(owned, category) {
  return owned.filter(
    (entry) => entry.category === category && isMainHand(entry),
  );
}

// How many items in a list count as weapons/tools (shields excluded)
export function countMainHand(items) {
  return items.filter(isMainHand).length;
}
