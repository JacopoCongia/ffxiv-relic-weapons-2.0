import { useState } from "react";
import { motion, useAnimation } from "motion/react";

import useWeaponsData from "../../../hooks/use-weapons-data.jsx";
import useAuth from "../../../hooks/use-auth.js";

// Variants for tooltip animation
const tooltipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 }, // Starts invisible, slightly down and small
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } }, // Fades in, moves up, grows
};

function ItemCard({ item }) {
  const { selectWeapon, ownedWeapons } = useWeaponsData();
  const { currentUser } = useAuth();
  const [isHovered, setIsHovered] = useState(false); // State to track hover state

  const isSelected = ownedWeapons.some((el) => el.id === item.id);
  const isVerified = currentUser?.emailVerified; // Check if the user is logged in and email is verified
  const controls = useAnimation(); // Create animation controls

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loop if the image fails to load by setting the onerror to null on the first error
    e.target.src = "/icons/not_found.png"; //
  };

  const handleSelection = () => {
    if (!isVerified) return; // Prevent selection if the user is not verified

    selectWeapon(item);

    // Trigger the shake animation
    controls.start({
      rotate: [0, -15, 15, -5, 5, 0], // Left, Right, wiggle, settle
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  // Styles for the item icon based on selection status
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
        className={`pointer-events-none absolute bottom-[105%] left-[50%] z-50 ml-[-80px] w-[160px] rounded-[1em] border border-neutral-700/80 bg-neutral-800/50 px-[1em] py-[0.6em] text-[0.7rem] font-semibold uppercase leading-tight tracking-wider backdrop-blur-md ${!isVerified && "bg-red-900/60"} `}
      >
        {isVerified ? item.wpnName : "Log in and verify your email to select"}
      </motion.span>
      <div
        // If verified, pass the handler. If not, pass undefined (no click event).
        onClick={isVerified ? handleSelection : undefined}
        style={styles}
        id={item.id}
        className={`relative flex flex-col gap-[0.2em] text-[0.8rem] font-bold text-neutral-400 transition-opacity ${isVerified ? "cursor-pointer" : "cursor-not-allowed"} `}
      >
        {/* Animated Weapon Icon */}
        <motion.img
          animate={controls}
          className="h-[70px] w-[70px] object-contain"
          src={item.icon}
          onError={handleImageError}
        />
        <p>{item.wpnJobShort}</p>
      </div>
    </div>
  );
}

export default ItemCard;
