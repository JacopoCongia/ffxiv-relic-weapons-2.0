// MaterialCard component for displaying materials with icons, names, and amounts

function MaterialCard({ name, icon, amount, type = "Material" }) {
  // Calculate if the material is done and display amount
  const isDone = amount <= 0;
  const displayAmount = isDone ? 0 : amount; // Prevents negative amounts

  return (
    <div
      className={`flex items-center gap-4 rounded-xl border p-3 transition-all duration-300 ${
        isDone
          ? "border-white/5 bg-black/20 opacity-30 grayscale"
          : "border-white/10 bg-white/5 shadow-lg shadow-black/20"
      } `}
    >
      {/* Icon with a subtle background glow if active */}
      <div className="relative flex-shrink-0">
        <img className="h-10 w-10 rounded-full" alt={name} src={icon} />
      </div>

      <div className="flex min-w-0 flex-col">
        <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">
          {type}
        </span>
        <span className="truncate text-[0.875rem] font-medium leading-tight text-white">
          {name}
        </span>
      </div>

      <div
        className={`ml-auto font-mono text-[1.125rem] font-bold ${isDone ? "text-gray-500" : "text-cyan-500"}`}
      >
        {displayAmount}
      </div>
    </div>
  );
}

export default MaterialCard;
