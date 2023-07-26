// react-router-dom components
import { useNavigate } from "react-router-dom";
import { UserAuth } from "context/AuthContext";

// Soft UI Dashboard React components
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import TickmarkIcon from "examples/Icons/TickmarkIcon";

// Authentication layout components
import TinyEasyAuthLayout from "../components/TinyEasyAuthenticationLayout";
import { setUsageIntent } from "logic/firebaseFunctions";

function SignUpDetailsTinyEasy() {
  const { user } = UserAuth();
  const navigate = useNavigate();

  async function handleSetUsageIntent(intent) {
    navigate("/loading");
    // Function to introduce a 15-second delay using the Promise object to ensure firebase has created user
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await delay(15000);
    const email = user.email;
    const token = user.accessToken;

    try {
      await setUsageIntent(email, token, intent);
      console.log("Usage intent for: " + email + " set to: " + intent);
    } catch (error) {
      console.log("Setting usage intent failed");
      console.log(error);
    }
  }

  const leftContent = (
    <SoftBox pt={2} pb={3} px={3}>
      {/* Headline */}
      <SoftBox mb={1}>
        <SoftTypography variant="h2" fontWeight="bold">
          What will you design?
        </SoftTypography>
      </SoftBox>

      {/* Headline */}
      <SoftBox mb={1}>
        <SoftTypography variant="body2" opacity={0.7}>
          <i>Your answer will help us customise your experience!</i>
        </SoftTypography>
      </SoftBox>

      {/* Buttons */}
      <SoftBox pb={1}>
        <SoftBox mt={2} mb={1}>
          <SoftButton onClick={() => handleSetUsageIntent("personal")} variant="outlined" color="secondary" fullWidth>
            🏠 My own tiny house
          </SoftButton>
        </SoftBox>
        <SoftBox mt={2} mb={1}>
          <SoftButton onClick={() => handleSetUsageIntent("business")} variant="outlined" color="secondary" fullWidth>
            📈🛠️ A tiny house for my business
          </SoftButton>
        </SoftBox>
        <SoftBox mt={2} mb={1}>
          <SoftButton onClick={() => handleSetUsageIntent("business")} variant="outlined" color="secondary" fullWidth>
            💰 A tiny house to sell
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );

  const rightContent = (
    <SoftBox>
      <SoftBox
        component="img"
        src="https://drive.google.com/uc?export=download&id=1TZz9GAJp11zMVMcC5thzbsqb9Ulh5jGj"
        alt="3dthd-preview"
        width="100%"
        maxWidth="40rem"
      />
      <Grid container>
        {/* Left Screen */}
        <Grid item xs={2} />
        <Grid item xs={8}>
          <SoftBox>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <TickmarkIcon size="30px" color="white" />
              <SoftTypography variant="h4" fontWeight="bold" gutterBottom color="white">
                &nbsp; Unlock 7-Day Free Personal Trial
              </SoftTypography>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <TickmarkIcon size="30px" color="white" />
              <SoftTypography variant="h4" fontWeight="bold" gutterBottom color="white">
                &nbsp; No design knowledge required
              </SoftTypography>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <TickmarkIcon size="30px" color="white" />
              <SoftTypography variant="h4" fontWeight="bold" gutterBottom color="white">
                &nbsp; Easy drag & drop system
              </SoftTypography>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <TickmarkIcon size="30px" color="white" />
              <SoftTypography variant="h4" fontWeight="bold" gutterBottom color="white">
                &nbsp; Export PDF tiny house plans
              </SoftTypography>
            </div>
          </SoftBox>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </SoftBox>
  );

  return (
    <TinyEasyAuthLayout leftContent={leftContent} rightContent={rightContent} rightAlign="center">
      {" "}
    </TinyEasyAuthLayout>
  );
}

export default SignUpDetailsTinyEasy;
