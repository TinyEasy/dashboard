// react-router-dom components
import { useNavigate } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import PageLayout from "examples/LayoutContainers/PageLayout";

//Authentication logic
import { UserLicense } from "context/LicenseContext";
import loadingGif from "./3DTHD-Loading.gif";

function Loading() {
  const navigate = useNavigate();
  const { license } = UserLicense();

  if (
    license === "trial" ||
    license === "personal" ||
    license === "expired" ||
    license === "business"
  ) {
    navigate("/home");
  }

  return (
    <PageLayout background="white">
      <Grid container>
        {/* Left Screen */}
        <Grid item xs={12}>
          <SoftBox
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            height="100vh"
          >
            <SoftBox pt={2} pb={3} px={3}>
              {/* Headline */}
              <SoftBox mb={1}>
                <img
                  src={loadingGif}
                  alt="Animated Logo"
                  style={{ width: "75%", height: "auto" }}
                />
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="body1">
                  👋😄 Oh hi there! Just getting things ready for you. Hold on!
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </SoftBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default Loading;
