import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

//Contexts
import { SoftUIControllerProvider } from "context";
import { AuthContextProvider } from "context/AuthContext";

import ReactGA4 from "react-ga4";
ReactGA4.initialize("G-HYX901PX23");
console.log("GA INITIALIZED");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </SoftUIControllerProvider>
  </BrowserRouter>
);
