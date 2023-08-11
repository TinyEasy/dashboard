import ReactGA4 from "react-ga4";
import {createUserHash } from "logic/firebaseFunctions";

const handleSetUserID = async (email, token) => {
  try {
    const hash = await createUserHash(email, token);
    ReactGA4.set({ userId: hash });
  } catch (error) {
    console.log("Set user hash error: " + error);
  }
};

const handleSetUserLicense = (license) => {
  ReactGA4.gtag("set", "user_properties", {
    account_license: license,
  });
}

const loginEvent = () => {
  ReactGA4.event("login", { method: "Google" });
  console.log("Login Event Fired");
};

const signupEvent = () => {
  ReactGA4.event("sign_up", { method: "Google" });
  console.log("Sign Up Event Fired");
};

const beginPersonalCheckoutEvent = () => {
  ReactGA4.event("begin_checkout", {
    currency: "USD",
    value: 12.0,
    items: [
      {
        item_id: "SKU_Personal",
        item_name: "3DTHD Personal Subscription - Monthly",
        affiliation: "Tiny Easy Dashboard",
        price: 12.0,
        quantity: 1,
      },
    ],
  });
  console.log("Begin Personal Checkout Event Fired");
};

const personalPurchaseEvent = () => {
  ReactGA4.event("purchase", {
    transaction_id: "T_Personal",
    value: 12.0,
    currency: "USD",
    items: [
      {
        item_id: "SKU_Personal",
        item_name: "3DTHD Personal Subscription - Monthly",
        affiliation: "Tiny Easy Dashboard",
        price: 12.0,
        quantity: 1,
      },
    ],
  });
  console.log("Personal Purchase Event Fired");
};

const launchButtonClickEvent = () =>{
  ReactGA4.event({
    category: "Button Click",
    action: "dashboard_launch_designer_button_click",
  });
  console.log("Launch Button Event Fired");
}

const bookDemoButtonClickEvent = () =>{
  ReactGA4.event({
    category: "Button Click",
    action: "dashboard_book_demo_button_click",
  });
  console.log("Book Demo Button Event Fired");
}

const ctaButtonClickEvent = (buttonName) =>{
  ReactGA4.event({
    category: "Button Click",
    action: "dashboard_cta_button_click",
    label: buttonName
  });
  console.log("CTA Button Event Fired");
}

const ga4Events = {
  eventLogin: loginEvent,
  eventSignup: signupEvent,
  eventBeginPersonalCheckout: beginPersonalCheckoutEvent,
  eventPersonalPurchase: personalPurchaseEvent,
  eventLaunchButtonClick : launchButtonClickEvent,
  eventBookDemoButtonClick : bookDemoButtonClickEvent,
  eventCtaButtonClick : ctaButtonClickEvent, 
  userSetID : handleSetUserID,
  userSetLicense : handleSetUserLicense
};

export { ga4Events };
