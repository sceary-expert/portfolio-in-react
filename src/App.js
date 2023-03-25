import './App.css';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
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
  },
]);

function App() {
  return (  
    <>
      <Navbar />  
      <RouterProvider router={router} />  
    </>  
  );
}

export default App;
