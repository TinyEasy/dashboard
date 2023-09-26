//Logic
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

//Firebase Default Functions
import { onAuthStateChanged } from "firebase/auth";

//Firebase Custom Functions
import { checkRenderLicense } from "logic/firebaseFunctions";
import { auth } from "../logic/firebase";

//Contexts
import { UserAuth } from "context/AuthContext";

const AddOnContext = createContext();

export const AddOnContextProvider = ({ children }) => {
  //----------- VARIABLES -----------//
  const { user } = UserAuth();
  const [hasRenderLicense, setRenderLicense] = useState(false);
  const [freeRenderLimit, setFreeRenderLimit] = useState(1);
  const [freeRendersRemaining, setFreeRendersRemaining] = useState(0);

  //----------- RENDER ADD ON FUNCTIONS -----------//
  async function handleSetRenderLicense(userData) {
    if (userData && userData.email != null) {
      try {
        const renderLicenseDataString = await checkRenderLicense(
          userData.email,
          userData.accessToken
        );
        const renderLicenseData = JSON.parse(renderLicenseDataString);
        console.log("[RENDER ADD-ON LICENSE] Render License Found: ", renderLicenseDataString);

        const { licenseActive, maxFreeRenders, freeRendersRemaining } = renderLicenseData;

        console.log("[RENDER ADD-ON LICENSE] License Active: ", licenseActive);
        console.log("[RENDER ADD-ON LICENSE] Free Render Limit: ", maxFreeRenders);
        console.log("[RENDER ADD-ON LICENSE] Free Renders Remaining: ", freeRendersRemaining);

        setRenderLicense(licenseActive);
        setFreeRenderLimit(maxFreeRenders);
        setFreeRendersRemaining(freeRendersRemaining);
      } catch (error) {
        console.log("[RENDER ADD-ON LICENSE] Checking License Failed");
        console.error(error);
      }
    } else {
      console.log("[RENDER ADD-ON LICENSE] No user active.");
    }
  }

  //Update the license information if it changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== user) {
        console.log("[RENDER ADD-ON LICENSE] Current User: " + currentUser);
        handleSetRenderLicense(currentUser);
        setTimeout(() => {
          handleSetRenderLicense(currentUser);
        }, 15000);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  //----------- EXPORT -----------//

  return (
    <AddOnContext.Provider
      value={{
        hasRenderLicense,
        freeRenderLimit,
        freeRendersRemaining,
      }}
    >
      {children}
    </AddOnContext.Provider>
  );
};

AddOnContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserAddOn = () => {
  return useContext(AddOnContext);
};
