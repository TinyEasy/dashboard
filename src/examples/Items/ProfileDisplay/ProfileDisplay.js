//Logic
import PropTypes from "prop-types";

//Components
import { Grid } from "@mui/material";
import SoftAvatar from "components/SoftAvatar";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

//Images
import profileBlank from "assets/images/profile-blank.png";

//Contexts
import { UserAuth } from "context/AuthContext";
import { UserLicense } from "context/LicenseContext";



function ProfileDisplay({ profileSize }) {
  const { user } = UserAuth();
  const { license, licenseExpiry } = UserLicense();

  let licenseText = "Free Trial";
  let licenseColor = "info";
  let licenseBorderColor = "rgb(254, 115, 76)";
  let timeRemaining = "X";
  GetTimeRemaining() ;

  function GetTimeRemaining() {
    if (licenseExpiry) {
      timeRemaining = licenseExpiry;
    }
  }

  switch (license) {
    case "trial":
      licenseText = "Free Trial";
      licenseColor = "info";
      licenseBorderColor = "rgb(239, 117, 38)";
      break;
    case "expired":
      licenseText = "Expired License";
      licenseColor = "secondary";
      licenseBorderColor = "rgb(210, 210, 210)";
      break;
    case "personal":
      licenseText = "Personal";
      licenseColor = "info";
      licenseBorderColor = "rgb(239, 117, 38)";
      break;
    case "business":
      licenseText = "Business";
      licenseColor = "-";
      licenseBorderColor = "rgb(43, 43, 43)";
      break;
    default:
      break;
  }

  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  const truncatedDisplayName =
    user && user.displayName
      ? truncateString(user.displayName, 15)
      : user && user.email
      ? truncateString(user.email, 15)
      : "Username";

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item>
        <SoftAvatar
          src={user && user.photoURL ? user.photoURL : profileBlank}
          alt="profile-image"
          variant="rounded"
          size={profileSize}
          shadow="sm"
        />
      </Grid>
      <Grid item>
        <SoftBox height="100%" mt={0.5} lineHeight={1}>
          {user && (
            <SoftTypography variant="body2" fontWeight="medium">
              {truncatedDisplayName}
            </SoftTypography>
          )}
          <SoftTypography
            variant="button"
            color={licenseColor}
            fontWeight="medium"
            textGradient={true}
            style={{
              border: `solid ${licenseBorderColor}`,
              borderWidth: "2px",
              borderRadius: "7px",
              padding: "2px 8px",
            }}
          >
            {licenseText}
          </SoftTypography>
          {license && license === "trial" && timeRemaining!== "X" && (
            <SoftTypography variant="body2" fontWeight="medium" opacity="0.5">
              <i>{timeRemaining} Days Left </i>
            </SoftTypography>
          )}
        </SoftBox>
      </Grid>
    </Grid>
  );
}

ProfileDisplay.propTypes = {
  profileSize: PropTypes.string.isRequired,
};

export default ProfileDisplay;
