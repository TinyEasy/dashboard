import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "context/AuthContext";

// Soft UI Dashboard React components
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import GoogleButton from "examples/Items/Buttons/GoogleButton";
import TickmarkIcon from "examples/Icons/TickmarkIcon";
import Separator from "layouts/authentication/components/Separator";

// Authentication layout components
import TinyEasyAuthLayout from "../components/TinyEasyAuthenticationLayout";
import { checkError } from "logic/authenticationResponseMessages";
import { createMailchimpSubscription } from "logic/firebaseFunctions";
import { getFirstName } from "logic/helperFunctions";

import { ga4Events } from "logic/google-analytics/google-analytics-events";

function SignUpTinyEasy() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  const { user, createUser, googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const user = await createUser(email, password, firstName);
      ga4Events.eventSignup();
      navigate("/signup-details");
      await ga4Events.userSetID(user.email, user.accessToken);
      await handleMailchimpSubscription(email, firstName);
      
    } catch (event) {
      const { isError, errorMessage } = checkError(event);
      console.log(event.message);
      setError(errorMessage);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const { user, isNewUser } = await googleSignIn();
      if (isNewUser) {
        ga4Events.eventSignup();
        navigate("/signup-details"); // Redirect to the questionnaire for new users
      } else {
        ga4Events.eventLogin();
        navigate("/loading"); // Redirect to the loading page for returning users
      }
      console.log("signed in new user");
      await ga4Events.userSetID(user.email, user.accessToken);
      let firstName = "-";
      if (user && user.displayName) {
        firstName = getFirstName(user.displayName);
      }
      await handleMailchimpSubscription(user.email, firstName);
    } catch (error) {
      const { isError, errorMessage } = checkError(error);
      console.log(error.message);
      setError(errorMessage);
    }
  };

  const handleMailchimpSubscription = async (email, firstName) => {
    console.log("Starting mailing list subscription");
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await delay(15000);
    try {
      await createMailchimpSubscription(email, firstName, ["3dthd-dashboard"]);
      console.log("Subscribed to mailing list!");
    } catch (error) {
      console.log("Mailing List Subscription Failed");
      console.log(error);
    }
  };

  if (user && user.email) {
    navigate("/loading");
  }

  const leftContent = (
    <SoftBox pt={2} pb={3} px={3}>
      {/* Headline */}
      <SoftBox mb={1}>
        <SoftTypography variant="h1" fontWeight="bold">
          Sign Up For Free
        </SoftTypography>
      </SoftBox>

      {/* Log In Prompt */}
      <SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          Already have an account?&nbsp;
          <SoftTypography
            component={Link}
            to="/signin"
            variant="button"
            color="info"
            fontWeight="bold"
            textGradient
          >
            Log in
          </SoftTypography>
        </SoftTypography>
      </SoftBox>

      {/* Google Auth Button */}
      <SoftBox pt={2}>
        <GoogleButton buttonAction={handleGoogleSignUp} label="Sign Up with Google" />
      </SoftBox>

      {/* Separator Line */}
      <SoftBox py={2}>
        <Separator label="Or Sign Up via Email" />
      </SoftBox>

      {/* Form */}
      <SoftBox pb={1}>
        <SoftBox component="form" role="form" onSubmit={handleSignUp}>
          {/* Input Fields */}
          <SoftBox mb={2}>
            <SoftInput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftInput
              onChange={(e) => setFirstName(e.target.value)}
              type="name"
              id="name"
              placeholder="First Name"
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
            />
          </SoftBox>
          {/* Sign Up Button */}
          <SoftBox mt={2} mb={1}>
            <SoftButton type="submit" variant="gradient" color="info" fullWidth>
              sign up
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      {/* Error Text */}
      {error && (
        <SoftBox mb={1}>
          <SoftTypography variant="body2" fontWeight="regular" color="error" textGradient="true">
            {error}
          </SoftTypography>
        </SoftBox>
      )}

      {/* Ts and Cs */}
      <SoftBox>
        <SoftTypography variant="body2" color="text" fontWeight="regular" opacity="0.8">
          By signing up you agree to receive occasional emails from us and agree to our&nbsp;
          <SoftTypography
            component={Link}
            to="https://www.tinyeasy.co.nz/terms"
            variant="button"
            fontWeight="bold"
            textGradient
          >
            Terms & Conditions,
          </SoftTypography>
          <SoftTypography
            component={Link}
            to="https://www.tinyeasy.co.nz/privacy-policy"
            variant="button"
            fontWeight="bold"
            textGradient
          >
            Privacy Policy
          </SoftTypography>
          &nbsp;and&nbsp;
          <SoftTypography
            component={Link}
            to="https://www.tinyeasy.co.nz/cookie-policy"
            variant="button"
            fontWeight="bold"
            textGradient
          >
            Cookie Policy
          </SoftTypography>
          .
        </SoftTypography>
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

export default SignUpTinyEasy;
