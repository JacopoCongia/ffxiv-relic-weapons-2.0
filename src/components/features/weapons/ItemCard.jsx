import { useState } from "react";
import { motion, useAnimation } from "motion/react";

import useWeaponsData from "../../../hooks/use-weapons-data.jsx";
import useAuth from "../../../hooks/use-auth.js";
import { useImageLoad } from "../../../hooks/use-image-load.js";

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
  const isLoggedIn = !!currentUser; // Check if the user is logged in by using a double negation to turn the object into a boolean
  const controls = useAnimation(); // Create animation controls
  const { status: iconStatus, imgProps } = useImageLoad();

  const handleSelection = () => {
    if (!isLoggedIn) return; // Prevent selection if the user is not logged in

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

  // Hidden while loading; fades in if it arrived after the card appeared,
  // shown at once if it was already cached
  const iconClasses = {
    loading: "opacity-0",
    loaded: "opacity-100 transition-opacity duration-[250ms] ease-out",
    cached: "",
  }[iconStatus];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center gap-1 text-center text-[0.9rem] text-white"
    >
      {/* If the user is logged in, allow interaction with the weapon */}
      {/* Tooltip */}
      <motion.span
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={tooltipVariants}
        className={`pointer-events-none absolute bottom-[105%] left-[50%] z-50 ml-[-80px] w-[160px] rounded-[1em] border border-neutral-700/80 bg-neutral-800/50 px-[1em] py-[0.6em] text-[0.7rem] font-semibold uppercase leading-tight tracking-wider backdrop-blur-md ${!isLoggedIn && "bg-red-900/60"} `}
      >
        {isLoggedIn ? item.wpnName : "Log in to select"}
      </motion.span>
      <div
        // If logged in, pass the handler. If not, pass undefined (no click event).
        onClick={isLoggedIn ? handleSelection : undefined}
        style={styles}
        id={item.id}
        className={`relative flex flex-col gap-[0.2em] text-[0.8rem] font-bold text-neutral-400 transition-opacity ${isLoggedIn ? "cursor-pointer" : "cursor-not-allowed"} `}
      >
        {/* Icon box: same 70x70 size as before, so the grid doesn't shift */}
        <div className="relative h-[70px] w-[70px]">
          {/* Skeleton: a soft tile with the icon frames' rounded corners,
              shown until the icon has loaded. It pulses unless the device
              asks for reduced motion. */}
          {iconStatus === "loading" && (
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-md bg-white/[0.07] motion-safe:animate-pulse"
            />
          )}
          {/* Animated Weapon Icon */}
          <motion.img
            {...imgProps}
            animate={controls}
            className={`block h-full w-full object-contain ${iconClasses}`}
            src={item.icon}
          />
        </div>
        <p>{item.wpnJobShort}</p>
      </div>
    </div>
  );
}

export default ItemCard;
