// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbarTinyEasy from "examples/Navbars/DashboardNavbarTinyEasy";
import LaunchDesignerPageItem from "layouts/home/components/LaunchDesignerPageItem";
import NeedHelpPageItem from "./components/NeedHelpPageItem";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import SpaceShip from "examples/Icons/SpaceShip";

// Dashboard layout components

function Launch() {
  const { size } = typography;

  return (
    <DashboardLayout>
      <DashboardNavbarTinyEasy />
      <SoftBox px={3} py={3}>
        {/*Header 1*/}
        <SoftBox mb={3}>
          
          <SoftTypography variant="h1" fontWeight="bold">
          <SpaceShip size="50px" /> Launch Designer!
          </SoftTypography>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={7}>
          <LaunchDesignerPageItem />
          </Grid>
          <Grid item xs={12} lg={5}>
          <NeedHelpPageItem />
          </Grid>
        </Grid>
        {/*Launch Designer*/}
        
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Launch;
