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
import { checkLicenseVersion } from "logic/firebaseFunctions";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); //Object to provide user information to project.
  const [license, setLicense] = useState({}); //Object to provide license information to project.

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return new Promise((resolve, reject) => {
      const provider = new GoogleAuthProvider();
      const unsubscribe = onIdTokenChanged(auth, (user) => {
        if (user) {
          unsubscribe();
          resolve(user);
        }
      });

      signInWithPopup(auth, provider).catch((error) => {
        unsubscribe();
        reject(error);
      });
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  async function handleSetLicense(userData) {
    console.log("Checking License");
    if (userData && userData.email != null) {
      try {
        const licenseVersion = await checkLicenseVersion(userData.email, userData.accessToken);
        console.log("Checking License Success");
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

  //"Event" to automatically update the current user information if it changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== user) {
        console.log(currentUser);
        setUser(currentUser);
        handleSetLicense(currentUser);
        setTimeout(() => {
          handleSetLicense(currentUser);
        }, 15000); // Delay execution by 30 seconds
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <UserContext.Provider
      value={{ createUser, signIn, googleSignIn, logout, forgotPassword, user, license }}
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
