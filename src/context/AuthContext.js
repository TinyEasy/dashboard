import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  onIdTokenChanged,
} from "firebase/auth";

import { auth } from "../logic/firebase";
import { checkLicenseVersion, checkLicenseDaysLeft, setFullName } from "logic/firebaseFunctions";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); //Object to provide user information to project.
  const [license, setLicense] = useState({}); //Object to provide license information to project.
  const [licenseExpiry, setLicenseExpiry] = useState(0);

  const createUser = async (email, password, name) => {
    console.log("Creating new user:");
    console.log(email);
    console.log(name);

    try {
      // Create the user with email and password using Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      if (!userCredential || !userCredential.user) {
        // Handle the case where the userCredential or user object is not returned properly
        throw new Error("Authentication failed. User credential not available.");
      }

      setUser(userCredential.user);

      // Introduce a delay of 15 seconds
      await new Promise((resolve) => setTimeout(resolve, 15000));

      // Get the user's token from the userCredential
      const token = await userCredential.user.getIdToken();

      // Call the setFullName function to update the user's name on Firestore
      await setFullName(email, token, name);
      console.log("User created successfully!");
      console.log(userCredential);
      console.log(email);
      console.log(name);

      return userCredential;
    } catch (error) {
      // Handle any errors that occur during the sign-up process
      console.error("Error creating user:", error);
      throw error; // Propagate the error to the calling function if needed
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return new Promise((resolve, reject) => {
      const provider = new GoogleAuthProvider();
      const unsubscribe = onIdTokenChanged(auth, async (user) => {
        if (user) {
          // Check if the user is new by looking for additionalUserInfo in the user object
          if (user.metadata.creationTime === user.metadata.lastSignInTime) {
            console.log("New user found");
            // Resolve with isNewUser flag set to true if the user is new
            unsubscribe();
            resolve({ user, isNewUser: true });
          } else {
            // Resolve with isNewUser flag set to false if the user is not new
            unsubscribe();
            resolve({ user, isNewUser: false });
          }
        }
      });

      signInWithPopup(auth, provider).catch((error) => {
        unsubscribe();
        reject(error);
      });
    });
  };

  const logout = () => {
    // Call the signOut function and then update the user state to null
    return signOut(auth)
      .then(() => {
        setUser(null); // Set the user variable to null after successful logout
      })
      .catch((error) => {
        // Handle any errors that occur during the logout process
        console.error("Logout Error:", error);
      });
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  async function handleSetLicense(userData) {
    if (userData && userData.email != null) {
      try {
        const licenseVersion = await checkLicenseVersion(userData.email, userData.accessToken);
        console.log("License version: " + licenseVersion);
        setLicense(licenseVersion);
      } catch (error) {
        console.log("Checking License Failed");
        console.log(error);
      }
    } else {
      console.log("No user active.");
    }
  }

  async function handleSetLicenseExpiry(userData) {
    if (userData && userData.email != null) {
      try {
        const daysLeft = await checkLicenseDaysLeft(userData.email, userData.accessToken);
        console.log("License expires in: " + daysLeft + " days.");
        setLicenseExpiry(daysLeft);
      } catch (error) {
        console.log("Checking License Expiry Failed");
        console.log(error);
      }
    } else {
      console.log("No user active to check license expiry.");
    }
  }

  //"Event" to automatically update the current user information if it changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== user) {
        console.log(currentUser);
        setUser(currentUser);
        handleSetLicense(currentUser);
        setTimeout(() => {
          handleSetLicense(currentUser);
          handleSetLicenseExpiry(currentUser);
        }, 15000); // Delay execution by 15 seconds
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        createUser,
        signIn,
        googleSignIn,
        logout,
        forgotPassword,
        user,
        license,
        licenseExpiry,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserAuth = () => {
  return useContext(UserContext);
};
