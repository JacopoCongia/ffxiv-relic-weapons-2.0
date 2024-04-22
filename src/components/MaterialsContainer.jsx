import Materials from "./Materials";

function MaterialsContainer({
  category,
  counter,
  materials,
  notes,
  tomestoneAmount,
  tomestones,
  totalWeapons,
}) {
  const updatedMaterials = materials.filter(
    (material) => material.category === category
  );

  return (
    <>
      <div
        className="
          flex 
          flex-col 
          items-start 
          gap-2 
          pb-6 
          pt-6 
          text-[0.8rem]
          sm:text-[1rem]
        "
      >
        {tomestones !== null && (
          <p className="flex items-center gap-3">
            <img
              className="w-5"
              alt={tomestones.name}
              src={tomestones.icon}
            />
            {tomestones.name}:{" "}
            {totalWeapons * tomestoneAmount - counter.length * tomestoneAmount}
          </p>
        )}
        <Materials
          materials={updatedMaterials}
          counter={counter}
        />
      </div>
      {notes && (
        <p className="max-w-[400px] pb-6">
          <span className="font-bold text-red-600">Notes: </span>
          {notes}
        </p>
      )}
    </>
  );
}

export default MaterialsContainer;
