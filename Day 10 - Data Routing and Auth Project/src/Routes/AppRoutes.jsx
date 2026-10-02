import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router";

import Services from "../Pages/Services";
import About from "../Pages/About";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const router = createBrowserRouter([
    // Public routes
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },

    // Redirect /auth → /
    {
      path: "/auth",
      element: <Navigate to="/" replace />,
    },

    // Protected routes
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/main",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "services",
              element: <Services />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;