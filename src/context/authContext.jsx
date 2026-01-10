import {createContext, useState, useEffect} from "react";
import {addUserToDb, auth} from "../../firebase";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    sendEmailVerification,
    onAuthStateChanged,
    signOut,
    deleteUser,
    reauthenticateWithPopup,
} from "firebase/auth";

const AuthContext = createContext();

// Initialize Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function AuthContextProvider({children}) {
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
                setError({message: "Invalid provider selected"});
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

    // Re-auth and Delete with Popup
    async function deleteAccount() {
        const user = auth.currentUser;
        try {
            await deleteUser(user);
        } catch (error) {
            // If Firebase requires recent login, trigger re-auth popup
            if (error.code === 'auth/requires-recent-login') {
                try {
                    // Detect which provider they used (google, github, etc.)
                    // This is a simplification; for better accuracy, check user.providerData
                    const providerId = user.providerData[0]?.providerId;

                    let provider;
                    if (providerId === 'google.com') provider = googleProvider;
                    else if (providerId === 'github.com') provider = githubProvider;
                    else {
                        setError({message: "Could not determine provider for re-authentication"});
                        return;
                    }

                    await reauthenticateWithPopup(user, provider);
                    await deleteUser(user); // Try delete again

                } catch (reAuthError) {
                    setError(reAuthError);
                }
            } else {
                setError(error);
            }
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

export {AuthContextProvider};
export default AuthContext;
