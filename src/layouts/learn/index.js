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
import LaunchLearnCentrePageItem from "./components/LaunchDesignerPageItem";
import LearnBlogCard from "examples/Cards/BlogCards/LearnBlogCard";
import VideoCard from "examples/Cards/BlogCards/VideoCard";

//Icons
import LearnIconLine from "examples/Icons/LearnIconLine";

function Learn() {
  return (
    <DashboardLayout>
      <DashboardNavbarTinyEasy />
      {/*Site content*/}
      <SoftBox px={3} py={3}>
        {/*Header 1*/}
        <SoftBox mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            <LearnIconLine size="50px" /> Learn
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              {/*Launch crashcourse video*/}
              <VideoCard
                image="https://drive.google.com/uc?export=download&id=1U6tEQfBzFyqIaKewxiG1ypIwSoEixPxf"
                buttonText="Watch Tutorial"
                title="Watch: 3D Tiny House Designer Basics Course"
                watchTime="Follow bite-sized videos!"
                action={{
                  type: "external",
                  route: "https://www.tinyeasy.co.nz/courses/3dthd-course-basics",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              {/*Launch Designer Card*/}
              <LaunchLearnCentrePageItem />
            </Grid>
          </Grid>
        </SoftBox>
        {/*Header 2*/}
        <SoftBox pt={7} mb={3}>
          <SoftTypography variant="h1" fontWeight="bold">
            <LearnIconLine size="50px" color="292D2F" /> Useful Tutorials
          </SoftTypography>
        </SoftBox>
        {/*Learn Cards*/}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={2}>
              <LearnBlogCard
                image="https://drive.google.com/uc?export=download&id=1142_j1hDzqIr7YLTgygK_R3bkBEvfg_F"
                buttonText="Read Tutorial"
                title="Designer Interface"
                description="All tutorials for the interface. Learn which buttons do what!"
                action={{
                  type: "external",
                  route: "https://documentation.tinyeasy.co.nz/category/designer-interface",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <LearnBlogCard
                image="https://drive.google.com/uc?export=download&id=1HTYz1-O0enTIUvBttx-U-Mqkve_cZuZq"
                buttonText="Read Tutorial"
                title="Move Camera"
                description="Learn the basics on how to move around in the 3DTHD."
                action={{
                  type: "external",
                  route: "https://documentation.tinyeasy.co.nz/Designer%20Interface/Movement",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <LearnBlogCard
                image="https://drive.google.com/uc?export=download&id=121Q2o45NWdwx-xPNHNOTF9tnuMRPDMBm"
                buttonText="Read Tutorial"
                title="Move Objects"
                description="Learn how to place and move objects."
                action={{
                  type: "external",
                  route:
                    "https://documentation.tinyeasy.co.nz/Designer%20Interface/Placing-Moving-Objects",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <LearnBlogCard
                image="https://drive.google.com/uc?export=download&id=12jy80fFBWQnvW8LYou5Cf2_cNGRL7bdS"
                buttonText="Read Tutorial"
                title="Create Exterior"
                description="All tutorials on how to modify your tiny home's exterior."
                action={{
                  type: "external",
                  route: "https://documentation.tinyeasy.co.nz/category/tiny-house-shell-tools",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <LearnBlogCard
                image="https://drive.google.com/uc?export=download&id=1z5aJ7ZxIFbco97OXPJKrnxpR56dcLlIT"
                buttonText="Read Tutorial"
                title="Design Interior"
                description="All tutorials on how to use basic furniture components."
                action={{
                  type: "external",
                  route: "https://documentation.tinyeasy.co.nz/category/furniture-tools",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <LearnBlogCard
                image="https://drive.google.com/uc?export=download&id=1CVJikcuOyDNHwRm1gvd29S6yI9QqunQ9"
                buttonText="Read Tutorial"
                title="Apply Materials"
                description="Learn how to style your tiny home with materials."
                action={{
                  type: "external",
                  route: "https://documentation.tinyeasy.co.nz/category/materials",
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Learn;
