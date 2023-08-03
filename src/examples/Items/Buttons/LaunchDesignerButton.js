import SpaceShip from "examples/Icons/SpaceShip";
import SoftButton from "components/SoftButton";
import { ga4Events } from "logic/google-analytics/google-analytics-events";
import { UserAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";


function LaunchDesignerButton() {
  const navigate = useNavigate();
  const { user } = UserAuth();


  const awsUrl = "https://3dthd-launcher.s3.ap-southeast-2.amazonaws.com/Build5B-Update/index.html";
  let id = "ID";
  if (user && user.uid) {
    id = user.uid;
  }
  let url = awsUrl + "?id=" + id;

  const isCompatiblePlatform = ["Win64","Win32", "Win16","Windows", "Win","MacIntel", "Mac","Linux"].includes(navigator.platform);

  const handleOpenNewTab = () => {
    ga4Events.eventLaunchButtonClick();
    if (isCompatiblePlatform){
      window.open(url, "_blank");
    }
    else {
      navigate("/launch-error");
    }
    
  };

  return (
    <SoftButton variant="gradient" color="info" fullWidth onClick={handleOpenNewTab}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <SpaceShip color="white" size="16px" />
      &nbsp; LAUNCH DESIGNER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </SoftButton>
  );
}

export default LaunchDesignerButton;
