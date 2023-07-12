import SpaceShip from "examples/Icons/SpaceShip";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";

function LaunchDesignerButton(){
    return <Link to={"/launch"}>
    <SoftButton
    variant="gradient"
    color="info"
    fullWidth
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <SpaceShip color="white" size="16px" />
    &nbsp; LAUNCH DESIGNER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </SoftButton>
    </Link>
}

export default LaunchDesignerButton;