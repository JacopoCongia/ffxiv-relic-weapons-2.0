// Materials component for displaying a list of materials with icons, names, and amounts

import MaterialCard from "./MaterialCard.jsx";
import { remainingMaterial } from "../../../utilities/materials.js";

function Materials({ materials, counter }) {
  return (
    <>
      {materials.map((material) => {
        const remaining = remainingMaterial(material, counter.length);
        return (
          <MaterialCard
            key={material.id}
            name={material.name}
            icon={material.icon}
            amount={remaining}
          />
        );
      })}
    </>
  );
}

export default Materials;
