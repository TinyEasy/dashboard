import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Soft UI Dashboard React context
import { useSoftUIController, setLayout } from "context";

function IFrameLayout({ children }) {
  const [, dispatch] = useSoftUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return <div style={{ overflow: "hidden" }}>{children}</div>;
}

// Typechecking props for the PageLayout
IFrameLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IFrameLayout;