import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function ContactUsPageItem() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={4}>
        <Grid container spacing={3}>
          {/*Left Container Item*/}
          <Grid item xs={12} lg={6}>
            <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
                Contact us
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  If you can&apos;t find the answer in the F.A.Q. feel free to send us an email!{" "}
                  <br />
                  <br />
                  We&apos;d love to help you out :D
                </SoftTypography>
              </SoftBox>
              <Link to={"/support"}>
                <SoftButton variant="gradient" color="info" fullWidth>
                  Contact Us
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
                src="https://drive.google.com/uc?export=download&id=1WrDgQ-kkxWwzFlG_PXOQJ6maTKIAKJsZ"
                alt="contact us"
                width="100%"
              />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default ContactUsPageItem;