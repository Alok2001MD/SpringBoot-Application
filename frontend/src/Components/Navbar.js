import React, { useContext, useState } from 'react';
import logo from "./Quizz.png";
import { Navigate,Link } from 'react-router-dom';



function Navbar() {

  const HandleCreate = () => {
      return <Navigate to={'/quiz'}/> 
  }


  return (
    <div className='container'>
      <img src={logo} alt="Logo" className='logoo' />
      <Link to={"/quiz"}>
      <button className='quiz'>Take a quiz</button>
      </Link>
      
    </div>
  );
}

export default Navbar;
