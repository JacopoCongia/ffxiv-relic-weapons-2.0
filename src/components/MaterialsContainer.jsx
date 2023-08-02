import Materials from "./Materials";

function MaterialsContainer({
  tomestones,
  tomestoneAmount,
  materials,
  type,
  weaponsCounter,
  notes
}) {
  const updatedMaterials = materials.filter(
    (material) => material.type === type
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
            {tomestones.name}: {weaponsCounter.length * tomestoneAmount}
          </p>
        )}
        <Materials
          materials={updatedMaterials}
          weaponsCounter={weaponsCounter}
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
