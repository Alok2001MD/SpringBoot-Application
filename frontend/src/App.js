import React, { useState } from 'react'
import  {  useEffect } from "react";

import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Question from './Components/Question'
import Navbar from './Components/Navbar'
import { Toaster } from "react-hot-toast";



function App() {
  const [menu, setMenu] = useState(true);
  
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === "/login" || pathname === "/register") {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }, [window.location.pathname]);
  return <>
   <BrowserRouter>
       {menu && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/quiz" element={<Question />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>

}

export default App

