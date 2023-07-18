import SpaceShip from "examples/Icons/SpaceShip";
import SoftButton from "components/SoftButton";
// import { UserAuth } from "context/AuthContext";

function LaunchDesignerButton() {
  // const { user } = UserAuth();
  // const accessToken = user.uid;

  const handleOpenNewTab = () => {
    // let queryString = "?id=";
    // if (accessToken) queryString = queryString + accessToken;
    // const url = `/launcher${queryString}`;
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
