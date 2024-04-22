import Weapon from "./Weapon";

function WeaponsContainer({ weapons }) {
  const weaponElements = weapons.map((weapon) => (
    <Weapon
      key={weapon.id}
      weapon={weapon}
    />
  ));

  return (
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
      {weaponElements}
    </div>
  );
}

export default WeaponsContainer;
