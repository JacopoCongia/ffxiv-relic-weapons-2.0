import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../hooks/use-auth";

function Navbar({ isVisible, setIsVisible }) {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="sticky top-0 z-10 flex select-none items-center justify-center bg-[#092e47] px-5 py-10 text-center font-[bebas-neue] font-bold tracking-wider text-white drop-shadow-md">
        {!isVisible ? (
          <RxHamburgerMenu
            onClick={() => setIsVisible(!isVisible)}
            className="absolute left-[1em] top-[50%] translate-y-[-50%] cursor-pointer text-[1.8rem] hover:opacity-90 min-[1000px]:hidden"
          />
        ) : (
          <RxCross1
            onClick={() => setIsVisible(!isVisible)}
            className="absolute left-[1em] top-[50%] translate-y-[-50%] cursor-pointer text-[1.8rem] hover:opacity-90 min-[1000px]:hidden"
          />
        )}
        <Link
          to="/"
          className="text-[1rem] uppercase min-[520px]:m-0 min-[520px]:text-[2.2rem]"
        >
          Final Fantasy XIV{" "}
          <span className="block text-[1.3rem] min-[520px]:inline min-[520px]:text-[2.2rem]">
            Relic Weapons
          </span>
        </Link>
      </div>
      {!currentUser?.emailVerified && (
        <Link
          to="/account"
          className="fixed bottom-0 z-20 w-screen bg-red-900 py-3 text-center font-semibold text-white underline underline-offset-4 opacity-[95%] hover:text-[#ddd]"
        >
          {!currentUser
            ? "Log in and verify your email to save your collection"
            : "Verify your email to save your collection"}
        </Link>
      )}
    </>
  );
}

export default Navbar;
