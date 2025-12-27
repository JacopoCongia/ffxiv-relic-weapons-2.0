import { useState } from "react";
import { motion, useAnimation } from "motion/react";
import useWeaponsData from "../hooks/use-weapons-data";
import useAuth from "../hooks/use-auth";

// Variants for tooltip animation
const tooltipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 }, // Starts invisible, slightly down and small
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } }, // Fades in, moves up, grows
};

function Weapon({ weapon }) {
  const { selectWeapon, ownedWeapons } = useWeaponsData();
  const { currentUser } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = ownedWeapons.some((el) => el.id === weapon.id); // Testing new weapon method
  const isVerified = currentUser?.emailVerified; // Check if the user is logged in and email is verified
  const controls = useAnimation(); // Create animation controls

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loop if the image fails to load by setting the onerror to null on the first error
    e.target.src = "/icons/not_found.png";
  };

  const handleSelection = () => {
    if (!isVerified) return; // Prevent selection if the user is not verified

    selectWeapon(weapon);

    // Trigger the shake animation
    controls.start({
      rotate: [0, -15, 15, -5, 5, 0], // Left, Right, wiggle, settle
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  // Styles for the weapon icon based on selection status
  const styles = {
    opacity: isSelected ? "25%" : "100%",
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center gap-1 text-center text-[0.9rem] text-white"
    >
      {/* If the user is verified, allow interaction with the weapon */}
      {/* Tooltip */}
      <motion.span
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={tooltipVariants}
        className={`pointer-events-none absolute bottom-[105%] left-[50%] z-50 ml-[-60px] w-[120px] rounded-[6px] bg-neutral-700 p-[10px] text-[0.8rem] font-bold ${!isVerified && "bg-red-900"} `}
      >
        {isVerified ? weapon.wpnName : "Login and verify your email to select"}
      </motion.span>
      <div
        // If verified, pass the handler. If not, pass undefined (no click event).
        onClick={isVerified ? handleSelection : undefined}
        style={styles}
        id={weapon.id}
        className={`relative text-[14px] transition-opacity ${isVerified ? "cursor-pointer" : "cursor-not-allowed"} `}
      >
        {/* Animated Weapon Icon */}
        <motion.img
          animate={controls}
          className="h-[70px] w-[70px] object-contain"
          src={weapon.icon}
          onError={handleImageError}
        />
        <p>{weapon.wpnJobShort}</p>
      </div>
    </div>
  );
}

export default Weapon;
