import { reload } from "firebase/auth";

import SignIn from "../components/features/authentication/SignIn";
import SignInAgain from "../components/features/authentication/SignInAgain";
import Button from "../components/common/Button";

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
        <div className="mt-[5em] flex flex-col items-center duration-[0.5s] min-[650px]:mx-auto min-[650px]:w-[66%] min-[1000px]:pl-[250px]">
          <h1 className="mb-1 w-full bg-neutral-700 p-5 text-center text-[1rem] text-[#dbdbdb] min-[650px]:rounded">
            <span className="font-bold">Logged in as:</span> {currentUser.email}
          </h1>
          {!currentUser?.emailVerified ? (
            <button
              disabled={emailSent}
              onClick={() => handleVerifyEmail()}
              className="mb-[5em]hover:cursor-pointer mb-[5em] w-full bg-neutral-700 p-5 text-center text-[1rem] text-green-500 hover:bg-neutral-600 disabled:cursor-not-allowed disabled:text-[#ccc] disabled:opacity-80 min-[650px]:rounded"
            >
              {emailSent
                ? "Verification email sent, check your inbox."
                : "Click to send a new verification email."}
            </button>
          ) : (
            <h1 className="mb-[5em] w-full bg-neutral-700 p-5 text-center font-semibold text-green-500 min-[650px]:rounded">
              Email Verified
            </h1>
          )}
          <div className="flex flex-wrap gap-[1em]">
            <Button onClick={handleLogOut} warning>
              Log Out
            </Button>

            {error?.code === "auth/requires-recent-login" ? (
              <div className="mt-[1em] w-[100%] text-center">
                <SignInAgain />
              </div>
            ) : (
              <Button onClick={handleDeleteAccount} warning>
                Delete Account
              </Button>
            )}
          </div>
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
