// import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';
import Navbar from './components/Navbar'

const Applayout = () =>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Home />
      <Experience/>
      <Projects/>
      <Achievements/>
      <Footer />

    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[
    {
      path: "/Experience",
      element: <Experience />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/achievements",
      element: <Achievements />,
    }
  ]
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
