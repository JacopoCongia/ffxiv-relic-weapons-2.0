import { createContext, useState } from "react";
import { addUserToDb, auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential
} from "firebase/auth";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  async function createAccount(userData) {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      setEmailSent(true);
      sendEmailVerification(credential.user);
      addUserToDb(credential.user);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setEmailSent(false);
      }, 10000);
    }
  }

  async function verifyEmail(currentUser) {
    try {
      await sendEmailVerification(currentUser);
      setEmailSent(true);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setEmailSent(false);
      }, 10000);
    }
  }

  async function logIn(userData) {
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error) {
      setError(error);
    }
  }

  async function logInAgain(password) {
    try {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        password
      );
      await reauthenticateWithCredential(auth.currentUser, credential);
    } catch (error) {
      setError(error);
    } finally {
      deleteAccount();
    }
  }

  function logOut() {
    signOut(auth)
      .then(() => {
        console.log("Log out successful");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setError(null);
      });
  }

  function deleteAccount() {
    const user = auth.currentUser;
    deleteUser(user)
      .then(() => {
        console.log("Account deleted");
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        createAccount,
        verifyEmail,
        emailSent,
        setEmailSent,
        logIn,
        logInAgain,
        logOut,
        deleteAccount,
        currentUser,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
export default AuthContext;
