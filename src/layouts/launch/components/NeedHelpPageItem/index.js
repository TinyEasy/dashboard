import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SupportIcon from "examples/Icons/SupportIcon";
import SoftButton from "components/SoftButton";

function NeedHelpPageItem() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={4}>
        <Grid container spacing={3}>
          {/*Left Container Item*/}
          <Grid item xs={12} lg={6}>
            <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
                Need Help?
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  Are you having trouble with the 3D Tiny House Designer? Head over to the support
                  section to contact us! <br />
                  <br />
                  We would love to help you out. :D
                </SoftTypography>
              </SoftBox>
              <Link to={"/support"}>
                <SoftButton variant="gradient" color="info" fullWidth>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <SupportIcon color="white" size="16px" />
                  &nbsp; GET SUPPORT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </SoftButton>
              </Link>
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
              <SoftBox
                component="img"
                src="https://drive.google.com/uc?export=download&id=1MLiBHElbmCtM1CTNy4YvnEnxcSNtTGne"
                alt="support"
                width="100%"
              />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default NeedHelpPageItem;
