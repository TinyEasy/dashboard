import React, { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbarTinyEasy from "examples/Navbars/DashboardNavbarTinyEasy";
import Footer from "examples/Footer";

// Dashboard layout components
import RenderPricingTable from "./components/RenderPricingTable";
import RenderFreeUsage from "./components/RenderFreeUsage";
import RenderBusinessOnlyCard from "./components/RenderBusinessOnlyCard";

//Icons
import CameraIcon from "examples/Icons/CameraIcon";
import TickmarkIcon from "examples/Icons/TickmarkIcon";
import LockIcon from "examples/Icons/LockIcon";
import StripeCheckoutIcon from "examples/Icons/StripeCheckoutIcon";

import SoftButton from "components/SoftButton";
import Divider from "@mui/material/Divider";
import { Card } from "@mui/material";

//Context
import { UserAuth } from "context/AuthContext";

function RenderUpgrade() {
  const { license } = UserAuth();
  const [isBusiness, setIsBusiness] = useState(false);

  useEffect(() => {
    if (license === "business") {
      setIsBusiness(true);
    }
  }, [license]); 

  let businessUpgradeCards = (
    <SoftBox mb={3} pt={6}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={5}>
          {/*Free Usage*/}
          <RenderFreeUsage />
        </Grid>
        <Grid item xs={12} lg={6}>
          {/*Render Pricing Table*/}
          <SoftBox mb={2}>
            <RenderPricingTable />
          </SoftBox>
          <SoftBox px={3}>
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
        </Grid>
      </Grid>
    </SoftBox>
  );

  return (
    <DashboardLayout>
      <DashboardNavbarTinyEasy />
      {/*Site content*/}
      <SoftBox px={3} py={3}>
        {!isBusiness && (
          <SoftBox mb={10}>
            <RenderBusinessOnlyCard />
          </SoftBox>
        )}
        <SoftBox mb={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              {/*Tool Header*/}
              <SoftBox mb={3} pt={8}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <SoftTypography variant="h4" fontWeight="bold" opacity={0.4}>
                    <CameraIcon size="22px" color="292D2F" /> Render Tool
                  </SoftTypography>
                  <SoftBox width="225px" mx={3}>
                    <Card sx={{ backgroundColor: "#fbd1bb" }}>
                      <SoftTypography
                        align="center"
                        variant="body2"
                        color="info"
                        fontWeight="bold"
                        textGradient={true}
                      >
                        3DTHD BUSINESS ADD ON
                      </SoftTypography>
                    </Card>
                  </SoftBox>
                </div>
              </SoftBox>
              {/*Header 1*/}
              <SoftBox mb={1}>
                <SoftTypography variant="h2" fontWeight="bold">
                  Instant Render Tool for tiny homes
                </SoftTypography>
              </SoftBox>
              {/*Subhead*/}
              <SoftBox mb={3}>
                <SoftTypography variant="subtitle2" fontWeight="regular">
                  Create marketing ready renders in seconds <br />
                  instead of weeks or hiring a freelancer.
                  <br />
                  <br />
                  Easily customize your renders with a few clicks <br />
                  and sign clients with confidence when they see your tiny homes!
                </SoftTypography>
              </SoftBox>
              {/*Button*/}
              <SoftBox mb={3} width="225px">
                <MuiLink
                  href="https://www.tinyeasy.co.nz/tiny-house-render-tool"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SoftButton variant="gradient" color="info" fullWidth>
                    Find Out More
                  </SoftButton>
                </MuiLink>
              </SoftBox>
            </Grid>
            <Grid xs={12} lg={5}>
              <SoftBox
                component="img"
                src="https://drive.google.com/uc?export=download&id=1hDtC8_WMFve3JeXCP2g3w8T2OhoOtUSf"
                alt="render-image"
                width="100%"
              />
            </Grid>
          </Grid>
        </SoftBox>
        <Divider />
        {/*Render Upgrade Section. Blurred if not business*/}
        {isBusiness ? (
          <div>{businessUpgradeCards}</div>
        ) : (
          <div style={{ filter: "blur(12px)", pointerEvents: "none" }}>{businessUpgradeCards}</div>
        )}
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default RenderUpgrade;
