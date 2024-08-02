import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Prot from './components/Prot/Prot';
import Contact from './components/Contact/Contact';

function App() {
  let router = createBrowserRouter([
    {
      path: "/", // Root path
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, // Default route
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "prot", element: <Prot /> },
        { path: "contact", element: <Contact /> }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

