import { BiUserCircle } from "react-icons/bi";
import useAuth from "../../hooks/use-auth.js";
import { motion } from "motion/react";
import { reload, getAuth } from "firebase/auth";

function UserCard() {
  const { currentUser, verifyEmail, emailSent } = useAuth();

  async function handleVerifyEmail() {
    await reload(currentUser);

    // Access the freshly reloaded user
    const freshUser = getAuth().currentUser;

    if (!freshUser?.emailVerified) {
      verifyEmail(freshUser);
    } else {
      location.reload();
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
        {/* Avatar / Icon */}
        <div className="flex-shrink-0">
          <BiUserCircle className="h-10 w-10 text-gray-400" />
        </div>

        {/* User Info */}
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">
            Logged in as
          </span>
          <span className="truncate text-[0.875rem] font-medium leading-tight text-white">
            {currentUser?.email}
          </span>
        </div>

        {/* Verification Badge */}
        <div
          className={`ml-auto rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide ${
            currentUser?.emailVerified
              ? "bg-green-900/50 text-green-400"
              : "bg-red-900/50 text-red-400"
          }`}
        >
          {currentUser?.emailVerified ? "Verified" : "Unverified"}
        </div>
      </div>
      {!currentUser?.emailVerified ? (
        <motion.button
          disabled={emailSent}
          onClick={() => handleVerifyEmail()}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.1 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-neutral-100 shadow-lg shadow-black/20"
        >
          {emailSent
            ? "Verification email sent, check your inbox."
            : "Send a new verification email."}
        </motion.button>
      ) : (
        ""
      )}
    </>
  );
}

export default UserCard;
