import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeaponsDataProvider } from "./context/weaponsData.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WeaponsDataProvider>
        <App />
      </WeaponsDataProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
