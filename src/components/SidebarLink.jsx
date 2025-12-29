import { motion, AnimatePresence } from "motion/react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, children, id, hoveredItem, setHoveredItem }) => (
  <NavLink
    to={to}
    className="relative rounded py-1 drop-shadow-sm"
    onMouseEnter={() => setHoveredItem(id)}
  >
    <AnimatePresence>
      {hoveredItem === id && (
        <motion.div
          layoutId="sidebar-hover"
          className="absolute inset-0 rounded bg-teal-700"
          transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
        />
      )}
    </AnimatePresence>
    <span className="relative z-10 font-bold text-[#e7e7e7]">{children}</span>
  </NavLink>
);

export default SidebarLink;
