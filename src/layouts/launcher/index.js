import React, { useEffect, useState } from "react";
import IFrameLayout from "examples/LayoutContainers/IFrameLayout";
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
    "https://3dthd-launcher.s3.ap-southeast-2.amazonaws.com/Build5B-Update/index.html";
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
  const isCompatiblePlatform = ["Win32", "MacIntel", "Linux x86_64"].includes(navigator.platform);

  if (!isCompatiblePlatform) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>👋 Hey! Your operating system is not compatible. Switch to a desktop or laptop device running Windows, Mac, or Linux.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>Something went wrong. Please close the tab and open the 3D Tiny House Designer again.</p>
      </div>
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
