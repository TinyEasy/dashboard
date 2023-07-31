import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import GoogleButton from "examples/Items/Buttons/GoogleButton";

// Authentication layout components
import TinyEasyAuthLayout from "../components/TinyEasyAuthenticationLayout";
import Separator from "layouts/authentication/components/Separator";

import { checkError } from "logic/authenticationResponseMessages";
import { createMailchimpSubscription } from "logic/firebaseFunctions";
import { getFirstName } from "logic/helperFunctions";

//Authentication logic
import { UserAuth } from "context/AuthContext";

import { ga4Events } from "logic/google-analytics/google-analytics-events";

function SignInTinyEasy() {
  const navigate = useNavigate();
  const { signIn, googleSignIn, user } = UserAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleLogIn = async (event) => {
    event.preventDefault();
    setError("");
    console.log("Starting log in")

    try {
      await signIn(email, password);
      console.log(event.message);
      navigate("/loading");
      ga4Events.loginevent();
    } catch (event) {
      const { isError, errorMessage } = checkError(event);
      setError(errorMessage);
    }
  };

const handleGoogleLogIn = async () => {
    try {
      const { user, isNewUser } = await googleSignIn();
      if (isNewUser) {
        navigate("/signup-details"); // Redirect to the questionnaire for new users
        console.log("signed in new user");
        let firstName = "-";
        if (user && user.displayName) {
          firstName = getFirstName(user.displayName);
        }
        ga4Events.loginevent();
        await handleMailchimpSubscription(user.email, firstName);
      } else {
        navigate("/loading"); // Redirect to the loading page for returning users
      }
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

  console.log("User on sign in: " + user);
  if (user && user.email){
    navigate("/loading");
  }

  const leftContent = (
    <SoftBox pt={2} pb={3} px={3}>
      {/* Headline */}
      <SoftBox mb={1}>
        <SoftTypography variant="h1" fontWeight="bold">
          Log In
        </SoftTypography>
      </SoftBox>

      {/* Log In Prompt */}
      <SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          Don&apos;t have an account yet?&nbsp;
          <SoftTypography
            component={Link}
            to="/signup"
            variant="button"
            color="info"
            fontWeight="bold"
            textGradient
          >
            Sign Up
          </SoftTypography>
        </SoftTypography>
      </SoftBox>

      {/* Google Auth Button */}
      <SoftBox pt={2}>
        <GoogleButton buttonAction={handleGoogleLogIn} label="Log In with Google" />
      </SoftBox>

      {/* Separator Line */}
      <SoftBox py={2}>
        <Separator label="Or Log In via Email" />
      </SoftBox>

      {/* Form */}
      <SoftBox pb={1}>
        <SoftBox component="form" role="form" onSubmit={handleLogIn}>
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
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
            />
          </SoftBox>
          {/* Sign Up Button */}
          <SoftBox mt={2} mb={1}>
            <SoftButton type="submit" variant="gradient" color="info" fullWidth>
              log in
            </SoftButton>
          </SoftBox>
          {/* Error Text */}
          {error && (
            <SoftBox mb={1}>
              <SoftTypography
                variant="body2"
                fontWeight="regular"
                color="error"
                textGradient="true"
              >
                {error}
              </SoftTypography>
            </SoftBox>
          )}
        </SoftBox>
      </SoftBox>

      {/* Forgot Password */}
      <SoftBox>
        <SoftTypography
          component={Link}
          to="/reset-password"
          variant="button"
          fontWeight="regular"
          opacity={0.6}
        >
          <u>Forgot Password?</u>
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );

  const rightContent = (
    <SoftBox mt={6} mb={1}>
      <SoftTypography variant="h0" color="white" fontWeight="bold">
        Welcome
        <br />
        Back!
      </SoftTypography>
    </SoftBox>
  );

  return (
    <TinyEasyAuthLayout
      leftContent={leftContent}
      rightContent={rightContent}
      rightAlign="left"
    ></TinyEasyAuthLayout>
  );
}

export default SignInTinyEasy;
