import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";
import { AuthContextProvider } from "context/AuthContext";

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
