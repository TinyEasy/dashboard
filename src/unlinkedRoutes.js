import SignUpTinyEasy from "layouts/authentication/sign-up-tiny-easy";
import SignUpDetailsTinyEasy from "layouts/authentication/sign-up-details";
import SignInTinyEasy from "layouts/authentication/sign-in-tiny-easy";
import ResetPassword from "layouts/authentication/reset-password";
import SubscriptionSuccess from "layouts/subscription-success";
import Launcher from "layouts/launcher";
import Loading from "layouts/loading";

const unlinkedRoutes = [
  {
    name: "Sign Up",
    key: "signup",
    route: "/signup",
    component: <SignUpTinyEasy />,
  },
  {
    name: "Log In",
    key: "signin",
    route: "/signin",
    component: <SignInTinyEasy />,
  },
  {
    name: "Set Up Account",
    key: "signupdetails",
    route: "/signup-details",
    component: <SignUpDetailsTinyEasy />,
  },
  {
    name: "Reset Password",
    key: "resetPassword",
    route: "/reset-password",
    component: <ResetPassword />,
  },
  {
    name: "Subscription Purchased",
    key: "subscriptionsuccess",
    route: "/subscription-success",
    component: <SubscriptionSuccess />,
  },
  {
    name: "Launcher",
    key: "launcher",
    route: "/launcher",
    component: <Launcher />,
  },
  {
    name: "Loading...",
    key: "loading",
    route: "/loading",
    component: <Loading />,
  },
];

export default unlinkedRoutes;
