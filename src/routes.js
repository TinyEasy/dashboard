/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

/** 
Example Layout/Page entry:
{
  type: "collapse",
  name: "Home",
  key: "home",
  route: "/home",
  icon: <Shop size="12px" />,
  component: <Home />,
  noCollapse: true,
}

Example separating header:
{ type: "title", title: "Account Pages", key: "account-pages" },
*/

// Layouts / Pages
import Home from "layouts/home";
import Profile from "layouts/profile";
import Upgrade from "layouts/upgrade";
import RenderUpgrade from "layouts/render-upgrade";
import Launch from "layouts/launch";
import Learn from "layouts/learn";
import Support from "layouts/support";
import GetBusiness from "layouts/get-business";

//Sidenav Icons
import CameraIcon from "examples/Icons/CameraIcon";
import HomeIcon from "examples/Icons/HomeIcon";
import StarIcon from "examples/Icons/StarIcon";
import SpaceShip from "examples/Icons/SpaceShip";
import LearnIcon from "examples/Icons/LearnIcon";
import SupportIcon from "examples/Icons/SupportIcon";
import AccountIcon from "examples/Icons/AccountIcon";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <HomeIcon size="16px" />,
    component: <Home />,
    noCollapse: true,
    licenses: ["expired", "trial", "personal", "business"],
  },
  {
    type: "collapse",
    name: "Upgrade",
    key: "upgrade",
    route: "/upgrade",
    icon: <StarIcon size="16px" />,
    component: <Upgrade />,
    noCollapse: true,
    licenses: ["expired", "trial"],
  },
  {
    type: "collapse",
    name: "Render",
    key: "render",
    route: "/render",
    icon: <CameraIcon size="16px" />,
    component: <RenderUpgrade />,
    noCollapse: true,
    licenses: ["expired", "trial", "personal", "business"],
  },
  {
    type: "collapse",
    name: "Launch Designer",
    key: "launch",
    route: "/launch",
    icon: <SpaceShip size="16px" />,
    component: <Launch />,
    noCollapse: true,
    licenses: ["expired", "trial", "personal", "business"],
  },
  {
    type: "collapse",
    name: "Learn",
    key: "learn",
    route: "/learn",
    icon: <LearnIcon size="16px" />,
    component: <Learn />,
    noCollapse: true,
    licenses: ["expired", "trial", "personal", "business"],
  },
  {
    type: "collapse",
    name: "Get Business",
    key: "get-business",
    route: "/get-business",
    icon: <StarIcon size="16px" />,
    component: <GetBusiness />,
    noCollapse: true,
    licenses: ["personal"],
  },
  {
    type: "collapse",
    name: "Support",
    key: "support",
    route: "/support",
    icon: <SupportIcon size="16px" />,
    component: <Support />,
    noCollapse: true,
    licenses: ["expired", "trial", "personal", "business"],
  },
  {
    type: "collapse",
    name: "Account",
    key: "account",
    route: "/account",
    icon: <AccountIcon size="16px" />,
    component: <Profile />,
    noCollapse: true,
    licenses: ["expired", "trial", "personal", "business"],
  },
];

export function getFilteredRoutes(license) {
  return routes.filter((route) => {
    return route.licenses.includes(license);
  });
}

export default routes;
