import { createContext, useState, useEffect } from "react";
import { addUserToDb, auth, deleteUserData } from "../../firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  deleteUser,
  reauthenticateWithPopup,
} from "firebase/auth";

const AuthContext = createContext();

// Initialize Providers
const googleProvider = new GoogleAuthProvider();
// Always show Google's account picker. Without this, Google signs in straight
// away with the browser's only (or last used) account, so people with several
// Google accounts can't choose which one holds their progress.
googleProvider.setCustomParameters({ prompt: "select_account" });
const githubProvider = new GithubAuthProvider();

function AuthContextProvider({ children }) {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ?? null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Auto-clear errors after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Generic Login Function
  async function logInWithProvider(providerName) {
    let provider;
    switch (providerName) {
      case "google":
        provider = googleProvider;
        break;
      case "github":
        provider = githubProvider;
        break;
      default:
        setError({ message: "Invalid provider selected" });
        return;
    }

    try {
      const result = await signInWithPopup(auth, provider);
      // Create user DB entry if it doesn't exist yet
      await addUserToDb(result.user);
      console.log(`Signed in with ${providerName}`);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  async function logOut() {
    try {
      await signOut(auth);
      setError(null);
    } catch (error) {
      setError(error);
    }
  }

  // Delete the account: re-authenticate, then delete Firestore data, then the Auth user.
  // Re-authenticating up front means that if the user cancels the popup, nothing has
  // been deleted yet (deleting data first and re-authenticating only on
  // auth/requires-recent-login could leave an account with its progress already gone).
  async function deleteAccount() {
    const user = auth.currentUser;
    if (!user) return;

    const providerId = user.providerData[0]?.providerId;
    let provider;
    if (providerId === "google.com") provider = googleProvider;
    else if (providerId === "github.com") provider = githubProvider;
    else {
      setError({
        message: "Could not determine provider for re-authentication",
      });
      return;
    }

    try {
      // Called before any other await so the popup still counts as part of the
      // user's click and isn't blocked by the browser
      await reauthenticateWithPopup(user, provider);
    } catch (error) {
      if (
        error.code === "auth/popup-closed-by-user" ||
        error.code === "auth/cancelled-popup-request"
      ) {
        setError({
          message: "Account deletion cancelled. Nothing was deleted.",
        });
      } else {
        setError(error);
      }
      return;
    }

    try {
      // Firestore data goes first, while the user is still authenticated
      // (security rules reject the delete once the Auth user is gone)
      await deleteUserData(user);
      await deleteUser(user);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        logInWithProvider,
        logOut,
        deleteAccount,
        currentUser,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
export default AuthContext;
