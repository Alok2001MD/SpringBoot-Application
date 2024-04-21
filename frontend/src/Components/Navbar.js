import React,{useContext, useState} from 'react'
import logo from "./Quizz.png"
import { Context } from "../index";
import { Navigate } from 'react-router-dom';

function Navbar() {

  const HandleCreate = () => {
      return <Navigate to={'/login'}/> 
  }
  return (
 <div className='nav'>
 <img src={logo} alt="Logo" className='logoo' />
 
 <button className='quiz'onClick={HandleCreate}>Create a quiz</button>
 </div>
   
  )
}
export default Navbar
