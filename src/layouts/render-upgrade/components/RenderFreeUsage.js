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

let rendersUsed = 5;
let rendersTotal = 5;
let renderPercentage = (rendersUsed / rendersTotal) * 100;

function RenderFreeUsage() {
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
          {rendersUsed}/{rendersTotal}
        </SoftTypography>
        {/* Counter */}
        <SoftBox mb={4}>
          <SoftProgress value={renderPercentage} color="info" variant="gradient" label={false} />
        </SoftBox>
        <SoftBox mb={4}>
          <SoftTypography variant="body2" fontWeight="bold" opacity="0.8" color="error">
            You used all your Free Renders!
            <br /> Upgrade to the Unlimited Render Tool to keep rendering.
          </SoftTypography>
        </SoftBox>
        {/*Launch Designer Button*/}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <LaunchDesignerButton />
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default RenderFreeUsage;
