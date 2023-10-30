import {createBrowserRouter} from "react-router-dom";
import Profile from "../components/pages/Profile/Profile";
import App from "./../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <Profile />,
  },
]);

export default router;
