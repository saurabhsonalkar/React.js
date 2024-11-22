import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Conatct from './Components/Contact/Contact'
import Github, { GithubInfo } from './Components/Github/Github'
import User from './Components/User/User'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element:<Layout/>,
//         children:[
//             {
//                 path:'',
//                 element:<Home/>

//             },
//             {
//                 path:"About",
//                 element:<About/>
//             },
//             {
//                 path:"Contact",
//                 element:<Conatct/>
//             },
//             {
//                 path:"Github",
//                 element:<Github/>
//             }
        
//         ]
//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}>
            <Route path="hitesh"/>
            </Route>
            <Route path="contact" element={<Conatct/>}/>
            <Route 
            loader={GithubInfo}
            path="github" element={<Github/>}/>
            <Route path="user/:userid" element={<User/>}/>
            
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
)
