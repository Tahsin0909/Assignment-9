import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ContextApi} from './Components/ContextApi/ContextApi';
import Home from './Components/Home/Home';
import NewHome from './Components/Home/NewHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home> ,
    children:[
      {
        path:'/',
        element:<NewHome></NewHome>
      },
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
