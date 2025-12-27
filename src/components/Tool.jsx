import { useAnimation, motion } from "motion/react";

import useWeaponsData from "../hooks/use-weapons-data";
import useAuth from "../hooks/use-auth";

function Tool({ tool }) {
  const { selectWeapon, ownedWeapons } = useWeaponsData();
  const { currentUser } = useAuth();

  const isSelected = ownedWeapons.some((el) => el.id === tool.id); // Testing new weapon method
  const isVerified = currentUser?.emailVerified; // Check if the user is logged in and email is verified
  const controls = useAnimation(); // Create animation controls

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loop if the image fails to load by setting the onerror to null on the first error
    e.target.src = "/icons/not_found.png";
  };

  // Function to handle tool selection
  const handleSelection = () => {
    if (!isVerified) return; // Prevent selection if the user is not verified

    selectWeapon(tool);

    // Trigger the shake animation
    controls.start({
      rotate: [0, -15, 15, -5, 5, 0], // Left, Right, wiggle, settle
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };
  const styles = {
    opacity: isSelected ? "25%" : "100%",
  };

  return (
    <div className="group relative flex flex-col items-center gap-1 text-center text-[0.9rem] text-white">
      <>
        <span
          className={`pointer-events-none invisible absolute bottom-[105%] left-[50%] z-50 ml-[-60px] w-[120px] rounded-[6px] p-[10px] group-hover:visible ${
            isVerified
              ? "bg-neutral-700/90 text-[15px]"
              : "bg-neutral-700 text-[0.8rem] font-bold opacity-[95%]"
          } `}
        >
          {tool.wpnName}
        </span>
        <div
          // If verified, pass the handler. If not, pass undefined (no click event).
          onClick={isVerified ? handleSelection : undefined}
          style={styles}
          id={tool.id}
          className={`relative text-[14px] transition-opacity ${isVerified ? "cursor-pointer" : "cursor-not-allowed"} `}
        >
          {/* Animated Tool Icon */}
          <motion.img
            animate={controls}
            className="h-[70px] w-[70px] object-contain"
            src={tool.icon}
            onError={handleImageError}
          />
          <p>{tool.wpnJobShort}</p>
        </div>
      </>
    </div>
  );
}

export default Tool;
