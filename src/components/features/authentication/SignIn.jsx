import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import AuthError from "../../common/AuthError";
import SignInButton from "../../common/SignInButton";

import {FaGithub} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

function SignIn() {
    const {logInWithProvider, currentUser, error} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    return (
        <section
            className="flex flex-col max-w-[90%] w-full gap-[2em] text-neutral-100 min-[600px]:max-w-[500px] min-[1000px]:ml-[250px] duration-[0.5s]">
            <div className="flex flex-col gap-[0.5em] text-center">
                <h2 className="text-[2rem] font-bold">Sign In</h2>
                <p>Connect with your favorite platform</p>
            </div>

            <div className="flex flex-col gap-[1em]">
                <SignInButton onClick={() => logInWithProvider("google")}
                              className="bg-white text-gray-700 hover:bg-neutral-200"
                              icon={FcGoogle}>
                    Sign in with Google
                </SignInButton>
                <SignInButton
                    onClick={() => logInWithProvider("github")}
                    className=" bg-[#31373D] text-white  hover:bg-[#2b3137] border border-neutral-600"
                    icon={FaGithub}
                >
                    Sign in with GitHub
                </SignInButton>
            </div>
            <AuthError error={error}/>
        </section>
    );
}

export default SignIn;