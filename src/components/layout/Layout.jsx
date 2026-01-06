import { Outlet } from "react-router-dom";
import { useState, Suspense } from "react";
import Loading from "../common/Loading.jsx";

import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import VerificationBanner from "../common/VerificationBanner.jsx";

function Layout() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Navbar isVisible={isVisible} setIsVisible={setIsVisible} />
      <Sidebar isVisible={isVisible} setIsVisible={setIsVisible} />
      {/* Shows the "Loading" component when the page is loading */}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <VerificationBanner />
    </>
  );
}

export default Layout;
