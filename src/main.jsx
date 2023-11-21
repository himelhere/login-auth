import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Root from './Components/Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/signin',
      element: <SignIn></SignIn>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    }
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
