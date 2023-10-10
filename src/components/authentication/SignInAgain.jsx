import { useState } from "react";
import useAuth from "../../hooks/use-auth";

function SignInAgain() {
  const [formData, setFormData] = useState({ password: "" });
  const { logInAgain, error } = useAuth();

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

    if (formData.password) {
      logInAgain(formData.password);
      setFormData({ password: "" });
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 text-white">
      <h1 className="text-white font-semibold text-[1.2rem] px-[1em]">
        Please input your password again to confirm deletion.
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4 text-center w-[100%]"
      >
        <input
          className="text-center py-[0.5em] text-[#272727] min-[600px]:rounded"
          type="password"
          placeholder="Password"
          onChange={handleFormChange}
          value={formData.password}
          name="password"
        />
        <button
          className="text-center py-[0.5em] bg-red-700 hover:bg-red-600 min-[600px]:rounded"
          type="submit"
        >
          Delete Account
        </button>
      </form>
      {error && (
        <h1 className="text-[#ddd] rounded px-[1.5em] py-[0.4em] font-semibold bg-red-800">
          Error: {error?.code.replace("auth/", "").replaceAll("-", " ")}
        </h1>
      )}
    </div>
  );
}

export default SignInAgain;
