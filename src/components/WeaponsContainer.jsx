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
    <div
      className="
        grid 
        grid-cols-3 
        gap-5 
        sm:grid-cols-4 
        md:grid-cols-6
      "
    >
      {weaponElements}
    </div>
  );
}

export default WeaponsContainer;
