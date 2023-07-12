import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import TinyEasyAuthLayout from "../components/TinyEasyAuthenticationLayout";

//Authentication logic
import { UserAuth } from "context/AuthContext";
import { checkError } from "logic/authenticationResponseMessages";

function ResetPassword() {
  const navigate = useNavigate();
  const { forgotPassword } = UserAuth();
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [resetSuccessState, setResetSuccess] = useState();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await forgotPassword(email);
      setResetSuccess(true);
    } catch (event) {
      const { isError, errorMessage } = checkError(event);
      setError(errorMessage);
    }
  };

  const leftContent = (
    <SoftBox pt={2} pb={3} px={3}>
      {/* Headline */}
      <SoftBox mb={1}>
        <SoftTypography variant="h1" fontWeight="bold">
          Reset Password?
        </SoftTypography>
      </SoftBox>

      {/* Log In Prompt */}
      <SoftBox>
        <SoftTypography variant="body2" color="text" fontWeight="regular">
          Don&apos;t worry. We&apos;ll help you reset your password after verifying your email.
        </SoftTypography>
      </SoftBox>

      {/* Form */}
      <SoftBox pb={1}>
        <SoftBox component="form" role="form" onSubmit={handleResetPassword}>
          {/* Input Fields */}
          <SoftBox my={2}>
            <SoftInput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
            />
          </SoftBox>
          {/* Sign Up Button */}
          <SoftBox mt={2} mb={1}>
            <SoftButton type="submit" variant="gradient" color="info" fullWidth>
              Send Reset Email
            </SoftButton>
          </SoftBox>
        </SoftBox>
        {/* Error Text */}
        {resetSuccessState && (
          <SoftBox mb={1}>
            <SoftTypography
              variant="body2"
              fontWeight="regular"
              color="success"
              textGradient="true"
            >
              Reset email sent! Check your inbox to reset your password. If the email doesn&apos;t
              arrive, check your spam, updates or promotions folder.
            </SoftTypography>

            {/* Link to log in */}
            <SoftTypography
              component={Link}
              to="/signin"
              variant="button"
              fontWeight="regular"
            >
              <u>Log In</u>
            </SoftTypography>
          </SoftBox>
        )}
        {/* Success Text */}
        {error && (
          <SoftBox mb={1}>
            <SoftTypography variant="body2" fontWeight="regular" color="error" textGradient="true">
              {error}
            </SoftTypography>
          </SoftBox>
        )}
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

export default ResetPassword;
