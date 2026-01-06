// Error handling component
import { AnimatePresence, motion } from "motion/react";

function AuthError({ error }) {
  const errorMessage = error?.code.replace("auth/", "").replaceAll("-", " ");

  return (
    <AnimatePresence mode="wait">
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          key="error"
          className="rounded-[20em] bg-red-800/50 px-[1.5em] py-[0.6em] text-[0.9rem] font-semibold uppercase tracking-wider text-neutral-100"
        >
          Error: {errorMessage}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default AuthError;
