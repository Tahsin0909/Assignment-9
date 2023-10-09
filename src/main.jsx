import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContextApi } from './Components/ContextApi/ContextApi';
import Home from './Components/Home/Home';
import NewHome from './Components/Home/NewHome';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import ServicesDetails from './Components/ServicesDetails/ServicesDetails';
import PrivetRoutes from './Components/PrivetRoute/PrivetRoute';
import Album from './Components/Album/Album';
import AboutUs from './Components/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <NewHome></NewHome>
      },
      {
        path: '/services/:id',
        element: <PrivetRoutes><ServicesDetails></ServicesDetails></PrivetRoutes>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'/album',
        element:<Album></Album>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
  </React.StrictMode>,
)
