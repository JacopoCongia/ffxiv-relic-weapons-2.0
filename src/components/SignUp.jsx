import { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";

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

    if (formData.password === formData.confirmPassword) {
      setWrongPassword(false);
      createAccount(formData);
    } else {
      setWrongPassword(true);
    }
  }

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
        <input
          className="text-center py-[0.5em] rounded border text-[#272727]"
          type="password"
          placeholder="Password"
          onChange={handleFormChange}
          value={formData.password}
          name="password"
        />
        <input
          className="text-center py-[0.5em] rounded border text-[#272727]"
          type="password"
          placeholder="Confirm Password"
          onChange={handleFormChange}
          value={formData.confirmPassword}
          name="confirmPassword"
        />
        <button
          className="text-center py-[0.5em] rounded border hover:bg-[#363636]"
          type="submit"
        >
          Create Account
        </button>
      </form>
      {wrongPassword && (
        <h1 className="text-red-500">Passwords do not match</h1>
      )}
      {error && (
        <h1 className="text-red-500">
          Error: {error?.code.replace("auth/", "")}
        </h1>
      )}
      {currentUser && <Navigate to="/account" />}
    </div>
  );
}

export default SignUp;
