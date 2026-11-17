import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useAuth from "../../hooks/use-auth.js";

function VerificationBanner() {
  const { currentUser, loading } = useAuth();

  // Hide if loading OR if the user is already logged in
  if (loading || currentUser) return null;

  return (
    <>
      {/* Empty space at the end of the page, as tall as the floating button,
          so the last row of content can scroll up above it */}
      <div aria-hidden="true" className="h-24" />

      {/* The bar spans the full width to position the button, so it ignores
          clicks itself (pointer-events-none) and only the button takes them */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileTap={{ y: 3 }}
        className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center p-[1em] min-[1000px]:justify-end"
      >
        <Link
          to="/account"
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-red-900/70 px-5 py-3 text-center text-[0.8rem] font-semibold uppercase tracking-wider text-neutral-100 shadow-lg shadow-black/30 backdrop-blur-md hover:bg-red-800/80 hover:shadow-xl"
        >
          Log in to save your collection
        </Link>
      </motion.div>
    </>
  );
}

export default VerificationBanner;
