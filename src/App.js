import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard React themes
import theme from "assets/theme";

// Soft UI Dashboard React routes
import { getFilteredRoutes } from "routes";
import routes from "routes";
import unlinkedRoutes from "unlinkedRoutes";

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav } from "context";

// Images
import brand from "assets/images/logo-tiny-easy.png";

//Protected Route Logic
import ProtectedRoute from "logic/ProtectedRoute";
import { UserAuth } from "context/AuthContext";

export default function App() {
  ///------ Soft UI Methods ------- ///

  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  ///------ Loading Methods ------- ///
  const [filteredRoutes, setFilteredRoutes] = useState(routes);
  const { license } = UserAuth();

  useEffect(() => {
    if (
      license === "trial" ||
      license === "personal" ||
      license === "expired" ||
      license === "business"
    ) {
      // Filter the routes based on the retrieved license
      const routes = getFilteredRoutes(license);
      setFilteredRoutes(routes);
    }
  }, [license]);

  ///------ Routing Methods ------- ///

  const getNavbarRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getNavbarRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={<ProtectedRoute>{route.component}</ProtectedRoute>}
            key={route.key}
          />
        );
      }

      return null;
    });

  const getUnlinkedRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  ///------ App HTML ------- ///

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Tiny Easy"
            routes={filteredRoutes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </>
      )}

      <Routes>
        {getNavbarRoutes(filteredRoutes)}
        {getUnlinkedRoutes(unlinkedRoutes)}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}
