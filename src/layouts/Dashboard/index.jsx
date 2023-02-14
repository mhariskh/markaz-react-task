import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Sidebar, Navbar } from "../../components";
import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

const NAVIGATION = [
  {
    name: "Home",
    path: "/dashboard",
    matchExact: true,
  },
  {
    name: "Profile",
    path: "profile",
    matchExact: false,
  },
  {
    name: "Log Out",
    path: "/",
    matchExact: true,
  },
];

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginContext);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
    navigate("/");
  };

  return (
    <>
      <Sidebar navigation={NAVIGATION} onLogout={handleLogout} />
      <main className="mt-20 h-full overflow-auto bg-gray-100 p-8 px-4 pb-20 md:ml-64">
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
