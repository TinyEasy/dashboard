// @mui material components
import Divider from "@mui/material/Divider";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function Separator(props) {
  const { label } = props;

  return (
    <SoftBox position="relative" py={0.25}>
      <Divider />
      <SoftBox
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <SoftTypography variant="body2"  color="secondary" opacity={0.5}>
          {label}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// Typechecking props for the label
Separator.propTypes = {
  label: PropTypes.string
};

export default Separator;