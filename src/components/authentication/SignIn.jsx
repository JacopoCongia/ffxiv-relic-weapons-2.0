import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { logIn, logInWithGoogle, error } = useAuth();

  function handleFormChange(e) {
    e.preventDefault();
    const { value, name } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
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
    <div className="flex flex-col items-center gap-5 text-white">
      <h1 className="text-[1.7rem] font-[600]">Sign In</h1>
      <button
        className="text-center rounded hover:opacity-90 w-[66%] bg-[#4285F4] flex items-center justify-between"
        onClick={() => logInWithGoogle()}
      >
        <img src="/google-sign-in.svg" />
        <p className="font-medium m-auto">Sign in With Google</p>
      </button>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col m-auto gap-3 text-center w-[66%]"
      >
        <input
          className="text-center py-[0.5em] rounded border text-[#272727]"
          type="email"
          placeholder="Email"
          onChange={handleFormChange}
          value={formData.email}
          name="email"
        />
        <input
          className="text-center py-[0.5em] rounded border text-[#272727]"
          type="password"
          placeholder="Password"
          onChange={handleFormChange}
          value={formData.password}
          name="password"
        />
        <button
          className="text-center py-[0.5em] rounded border hover:bg-[#363636]"
          type="submit"
        >
          Sign In
        </button>
        <p>
          Don&apos;t have an account yet?{" "}
          <Link
            to="/register"
            className="text-teal-500 font-[600] hover:underline underline-offset-4 hover:cursor-pointer"
          >
            Create one now.
          </Link>
        </p>
      </form>
      {error && (
        <h1 className="text-[#ddd] rounded px-[1.5em] py-[0.4em] font-semibold bg-red-800">
          Error: {error?.code.replace("auth/", "").replaceAll("-", " ")}
        </h1>
      )}
    </div>
  );
}

export default SignIn;
