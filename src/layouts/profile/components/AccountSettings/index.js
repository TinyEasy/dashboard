// @mui material components
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

//User account info
import { UserAuth } from "context/AuthContext";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Divider from "@mui/material/Divider";

function AccountSettings() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
      console.log("You are logged out!");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={4}>
        {/*Left Container Item*/}

        <SoftBox pt={2} display="flex" flexDirection="column" height="100%">
          <SoftTypography variant="h3" fontWeight="bold" gutterBottom>
            Account Settings
          </SoftTypography>
          <SoftBox mb={6}>
            <SoftTypography variant="body2" color="text">
              <b>Email:</b>&nbsp;&nbsp;&nbsp; {user && user.email ? user.email : "email"}
            </SoftTypography>
            {user.displayName && (
              <SoftTypography variant="body2" color="text">
                <b>Name:</b>&nbsp;&nbsp;&nbsp;{" "}
                {user && user.displayName ? user.displayName : "name"}
              </SoftTypography>
            )}

            <SoftTypography variant="body2" color="text">
              <b>Password:</b>&nbsp;&nbsp;&nbsp;{" "}
              <i>
                <Link to="/reset-password">
                  <u>Reset Password</u>
                </Link>
              </i>
            </SoftTypography>
            <Divider />
            <SoftTypography variant="body2" color="text" onClick={handleLogout}>
              <MuiLink href={""}>
                <b>
                  <u>Log Out</u>
                </b>
              </MuiLink>
            </SoftTypography>
          </SoftBox>

          {/* BUTTON */}
          <SoftBox>
            {/* {action.type === "internal" ? (
              <Link to={"action.route"}></Link>
            ) : (
              <MuiLink href={"action.route"} target="_blank" rel="noreferrer"></MuiLink>
            )} */}
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default AccountSettings;
