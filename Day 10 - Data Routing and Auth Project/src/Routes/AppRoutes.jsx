import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import Services from '../Pages/Services'
import About from '../Pages/About'
import Home from '../Pages/Home'
import MainLayout from '../Layout/MainLayout'

const AppRoutes = () => {

    let router= createBrowserRouter([
        {
            path:"/", element:<MainLayout />,
                children:[
                    {
                        path: "", element:<Home />
                    },
                    {
                        path:"about", element:<About />
                    },
                    {
                        path:"services", element:<Services />
                    },
                ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes;
