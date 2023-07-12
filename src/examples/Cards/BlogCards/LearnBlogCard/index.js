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

function LearnBlogCard({ image, buttonText, title, description, action }) {
  return (
    <Card sx={{ height: "100%" }}>
      {/*Header*/}
      <SoftBox mt={2} px={2}>
        <SoftBox display="block" mt={0.5} mb={1}>
          {action.type === "internal" ? (
            <Link to={action.route}>
              <SoftTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                className="color-background"
                fontWeight="bold"
              >
                {title}
              </SoftTypography>
            </Link>
          ) : (
            <MuiLink href={action.route} target="_blank" rel="noreferrer">
              <SoftTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                className="color-background"
                fontWeight="bold"
              >
                {title}
              </SoftTypography>
            </MuiLink>
          )}
        </SoftBox>
      </SoftBox>
      {/*Image*/}
      <SoftBox mx={2}>
        {action.type === "internal" ? (
          <Link to={action.route}>
            <SoftBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <SoftBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </MuiLink>
        )}
      </SoftBox>
      {/*Body*/}
      <SoftBox py={1} px={2}>
        <SoftTypography variant="body2" component="p" color="text">
          {description}
        </SoftTypography>
      </SoftBox>
      {/*Button*/}
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
        <Link to={"/launch"}></Link>
      </SoftBox>
    </Card>
  );
}

// Setting default props for the Learn Blog Card
LearnBlogCard.defaultProps = {
  category: false,
  author: false,
};

// Typechecking props for the Learn Blog Card
LearnBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
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
  author: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    }),
    PropTypes.bool,
  ]),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default LearnBlogCard;
