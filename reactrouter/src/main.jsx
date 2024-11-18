import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Conatct from './Components/Contact/Contact'
import Github from './Components/Github/Github'

const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                path:'',
                element:<Home/>

            },
            {
                path:"About",
                element:<About/>
            },
            {
                path:"Contact",
                element:<Conatct/>
            },
            {
                path:"Github",
                element:<Github/>
            }
        
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
)
