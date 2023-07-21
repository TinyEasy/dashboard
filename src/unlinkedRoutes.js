import SignUpTinyEasy from "layouts/authentication/sign-up-tiny-easy";
import SignInTinyEasy from "layouts/authentication/sign-in-tiny-easy";
import ResetPassword from "layouts/authentication/reset-password";
import SubscriptionSuccess from "layouts/subscription-success";
import Launcher from "layouts/launcher";
import Loading from "layouts/loading";

const unlinkedRoutes = [
  {
    key: "signup",
    route: "/signup",
    component: <SignUpTinyEasy />,
  },
  {
    key: "signin",
    route: "/signin",
    component: <SignInTinyEasy />,
  },
  {
    key: "resetPassword",
    route: "/reset-password",
    component: <ResetPassword />,
  },
  {
    key: "subscriptionsuccess",
    route: "/subscription-success",
    component: <SubscriptionSuccess />,
  },
  {
    key: "launcher",
    route: "/launcher",
    component: <Launcher />,
  },
  {
    key: "loading",
    route: "/loading",
    component: <Loading />,
  },
];

export default unlinkedRoutes;
