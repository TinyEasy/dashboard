import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function FaqPageItem() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={4}>
        <Grid container spacing={3}>
          {/*Left Container Item*/}
          <Grid item xs={12} lg={6}>
            <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
                F.A.Q.
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  Check out our F.A.Q. if you&apos;re having trouble with the 3DTHD! <br />
                  We most likely have answered your question in there already. :D
                </SoftTypography>
              </SoftBox>
              <Link to={"/support"}>
                <SoftButton variant="gradient" color="info" fullWidth>
                  Read F.A.Q.
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

export default FaqPageItem;
