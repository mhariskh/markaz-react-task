import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";

export const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-2 ">
        <form className="flex flex-col gap-5">
          <div>
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email here"
              name="email"
            />
          </div>
          <div>
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password here"
              name="password"
            />
          </div>
          <div>
            <button
              className="w-full border border-transparent text-sm font-medium  py-3 text-grey-700 bg-green-400 transition ease-in hover:bg-green-500 rounded-md "
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
