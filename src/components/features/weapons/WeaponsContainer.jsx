import Weapon from "./Weapon.jsx";

function WeaponsContainer({ weapons }) {
  const weaponElements = weapons.map((weapon) => (
    <Weapon key={weapon.id} weapon={weapon} />
  ));

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5">
      {weaponElements}
    </div>
  );
}

export default WeaponsContainer;
