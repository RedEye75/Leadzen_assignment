import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../components/Home";
import User from "../components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
    ],
  },
]);
export default router;
