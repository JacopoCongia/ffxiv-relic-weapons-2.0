import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Navbar
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Sidebar isVisible={isVisible} />
      <Outlet />
    </>
  );
}

export default Layout;
