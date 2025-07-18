import useWeaponsData from "../hooks/use-weapons-data";
import useAuth from "../hooks/use-auth";

function Weapon({ weapon }) {
  const { selectWeapon, ownedWeapons } = useWeaponsData();
  const { currentUser } = useAuth();

  const isSelected = ownedWeapons.some((el) => el.id === weapon.id); // Testing new weapon method

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loop if the image fails to load by setting the onerror to null on the first error
    e.target.src = "/icons/not_found.png";
  };

  // Styles for the weapon icon based on selection status
  const styles = {
    opacity: isSelected ? "25%" : "100%",
  };

  return (
    <div className="group flex text-center flex-col relative items-center text-white text-[0.9rem] gap-1">
      {/* If the user is verified, allow interaction with the weapon */}
      {currentUser?.emailVerified ? (
        <>
          <span className="invisible absolute bottom-[105%] left-[50%] ml-[-60px] w-[120px] rounded-[6px] bg-neutral-700/90 p-[10px] text-[15px] pointer-events-none group-hover:visible">
            {weapon.wpnName}
          </span>
          <div
            onClick={() => selectWeapon(weapon)}
            style={styles}
            className="cursor-pointer text-[14px]"
            id={weapon.id}
          >
            <img
              className="w-[70px]"
              src={weapon.icon}
              onError={handleImageError}
            />
            <p>{weapon.wpnJobShort}</p>
          </div>
        </>
      ) : (
        // If the user is not verified, display the weapon without interaction (the user cannot click on it)
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
              onError={handleImageError}
            />
            <p>{weapon.wpnJobShort}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Weapon;
