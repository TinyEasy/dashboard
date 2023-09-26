// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbarTinyEasy from "examples/Navbars/DashboardNavbarTinyEasy";
import Footer from "examples/Footer";
import TextImageButtonCard from "examples/Cards/DashboardCards/TextImageButtonCard";

// Dashboard layout components
import FeatureCard from "examples/Cards/DashboardCards/FeatureCard";

//Icons
import StarIconLine from "examples/Icons/StarIconLine";

//Context
import { UserLicense } from "context/LicenseContext";

function GetBusiness() {
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

  return (
    <DashboardLayout>
      <DashboardNavbarTinyEasy />
      {/*Site content*/}
      <SoftBox px={3} py={3}>
        {/*Header 1*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            <StarIconLine size="50px" color="292D2F" /> Get 3DTHD Business
          </SoftTypography>
        </SoftBox>
        {/*Subhead*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h4" fontWeight="bold">
            {licenseText}
          </SoftTypography>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TextImageButtonCard
              heading="Let's Talk!"
              body="Hey, it's Till, co-founder of Tiny Easy. :) If you've been drafting your plans manually or outsourcing your work, the 3DTHD Business will help you save countless hours with the advanced tools and instant PDF plan export. 
              Let's jump on a call so I can show you how the Business version can help your business, answer your questions and set you up for a Business Trial. :D 
              Talk soon! "
              image="https://drive.google.com/uc?export=download&id=15JbXV4e1zLGWvhg6k1xtPQygcTY8TX-k"
              action={{
                type: "external",
                route: "https://www.tinyeasy.co.nz/book-your-demo",
                label: "Book Call",
              }}
            />
          </Grid>
        </Grid>

        {/*Header 3*/}
        <SoftBox mb={3} pt={5}>
          <SoftTypography variant="h1" fontWeight="bold">
            Get advanced tools for your business:
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
                description="Get Free Early Access to the upcoming Render Tool. Create realistic, high-res marketing renders with 1-click. Choose your view, click the button and download your render."
              />
            </Grid>

            <Grid item xs={12} lg={2}>
              <FeatureCard
                image="https://drive.google.com/uc?export=download&id=1bncrJW5e5dnme72cU5iiNCbxHN1wC0lb"
                title="Take Off Tool"
                description="Coming Soon: Generate a smart spreadsheet with material & item quantity estimations. Enter your wastage & unit costs to get a cost estimate in minutes. Exports to .xsl"
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

export default GetBusiness;
