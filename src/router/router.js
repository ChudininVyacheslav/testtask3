import {createBrowserRouter} from "react-router-dom";
import Profile from "../components/pages/Profile/Profile";
import App from "./../App";

const router = createBrowserRouter([
  {
    path: "/testtask3",
    element: <App />,
  },
  {
    path: "/testtask3/user",
    element: <Profile />,
  },
]);

export default router;
