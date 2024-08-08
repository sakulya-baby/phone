import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/cart/layout/MainLayout";
import Main from "../components/cart/layout/Main";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Phones from "../pages/Phones";
import MobileInfo from "../components/mobileInfo";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phones",
        element: <Phones />,
      },
      {
        path: "/mobileInfo/:PhoneId",
        element: <MobileInfo />,
      },
    ],
  },
]);
