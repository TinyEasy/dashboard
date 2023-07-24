import React, { useEffect, useState } from "react";
import IFrameLayout from "examples/LayoutContainers/IFrameLayout";
import { UserAuth } from "context/AuthContext";

function Launcher() {
  const [iframeWidth, setIframeWidth] = useState(window.innerWidth);
  const [iframeHeight, setIframeHeight] = useState(window.innerHeight);

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
  const awsUrl = "https://3dthd-launcher.s3.ap-southeast-2.amazonaws.com/Build3A-LaunchTest/index.html";
  let id = "ID";
  if (user && user.uid) {
    id = user.uid;
  }
  let url = awsUrl + "?id=" + id;
  console.log("ID = " + id);
  console.log("URL = " + url);

  return (
    <div style={{ overflow: "hidden" }}>
      <IFrameLayout background="white" style={{ border: "none", margin: "0", padding: "0" }}>
        <div style={{ overflow: "hidden" }}>
          <iframe
            src={url}
            width={iframeWidth}
            height={iframeHeight - 10}
            title="3D Tiny House Designer"
            style={{ border: "none", margin: "0", padding: "0" }}
          ></iframe>
        </div>
      </IFrameLayout>
    </div>
  );
}

export default Launcher;
