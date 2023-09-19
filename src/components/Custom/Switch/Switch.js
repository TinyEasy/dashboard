import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import { Card} from "@mui/material";

function Switch() {
  const [isYearly, setIsYearly] = useState(true);

  // Function to toggle the switch state when "Yearly" is clicked
  const handleYearlyClick = () => {
    setIsYearly(true);
    console.log("Set to Yearly");
  };

  // Function to toggle the switch state when "Monthly" is clicked
  const handleMonthlyClick = () => {
    setIsYearly(false);
    console.log("Set to Monthly");
  };

  return (
    <div>
      <SoftBox width="250px">
        <Card sx={{ height: "100%"}} >
          <Grid container>
            {/* Left Screen */}
            <Grid item xs={6}>
              <SoftButton
                onClick={handleYearlyClick}
                variant="contained"
                color={isYearly ? "info" : "white"}
                style={{ width: "100%"}}
                m={3}
                p={3}
                opacity={0}
              >
                <SoftTypography variant="h6" color={isYearly ? "white" : "dark"}>
                  <b>Yearly</b>
                </SoftTypography>
              </SoftButton>
            </Grid>

            {/* Right Screen */}
            <Grid item xs={6}>
              <SoftButton
                onClick={handleMonthlyClick}
                variant="contained"
                color={isYearly ? "white" : "info"}
                style={{ width: "100%" }}
                m={3}
                p={3}
              >
                <SoftTypography variant="h6"color={isYearly ? "dark" : "white"}>
                  <b>Monthly</b>
                </SoftTypography>
              </SoftButton>
            </Grid>
          </Grid>
        </Card>
      </SoftBox>
    </div>
  );
}

export default Switch;