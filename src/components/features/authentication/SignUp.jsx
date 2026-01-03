import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth.js";
import {
  BsFillCheckSquareFill,
  BsFillExclamationSquareFill,
} from "react-icons/bs";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [wrongPassword, setWrongPassword] = useState(false);
  const { createAccount, currentUser, error } = useAuth();

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

    if (!wrongPassword && formData.password.length > 0) {
      createAccount(formData);
    }
  }

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      setWrongPassword(true);
    } else {
      setWrongPassword(false);
    }
  }, [formData]);

  return (
    <div className="flex flex-col items-center gap-5 text-white duration-[0.5s] min-[1000px]:pl-[250px]">
      <h1 className="text-[1.7rem] font-[600]">Create Account</h1>
      <form
        onSubmit={handleFormSubmit}
        className="m-auto flex w-[66%] flex-col gap-3 text-center"
      >
        <input
          className="rounded border py-[0.5em] text-center text-[#272727]"
          type="email"
          placeholder="Email"
          onChange={handleFormChange}
          value={formData.email}
          name="email"
        />
        <div className="relative">
          <input
            className={`w-full rounded border py-[0.5em] text-center text-[#272727]`}
            type="password"
            placeholder="Password"
            onChange={handleFormChange}
            value={formData.password}
            name="password"
          />
          {!wrongPassword && formData.password.length > 0 ? (
            <BsFillCheckSquareFill
              className={`absolute right-[2%] top-[50%] translate-y-[-50%] text-[1.4rem] text-green-700 opacity-90`}
            />
          ) : wrongPassword && formData.password.length > 0 ? (
            <BsFillExclamationSquareFill className="absolute right-[2%] top-[50%] translate-y-[-50%] text-[1.4rem] text-red-700 opacity-90" />
          ) : (
            ""
          )}
        </div>
        <div className="relative">
          <input
            className={`w-full rounded border py-[0.5em] text-center text-[#272727]`}
            type="password"
            placeholder="Confirm Password"
            onChange={handleFormChange}
            value={formData.confirmPassword}
            name="confirmPassword"
          />
          {!wrongPassword && formData.password.length > 0 ? (
            <BsFillCheckSquareFill
              className={`absolute right-[2%] top-[50%] translate-y-[-50%] text-[1.4rem] text-green-700 opacity-90`}
            />
          ) : wrongPassword && formData.password.length > 0 ? (
            <BsFillExclamationSquareFill className="absolute right-[2%] top-[50%] translate-y-[-50%] text-[1.4rem] text-red-700 opacity-90" />
          ) : (
            ""
          )}
        </div>

        <button
          className="rounded border py-[0.5em] text-center enabled:hover:bg-[#363636] disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          disabled={
            wrongPassword ||
            formData.email.length === 0 ||
            formData.password.length === 0
          }
        >
          Create Account
        </button>
      </form>
      {wrongPassword && (
        <h1 className="text-red-500">Passwords do not match</h1>
      )}
      {error && (
        <h1 className="rounded bg-red-800 px-[1.5em] py-[0.4em] font-semibold text-[#ddd]">
          Error: {error?.code.replace("auth/", "").replaceAll("-", " ")}
        </h1>
      )}
      {currentUser && <Navigate to="/account" />}
    </div>
  );
}

export default SignUp;
