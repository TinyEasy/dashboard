// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbarTinyEasy from "examples/Navbars/DashboardNavbarTinyEasy";
import TextImageButtonCard from "examples/Cards/DashboardCards/TextImageButtonCard";
import Footer from "examples/Footer";

//Icons
import SupportIcon from "examples/Icons/SupportIcon";

import { ga4Events } from "logic/google-analytics/google-analytics-events";

function Support() {
  return (
    <DashboardLayout>
      <DashboardNavbarTinyEasy />
      <SoftBox px={3} py={3}>
        {/*Header 1*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            <SupportIcon size="40px" /> Support
          </SoftTypography>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <TextImageButtonCard
              heading="F.A.Q."
              body="Check out our F.A.Q. if you're having trouble with the 3DTHD!
              We most likely have answered your question in there already. :D"
              image="https://drive.google.com/uc?export=download&id=1MLiBHElbmCtM1CTNy4YvnEnxcSNtTGne"
              action={{
                type: "external",
                route: "https://documentation.tinyeasy.co.nz/",
                label: "Read F.A.Q.",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <TextImageButtonCard
              heading="Contact us"
              body="If you want to speak to us directly feel free to contact us!
              We'd love to help you out :D"
              image="https://drive.google.com/uc?export=download&id=1WrDgQ-kkxWwzFlG_PXOQJ6maTKIAKJsZ"
              action={{
                type: "external",
                route: "https://www.tinyeasy.co.nz/contact",
                label: "Contact Us",
              }}
            >
              <SoftTypography variant="body2" fontWeight="bold">
                <SupportIcon size="10px" /> Support
              </SoftTypography>
            </TextImageButtonCard>
          </Grid>
          <Grid item xs={12} lg={5}>
            <TextImageButtonCard
              heading="Are you a builder/business?"
              body="Let's talk! Hey, it's Till, co-founder of Tiny Easy. :) If you've been drafting your plans manually or outsourcing your work, the 3DTHD Business will help you save countless hours with the advanced tools and instant PDF plan export. 
              Let's jump on a call so I can show you how the Business version can help your business, answer your questions and set you up for a Business Trial. :D 
              Talk soon! "
              image="https://drive.google.com/uc?export=download&id=15JbXV4e1zLGWvhg6k1xtPQygcTY8TX-k"
              action={{
                type: "external",
                route: "https://www.tinyeasy.co.nz/book-your-demo",
                label: "Book Call",
              }}
              onClickAction={() => ga4Events.eventCtaButtonClick("support_book_call_cta")}
            />
          </Grid>
        </Grid>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Support;
