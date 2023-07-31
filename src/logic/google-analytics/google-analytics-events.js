import ReactGA4 from "react-ga4";

const loginEvent = () => {
    ReactGA4.event("login", {method:"Google"});
    console.log("Login Event Fired");
};

const customEvent = () =>
  ReactGA4.event({
    action: "Custom Action",
    category: "Custom Category",
  });

const ga4Events = {
  eventLogin: loginEvent,
  eventCustom: customEvent,
};

export { ga4Events };
