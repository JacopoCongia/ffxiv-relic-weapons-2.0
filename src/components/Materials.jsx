function Materials({ materials, counter }) {
  const materialsElements = materials.map((material) => {
    return (
      <div
        key={material.id}
        className="flex items-center gap-3"
      >
        <img
          className="w-9 aspect-square rounded-[50%]"
          alt={material.name}
          src={material.icon}
        />
        {material.reqTotal - material.reqPerWeapon * counter.length <= 0 ? (
          <p>
            {material.name}: {0}
          </p>
        ) : (
          <p>
            {material.name}:{" "}
            {material.reqTotal - material.reqPerWeapon * counter.length}
          </p>
        )}
      </div>
    );
  });

  return <>{materialsElements}</>;
}

export default Materials;
