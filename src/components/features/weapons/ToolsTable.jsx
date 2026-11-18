import { showFallbackIcon } from "../../../utilities/imageFallback.js";
import { rewardRowSpans, tradeGroups } from "../../../utilities/toolsTable.js";

// What each gatherer job gathers and trades for a tool step (a section's
// `toolsTable` in toolsSectionData.js). Wide screens get one table; phones get
// one card per job. Both are built from the same rows. When consecutive rows
// are traded for the same reward, that reward is shown once for all of them.

function Icon({ src, className }) {
  return <img className={className} src={src} onError={showFallbackIcon} />;
}

function WikiLink({ material, className }) {
  return (
    <a
      href={material.wiki}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <Icon className="w-[24px]" src={material.icon} />
      {material.name}
    </a>
  );
}

function JobRows({ job, rows, isLastJob }) {
  const spans = rewardRowSpans(rows);
  const cellFor = (lastIndex) =>
    lastIndex === rows.length - 1 ? "pb-5 pt-5" : "pt-5";

  return rows.map((row, index) => {
    const isLastRow = index === rows.length - 1;
    const cell = cellFor(index);
    const span = spans[index];

    return (
      <tr
        key={row.item.id}
        className={isLastRow && !isLastJob ? "border-b" : undefined}
      >
        {index === 0 ? (
          <td className={isLastRow ? "px-5 pb-5 pt-5" : "px-5 pt-5"}>{job}</td>
        ) : (
          <td></td>
        )}
        <td className={cell}>
          <WikiLink
            material={row.item}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          />
        </td>
        {row.reward && (
          <>
            {span > 0 && (
              <td
                className={cellFor(index + span - 1)}
                rowSpan={span > 1 ? span : undefined}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-[24px]" src={row.reward.icon} />
                  {row.reward.name}
                </div>
              </td>
            )}
            <td className={cell}>{row.item.minCollectability}</td>
            <td className={cell}>{row.item.maxCollectability}</td>
          </>
        )}
      </tr>
    );
  });
}

function JobCard({ job, rows }) {
  return (
    <div className="m-1 flex flex-col items-start gap-3 rounded border px-5 pb-5 pt-5 text-left text-[0.9rem]">
      <h1 className="rounded bg-[#5f432f] px-5 py-1 text-[1.2rem] font-bold text-[#fcf1e1]">
        {job}
      </h1>
      <p className="rounded bg-[#F3D9B1] px-4 py-[0.3em] text-[1rem] font-bold text-[#4e3727]">
        Gather
      </p>
      {rows.map((row) => (
        <WikiLink
          key={row.item.id}
          material={row.item}
          className="flex items-center gap-3 hover:underline hover:underline-offset-4"
        />
      ))}
      {tradeGroups(rows).map((group) => (
        <Trade
          key={group.rows[0].item.id}
          reward={group.reward}
          rows={group.rows}
        />
      ))}
    </div>
  );
}

// "1x at min collectability, N at max", for one collectable.
function Amounts({ item, reward, rewardAtMax }) {
  return (
    <>
      <div className="flex items-center gap-1">
        {item.minCollectability} | 1x
        <Icon className="inline w-[20px]" src={reward.icon} />
      </div>
      <div className="flex items-center gap-1">
        {item.maxCollectability} | {rewardAtMax}x
        <Icon className="inline w-[20px]" src={reward.icon} />
      </div>
    </>
  );
}

// One reward and the collectables traded for it. With one collectable, its
// icon is in the "Trade ... for" label. With several (e.g. two fish for one
// Fisher's Component), each gets its own line: its icon, then its amounts.
function Trade({ reward, rows }) {
  const [first] = rows;
  return (
    <>
      <p className="mt-2 flex items-center gap-2 rounded bg-[#F3D9B1] px-4 py-[0.3em] text-center text-[1rem] font-bold text-[#4e3727]">
        {rows.length === 1 ? (
          <>
            Trade
            <Icon className="w-[20px]" src={first.item.icon} />
            for
          </>
        ) : (
          "Trade for"
        )}
      </p>
      <div className="flex items-center gap-3">
        <Icon className="w-[24px]" src={reward.icon} />
        {reward.name}
      </div>
      {rows.length === 1 ? (
        <div className="flex gap-6">
          <Amounts {...first} />
        </div>
      ) : (
        rows.map((row) => (
          <div key={row.item.id} className="flex items-center gap-3">
            <Icon className="w-[20px] shrink-0" src={row.item.icon} />
            <div className="flex flex-col gap-1">
              <Amounts {...row} />
            </div>
          </div>
        ))
      )}
    </>
  );
}

function ToolsTable({ jobs }) {
  return (
    <>
      <table className="m-5 hidden border text-[0.9rem] text-white min-[900px]:table min-[1200px]:text-[1rem]">
        <thead className="bg-neutral-700 text-left">
          <tr>
            <th className="px-5 py-3">Job</th>
            <th>Item</th>
            <th>Reward</th>
            <th className="pr-5">Min</th>
            <th className="pr-5">Max</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <JobRows
              key={job.job}
              job={job.job}
              rows={job.rows}
              isLastJob={index === jobs.length - 1}
            />
          ))}
        </tbody>
      </table>

      {/* Small Screens */}

      <div className="flex flex-col gap-5 min-[900px]:hidden">
        {jobs.map((job) => (
          <JobCard key={job.job} job={job.job} rows={job.rows} />
        ))}
      </div>
    </>
  );
}

export default ToolsTable;
