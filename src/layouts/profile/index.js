// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbarTinyEasy from "examples/Navbars/DashboardNavbarTinyEasy";
import Header from "./components/Header";
import AccountSettings from "./components/AccountSettings";
import TextImageButtonCard from "examples/Cards/DashboardCards/TextImageButtonCard";
import Footer from "examples/Footer";

//Icons
import AccountIcon from "examples/Icons/AccountIcon";

// Dashboard layout components

function Support() {
  return (
    <DashboardLayout>
      <DashboardNavbarTinyEasy />

      <SoftBox px={3} py={3}>
        {/*Header 1*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            <AccountIcon size="40px" /> Account
          </SoftTypography>
        </SoftBox>
        <SoftBox py={3}>
          <Header />
        </SoftBox>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={5}>
          <AccountSettings/>
          </Grid>
          <Grid item xs={12} lg={5}>
            <TextImageButtonCard
              heading="Billing"
              body="View and edit your billing information, update billing details and view previous invoices."
              image="https://drive.google.com/uc?export=download&id=1xrinXXLc1j1HJkGAK1H8MWy9UAY6Ayls"
              action={{
                type: "external",
                route: "https://billing.stripe.com/p/login/test_bIY6qB89f64E8bC288",
                label: "View Account",
              }}
            />
          </Grid>
        </Grid>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Support;
