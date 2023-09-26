import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";

//Icons
import LaunchDesignerButton from "examples/Items/Buttons/LaunchDesignerButton";

//Context
import { UserAddOn } from "context/AddOnContext";

function RenderFreeUsage() {
  const { freeRenderLimit, freeRendersRemaining } = UserAddOn();

  const [rendersTotal, setRendersTotal] = useState(5);
  const [rendersRemaining, setRendersRemaining] = useState(5);
  const [reachedMaximum, setReachedMaximum] = useState(false);
  const [renderPercentage, setRenderPercentage] = useState(0);

  useEffect(() => {
    if (freeRenderLimit !== null) {
      const rendersUsed = freeRenderLimit - freeRendersRemaining;
      const renderPercent = (rendersUsed / freeRenderLimit) * 100;

      console.log("freeRenderLimit " + freeRenderLimit);
      console.log("freeRendersRemaining " + freeRendersRemaining);
      console.log("renderPercent " + renderPercent);

      setRendersTotal(freeRenderLimit);
      setRendersRemaining(freeRendersRemaining);
      setRenderPercentage(renderPercent);

      if (freeRendersRemaining === 0) {
        setReachedMaximum(true);
      } else {
        setReachedMaximum(false);
      }
    }
  }, [freeRenderLimit, freeRendersRemaining]);

  return (
    <Card>
      <SoftBox p={4} display="flex" flexDirection="column" height="100%">
        {/* Personal Heading */}
        <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
          Render Tool - Free Trial
        </SoftTypography>

        {/* Description */}
        <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
          Try out the Render Tool and get the first 5 renders for free! <br />
          See how you can create professional renders with a click and never hire a freelancer
          again!
        </SoftTypography>

        <Divider />

        {/* Usage */}
        <SoftTypography variant="body2" fontWeight="regular" opacity="0.5">
          {rendersTotal - rendersRemaining}/{rendersTotal} used
        </SoftTypography>

        {/* Counter */}
        <SoftBox mb={4}>
          <SoftProgress value={renderPercentage} color="info" variant="gradient" label={false} />
        </SoftBox>

        {/* Reached Maximum Limit */}
        {reachedMaximum && (
          <SoftBox mb={4}>
            <SoftTypography variant="body2" fontWeight="bold" opacity="0.8" color="error">
              You used all your Free Renders!
              <br /> Upgrade to the Unlimited Render Tool to keep rendering.
            </SoftTypography>
          </SoftBox>
        )}

        {!reachedMaximum && (
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <LaunchDesignerButton />
            </Grid>
          </Grid>
        )}
      </SoftBox>
    </Card>
  );
}

export default RenderFreeUsage;
