import LearnIcon from "examples/Icons/LearnIcon";
import SoftButton from "components/SoftButton";
import MuiLink from "@mui/material/Link";

function LaunchLearnCentreButton(){
    return <MuiLink href="https://documentation.tinyeasy.co.nz/" target="_blank" rel="noreferrer">
    <SoftButton
    variant="gradient"
    color="info"
    fullWidth
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <LearnIcon color="white" size="16px" />
    &nbsp; Open Learn Centre &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </SoftButton>
    </MuiLink>
}

export default LaunchLearnCentreButton;