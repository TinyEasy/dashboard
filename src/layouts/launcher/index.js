import React, { useEffect, useState } from "react";
import IFrameLayout from "examples/LayoutContainers/IFrameLayout";

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

  return (
    <div style={{ overflow: "hidden" }}>
    <IFrameLayout background="white" style={{ border: 'none', margin: '0', padding: '0'}}>
    <div style={{ overflow: "hidden" }}>
      <iframe
        src="https://3dtinyhousebuilderfreev1.s3.ap-southeast-2.amazonaws.com/Launcher-Build-1/index.html"
        width={iframeWidth}
        height={iframeHeight-10}
        title="3D Tiny House Designer"
        style={{ border: 'none', margin: '0', padding: '0' }}
      ></iframe>
    </div>
    </IFrameLayout></div>
 
  );
}

export default Launcher;
