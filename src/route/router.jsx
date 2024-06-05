import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index: true,
            element: <Home></Home>,
        },
    ],
  },
  {
    path: '/register',
    element: <Register />
  },
]);

export default router;
