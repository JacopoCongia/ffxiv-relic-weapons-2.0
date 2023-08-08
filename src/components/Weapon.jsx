import useWeaponsData from "../hooks/use-weapons-data";
import useAuth from "../hooks/use-auth";

function Weapon({ weapon, type, wpnCategory }) {
  const { selectWeapon } = useWeaponsData();
  const { currentUser } = useAuth();

  const styles = {
    opacity: weapon.isSelected ? "25%" : "100%"
  };

  return (
    <div className="group flex text-center flex-col relative items-center text-white text-[0.9rem] gap-1">
      {currentUser?.emailVerified ? (
        <>
          <span className="invisible absolute bottom-[105%] left-[50%] ml-[-60px] w-[120px] rounded-[6px] bg-neutral-700 p-[10px] text-[15px] opacity-[92%] group-hover:visible">
            {weapon.wpnName}
          </span>
          <div
            onClick={() => selectWeapon(weapon.wpnName, type, wpnCategory)}
            style={styles}
            className="cursor-pointer text-[14px]"
            id={weapon.id}
          >
            <img
              className="w-[70px]"
              src={weapon.icon}
            />
            <p>{weapon.wpnJobShort}</p>
          </div>
        </>
      ) : (
        <>
          <span className="invisible absolute bottom-[105%] left-[50%] ml-[-60px] w-[120px] rounded-[6px] bg-neutral-700 p-[10px] text-[0.8rem] font-bold opacity-[95%] group-hover:visible">
            {weapon.wpnName}
          </span>
          <div
            style={styles}
            className="cursor-not-allowed text-[14px]"
            id={weapon.id}
          >
            <img
              className="w-[70px]"
              src={weapon.icon}
            />
            <p>{weapon.wpnJobShort}</p>
          </div>
        </>
      )}
    </div>
    // <div className="group relative inline-block text-center">
    //   <span className="invisible absolute bottom-[105%] left-[50%] ml-[-60px] w-[120px] rounded-[6px] bg-zinc-700 p-[10px] text-[15px] opacity-90 group-hover:visible">
    //     {weapon.wpnName}
    //   </span>
    //   <div
    //     onClick={() => selectWeapon(weapon.wpnName, type, wpnCategory)}
    //     style={styles}
    //     className="cursor-pointer text-[14px]"
    //     id={weapon.id}
    //   >
    //     <img
    //       className="h-[80px] w-[80px]"
    //       alt={weapon.wpnName}
    //       src={weapon.icon}
    //     />
    //     {weapon.wpnJob}
    //   </div>
    // </div>
  );
}

export default Weapon;
