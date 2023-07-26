import React, { useEffect, useState } from "react";
import IFrameLayout from "examples/LayoutContainers/IFrameLayout";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { UserAuth } from "context/AuthContext";

function Launcher() {
  const [iframeWidth, setIframeWidth] = useState(window.innerWidth);
  const [iframeHeight, setIframeHeight] = useState(window.innerHeight);
  const [error, setError] = useState(false); // State to track the error

  useEffect(() => {
    const handleResize = () => {
      setIframeWidth(window.innerWidth);
      setIframeHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { user } = UserAuth();
  const awsUrl =
    "https://3dthd-launcher.s3.ap-southeast-2.amazonaws.com/Build3A-LaunchTest/index.html";
  let id = "ID";
  if (user && user.uid) {
    id = user.uid;
  }
  let url = awsUrl + "?id=" + id;
  console.log("ID = " + id);
  console.log("URL = " + url);

  // Function to handle iFrame loading error
  const handleIframeError = () => {
    setError(true);
  };

  // Check if the platform is compatible (Windows, Mac, or Linux)
  const isCompatiblePlatform = [
    "Win32",
    "Win64",
    "Win16",
    "Windows",
    "Macintosh",
    "Mac",
    "Linux",
    "Linux i686",
    "Linux x86_64",
  ].includes(navigator.platform);

  if (!isCompatiblePlatform) {
    return (
      <PageLayout background="white">
        <Grid container>
          {/* Left Screen */}
          <Grid item xs={12}>
            <SoftBox
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              height="100vh"
            >
              <SoftBox pt={2} pb={3} px={3}>
                {/* Headline */}
                <SoftBox mb={1}>
                  <img
                    src={loadingGif}
                    alt="Animated Logo"
                    style={{ width: "75%", height: "auto" }}
                  />
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="body1">
                    👋 Hey! Your operating system is not compatible. Switch to a desktop or laptop
                    device running Windows, Mac, or Linux.  <br />
                    <br />
                    See you soon! 😄
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout background="white">
        <Grid container>
          {/* Left Screen */}
          <Grid item xs={12}>
            <SoftBox
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              height="100vh"
            >
              <SoftBox pt={2} pb={3} px={3}>
                {/* Headline */}
                <SoftBox mb={1}>
                  <img
                    src={loadingGif}
                    alt="Animated Logo"
                    style={{ width: "75%", height: "auto" }}
                  />
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="body1">
                    👋 Hey! Something went wrong. Please close the tab and open the 3D Tiny House
                    Designer again.😄
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </PageLayout>
    );
  }
  return (
    <IFrameLayout background="white" style={{ border: "none", margin: "0", padding: "0" }}>
      <div style={{ overflow: "hidden" }}>
        <iframe
          src={url}
          width={iframeWidth}
          height={iframeHeight - 10}
          title="3D Tiny House Designer"
          style={{ border: "none", margin: "0", padding: "0" }}
          onError={handleIframeError} // Attach the error event handler
        ></iframe>
      </div>
    </IFrameLayout>
  );
}

export default Launcher;
