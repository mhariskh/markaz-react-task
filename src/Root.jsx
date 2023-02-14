import { Outlet } from "react-router-dom";
import LoginContext from "../contexts/LoginContext";
const Root = () => {
  const [userName, setUserName] = useState("");
  return (
    <LoginContext.Provider value={{ userName, setUserName }}>
      <div className="h-screen w-screen overflow-hidden">
        <Outlet />
      </div>
    </LoginContext.Provider>
  );
};

export default Root;
