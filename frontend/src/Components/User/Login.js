import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index";
import Quizz from "../Quizz.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/Login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("response:",response);
      if(response.data==="Login successful!"){
        toast.success("Login Successfull");
        setEmail("");
        setPassword("");
        setIsAuthorized(true);
      }
      else{
        toast.error("Invalid email or password. Please try again.");
      }
    } 
    catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/Home"} />;
  }

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex justify-center ">
        <div className="container1 flex justify-center items-center">
          <div className="container flex flex-col justify-center bg-white py-10 px-10 rounded-lg shadow-lg">
            <div className="header text-center mb-6">
              <img src={Quizz} alt="logo" className="w-300 h-auto mx-auto" />
              <h3 className="text-xl font-semibold">Login to your account</h3>
            </div>
            <form className="flex flex-col gap-4">
              <div className="inputTag">
                <label className="text-gray-600">Email Address</label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputField w-full py-2 px-4 border border-gray-300 rounded focus:outline-none "
                  />
                  <MdOutlineMailOutline className="relative top-0 left-3 text-gray-400" />
                </div>
              </div>
              <div className="inputTag">
                <label className="text-gray-600">Password</label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputField w-full py-2 px-4 border border-gray-300 rounded focus:outline-none "
                  />
                  <RiLock2Fill className="relative top-0 left-3 text-gray-400" />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
              <Link
                to={"/Register"}
                className="text-blue-500 mt-2 inline-block hover:underline py-2 px-4 border border-blue-500 rounded-md text-center"
              >
                Register Now
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;