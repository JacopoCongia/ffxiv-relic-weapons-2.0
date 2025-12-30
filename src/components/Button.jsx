import { motion } from "motion/react";
import classNames from "classnames";

function Button({ children, check, uncheck, ...rest }) {
  const defaultClassNames = classNames(
    "select-none px-5 py-2 flex-1 rounded-[0.1e] text-[1rem] font-medium",
    { "bg-[#234921]": check, "bg-[#71221A]": uncheck },
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
