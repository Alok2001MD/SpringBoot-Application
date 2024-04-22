import React, { useContext } from "react";
import { Context } from "../index";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../index.css"; // Import your CSS file
import Logo1 from "./Quizz.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <div className="flex justify-center items-center mb-4">
        <img src={Logo1} alt="Logo" className="h-10 mr-19 flex justify-end" />
      </div>
      <div className="text-sm">&copy; All Rights Reserved By Alok Mattihalli.</div>
      <div className="mt-4 flex justify-center items-center">
        <p className="mr-4">Connect with us</p>
        <a href="https://www.linkedin.com/in/alok-mattihalli-047854221/" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
          <FaLinkedin className="text-xl hover:text-blue-500" />
        </a>
        <a href="https://github.com/Alok2001MD" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub className="text-xl hover:text-blue-500" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
