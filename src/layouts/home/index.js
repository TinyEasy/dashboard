// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbarTinyEasy from "examples/Navbars/DashboardNavbarTinyEasy";
import Footer from "examples/Footer";

// Dashboard layout components
import LaunchDesignerPageItem from "./components/LaunchDesignerPageItem";
import LicenseReminderPageItem from "./components/LicenseReminderPageItem";
import ExploreTutorialsPageItem from "./components/ExploreTutorialsPageItem/ExploreTutorialsPageItem";
import LearnBlogCard from "examples/Cards/BlogCards/LearnBlogCard";
import VideoCard from "examples/Cards/BlogCards/VideoCard";

//Icons
import WavingHandIcon from "examples/Icons/WavingHandIcon";
import LearnIconLine from "examples/Icons/LearnIconLine";

// Data
import { UserAuth } from "context/AuthContext";

function Home() {
  const { user } = UserAuth();

  return (
    <DashboardLayout>
      <DashboardNavbarTinyEasy />

      {/*Site content*/}
      <SoftBox px={3} py={3}>
        {/*Header 1*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            <WavingHandIcon size="50px"/> Welcome{" "}
            {user && user.displayName ? user.displayName : user.email}!
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              {/*Launch Designer Card*/}
              <LaunchDesignerPageItem />
            </Grid>
            <Grid item xs={12} lg={6}>
              {/*Welcome to trial card*/}
              <LicenseReminderPageItem />
            </Grid>
          </Grid>
        </SoftBox>
        {/*Header 2*/}
        <SoftBox pt={7} mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            <LearnIconLine size="50px" /> Learn
          </SoftTypography>
        </SoftBox>
        {/*Learn Cards*/}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <VideoCard
                image="https://drive.google.com/uc?export=download&id=1eX8wxgPj74N-WALDGV1c5hkqs8V3ivDg"
                buttonText="Watch Tutorial"
                title="Watch: 3DTHD Crash Course"
                watchTime="5 minutes"
                action={{ type: "internal", route: "/learn" }}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <LearnBlogCard
                image="https://drive.google.com/uc?export=download&id=1HTYz1-O0enTIUvBttx-U-Mqkve_cZuZq"
                buttonText="Read Tutorial"
                title="Move Camera"
                description="Learn the basics on how to move around in the 3DTHD."
                action={{ type: "external", route: "https://documentation.tinyeasy.co.nz/Designer%20Interface/Movement" }}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <ExploreTutorialsPageItem/>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Home;
