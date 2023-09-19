import ReactGA4 from "react-ga4";
import { createUserHash } from "logic/firebaseFunctions";

//----------Account Events----------//

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
};

const loginEvent = () => {
  ReactGA4.event("login", { method: "Google" });
  console.log("Login Event Fired");
};

const signupEvent = () => {
  ReactGA4.event("sign_up", { method: "Google" });
  console.log("Sign Up Event Fired");
};

//----------Checkout Events----------//

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

const beginPersonalYearlyCheckoutEvent = () => {
  ReactGA4.event("begin_checkout", {
    currency: "USD",
    value: 108.0,
    items: [
      {
        item_id: "SKU_Personal_Yearly",
        item_name: "3DTHD Personal Subscription - Yearly",
        affiliation: "Tiny Easy Dashboard",
        price: 108.0,
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

//----------Survey Events----------//
const surveyResponseEvent = (question, response) => {
  ReactGA4.event({
    category: question,
    action: "Survey Response",
    label: response,
  });
  console.log("Survey Response Event Fired - Q: " + question, "  R: " + response);
};

//----------Button Click Events----------//

const launchButtonClickEvent = () => {
  ReactGA4.event({
    category: "Button Click",
    action: "dashboard_launch_designer_button_click",
  });
  console.log("Launch Button Event Fired");
};

const bookDemoButtonClickEvent = () => {
  ReactGA4.event({
    category: "Button Click",
    action: "dashboard_book_demo_button_click",
  });
  console.log("Book Demo Button Event Fired");
};

const ctaButtonClickEvent = (buttonName) => {
  ReactGA4.event({
    category: "Button Click",
    action: "dashboard_cta_button_click",
    label: buttonName,
  });
  console.log("CTA Button Event Fired");
};

//----------Exporting All Events----------//

const ga4Events = {
  //Account Events
  userSetID: handleSetUserID,
  userSetLicense: handleSetUserLicense,
  eventLogin: loginEvent,
  eventSignup: signupEvent,

  //Checkout Events
  eventBeginPersonalCheckout: beginPersonalCheckoutEvent,
  eventBeginPersonalYearlyCheckout: beginPersonalYearlyCheckoutEvent,
  eventPersonalPurchase: personalPurchaseEvent,

  //Survey Events
  eventSurveyResponse: surveyResponseEvent,

  //Button Click Events
  eventLaunchButtonClick: launchButtonClickEvent,
  eventBookDemoButtonClick: bookDemoButtonClickEvent,
  eventCtaButtonClick: ctaButtonClickEvent,
};

export { ga4Events };
