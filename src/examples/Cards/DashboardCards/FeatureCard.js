// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function FeatureCard({ image, title, description, buttonText, action }) {
  return (
    <Card sx={{ height: "100%" }}>
      {/*Header*/}
      <SoftBox mt={2} px={2}>
        <SoftBox display="block" mt={0.5} mb={1}>
          <SoftTypography
            display="inline"
            variant="h5"
            textTransform="capitalize"
            className="color-background"
            fontWeight="bold"
          >
            {title}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      {/*Image*/}
      <SoftBox mx={2}>
        <SoftBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
      </SoftBox>
      {/*Body*/}
      <SoftBox py={1} px={2} mb={2}>
        <SoftTypography variant="body2" component="p" color="text">
          {description}
        </SoftTypography>
      </SoftBox>
      {/*Button*/}
      {buttonText && (
        <SoftBox py={1} px={2}>
          {action.type === "internal" ? (
            <Link to={action.route}>
              <SoftButton variant="gradient" color="info" fullWidth>
                {buttonText}
              </SoftButton>
            </Link>
          ) : (
            <MuiLink href={action.route} target="_blank" rel="noreferrer">
              <SoftButton variant="gradient" color="info" fullWidth>
                {buttonText}
              </SoftButton>
            </MuiLink>
          )}
        </SoftBox>
      )}
    </Card>
  );
}

// Typechecking props for the Feature Card
FeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }),
};

export default FeatureCard;
