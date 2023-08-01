import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ isVisible, setIsVisible }) {
  return (
    <div
      onClick={() => setIsVisible(!isVisible)}
      className="sticky top-0 z-10 flex select-none items-center bg-[#252525] px-5 py-7 text-center font-bold  tracking-wider text-white"
    >
      <GiHamburgerMenu className="mr-[1em] cursor-pointer text-[1.8rem] hover:opacity-90 min-[1000px]:hidden" />
      <h1 className="m-auto text-[1rem] min-[520px]:m-0 min-[520px]:text-[1.5rem]">
        Final Fantasy XIV{" "}
        <span className="block text-[1.5rem] min-[520px]:inline">
          Relic Weapons
        </span>
      </h1>
    </div>
  );
}

export default Navbar;
