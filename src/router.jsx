import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./Root";
import { Login, Home, Profile, ErrorNotFound } from "./pages";
import { Dashboard } from "./layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorNotFound />}>
      <Route index element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

export default router;
