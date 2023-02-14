import React, { useState, useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";

export const LoginForm = () => {
  const { user, setUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = user;
    console.log(email);
    console.log(password);
  };
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
              value={user.email}
              onChange={(event) => {
                const { name, value } = event.target;
                setUser((prevUser) => ({ ...prevUser, [name]: value }));
              }}
            />
          </div>
          <div>
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password here"
              name="password"
              value={user.password}
              onChange={(event) => {
                const { name, value } = event.target;
                setUser((prevUser) => ({ ...prevUser, [name]: value }));
              }}
            />
          </div>
          <div>
            <button
              className="w-full border border-transparent text-sm font-medium  py-3 text-grey-700 bg-green-400 transition ease-in hover:bg-green-500 rounded-md "
              onClick={(e) => {
                e.preventDefault();
                handleLogin(e);
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
