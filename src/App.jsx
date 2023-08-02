import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Endwalker from "./pages/Endwalker";
import Shadowbringers from "./pages/Shadowbringers";
import Stormblood from "./pages/Stormblood";
import EndwalkerCrafters from "./pages/EndwalkerCrafters";
import EndwalkerGatherers from "./pages/EndwalkerGatherers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path="endwalker"
        element={<Endwalker />}
      />
      <Route
        path="crafters"
        element={<EndwalkerCrafters />}
      />
      <Route
        path="gatherers"
        element={<EndwalkerGatherers />}
      />
      <Route
        path="shadowbringers"
        element={<Shadowbringers />}
      />
      <Route
        path="stormblood"
        element={<Stormblood />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
