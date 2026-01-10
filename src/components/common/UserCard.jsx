import {BiUserCircle} from "react-icons/bi";
import useAuth from "../../hooks/use-auth.js";
import {motion} from "motion/react";
import {reload, getAuth} from "firebase/auth";

function UserCard() {
    const {currentUser} = useAuth();
    return (
        <>
            <div
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
                {/* Avatar / Icon */}
                <div className="flex-shrink-0">
                    <BiUserCircle className="h-10 w-10 text-gray-400"/>
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
            </div>
        </>
    );
}

export default UserCard;
