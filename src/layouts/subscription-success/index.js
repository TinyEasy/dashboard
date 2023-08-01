// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Authentication layout components
import TinyEasyAuthLayout from "layouts/authentication/components/TinyEasyAuthenticationLayout";

import { ga4Events } from "logic/google-analytics/google-analytics-events";

function SubscriptionSuccess() {
  const navigate = useNavigate();
  const [secondsRemaining, setSecondsRemaining] = useState(20);

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

  useEffect(() => {
    ga4Events.eventPersonalPurchase();
  }, []);

  const leftContent = (
    <SoftBox pt={2} pb={3} px={3}>
      {/* Headline */}
      <SoftBox mb={1}>
        <SoftTypography variant="h1" fontWeight="bold">
          Thank you! 🎉
        </SoftTypography>
      </SoftBox>

      {/* Body */}
      <SoftBox mb={1}>
        <SoftTypography color="text" fontWeight="regular" variant="body2">
          We hope our 3D Tiny House Designer will bring you one step closer to your dream tiny
          house! 😄
          <br />
          <br />
          Let us know if you have any questions; we&apos;d love to hear from you.
          <br />
          <br />
          If you still have the 3D Tiny House Designer open in another tab, make sure to reload it
          through the dashboard.
          <br />
          <br />
          This page will redirect back to the Dashboard in the next few seconds while we get your
          license set up.
          <br />
          Happy designing!
          <br />
          <br />- The Tiny Easy Team
        </SoftTypography>
      </SoftBox>

      {/* Redirect*/}
      <SoftBox>
        <SoftTypography variant="body2" fontWeight="regular" opacity={0.6}>
          Redirecting in {secondsRemaining} seconds...
        </SoftTypography>
        {secondsRemaining < 3 && (
          <SoftTypography
            component={Link}
            to="/home"
            variant="button"
            fontWeight="regular"
            opacity={0.6}
          >
            <u>Not redirecting? Click here to go the Dashboard</u>
          </SoftTypography>
        )}
      </SoftBox>
    </SoftBox>
  );

  const rightContent = (
    <SoftBox mt={6} mb={1}>
      <SoftTypography variant="h0" color="white" fontWeight="bold">
        Thank
        <br />
        You!
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

export default SubscriptionSuccess;
