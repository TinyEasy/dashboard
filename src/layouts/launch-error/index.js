import { useState, useEffect } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import PageLayout from "examples/LayoutContainers/PageLayout";

function LaunchError() {
  const navigate = useNavigate();
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (secondsRemaining > 1) {
        setSecondsRemaining((seconds) => seconds - 1);
      } else {
        navigate("/home");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsRemaining, navigate]);

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
                <SoftTypography variant="body1">
                  👋 Hey! Your operating system is not compatible. Switch to a desktop or laptop
                  device running Windows, Mac, or Linux.
                  <br />
                  <br />
                  Redirecting back to the Dashboard in {secondsRemaining} seconds...
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </SoftBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default LaunchError;
