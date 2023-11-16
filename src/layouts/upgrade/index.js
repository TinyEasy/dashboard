//Logic
import React, { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import { Card } from "@mui/material";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbarTinyEasy from "examples/Navbars/DashboardNavbarTinyEasy";
import Footer from "examples/Footer";

// Page Components
import PersonalPricingTable from "./components/PersonalPricingTable";
import PersonalYearlyPricingTable from "./components/PersonalYearlyPricingTable";
import BusinessPricingTable from "./components/BusinessPricingTable";
import FeatureCard from "examples/Cards/DashboardCards/FeatureCard";

//Icons
import StarIconLine from "examples/Icons/StarIconLine";
import TickmarkIcon from "examples/Icons/TickmarkIcon";
import LockIcon from "examples/Icons/LockIcon";
import StripeCheckoutIcon from "examples/Icons/StripeCheckoutIcon";

//Context
import { UserLicense } from "context/LicenseContext";

function Upgrade() {
  const { license } = UserLicense();

  let licenseText = "License";

  switch (license) {
    case "trial":
      licenseText = "You are currently on a Personal 7-Day Free Trial.";
      break;
    case "expired":
      licenseText = "Your license has expired. Upgrade now to keep designing!";
      break;
    case "personal":
      licenseText = "You are currently on a Personal plan.";
      break;
    case "business":
      licenseText = "You are currently on a Business plan.";
      break;
    default:
      break;
  }

  const [isYearly, setIsYearly] = useState(true);

  const handleYearlyClick = () => {
    setIsYearly(true);
    console.log("Set to Yearly");
  };

  const handleMonthlyClick = () => {
    setIsYearly(false);
    console.log("Set to Monthly");
  };

  let personalTable;

  // Use if statement to conditionally assign the personalTable variable
  if (isYearly) {
    personalTable = <PersonalYearlyPricingTable />;
  } else {
    personalTable = <PersonalPricingTable />;
  }

  return (
    <DashboardLayout>
      <DashboardNavbarTinyEasy />
      {/*Site content*/}
      <SoftBox px={3} py={3}>
        {/*Header 1*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            <StarIconLine size="50px" color="292D2F" /> Choose your plan
          </SoftTypography>
        </SoftBox>
        {/*Subhead*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h4" fontWeight="bold">
            {licenseText}{" "}
            <span>
              <MuiLink
                href={"https://www.tinyeasy.com/3dthd-pricing"}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <SoftTypography variant="h4" fontWeight="bold" color="info" textGradient="true">
                  {" "}
                  Compare the plans.{" "}
                </SoftTypography>
              </MuiLink>
            </span>
          </SoftTypography>
        </SoftBox>
        {/*Switch*/}
        <SoftBox mb={1}>
          <SoftBox width="250px">
            <Card sx={{ height: "100%" }}>
              <Grid container>
                {/* Left Screen */}
                <Grid item xs={6}>
                  <SoftButton
                    onClick={handleYearlyClick}
                    variant="contained"
                    color={isYearly ? "info" : "white"}
                    style={{ width: "100%" }}
                    m={3}
                    p={3}
                    opacity={0}
                  >
                    <SoftTypography variant="h6" color={isYearly ? "white" : "dark"}>
                      <b>Yearly</b>
                    </SoftTypography>
                  </SoftButton>
                </Grid>

                {/* Right Screen */}
                <Grid item xs={6}>
                  <SoftButton
                    onClick={handleMonthlyClick}
                    variant="contained"
                    color={isYearly ? "white" : "info"}
                    style={{ width: "100%" }}
                    m={3}
                    p={3}
                  >
                    <SoftTypography variant="h6" color={isYearly ? "dark" : "white"}>
                      <b>Monthly</b>
                    </SoftTypography>
                  </SoftButton>
                </Grid>
              </Grid>
            </Card>
          </SoftBox>
        </SoftBox>
        {/*Switch*/}
        <SoftBox mb={3} mx={1}>
          <SoftTypography variant="h6" opacity={isYearly ? "1" : "0.4"}>
            <b>Save 25% with Yearly Billing</b>
          </SoftTypography>
        </SoftBox>
        {/*Pricing Tables*/}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              {/*Personal Card*/}
              {personalTable}
            </Grid>
            <Grid item xs={12} lg={6}>
              {/*Business Card*/}
              <BusinessPricingTable />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={-2} px={3}>
          {/* Security proof */}
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <TickmarkIcon size="18px" />
            <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
              &nbsp; Cancel anytime
            </SoftTypography>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <LockIcon size="18px" />
            <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
              &nbsp; Guaranteed safe & secure checkout &nbsp;
            </SoftTypography>
            <StripeCheckoutIcon size="100px" />
          </div>
        </SoftBox>

        {/*Header 2*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            What you&apos;ll unlock with 3DTHD Personal:
          </SoftTypography>
          <SoftTypography variant="h4" fontWeight="bold" pt={1}>
            This version is for designing your own tiny house.
          </SoftTypography>
        </SoftBox>

        {/*Personal Feature Cards*/}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1_xMw96aCm83I53et4nGVdrs-thhbzORV"
                title="2 Design Slots"
                description="Get a beginner-friendly software that even professional tiny house builders use. Unlock 2 design slots to experiment with ideas and design your dream tiny house."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1NzaLjsVjVQxHDt1xrgOYNB_Jq80bNnDP"
                title="Essential Plan Export"
                description="Generate dimensioned PDF tiny house plans of your customized tiny house with one click. No need to hire an expensive draftsperson. Use the plans to DIY or talk to your builder."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1Oh8ALpI8Tjf0gL-5B_SV_-82MFdgM47D"
                title="10 Preset Designs"
                description="Don't want to start from scratch? Customize any of our 10 preset designs to your needs. All presets are designed to both Imperial and Metric best practices."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=11OO7ZAw7zYav5DdBRdNqIy5henN8KJ-Q"
                title="Trailer/Foundations"
                description="Create any shape base with a few clicks! Design your tiny house on a Flatdeck, Fender or Gooseneck trailer or on a foundation. Customize down to the last inch/mm."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=11GVAQ23Fe5PuY8QSD-60DkGPq6xuwPFG"
                title="Shell Tool"
                description="Customize the exterior shape. Define your tiny home's height and wall thickness. Add customized bump outs/overhangs to the shell to maximize the interior space."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1-8LYZ_TBtgSrqKT8CxU61tOI4b-Gdj8S"
                title="Roof Tool"
                description="Create any roof style. No idea is too crazy! Define your roof's style, add multiple sections, change the angle/pitch, add overhangs to create a unique tiny home."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1oCXZQ5n1NZAjS6kjbUfrCjPWFoeve_-h"
                title="Door Tool"
                description="Place preset interior and exterior doors with a few clicks. Customize the width and height and add segments to create any door arrangement."
              />
            </Grid>
            {/* Row 2 */}
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1kf3Gfnb_KB4H2gBqMka6Nbh8ZTCfhtRo"
                title="Window Tool"
                description="Add windows & skylights to your tiny home's shell. Define the width, height and segments. Create custom angled windows to make your design unique."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1TD-BRJH62kfja1ngpvn7AbW7bLaDDb2X"
                title="Wall & Loft Tool"
                description="Place interior walls and define the thickness, length, and height. Add loft spaces and walkways/drop lofts to your tiny house with loft blocks."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1q0nvz9C8nPpdA81oI_cDiPoejLcAtEfk"
                title="Stair Tool"
                description="Easily create custom stairs. Enter the total size of the stairs, add tread count and the rise & run are calculated for you. Add ladders for tighter spaces."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1B-mXc1wFkWiPgXqLrrDYRbXPWWMZ4MER"
                title="Furniture Library"
                description="Furnish the interior with objects designed for tiny living. Choose kitchen, dining, living, bathroom, bedroom and storage objects and resize them to fit."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1QfJU5zDqMsUMR80nJ8kD2uSyANnhtdM6"
                title="Material Tool"
                description="Choose from 300+ industry standard materials to create a unique look! Create a material palette, customize objects and add cladding accents."
              />
            </Grid>
          </Grid>
        </SoftBox>

        {/*Header 3*/}
        <SoftBox mb={3} pt={5}>
          <SoftTypography variant="h1" fontWeight="bold">
            Are you a business or builder?
          </SoftTypography>
          <SoftTypography variant="h4" fontWeight="bold" pt={1}>
            Get advanced tools with 3D Tiny House Designer for Business.
          </SoftTypography>
        </SoftBox>

        {/*Business Feature Cards*/}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1e4_LbuoIWR43cnCiJIAUNEx572zuAhfc"
                title="Unlimited Designs"
                description="Get unlimited design slots to create your catalogue of tiny homes for your clients to choose from. Personalize designs for clients or create fully custom designs."
              />
            </Grid>

            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1f5AkDxa9zs19ZVs_VqxTkzg9tkPOcVbR"
                title="Advanced Cabinetry"
                description="Unlock advanced cabinetry properties to create fully custom cabinets. Define the countertop, end panels, toe kick and add custom size segments for any layout."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1_fSJFvzQTY7DQF6P8Gx_ampiHCkoP0KN"
                title="Electrical Tool"
                description="Place 3D electrical objects like lights, sockets, switches, the breaker box & much more! Export electrical PDF plans incl. itemized breakdown of all objects."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1Q_6vmvPPSDJr73_43LiEgxUT-GbuBB33"
                title="Deck/Terrace Tool"
                description="Create a unique outdoor space for your client's tiny home! Choose where the deck/terrace will be added, define the size and add stairs to all decks."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1xonF4_z_j9dTE_q6MPdtBrHaBRAWz1QV"
                title="Advanced Plan Export"
                description="Unlock advanced plans with your plan export including electrical plans, cabinetry plans and shell floorplans and sections & customize your export settings."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1QpziBeXXGudePMGz7EcgMdW5AAhZO2k2"
                title="+ All Personal Tools"
                description="The 3DTHD Business includes all tools from the Personal version and adds advanced features to speed up your design & build process."
              />
            </Grid>
            {/* Row 2 */}

            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1X1-uoTq24poR8nHguggr0HA8_ePgBvsN"
                title="Sketch Up Export"
                description="Import your designs into Sketch Up to create custom 3D models: Structural, Plumbing, Custom Items, Assemble multiple designs and unlock file formats like DWG, IFC etc."
              />
            </Grid>

            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=12oKoqwno7RSLsLjjrPywrSBnpSlhi06_"
                title="Render Tool"
                description="Get the Render Tool Add On! Create realistic, high-res marketing renders with 1-click. Choose your view, click the button and download your render."
              />
            </Grid>

            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1bncrJW5e5dnme72cU5iiNCbxHN1wC0lb"
                title="Take Off Tool"
                description="Generate a smart spreadsheet with material & item quantity estimations. Enter your wastage & unit costs to get a cost estimate in minutes. Exports to .xsl"
              />
            </Grid>

            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1kGdywSAGBKgpAgR1Hk6bqcRPoMQWrStt"
                title="Business-Use License"
                description="Unlock the Business-Use License to use the 3D Tiny House Designer commercially for your builds & clients! 3DTHD Personal is for personal-use only."
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=16gu3yzytrSsNFgpCrw-FKq6KYw-LsLzf"
                title="1-on-1 Support"
                description="Get direct support from our team if you get stuck! Get a 1-on-1 video call training session to help you get up to speed and get personal support via text or Whats App. "
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Upgrade;
