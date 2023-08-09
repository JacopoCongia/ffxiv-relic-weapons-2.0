import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import {
  BsFillCheckSquareFill,
  BsFillExclamationSquareFill
} from "react-icons/bs";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [wrongPassword, setWrongPassword] = useState(false);
  const { createAccount, currentUser, error } = useAuth();

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
        <div className="relative">
          <input
            className={`w-full text-center py-[0.5em] rounded border text-[#272727]`}
            type="password"
            placeholder="Password"
            onChange={handleFormChange}
            value={formData.password}
            name="password"
          />
          {!wrongPassword && formData.password.length > 0 ? (
            <BsFillCheckSquareFill
              className={`absolute right-[2%] opacity-90 text-green-700 text-[1.4rem] top-[50%] translate-y-[-50%]`}
            />
          ) : wrongPassword && formData.password.length > 0 ? (
            <BsFillExclamationSquareFill className="absolute right-[2%] opacity-90 text-red-700 text-[1.4rem] top-[50%] translate-y-[-50%]" />
          ) : (
            ""
          )}
        </div>
        <div className="relative">
          <input
            className={`w-full text-center py-[0.5em] rounded border text-[#272727]`}
            type="password"
            placeholder="Confirm Password"
            onChange={handleFormChange}
            value={formData.confirmPassword}
            name="confirmPassword"
          />
          {!wrongPassword && formData.password.length > 0 ? (
            <BsFillCheckSquareFill
              className={`absolute right-[2%] opacity-90 text-green-700 text-[1.4rem] top-[50%] translate-y-[-50%]`}
            />
          ) : wrongPassword && formData.password.length > 0 ? (
            <BsFillExclamationSquareFill className="absolute right-[2%] opacity-90 text-red-700 text-[1.4rem] top-[50%] translate-y-[-50%]" />
          ) : (
            ""
          )}
        </div>

        <button
          className="text-center py-[0.5em] rounded border enabled:hover:bg-[#363636] disabled:opacity-50 disabled:cursor-not-allowed"
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
        <h1 className="text-[#ddd] rounded px-[1.5em] py-[0.4em] font-semibold bg-red-800">
          Error: {error?.code.replace("auth/", "").replaceAll("-", " ")}
        </h1>
      )}
      {currentUser && <Navigate to="/account" />}
    </div>
  );
}

export default SignUp;
