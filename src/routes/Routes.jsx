import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import NewsLayout from "../Layout/NewsLayout";
import Catagory from "../pages/Home/Catagory/Catagory";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import News from "../pages/News/News";
import Terns from "../pages/Shared/Terms/Terns";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terns></Terns>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
