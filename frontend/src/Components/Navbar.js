import React from 'react'
import logo from "./Quizz.png"

function Navbar() {
  return (
 <div className='nav'>
 <img src={logo} alt="Logo" className='logoo' />

 <button className='quiz'>Create a quiz</button>
 </div>
   
  )
}
export default Navbar
