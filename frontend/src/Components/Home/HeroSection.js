import React from "react";
import { useContext } from "react";
import { Context } from "../../index";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import Logo3 from "./hero.webp"
import { Link } from "react-router-dom";
const HeroSection = () => {
  const {user } = useContext(Context);
  return (
    <>
      <div className="heroSection flex flex-col ">
        <div className=" container flex flex-col md:flex-row items-center justify-between">
          <div className="title mb-8 md:mb-0 md:mr-8">
          <h1 className="font-sans text-4xl md:text-6xl text-center md:text-left">Personalized Quizzes Made Easy</h1>
          </div>
          <div className="image  md:w-auto md:flex-grow">
            <img src={Logo3} alt="hero" className="w-full h-auto" />
          </div>
        </div>
          <Link to={"/quiz"}>
        <button className='bg-black text-white py-4 px-10 rounded-md hover:bg-gray-900 focus:outline-none relative left-20'>
          Take a quiz
        </button>
      </Link>
      </div>
    </>
  );
};

export default HeroSection;