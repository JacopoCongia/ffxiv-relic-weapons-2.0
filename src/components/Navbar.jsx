import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../hooks/use-auth";

function Navbar({ isVisible, setIsVisible }) {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="drop-shadow-md sticky top-0 z-10 select-none items-center bg-[#1f1f1f] px-5 py-7 text-center font-bold  tracking-wider text-white min-[1000px]:text-left">
        {!isVisible ? (
          <RxHamburgerMenu
            onClick={() => setIsVisible(!isVisible)}
            className="absolute top-[50%] translate-y-[-50%] cursor-pointer text-[1.8rem] hover:opacity-90 min-[1000px]:hidden"
          />
        ) : (
          <RxCross1
            onClick={() => setIsVisible(!isVisible)}
            className="absolute top-[50%] translate-y-[-50%] cursor-pointer text-[1.8rem] hover:opacity-90 min-[1000px]:hidden"
          />
        )}
        <Link
          to="/"
          className="text-[1rem] min-[520px]:m-0 min-[520px]:text-[1.5rem]"
        >
          Final Fantasy XIV{" "}
          <span className="block text-[1.5rem] min-[520px]:inline">
            Relic Weapons
          </span>
        </Link>
      </div>
      {!currentUser?.emailVerified && (
        <Link
          to="/account"
          className="fixed bottom-0 w-screen opacity-[95%] z-20 text-white bg-red-900 py-3 text-center font-semibold underline underline-offset-4 hover:text-[#ddd]"
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
