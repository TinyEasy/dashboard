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

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //----------- AUTHENTICATION -----------//
  const createUser = (email, password, name) => {
    return new Promise(async (resolve, reject) => {
      console.log("Creating new user:");
      console.log(email);
      console.log(name);

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        if (!userCredential || !userCredential.user) {
          throw new Error("Authentication failed. User credential not available.");
        }
        setUser(userCredential.user);
        await new Promise((resolve) => setTimeout(resolve, 15000));
        const token = await userCredential.user.getIdToken();
        await setFullName(email, token, name);
        console.log("User created successfully!");
        console.log(userCredential);
        console.log(email);
        console.log(name);
        resolve(userCredential.user);
      } catch (error) {
        console.error("Error creating user:", error);
        reject(error);
      }
    });
  };

  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const googleSignIn = () => {
    return new Promise((resolve, reject) => {
      const provider = new GoogleAuthProvider();
      const unsubscribe = onIdTokenChanged(auth, async (user) => {
        if (user) {
          if (user.metadata.creationTime === user.metadata.lastSignInTime) {
            console.log("New user found");
            unsubscribe();
            resolve({ user, isNewUser: true });
          } else {
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
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //Update the current user information if it changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== user) {
        console.log(currentUser);
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  //----------- EXPORT -----------//

  return (
    <UserContext.Provider
      value={{
        createUser,
        signIn,
        googleSignIn,
        logout,
        forgotPassword,
        user
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
