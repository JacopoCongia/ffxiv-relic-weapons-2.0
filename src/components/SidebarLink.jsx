import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function SidebarLink({ to, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block rounded px-2 py-1"
    >
      {({ isActive }) => (
        <>
          {/* Active State (The "Magic Pill" Slide) */}
          {isActive && (
            <motion.div
              layoutId="sidebar-active"
              className="absolute inset-0 z-0 rounded bg-teal-700 drop-shadow-sm"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}

          {/* Hover State (Fades in/out) */}
          <AnimatePresence>
            {!isActive && isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-0 rounded bg-teal-600/50"
              />
            )}
          </AnimatePresence>
          {/* Link Text */}
          <div className="relative z-10">
            <h2
              className={`font-bold transition-colors duration-200 ${
                isActive ? "text-white" : "text-gray-200"
              }`}
            >
              {children}
            </h2>
          </div>
        </>
      )}
    </NavLink>
  );
}

export default SidebarLink;
