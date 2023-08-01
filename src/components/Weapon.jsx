import useWeaponsData from "../hooks/use-weapons-data";

function Weapon({ weapon, type, wpnCategory }) {
  const { selectWeapon } = useWeaponsData();

  const styles = {
    opacity: weapon.isSelected ? "25%" : "100%"
  };

  return (
    <div className="group relative inline-block text-center">
      <span className="invisible absolute bottom-[105%] left-[50%] ml-[-60px] w-[120px] rounded-[6px] bg-zinc-700 p-[10px] text-[15px] opacity-90 group-hover:visible">
        {weapon.wpnName}
      </span>
      <div
        onClick={() => selectWeapon(weapon.wpnName, type, wpnCategory)}
        style={styles}
        className="cursor-pointer text-[14px]"
        id={weapon.id}
      >
        <img
          className="h-[80px] w-[80px]"
          alt={weapon.wpnName}
          src={weapon.icon}
        />
        {weapon.wpnJob}
      </div>
    </div>
  );
}

export default Weapon;
