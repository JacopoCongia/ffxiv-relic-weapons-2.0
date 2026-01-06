import { useState } from "react";
import Button from "../../common/Button.jsx";
import useAuth from "../../../hooks/use-auth.js";

import AuthError from "../../../components/common/AuthError.jsx";

function SignInAgain() {
  const [formData, setFormData] = useState({ password: "" });
  const { logInAgain, error } = useAuth();

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

    if (formData.password) {
      logInAgain(formData.password);
      setFormData({ password: "" });
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 text-white">
      <h1 className="px-[1em] text-[1.2rem] font-semibold text-white">
        Please input your password again to confirm deletion.
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex w-[100%] flex-col gap-4 text-center"
      >
        <input
          className="py-[0.5em] text-center text-[#272727] min-[600px]:rounded"
          type="password"
          placeholder="Password"
          onChange={handleFormChange}
          value={formData.password}
          name="password"
        />
        <Button type="submit" warning>
          Delete Account
        </Button>
      </form>
      <AuthError error={error} />
    </div>
  );
}

export default SignInAgain;
