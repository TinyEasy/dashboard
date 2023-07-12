// react-router components
import { Link } from "react-router-dom";

import LearnIconLine from "examples/Icons/LearnIconLine";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function ExploreTutorialsPageItem() {
  return (
    <Link to="/learn">
      <SoftBox
        display={{ xs: "none", lg: "flex" }}
        flexDirection="column"
        alignItems="left"
        height="100%"
        position="relative"
        borderRadius="xxl"
        textAlign="left"
        bgColor="info"
        variant="gradient"
        sx={{
          overflow: "hidden",
        }}
      >
        {/*Header*/}
        <SoftBox display="block" mt={2.5} px={2}>
          <SoftTypography
            display="inline"
            variant="h5"
            textTransform="capitalize"
            className="color-background"
            fontWeight="bold"
            color="white"
          >
            Explore Tutorials
          </SoftTypography>
          
        </SoftBox>
        
        <SoftBox px={2}>
          <SoftTypography variant="body2" component="p" color="text">
          <LearnIconLine size="50px" color="white" />
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Link>
  );
}

export default ExploreTutorialsPageItem;
