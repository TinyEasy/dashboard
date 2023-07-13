// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import PageLayout from "examples/LayoutContainers/PageLayout";

function TinyEasyAuthLayout({ color, leftContent, rightContent, rightAlign }) {
  return (
    <PageLayout background="white">
      <Grid container>
        {/* Left Screen */}
        <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
          <SoftBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <SoftBox p={3}>{leftContent}</SoftBox>
          </SoftBox>
        </Grid>

        {/* Right Screen */}
        <Grid item xs={12} lg={6}>
          <SoftBox
            display={{ xs: "none", lg: "flex" }}
            flexDirection="column"
            justifyContent="center"
            alignItems={rightAlign}
            width="calc(100% - 4rem)"
            height="calc(100vh - 4rem)"
            position="relative"
            borderRadius="xxl"
            textAlign={rightAlign}
            bgColor={color}
            variant="gradient"
            m={4}
            px={13}
            sx={{
              overflow: "hidden",
            }}
          >
            {rightContent}
          </SoftBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of IllustrationLayout
TinyEasyAuthLayout.defaultProps = {
  color: "info",
};

// Typechecking props for the IllustrationLayout
TinyEasyAuthLayout.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  rightAlign: PropTypes.string.isRequired
};

export default TinyEasyAuthLayout;
