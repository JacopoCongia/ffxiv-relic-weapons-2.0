import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/layout/Layout.jsx";
const Home = lazy(() => import("./pages/Home"));
const Dawntrail = lazy(() => import("./pages/Dawntrail"));
const Endwalker = lazy(() => import("./pages/Endwalker"));
const Shadowbringers = lazy(() => import("./pages/Shadowbringers"));
const Stormblood = lazy(() => import("./pages/Stormblood"));
const EndwalkerCrafters = lazy(() => import("./pages/EndwalkerCrafters"));
const EndwalkerGatherers = lazy(() => import("./pages/EndwalkerGatherers"));
const Account = lazy(() => import("./pages/Account"));
const Register = lazy(() => import("./pages/Register"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="dawntrail" element={<Dawntrail />} />
      <Route path="endwalker" element={<Endwalker />} />
      <Route path="crafters" element={<EndwalkerCrafters />} />
      <Route path="gatherers" element={<EndwalkerGatherers />} />
      <Route path="shadowbringers" element={<Shadowbringers />} />
      <Route path="stormblood" element={<Stormblood />} />
      <Route path="account" element={<Account />} />
      <Route path="register" element={<Register />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
