// MaterialsContainer component for displaying a list of materials with icons, names, and amounts

import MaterialCard from "./MaterialCard.jsx";
import Materials from "./Materials.jsx";

function MaterialsContainer({
  counter,
  materials,
  notes,
  tomestoneAmount,
  tomestones,
  items,
}) {
  // Calculate total items and remaining tomestones
  const totalItems = items.length - 1;
  const remainingTomestones =
    totalItems * tomestoneAmount - counter.length * tomestoneAmount;

  return (
    <div className="mx-auto w-full max-w-4xl p-4">
      {/* The Grid Container */}
      <div
        className={`grid grid-cols-1 gap-3 md:grid-cols-2 ${materials.length > 1 ? "lg:grid-cols-3" : ""}`}
      >
        {/* Tomestone Card only rendered if tomestones are present */}
        {tomestones !== null && (
          <MaterialCard
            name={tomestones.name}
            icon={tomestones.icon}
            amount={remainingTomestones}
            type="Currency"
          />
        )}

        {/* Material Cards */}
        <Materials materials={materials} counter={counter} />
      </div>

      {notes && (
        <div className="mt-8 rounded-r-md border-l-4 border-red-600 bg-red-900/10 p-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">
            Notes
          </span>
          <p className="mt-1 text-gray-300">{notes}</p>
        </div>
      )}
    </div>
  );
}

export default MaterialsContainer;
