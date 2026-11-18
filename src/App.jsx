import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/layout/Layout.jsx";

const Home = lazy(() => import("./pages/Home"));
const ExpansionPage = lazy(() => import("./pages/ExpansionPage"));
const ToolsPage = lazy(() => import("./pages/ToolsPage"));
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
      <Route
        path="endwalker/crafters"
        element={<ToolsPage expansion="endwalker" role="crafters" />}
      />
      <Route
        path="endwalker/gatherers"
        element={<ToolsPage expansion="endwalker" role="gatherers" />}
      />
      {/* The tool pages used to live at /crafters and /gatherers (Endwalker
          only). Keep those links working for anyone who bookmarked them. */}
      <Route
        path="crafters"
        element={<Navigate to="/endwalker/crafters" replace />}
      />
      <Route
        path="gatherers"
        element={<Navigate to="/endwalker/gatherers" replace />}
      />
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
