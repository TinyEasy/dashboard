import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../logic/firebase";
import { checkLicenseVersion, checkLicenseDaysLeft } from "logic/firebaseFunctions";
import { ga4Events } from "logic/google-analytics/google-analytics-events";

//Contexts
import { UserAuth } from "context/AuthContext";

const LicenseContext = createContext();

export const LicenseContextProvider = ({ children }) => {
  const { user } = UserAuth();
  const [license, setLicense] = useState({});
  const [licenseExpiry, setLicenseExpiry] = useState(0);

  async function handleSetLicense(userData) {
    if (
      license === "trial" ||
      license === "personal" ||
      license === "expired" ||
      license === "business"
    ) {
      return;
    }

    if (userData && userData.email != null) {
      try {
        const licenseVersion = await checkLicenseVersion(userData.email, userData.accessToken);
        console.log("[DESIGNER LICENSE] License version: " + licenseVersion);
        setLicense(licenseVersion);
        ga4Events.userSetLicense(licenseVersion);
      } catch (error) {
        console.log("[DESIGNER LICENSE] Checking License Failed");
        console.log(error);
      }
    } else {
      console.log("[DESIGNER LICENSE] No user active.");
    }
  }

  async function handleSetLicenseExpiry(userData) {
    if (userData && userData.email != null) {
      try {
        const daysLeft = await checkLicenseDaysLeft(userData.email, userData.accessToken);
        console.log("[DESIGNER LICENSE] License expires in: " + daysLeft + " days.");
        setLicenseExpiry(daysLeft);
      } catch (error) {
        console.log("[DESIGNER LICENSE] Checking License Expiry Failed");
        console.log(error);
      }
    } else {
      console.log("[DESIGNER LICENSE] No user active to check license expiry.");
    }
  }

  //Update the current license information if it changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== user) {
        console.log(currentUser);
        handleSetLicense(currentUser);
        setTimeout(() => {
          handleSetLicense(currentUser);
          handleSetLicenseExpiry(currentUser);
        }, 15000);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  //----------- EXPORT -----------//

  return (
    <LicenseContext.Provider
      value={{
        license,
        licenseExpiry,
      }}
    >
      {children}
    </LicenseContext.Provider>
  );
};

LicenseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserLicense = () => {
  return useContext(LicenseContext);
};
