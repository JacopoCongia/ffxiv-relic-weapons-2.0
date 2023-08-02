import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

function Sidebar({ isVisible, setIsVisible }) {
  const activeStyle = "bg-teal-700 rounded py-1 drop-shadow-sm";
  const inactiveStyle = "hover:bg-teal-600 rounded py-1 drop-shadow-sm2";

  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const links = [
    {
      name: "Endwalker",
      to: "/endwalker",
      crafterTo: "/endwalkerdoldoh"
    },
    {
      name: "Shadowbringers",
      to: "/shadowbringers",
      crafterTo: null
    },
    {
      name: "Stormblood",
      to: "/stormblood",
      crafterTo: null
    }
  ];

  const linksEl = links.map((link) => {
    const { name, to, crafterTo } = link;
    return (
      <div
        key={name}
        className="ml-2 text-[0.8rem] flex flex-col gap-2"
      >
        <h1 className="text-[1.2rem] tracking-wider">{name}</h1>
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <h2 className="font-bold text-[#e7e7e7]">DoW / DoM</h2>
        </NavLink>
        {crafterTo && (
          <NavLink
            to={crafterTo}
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            <h2 className="font-bold text-[#e7e7e7]">DoH / DoL</h2>
          </NavLink>
        )}
      </div>
    );
  });

  return (
    <div
      ref={navRef}
      className={`fixed z-10 flex min-h-[100vh] min-w-[250px] translate-x-[-100%] flex-col gap-6 bg-neutral-700 px-7 pt-[3em] text-center font-bold text-white duration-[0.5s] min-[1000px]:fixed min-[1000px]:min-w-[250px] min-[1000px]:translate-x-[0] ${
        isVisible && "translate-x-[0]"
      }`}
    >
      <div className="flex flex-col gap-4">
        {linksEl}

        {/* To be replaced in the future */}
        <h1 className="text-[1.2rem] tracking-wider opacity-50 cursor-not-allowed">
          Heavensward
        </h1>
        <h1 className="text-[1.2rem] tracking-wider opacity-50 cursor-not-allowed">
          A Realm Reborn
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;
