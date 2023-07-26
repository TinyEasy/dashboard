// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import LaunchLearnCentreButton from "examples/Items/Buttons/LaunchLearnCentreButton";

// Images
import designerPreview from "assets/images/illustrations/designer-Preview.png";

function LaunchLearnCentrePageItem() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={4}>
        <Grid container spacing={3}>
          {/*Left Container Item*/}
          <Grid item xs={12} lg={5}>
            <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
                Open Learn Centre
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  We’ve created a “Manual Website” with step-by-step instructions for every tool
                  in the 3D Tiny House Designer. <br />
                  <br />
                  Use it as your go to “Guide Book” if you want to learn a new tool or find out
                  handy tips and tricks to become a pro in the 3D Tiny House Designer.
                </SoftTypography>
              </SoftBox>
              <LaunchLearnCentreButton />
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
              <SoftBox
                component="img"
                src="https://drive.google.com/uc?export=download&id=1H_wOJC0AwktY6d55HSzzPGFEDaX257Z8"
                alt="launch-designer-preview"
                width="100%"
              />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default LaunchLearnCentrePageItem;
