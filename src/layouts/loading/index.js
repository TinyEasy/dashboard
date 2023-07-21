import { useState, useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import TinyEasyAuthLayout from "layouts/authentication/components/TinyEasyAuthenticationLayout";
import Separator from "layouts/authentication/components/Separator";

//Authentication logic
import { UserAuth } from "context/AuthContext";

function Loading() {
  const navigate = useNavigate();
  const { license } = UserAuth();

//   const [secondsRemaining, setSecondsRemaining] = useState(20);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (secondsRemaining > 1) {
//         setSecondsRemaining((seconds) => seconds - 1);
//       } else {
//         navigate("/home");
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [secondsRemaining, navigate]);

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
        <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
          <SoftBox
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <SoftBox pt={2} pb={3} px={3}>
              {/* Headline */}
              <SoftBox mb={1}>
                <SoftTypography variant="h1" fontWeight="bold">
                  Loading...
                </SoftTypography>
              </SoftBox>
              {/* <SoftTypography variant="body2" fontWeight="regular" opacity={0.6}>
                Redirecting in {secondsRemaining} seconds...
              </SoftTypography> */}
            </SoftBox>
          </SoftBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default Loading;
