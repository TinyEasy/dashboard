// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";
import MuiLink from "@mui/material/Link";
import SoftButton from "components/SoftButton";

function RenderBusinessOnlyCard() {
  return (
    <Card>
      <SoftBox p={4} display="flex" flexDirection="column" height="100%">
        {/* Personal Heading */}
        <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
          Render Tool is only available as a Business subscription add-on!
        </SoftTypography>
        {/* Description */}
        <SoftTypography variant="body2" fontWeight="bold" opacity="0.5" gutterBottom>
          Contact us to find out more about 3D Tiny House Designer Business!
        </SoftTypography>
        {/*Contact Us*/}
        <SoftBox width="225px">
          <MuiLink
            href="https://www.tinyeasy.co.nz/book-your-demo"
            target="_blank"
            rel="noreferrer"
          >
            <SoftButton variant="gradient" color="info" fullWidth>
              Contact Us
            </SoftButton>
          </MuiLink>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default RenderBusinessOnlyCard;
