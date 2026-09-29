import React from 'react'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router"
import Services from '../Pages/Services'
import About from '../Pages/About'
import Home from '../Pages/Home'
import MainLayout from '../Layout/MainLayout'
import AuthLayout from '../Layout/AuthLayout'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                { path:"", element: <Login /> },
                { path: "register", element: <Register /> },
            ],
        },
        {
            path:"/auth", element: <Navigate to="/"/>
        },
        {
            path: "/main",
            element: <MainLayout />,
            children: [
                { path:"", element: <Home /> },
                { path: "about", element: <About /> },
                { path: "services", element: <Services /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoutes;
