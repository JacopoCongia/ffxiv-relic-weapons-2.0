import Weapon from "./Weapon";

function WeaponsContainer({ weapons, type }) {
  const weaponElements = weapons.map((weapon) => (
    <Weapon
      key={weapon.id}
      weapon={weapon}
      wpnCategory={weapons}
      type={type}
    />
  ));

  return (
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
      {weaponElements}
    </div>
  );
}

export default WeaponsContainer;
