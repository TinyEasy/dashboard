import { useRef } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

//Icons
import TickmarkIcon from "examples/Icons/TickmarkIcon";
import StarIcon from "examples/Icons/StarIcon";

import { createCheckoutSession } from "logic/firebaseFunctions";
import { UserAuth } from "context/AuthContext";

import { ga4Events } from "logic/google-analytics/google-analytics-events";

function RenderPricingTable() {
  const { user } = UserAuth();
  let priceId = "price_1NuSIXGwghLOOtVXDqNrJVlg";
  const anchorRef = useRef(null);

  async function handlePurchase() {
    if (user) {
      console.log("Starting Checkout Session");
      try {
        console.log(user);
        const checkoutUrl = await createCheckoutSession(
          user.email,
          user.accessToken,
          priceId,
          "https://dashboard.tinyeasy.co.nz/render-subscription-success",
          "https://dashboard.tinyeasy.co.nz/render"
        );
        console.log(checkoutUrl);
        const formattedCheckoutUrl = checkoutUrl.replace(/^"(.*)"$/, "$1");
        console.log(formattedCheckoutUrl);
        ga4Events.eventBeginBusinessRenderMonthlyCheckout();
        window.open(formattedCheckoutUrl, "_blank");
      } catch (error) {
        console.log(error);
        console.log("Checkout Failed");
      }
    }
  }

  return (
    <Card>
      <SoftBox p={4} display="flex" flexDirection="column" height="100%">
        {/* Personal Heading */}
        <SoftTypography variant="h5" fontWeight="bold" gutterBottom color="info">
          Render Tool Unlimited
        </SoftTypography>

        {/* Description */}
        <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
          Average freelancers charge from $250 - $1000 for just 3-5 renders.
          <br />
          <br />
          With our Render Tool you can create unlimited high-quality renders <br />
          for the fraction of the cost you pay on Fiverr!
        </SoftTypography>
        {/* Pricing */}
        <SoftTypography variant="h1" fontWeight="bold">
          $149{" "}
          <span>
            <SoftTypography
              variant="body2"
              fontWeight="bold"
              opacity="0.7"
              gutterBottom
              component="span"
            >
              USD/ Month
            </SoftTypography>
          </span>
        </SoftTypography>
        <Divider />
        {/* Features */}
        <SoftBox mb={4}>
          <Grid container spacing={3}>
            {/* Left Row */}
            <Grid item xs={12} lg={6}>
              <SoftBox>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="dark" />
                  <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
                    &nbsp; Exterior Renders
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="dark" />
                  <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
                    &nbsp; Interior Renders
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="dark" />
                  <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
                    &nbsp; Fast Cloud Rendering
                  </SoftTypography>
                </div>
              </SoftBox>
            </Grid>

            {/* Right Row */}
            <Grid item xs={12} lg={6}>
              <SoftBox>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="dark" />
                  <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
                    &nbsp; Unlimited High-Res Renders
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="dark" />
                  <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
                    &nbsp; Professional Quality
                  </SoftTypography>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <TickmarkIcon size="18px" color="dark" />
                  <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
                    &nbsp; Adds on to 3DTHD Business
                  </SoftTypography>
                </div>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        {/*Upgrade Button*/}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <a ref={anchorRef} style={{ display: "none" }} target="_blank" rel="noreferrer" />
            <SoftButton
              component="a"
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              color="info"
              fullWidth
              onClick={handlePurchase}
            >
              <StarIcon color="white" size="16px" />
              &nbsp; UPGRADE NOW
            </SoftButton>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default RenderPricingTable;
