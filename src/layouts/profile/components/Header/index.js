// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Images
import ProfileDisplay from "examples/Items/ProfileDisplay/ProfileDisplay";

function Header() {
  return (
    <SoftBox>
      <Card
        sx={{
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          py: 2,
          px: 2,
        }}
      >
        <ProfileDisplay profileSize="xl"/>
      </Card>
    </SoftBox>
  );
}

export default Header;
