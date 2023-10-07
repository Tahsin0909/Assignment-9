import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ContextApi} from './Components/ContextApi/ContextApi';
import Slider from './Components/Slider/Slider';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home> ,
    children:[
      {
        path:'/',
        element:<Slider></Slider>

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
