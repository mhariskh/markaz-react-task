import { NavLink } from "react-router-dom";

export const Sidebar = ({ navigation, onLogout }) => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-green-400 md:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white px-3 pb-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              {item.name === "Log Out" ? (
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    onLogout();
                  }}
                  className="mt-2 w-full flex items-center rounded-lg py-2 px-3 text-base font-normal text-primary-1 transition duration-150 hover:bg-gray-200 dark:hover:bg-green-300"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              ) : (
                <NavLink
                  to={item.path}
                  end={item.matchExact}
                  className={`mt-2 w-full flex items-center rounded-lg py-2 px-3 text-base font-normal text-primary-1 transition duration-150 
                            ${
                              item.isActive
                                ? "bg-accent-1 text-white hover:bg-accent-2"
                                : "hover:bg-gray-200 dark:hover:bg-green-300"
                            }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
``;
