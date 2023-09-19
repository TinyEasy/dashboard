import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "context/AuthContext";
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Authentication layout components
import TinyEasyAuthLayout from "../components/TinyEasyAuthenticationLayout";
import { setUsageIntent } from "logic/firebaseFunctions";
import { ga4Events } from "logic/google-analytics/google-analytics-events";

//----------Survey Button Component----------//
function SurveyButton({ text, onClick }) {
  return (
    <SoftBox mt={2} mb={1}>
      <SoftButton onClick={onClick} variant="outlined" color="secondary" fullWidth>
        {text}
      </SoftButton>
    </SoftBox>
  );
}

SurveyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function SignUpDetailsTinyEasy() {
  const { user } = UserAuth();
  const navigate = useNavigate();

  //----------Question Components----------//
  const questionCompoment0 = (
    <SoftBox>
      {/* Headline */}
      <SoftTypography variant="h2" fontWeight="bold" mb={1}>
        What will you design?
      </SoftTypography>

      {/* Sub Head */}
      <SoftTypography variant="body2" opacity={0.7} mb={1}>
        <i>Your answer will help us customise your experience!</i>
      </SoftTypography>

      {/* Buttons */}
      <SoftBox pb={1}>
        <SurveyButton text="🏠 My own tiny house" onClick={() => handleQuestion0("personal")} />
        <SurveyButton
          text="📈🛠️ A tiny house for my business"
          onClick={() => handleQuestion0("business")}
        />
        <SurveyButton text="💰 A tiny house to sell" onClick={() => handleQuestion0("sell")} />
      </SoftBox>
    </SoftBox>
  );

  const questionCompoment1 = (
    <SoftBox>
      {/* Headline */}
      <SoftTypography variant="h2" fontWeight="bold" mb={1}>
        Where did you discover us?
      </SoftTypography>

      {/* Buttons */}
      <SoftBox pb={1}>
        <SurveyButton text="Pinterest" onClick={() => handleQuestion1("pinterest")} />
        <SurveyButton text="Google" onClick={() => handleQuestion1("google")} />
        <SurveyButton text="Instagram" onClick={() => handleQuestion1("instagram")} />
        <SurveyButton text="YouTube" onClick={() => handleQuestion1("youtube")} />
        <SurveyButton text="TinyHouse.com" onClick={() => handleQuestion1("tinyhouse.com")} />
        <SurveyButton text="Somewhere Else" onClick={() => handleQuestion1("somewhere-else")} />
      </SoftBox>
    </SoftBox>
  );

  const questionComponents = [
    questionCompoment0,
    questionCompoment1,
    // Add more question components as needed
  ];

  //----------Question Specific Functions----------//
  async function handleQuestion0(intent) {
    handleSetNextQuestion();
    ga4Events.eventSurveyResponse("Usage_Intent", intent);

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

  async function handleQuestion1(discovery) {
    handleSetNextQuestion();
    ga4Events.eventSurveyResponse("First_Discovery", discovery);
    handleFinishSurvey();
  }

  //----------Survey Progress Logic----------//
  const [questionIndex, setQuestionIndex] = useState(0);

  function handleSetNextQuestion() {
    console.log("Setting next question");
    setQuestionIndex(questionIndex + 1); // Update the state
    console.log("Current question index is at " + questionIndex);
  }

  function handleFinishSurvey() {
    navigate("/loading");
    console.log("Finishing survey");
  }

  let activeQuestionComponent;

  switch (questionIndex) {
    case 0:
      activeQuestionComponent = questionComponents[0];
      break;
    case 1:
      activeQuestionComponent = questionComponents[1];
      break;
    // Add more cases as needed for additional questions
    default:
      activeQuestionComponent = null;
  }

  //----------Page Display----------//

  let leftContent = (
    <SoftBox pt={2} pb={3} px={3}>
      {activeQuestionComponent}
    </SoftBox>
  );

  const rightContent = (
    <SoftBox mt={6} mb={1}>
      <SoftTypography variant="h0" color="white" fontWeight="bold">
        Welcome to
        <br />
        Tiny Easy!
      </SoftTypography>
    </SoftBox>
  );

  return (
    <TinyEasyAuthLayout leftContent={leftContent} rightContent={rightContent} rightAlign="left">
      {" "}
    </TinyEasyAuthLayout>
  );
}

export default SignUpDetailsTinyEasy;
