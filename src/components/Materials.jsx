function Materials({ materials, weaponsCounter }) {
  const materialsElements = materials.map((material) => {
    return (
      <div
        key={material.id}
        className="flex items-center gap-3"
      >
        <img
          className="w-5"
          alt={material.name}
          src={material.icon}
        />
        <p>
          {material.name}: {material.reqPerWeapon * weaponsCounter.length}
        </p>
      </div>
    );
  });

  return <>{materialsElements}</>;
}

export default Materials;
