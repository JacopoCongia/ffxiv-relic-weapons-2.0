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
import EndwalkerDolDoh from "./pages/EndwalkerDolDoh";

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
        path="/endwalker"
        element={<Endwalker />}
      />
      <Route
        path="/endwalkerdoldoh"
        element={<EndwalkerDolDoh />}
      />
      <Route
        path="/shadowbringers"
        element={<Shadowbringers />}
      />
      <Route
        path="/stormblood"
        element={<Stormblood />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
