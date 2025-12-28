import Materials from "./Materials";

function MaterialsContainer({
  counter,
  materials,
  notes,
  tomestoneAmount,
  tomestones,
  weapons,
}) {
  const totalWeapons = weapons.length - 1;

  return (
    <>
      <div className="flex flex-col items-start gap-2 pb-6 pt-6 text-[0.8rem] sm:text-[1rem]">
        {tomestones !== null && (
          <p className="flex items-center gap-3">
            <img
              className="aspect-square w-9 rounded-[50%]"
              alt={tomestones.name}
              src={tomestones.icon}
            />
            {tomestones.name}:{" "}
            {totalWeapons * tomestoneAmount - counter.length * tomestoneAmount}
          </p>
        )}
        <Materials materials={materials} counter={counter} />
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
