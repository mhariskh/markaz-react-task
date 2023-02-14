// Root.js
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LoginContext from "./contexts/LoginContext";

const Root = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || { email: "", password: "" }
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <div className="h-screen w-screen overflow-hidden">
        <Outlet />
      </div>
    </LoginContext.Provider>
  );
};

export default Root;
