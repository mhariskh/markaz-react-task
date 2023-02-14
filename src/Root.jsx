import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LoginContext from "./contexts/LoginContext";
const Root = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <div className="h-screen w-screen overflow-hidden">
        <Outlet />
      </div>
    </LoginContext.Provider>
  );
};

export default Root;
