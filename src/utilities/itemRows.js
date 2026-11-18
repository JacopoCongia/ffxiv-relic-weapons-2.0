// Row math for the item grid (ItemsContainer.jsx): split the items into rows
// of near-equal length, so a section never ends with one item alone on the
// last row (16 items become 8 + 8 instead of 15 + 1).

// How many items fit side by side in the available width
export function maxItemsPerRow(availableWidth, itemWidth, gap) {
  if (itemWidth <= 0) return 1;
  return Math.max(1, Math.floor((availableWidth + gap) / (itemWidth + gap)));
}

// Keep the fewest rows possible, but spread the items evenly across them
export function balancedItemsPerRow(count, maxPerRow) {
  if (count <= 0) return maxPerRow;
  const rows = Math.ceil(count / maxPerRow);
  return Math.ceil(count / rows);
}

// The width a row of `perRow` items takes up, gaps included
export function rowWidth(perRow, itemWidth, gap) {
  return perRow * itemWidth + (perRow - 1) * gap;
}
