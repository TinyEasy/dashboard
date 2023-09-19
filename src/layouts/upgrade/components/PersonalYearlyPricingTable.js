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

function PersonalYearlyPricingTable() {
  const { user } = UserAuth();
  let priceId = "price_1NrrfGGwghLOOtVXDLBKoRhs";
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
          "https://dashboard.tinyeasy.co.nz/subscription-success",
          "https://dashboard.tinyeasy.co.nz/upgrade"
        );
        console.log(checkoutUrl);
        const formattedCheckoutUrl = checkoutUrl.replace(/^"(.*)"$/, "$1");
        console.log(formattedCheckoutUrl);
        ga4Events.eventBeginPersonalYearlyCheckout();
        window.open(formattedCheckoutUrl, "_blank");
      } catch (error) {
        console.log(error);
        console.log("Checkout Failed");
      }
    }
  }

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={4} display="flex" flexDirection="column" height="100%">
        {/* Personal Heading */}
        <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
          Personal
        </SoftTypography>
        {/* Pricing */}
        <SoftTypography variant="h1" fontWeight="bold" gutterBottom>
          $9{" "}
          <span>
            <SoftTypography
              variant="body2"
              fontWeight="bold"
              opacity="0.7"
              gutterBottom
              component="span"
            >
              USD/ Month, billed yearly
            </SoftTypography>
          </span>
        </SoftTypography>
        {/* Description */}
        <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
          Use 3DTHD Personal to design your own personal tiny house to help communicate with your
          builder or DIY your build!
        </SoftTypography>

        <Divider />
        {/* Features */}
        <SoftBox mb={4}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <TickmarkIcon size="18px" color="292D2F" />
            <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
              &nbsp; 2 Design Slots
            </SoftTypography>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <TickmarkIcon size="18px" color="292D2F" />
            <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
              &nbsp; Essential Design Tools
            </SoftTypography>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <TickmarkIcon size="18px" color="292D2F" />
            <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
              &nbsp; Essential Plan Export
            </SoftTypography>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <TickmarkIcon size="18px" color="292D2F" />
            <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
              &nbsp; Personal-Use Only
            </SoftTypography>
          </div>
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

export default PersonalYearlyPricingTable;