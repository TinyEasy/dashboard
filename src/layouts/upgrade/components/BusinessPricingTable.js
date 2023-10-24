// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

//Icons
import TickmarkIcon from "examples/Icons/TickmarkIcon";
import CallIcon from "examples/Icons/CallIcon";

import { ga4Events } from "logic/google-analytics/google-analytics-events";

function BusinessPricingTable() {
  return (
    <Card sx={{ height: "100%", backgroundColor: "#292D2F" }}>
      <SoftBox p={4} display="flex" flexDirection="column" height="100%">
        {/* Personal Heading */}
        <SoftTypography variant="h5" fontWeight="bold" gutterBottom color="light">
          Business
        </SoftTypography>
        {/* Pricing */}
        <SoftTypography variant="h1" fontWeight="bold" gutterBottom color="light">
          Custom{" "}
          <span>
            <SoftTypography
              variant="body2"
              fontWeight="bold"
              opacity="0.7"
              gutterBottom
              component="span"
              color="light"
            >
              / Month *
            </SoftTypography>
          </span>
        </SoftTypography>
        {/* Description */}
        <SoftTypography variant="body2" fontWeight="bold" opacity="0.7" gutterBottom color="light">
          * We tailor your subscription to create an affordable plan that works with your size
          business. Contact us to find out more!
        </SoftTypography>

        <Divider light="true" />
        {/* Features */}
        <SoftBox mb={4}>
          <Grid container spacing={3}>
            {/* Left Row */}
            <Grid item xs={12} lg={4}>
              <SoftBox>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Unlimited Design Slots
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Business-Use License
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Advanced Plan Export
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Advanced Design Tools
                  </SoftTypography>
                </div>
              </SoftBox>
            </Grid>

            {/* Middle Row */}
            <Grid item xs={12} lg={4}>
              <SoftBox>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Advanced Cabinetry
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Electrical Tool
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Deck/Terrace Tool
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Render Tool (Early Access)
                  </SoftTypography>
                </div>
              </SoftBox>
            </Grid>

            {/* Right Row */}
            <Grid item xs={12} lg={4}>
              <SoftBox>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Take Off Tool (Coming Soon)
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; Sketch Up Export
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="light" />
                  <SoftTypography variant="body2" fontWeight="bold" gutterBottom color="light">
                    &nbsp; 1-On-1 Support
                  </SoftTypography>
                </div>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        {/*Upgrade Button*/}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <MuiLink
              href={"https://www.tinyeasy.com/book-your-demo"}
              target="_blank"
              rel="noreferrer"
            >
              <SoftButton
                onClick={() => ga4Events.eventBookDemoButtonClick()}
                component="a"
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color="info"
                fullWidth
              >
                <CallIcon color="white" size="16px" />
                &nbsp; CONTACT US
              </SoftButton>
            </MuiLink>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BusinessPricingTable;
