import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "App";

//Contexts
import { SoftUIControllerProvider } from "context";
import { AuthContextProvider } from "context/AuthContext";
import { LicenseContextProvider } from "context/LicenseContext";
import { AddOnContextProvider } from "context/AddOnContext";

import ReactGA4 from "react-ga4";

ReactGA4.initialize("G-99BX7H24ZN");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <AuthContextProvider>
        <LicenseContextProvider>
          <AddOnContextProvider>
            <App />
          </AddOnContextProvider>
        </LicenseContextProvider>
      </AuthContextProvider>
    </SoftUIControllerProvider>
  </BrowserRouter>
);
