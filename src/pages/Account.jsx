import SignIn from "../components/features/authentication/SignIn";
import SignInAgain from "../components/features/authentication/SignInAgain";
import Button from "../components/common/Button";

import useAuth from "../hooks/use-auth";
import UserCard from "../components/common/UserCard.jsx";

function Account() {
  const { currentUser, logOut, deleteAccount, error } = useAuth();

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

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-[3em] py-[3em] duration-[0.5s] min-[1000px]:pl-[250px]">
      {currentUser ? (
        <div className="flex max-w-[90%] flex-col gap-[1em] min-[600px]:max-w-[500px]">
          <UserCard />
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
        <SignIn />
      )}
    </div>
  );
}

export default Account;
