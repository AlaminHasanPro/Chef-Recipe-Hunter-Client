import { createBrowserRouter } from "react-router-dom";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import Header from "../Pages/Header/Header";
import Home from "../Pages/Home/Home";
import Main from "../Pages/layout/Main";
import Recipes from "../Pages/layout/Recipes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/information"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "information",
    element: <Recipes></Recipes>,
    children: [
      {
        path: ":id",
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/information/${params.id}`),
      },
    ],
  },
]);
export default router;
