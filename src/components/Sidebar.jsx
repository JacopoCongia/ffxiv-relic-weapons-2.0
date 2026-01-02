import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import SidebarLink from "./SidebarLink";

function Sidebar({ isVisible, setIsVisible }) {
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
  }, [setIsVisible]);

  const links = [
    {
      name: "Dawntrail",
      to: "/dawntrail",
    },
    {
      name: "Endwalker",
      to: "/endwalker",
      craftersTo: "/crafters",
      gatherersTo: "/gatherers",
    },
    {
      name: "Shadowbringers",
      to: "/shadowbringers",
      crafterTo: null,
    },
    {
      name: "Stormblood",
      to: "/stormblood",
      crafterTo: null,
    },
  ];

  const linksEl = links.map((link) => {
    const { name, to, craftersTo, gatherersTo } = link;
    return (
      <div key={name} className="z-10 ml-2 flex flex-col gap-2 text-[0.8rem]">
        <h1 className="text-[1.2rem] tracking-wider">{name}</h1>
        <SidebarLink to={to} id={`${name}-dow`}>
          DoW / DoM
        </SidebarLink>
        {craftersTo && (
          <SidebarLink to={craftersTo} id={`${name}-crafters`}>
            Crafters
          </SidebarLink>
        )}
        {gatherersTo && (
          <SidebarLink to={gatherersTo} id={`${name}-gatherers`}>
            Gatherers
          </SidebarLink>
        )}
      </div>
    );
  });

  return (
    <div
      ref={navRef}
      className={`no-scrollbar fixed inset-y-0 z-10 mt-[112px] flex min-w-[250px] translate-x-[-100%] select-none flex-col gap-6 overflow-y-auto bg-neutral-900/[85%] px-7 pt-[4em] text-center font-bold text-neutral-100 backdrop-blur-md duration-[0.5s] min-[600px]:mt-[140.8px] min-[1000px]:translate-x-[0]`}
      style={isVisible ? { transform: "translateX(0)" } : undefined}
    >
      <div className="flex flex-col gap-4">
        {linksEl}
        <h1 className="cursor-not-allowed text-[1.2rem] tracking-wider opacity-50">
          Heavensward
        </h1>
        <h1 className="cursor-not-allowed text-[1.2rem] tracking-wider opacity-50">
          A Realm Reborn
        </h1>
        <div className="my-[0.5em] border"></div>
        <NavLink
          to="/account"
          className="flex items-center justify-center gap-[0.5em] text-[1.1rem] transition-colors duration-[0.3s] hover:text-teal-500"
        >
          <BiUserCircle className="text-[1.8rem]" />
          My Account
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
