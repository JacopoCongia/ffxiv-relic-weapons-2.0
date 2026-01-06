import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/use-auth.js";

import AuthError from "../../../components/common/AuthError.jsx";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { logIn, logInWithGoogle, error } = useAuth();

  function handleFormChange(e) {
    e.preventDefault();
    const { value, name } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (formData.email && formData.password) {
      logIn(formData);
      setFormData({ email: "", password: "" });
    }
  }

  return (
    <div className="flex w-[90%] flex-col items-center gap-5 pb-[7em] text-white min-[600px]:w-[66%]">
      <h1 className="text-[1.7rem] font-[600]">Sign In</h1>
      <button
        className="flex w-full items-center justify-between rounded bg-[#4285F4] text-center hover:opacity-90"
        onClick={() => logInWithGoogle()}
      >
        <img src="/google-sign-in.svg" />
        <p className="m-auto font-medium">Sign in With Google</p>
      </button>
      <form
        onSubmit={handleFormSubmit}
        className="m-auto flex w-full flex-col gap-3 text-center"
      >
        <input
          className="rounded border py-[0.5em] text-center text-[#272727]"
          type="email"
          placeholder="Email"
          onChange={handleFormChange}
          value={formData.email}
          name="email"
        />
        <input
          className="rounded border py-[0.5em] text-center text-[#272727]"
          type="password"
          placeholder="Password"
          onChange={handleFormChange}
          value={formData.password}
          name="password"
        />
        <button
          className="rounded border py-[0.5em] text-center hover:bg-[#363636]"
          type="submit"
        >
          Sign In
        </button>
        <p>
          Don&apos;t have an account yet?{" "}
          <Link
            to="/register"
            className="font-[600] text-teal-500 underline-offset-4 hover:cursor-pointer hover:underline"
          >
            Create one now.
          </Link>
        </p>
      </form>
      <AuthError error={error} />
    </div>
  );
}

export default SignIn;
