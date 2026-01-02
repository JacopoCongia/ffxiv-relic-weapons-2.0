import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/use-auth";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  const [isVisible, setIsVisible] = useState(false);
  const { currentUser, loading } = useAuth();

  return (
    <>
      <Navbar isVisible={isVisible} setIsVisible={setIsVisible} />
      <Sidebar isVisible={isVisible} setIsVisible={setIsVisible} />
      <Outlet />
      {!loading && !currentUser?.emailVerified && (
        <Link
          to="/account"
          className="fixed bottom-0 w-full bg-red-900/[85%] py-[1em] text-center font-semibold text-white underline underline-offset-[0.5em] backdrop-blur-md hover:text-neutral-100 min-[1000px]:pl-[250px]"
        >
          {!currentUser
            ? "Log in and verify your email to save your collection"
            : "Verify your email to save your collection"}
        </Link>
      )}
    </>
  );
}

export default Layout;
