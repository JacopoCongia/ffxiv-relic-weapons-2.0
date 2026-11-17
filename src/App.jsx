import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/layout/Layout.jsx";

const Home = lazy(() => import("./pages/Home"));
const ExpansionPage = lazy(() => import("./pages/ExpansionPage"));
const EndwalkerCrafters = lazy(() => import("./pages/EndwalkerCrafters"));
const EndwalkerGatherers = lazy(() => import("./pages/EndwalkerGatherers"));
const Account = lazy(() => import("./pages/Account"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="dawntrail"
        element={<ExpansionPage expansion="dawntrail" title="Phantom" />}
      />
      <Route
        path="endwalker"
        element={<ExpansionPage expansion="endwalker" title="Manderville" />}
      />
      <Route path="crafters" element={<EndwalkerCrafters />} />
      <Route path="gatherers" element={<EndwalkerGatherers />} />
      <Route
        path="shadowbringers"
        element={
          <ExpansionPage expansion="shadowbringers" title="Resistance" />
        }
      />
      <Route
        path="stormblood"
        element={<ExpansionPage expansion="stormblood" title="Eurekan" />}
      />
      <Route path="account" element={<Account />} />
    </Route>,
  ),
  // Future proofing for React Router v7
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
