import SpaceShip from "examples/Icons/SpaceShip";
import SoftButton from "components/SoftButton";
import { UserAuth } from "context/AuthContext";

function LaunchDesignerButton() {
  const { user } = UserAuth();
  const accessToken = user.accessToken;

  const handleOpenNewTab = () => {
    let queryString = "?token=";
    if (accessToken) queryString = queryString + accessToken;
    const url = `/launcher${queryString}`;
    console.log("Url = " + url);
    window.open(url, "_blank");
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
