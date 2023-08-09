import { reload } from "firebase/auth";
import SignIn from "../components/SignIn";
import SignInAgain from "../components/SignInAgain";
import useAuth from "../hooks/use-auth";

function Account() {
  const { currentUser, logOut, deleteAccount, verifyEmail, error, emailSent } =
    useAuth();

  function handleLogOut() {
    logOut();
  }

  function handleDeleteAccount(e) {
    e.preventDefault();
    if (error?.code !== "auth/requires-recent-login") {
      if (confirm("Are you sure?")) {
        deleteAccount();
      }
    }
  }

  async function handleVerifyEmail() {
    await reload(currentUser);

    if (!currentUser?.emailVerified) {
      verifyEmail(currentUser);
    } else {
      location.reload();
    }
  }

  return (
    <>
      {currentUser ? (
        <div className="mt-[5em] flex flex-col items-center duration-[0.5s] min-[1000px]:pl-[250px] min-[650px]:w-[66%] min-[650px]:mx-auto">
          <h1 className="text-[#dbdbdb] text-center bg-neutral-700 p-5 w-full text-[1rem] mb-1 min-[650px]:rounded">
            <span className="font-bold">Logged in as:</span> {currentUser.email}
          </h1>
          {!currentUser?.emailVerified ? (
            <button
              disabled={emailSent}
              onClick={() => handleVerifyEmail()}
              className="text-center w-full bg-neutral-700 text-green-500 p-5 text-[1rem] mb-[5em]hover:cursor-pointer hover:bg-neutral-600 disabled:opacity-80 disabled:text-[#ccc] disabled:cursor-not-allowed min-[650px]:rounded mb-[5em]"
            >
              {emailSent
                ? "Verification email sent, check your inbox."
                : "Click to send a new verification email."}
            </button>
          ) : (
            <h1 className="text-center w-full font-semibold bg-neutral-700 text-green-500 p-5 mb-[5em] min-[650px]:rounded">
              Email Verified
            </h1>
          )}
          <button
            onClick={handleLogOut}
            className="w-[100%] mb-[1.5em] text-white py-2 bg-red-700 hover:bg-red-600 min-[650px]:rounded"
          >
            Log Out
          </button>

          {error?.code === "auth/requires-recent-login" ? (
            <div className="mt-[1em] w-[100%] text-center">
              <SignInAgain />
            </div>
          ) : (
            <button
              onClick={handleDeleteAccount}
              className="w-[100%] text-white py-2 bg-red-700 hover:bg-red-600 min-[650px]:rounded"
            >
              Delete Account
            </button>
          )}
        </div>
      ) : (
        <div className="mt-[4em] duration-[0.5s] min-[1000px]:pl-[250px]">
          <SignIn />
        </div>
      )}
    </>
  );
}

export default Account;
