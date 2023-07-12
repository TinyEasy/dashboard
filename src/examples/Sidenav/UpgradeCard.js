// @mui material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import { Link as ReactRouterLink } from "react-router-dom";

// Soft UI Dashboard React components
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";

//Context
import { UserAuth } from "context/AuthContext";

function UpgradeCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  const { license } = UserAuth();

  let heading = "Unlock 3DTHD today!";
  let body = "All tools ready at your fingertips...";
  let cta = "upgrade";
  let ctaLink = "/upgrade";
  let shouldDisplayCard = true;

  switch (license) {
    case "trial":
      heading = "Unlock 3DTHD today!";
      body = "All tools ready at your fingertips...";
      cta = "upgrade";
      ctaLink = "/upgrade";
      break;
    case "expired":
      heading = "Unlock 3DTHD today!";
      body = "Access your designs & all tools!";
      cta = "upgrade";
      ctaLink = "/upgrade";
      break;
    case "personal":
      heading = "Are you a business?";
      body = "Get unlimited design slots & more!";
      cta = "Learn more";
      ctaLink = "/get-business";
      break;
    case "business":
      shouldDisplayCard = false;
      break;
    default:
      break;
  }

  if (!shouldDisplayCard) {
    return null;
  }

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <SoftBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { sidenavColor })}>
            star
          </Icon>
        </SoftBox>
        <SoftBox lineHeight={1}>
          <SoftTypography variant="h6" color="white">
            {heading}
          </SoftTypography>
          <SoftBox mb={1.825}>
              <SoftTypography variant="caption" color="white" fontWeight="medium">
                {body}
              </SoftTypography>
          </SoftBox>
          <ReactRouterLink to={ctaLink}>
            <SoftButton size="small" color="white" fullWidth>
              {cta}
            </SoftButton>
          </ReactRouterLink>
        </SoftBox>
      </CardContent>
    </Card>
  );
}

export default UpgradeCard;
