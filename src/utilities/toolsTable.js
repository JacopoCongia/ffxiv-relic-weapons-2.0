// Helpers for ToolsTable.jsx. A job's rows (see toolsSectionData.js) can list
// several collectables traded for the same reward, e.g. both fish for the one
// Fisher's Component from Vrandtic Visionary's on. The table shows that reward
// once, so these find the runs of consecutive rows sharing a reward.

// Trades (rows with a reward) grouped by reward, keeping their order:
// [{ reward, rows: [row, ...] }]. Only consecutive rows are grouped.
export function tradeGroups(rows) {
  const groups = [];
  for (const row of rows) {
    if (!row.reward) continue;
    const last = groups[groups.length - 1];
    if (last && last.reward === row.reward) {
      last.rows.push(row);
    } else {
      groups.push({ reward: row.reward, rows: [row] });
    }
  }
  return groups;
}

// For each row, how many table rows its Reward cell spans: 1 or more for the
// first row of a run, 0 for a row whose reward is already shown by the row
// above it, or for a row without a reward.
export function rewardRowSpans(rows) {
  return rows.map((row, index) => {
    if (!row.reward) return 0;
    if (index > 0 && rows[index - 1].reward === row.reward) return 0;
    let span = 1;
    while (rows[index + span]?.reward === row.reward) span++;
    return span;
  });
}
