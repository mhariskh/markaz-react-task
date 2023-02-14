import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Outlet />
    </div>
  );
};

export default Root;
