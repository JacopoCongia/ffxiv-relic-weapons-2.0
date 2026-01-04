import { motion } from "motion/react";
import classNames from "classnames";

function Button({ children, check, uncheck, ...rest }) {
  const defaultClassNames = classNames(
    "select-none py-[0.7em] flex-1 rounded-[50px] text-[0.9rem] font-medium tracking-wide",
    { "bg-[#4A6D7C]": check, "bg-[#2C3E50]": uncheck },
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
