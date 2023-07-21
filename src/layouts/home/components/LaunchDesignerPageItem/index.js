// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import LaunchDesignerButton from "examples/Items/Buttons/LaunchDesignerButton";

// Images
import designerPreview from "assets/images/illustrations/designer-Preview.png";

function LaunchDesignerPageItem() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={4}>
        <Grid container spacing={3}>
          {/*Left Container Item*/}
          <Grid item xs={12} lg={5}>
            <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
                Launch Designer
              </SoftTypography>
              <SoftBox mb={3}>
                <SoftTypography variant="body2" color="text">
                  Start the 3D Tiny House Designer in your browser and design a tiny house!
                </SoftTypography>
                <SoftTypography variant="body2" color="text" opacity={0.7}>
                  <i>The software is made for computers and macs. If you are on a mobile phone or tablet, switch over to a PC!</i>
                </SoftTypography>
              </SoftBox>
              <LaunchDesignerButton />
            </SoftBox>
          </Grid>
          {/*Right Container Item*/}
          <Grid item xs={12} lg={7} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="transparent"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox component="img" src={designerPreview} alt="launch-designer-preview" width="100%" />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default LaunchDesignerPageItem;
