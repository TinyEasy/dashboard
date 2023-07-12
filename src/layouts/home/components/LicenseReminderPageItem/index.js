import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Images
import present from "assets/images/illustrations/present.png";
import warning from "assets/images/illustrations/warning.png";

//Icons
import StarIcon from "examples/Icons/StarIcon";

//Context
import { UserAuth } from "context/AuthContext";

function LicenseReminderPageItem() {
  const { license } = UserAuth();

  if (license === "expired")
    return (
      <Card sx={{ height: "100%" }}>
        <SoftBox p={4}>
          <Grid container spacing={3}>
            {/*Left Container Item*/}
            <Grid item xs={12} lg={8}>
              <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
                {/* Heading */}
                <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
                  Your License Has Expired!
                </SoftTypography>
                {/* Body */}
                <SoftBox mb={2}>
                  <SoftTypography variant="body2" color="text">
                    Your trial or your subscription has run out and all tools have been locked; but
                    don&apos;t worry. You can still view your designs in 3D!
                    <br />
                    <br />
                    To unlock all the tools again to keep designing your tiny home, upgrade your
                    subscription to a Personal or Business subscription.
                  </SoftTypography>
                </SoftBox>

                {/* Upgrade Button */}
                <SoftBox>
                  <Link to={"/upgrade"}>
                    <SoftButton
                      component="a"
                      target="_blank"
                      rel="noreferrer"
                      variant="gradient"
                      color="info"
                      fullWidth
                    >
                      <StarIcon color="white" size="16px" />
                      &nbsp; Upgrade
                    </SoftButton>
                  </Link>
                </SoftBox>
              </SoftBox>
            </Grid>
            {/*Right Container Item*/}
            <Grid item xs={12} lg={4} sx={{ position: "relative", ml: "auto" }}>
              <SoftBox
                height="100%"
                display="grid"
                justifyContent="center"
                alignItems="center"
                bgColor="transparent"
                borderRadius="lg"
                variant="gradient"
              >
                <SoftBox component="img" src={warning} alt="warning" width="100%" />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </Card>
    );

  if (license === "trial")
    return (
      <Card sx={{ height: "100%" }}>
        <SoftBox p={4}>
          <Grid container spacing={3}>
            {/*Left Container Item*/}
            <Grid item xs={12} lg={8}>
              <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
                <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
                  3D Tiny House Designer Trial!
                </SoftTypography>
                <SoftBox mb={6}>
                  <SoftTypography variant="body2" color="text">
                    Congratulations! You unlocked your 7-day free trial of the most powerful tiny
                    house design tool. <br />
                    This is the “Dashboard” the place to launch the software, access useful
                    tutorials, and manage your account. <br />
                    Use your Free Trial to learn the basics and create your first tiny house design.{" "}
                    <br />
                    <br />
                    Let&apos;s get started!
                  </SoftTypography>
                  <SoftTypography variant="body2" color="text" fontStyle="italic" opacity={0.6}>
                    <br />
                    PS: No charge or renew will occur unless you decide to upgrade. :D
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Grid>
            {/*Right Container Item*/}
            <Grid item xs={12} lg={4} sx={{ position: "relative", ml: "auto" }}>
              <SoftBox
                height="100%"
                display="grid"
                justifyContent="center"
                alignItems="center"
                bgColor="transparent"
                borderRadius="lg"
                variant="gradient"
              >
                <SoftBox component="img" src={present} alt="present" width="100%" />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </Card>
    );

  return null;
}

export default LicenseReminderPageItem;
