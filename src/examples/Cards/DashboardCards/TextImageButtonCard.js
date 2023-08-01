import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function TextImageButtonCard({ heading, body, image, action, onClickAction }) {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={4}>
        <Grid container spacing={3}>
          {/*Left Container Item*/}
          <Grid item xs={12} lg={6}>
            <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
                {heading}
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  {body}
                </SoftTypography>
              </SoftBox>

              {/* BUTTON */}
              <SoftBox>
                {action.type === "internal" ? (
                  <Link to={action.route}>
                    <SoftButton variant="gradient" color="info" fullWidth onClick={onClickAction}>
                      {action.label}
                    </SoftButton>
                  </Link>
                ) : (
                  <MuiLink href={action.route} target="_blank" rel="noreferrer">
                    <SoftButton variant="gradient" color="info" fullWidth onClick={onClickAction}>
                      {action.label}
                    </SoftButton>
                  </MuiLink>
                )}
              </SoftBox>
            </SoftBox>
          </Grid>
          {/*Right Container Item*/}
          <Grid item xs={12} lg={6} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="transparent"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox component="img" src={image} alt="support" width="100%" />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
TextImageButtonCard.defaultProps = {
  heading: "heading",
  body: "body",
  image: "https://drive.google.com/uc?export=download&id=1MLiBHElbmCtM1CTNy4YvnEnxcSNtTGne",
  action: {
    type: "internal",
    route: "/",
    text: "Label",
  },
};

TextImageButtonCard.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onClickAction: PropTypes.func
};

export default TextImageButtonCard;
