import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../components/Home";
import UserDetails from "../components/UserDetails";
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
        path: "/details/:id",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);
export default router;
