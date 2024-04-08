import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './index.css'
import Header from './components/header/header.jsx';
import Home from './routes/home.jsx';
import Footer from './components/footer/footer';
import Posts from './routes/posts';
import AboutUS from './routes/aboutUS';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Header />
        <div className='m-20'>
          <Outlet />
        </div>
      <Footer />
      <ToastContainer />
    </div>,
    errorElement: <div>error</div>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Posts />,
      },
      {
        path: "aboutUs",
        element: <AboutUS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
