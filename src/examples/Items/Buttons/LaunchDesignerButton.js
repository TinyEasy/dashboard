import SpaceShip from "examples/Icons/SpaceShip";
import SoftButton from "components/SoftButton";
import { ga4Events } from "logic/google-analytics/google-analytics-events";

function LaunchDesignerButton() {
  const handleOpenNewTab = () => {
    ga4Events.eventLaunchButtonClick();
    window.open("/launcher", "_blank");
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
