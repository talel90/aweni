import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Login from './components/login.jsx';
import SignUp from './components/SignUp.jsx';
import Dashboard from './components/Dashboard.jsx';
import Home from './components/Home.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/components/login",
    element: <Login />,
  },
  {
    path: "/components/SignUp",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
