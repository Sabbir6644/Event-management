import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthContext from './Components/AuthContext';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ServiceDetails from './Components/ServiceDetails';
import PrivateRoute from './Components/PrivateRoute';
import ErrorPage from './Components/ErrorPage';
import Nav from './Components/Nav';
import Footer from './Components/footer';
import About from './Components/About';
import Contact from './Components/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      },
      {
        path: "/about",
        element: <PrivateRoute><About></About></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <RouterProvider router={router} />
    </AuthContext>
     
  </React.StrictMode>,
)
