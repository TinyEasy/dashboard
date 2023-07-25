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

function SignUpTinyEasy() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const { user, createUser, googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError("");

    try {
      console.log("1. Creating user");
      await createUser(email, password, name);
      console.log("2. Creating mailchimp user");
      await handleRegularMailchimpSubscription();
      console.log("3. Navigating");
      navigate("/signup-details");
    } catch (event) {
      const { isError, errorMessage } = checkError(event);
      console.log(event.message);
      setError(errorMessage);
    }
  };

  const handleRegularMailchimpSubscription = async () => {
    console.log("Starting Mailchimp Subscription");

    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await delay(15000);
    console.log("User for Mailchimp: " + user);
    const accessToken = user.accessToken;
    try {
      await createMailchimpSubscription(email, accessToken, name, "");
      console.log("Subscription Success! " + email, accessToken, name);
    } catch (error) {
      console.log("Mailchimp Subscription Failed");
      console.log(error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await googleSignIn();
      navigate("/signup-details");
    } catch (error) {
      const { isError, errorMessage } = checkError(error);
      console.log(error.message);
      setError(errorMessage);
    }
  };

  console.log("User on sign up: " + user);
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
              onChange={(e) => setName(e.target.value)}
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
