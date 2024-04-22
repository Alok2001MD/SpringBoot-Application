import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./Quizz.png";

function Navbar() {
  return (
    <div className='container1 flex items-center justify-between px-4 py-2'>
      <img src={logo} alt="Logo" className='h-auto w-24' />
      
      {/* <Link to={"/quiz"}>
        <button className='bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none'>
          Take a quiz
        </button>
      </Link> */}
    </div>
  );
}

export default Navbar;
