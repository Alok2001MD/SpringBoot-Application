import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index";
import Logo1 from "./register.png";
import Quizz from "../Quizz.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/Register",
        { name, email, password, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("User Registered Successfully");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        setIsAuthorized(true);
      } else {
        toast.error("Registration failed: Unexpected response data");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Registration failed: Unexpected error");
      }
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex justify-center">
        <div className="container1 flex justify-center items-center">
          <div className="container flex flex-col justify-center bg-white py-10 px-10 rounded-lg shadow-lg">
            <div className="header text-center mb-6">
              <img src={Quizz} alt="logo" className="w-300 h-auto mx-auto" />
              <h3 className="text-xl font-semibold">Create a new account</h3>
            </div>
            <form className="flex flex-col gap-4">
              <div className="inputTag">
                <label>Name</label>
                <div className="relative flex items-center border border-gray-300 rounded">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputField w-full py-2 px-4 focus:outline-none"
                  />
                  <FaPencilAlt className="relative top-0 left-5 text-gray-400" />
                </div>
              </div>
              <div className="inputTag">
                <label>Email Address</label>
                <div className="relative flex items-center border border-gray-300 rounded">
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputField w-full py-2 px-4 focus:outline-none"
                  />
                  <MdOutlineMailOutline className="relative top-0 left-5 text-gray-400" />
                </div>
              </div>
              <div className="inputTag">
                <label>Password</label>
                <div className="relative flex items-center border border-gray-300 rounded">
                  <input
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputField w-full py-2 px-4 focus:outline-none"
                  />
                  <RiLock2Fill className="relative top-0 left-5 text-gray-400" />
                </div>
              </div>
              <div className="inputTag">
                <label>Confirm Password</label>
                <div className="relative flex items-center border border-gray-300 rounded">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    className="inputField w-full py-2 px-4 focus:outline-none"
                  />
                  <RiLock2Fill className="relative top-0 left-5 text-gray-400" />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleRegister}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Register
              </button>
              <Link
                to={"/"}
                className="text-blue-500 mt-2 inline-block hover:underline py-2 px-4 border border-blue-500 rounded-md text-center"
              >
                Login Now
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
