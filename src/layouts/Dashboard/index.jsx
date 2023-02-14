import { Outlet } from "react-router-dom";

import { Sidebar, Navbar } from "../../components";

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
  {
    name: "Error 404 Page",
    path: "/random-link",
    matchExact: true,
  },
];

export const Dashboard = () => {
  return (
    <>
      <Sidebar navigation={NAVIGATION} />
      <main className="mt-20 h-full overflow-auto bg-gray-100 p-8 px-4 pb-20 md:ml-64">
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
