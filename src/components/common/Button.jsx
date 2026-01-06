import { motion } from "motion/react";
import classNames from "classnames";

function Button({ children, primary, secondary, warning, ...rest }) {
  const defaultClassNames = classNames(
    "select-none shadow-lg min-w-[250px] px-[1.5em] py-[0.7em] flex-1 rounded-[50px] text-[0.9rem] font-medium tracking-wide text-white",
    {
      "bg-[#4A6D7C]": primary,
      "bg-[#2C3E50]": secondary,
      "bg-red-800/60": warning,
    },
  );

  return (
    <motion.button
      whileHover={{ opacity: 0.8 }}
      whileTap={{ scale: 0.97 }}
      {...rest}
      className={defaultClassNames}
    >
      {children}
    </motion.button>
  );
}

export default Button;
