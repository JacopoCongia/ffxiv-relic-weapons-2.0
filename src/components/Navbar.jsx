import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Logo from "./Logo";

function Navbar({ isVisible, setIsVisible }) {
  return (
    <div className="sticky top-0 z-50 flex select-none items-center justify-center bg-navbar/[85%] py-[2em] pl-[3em] text-center font-[Cinzel] text-neutral-100 backdrop-blur-md min-[1000px]:pl-0">
      {!isVisible ? (
        <RxHamburgerMenu
          onClick={() => setIsVisible(true)}
          className="absolute left-[0.7em] top-[50%] translate-y-[-50%] cursor-pointer text-[1.8rem] hover:opacity-90 min-[600px]:text-[2.5rem] min-[1000px]:hidden"
        />
      ) : (
        <RxCross1
          onClick={() => setIsVisible(false)}
          className="absolute left-[0.7em] top-[50%] translate-y-[-50%] cursor-pointer text-[1.8rem] hover:opacity-90 min-[600px]:text-[2.5rem] min-[1000px]:hidden"
        />
      )}
      <div className="flex items-center gap-1 min-[600px]:gap-2">
        <Link
          to="/"
          className="flex flex-col uppercase leading-[1.5rem] min-[600px]:leading-[2.4rem]"
        >
          <span className="text-[1.37rem] font-medium min-[600px]:text-[2.28rem]">
            Final Fantasy XIV{" "}
          </span>
          <span className="text-[1.55rem] font-bold min-[600px]:text-[2.6rem]">
            Relic Weapons
          </span>
        </Link>
        <Logo className="mt-[-6px] h-[50px] w-[50px] text-neutral-100 min-[600px]:h-[80px] min-[600px]:w-[80px]" />
      </div>
    </div>
  );
}

export default Navbar;
