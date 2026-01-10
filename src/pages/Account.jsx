import SignIn from "../components/features/authentication/SignIn";
import Button from "../components/common/Button";
import useAuth from "../hooks/use-auth";
import UserCard from "../components/common/UserCard";
import AuthError from "../components/common/AuthError";

function Account() {
    const {currentUser, logOut, deleteAccount, error} = useAuth();

    function handleDeleteAccount() {
        if (window.confirm("Are you sure? This cannot be undone.")) {
            deleteAccount();
        }
    }

    // Guard clause: if no user, show login
    if (!currentUser) {
        return (
            <div className="mx-auto flex w-full flex-col items-center py-[3em]">
                <SignIn/>
            </div>
        );
    }

    return (
        <div
            className="mx-auto flex w-full flex-col items-center gap-[3em] py-[3em] duration-[0.5s] min-[1000px]:pl-[250px]">
            <div className="flex max-w-[90%] flex-col gap-[1em] min-[600px]:max-w-[500px]">
                <UserCard/>

                <div className="flex flex-wrap gap-[1em] justify-center">
                    <Button onClick={logOut} warning>
                        Log Out
                    </Button>
                    <Button onClick={handleDeleteAccount} warning>
                        Delete Account
                    </Button>
                </div>

                {/* Display errors if deletion fails */}
                <AuthError error={error}/>
            </div>
        </div>
    );
}

export default Account;