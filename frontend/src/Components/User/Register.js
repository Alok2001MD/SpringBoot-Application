import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";

import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index";
import Logo1 from "./register.png"
import Quizz from "../Quizz.png"
const Register = () => {
  const[name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[confirmPassword,setConfirmpassword]=useState("")


  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const  response  = await axios.post(
        "http://localhost:8080/Register",
        { name,email, password,confirmPassword},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status===200) {
        toast.success("User Registered Successfully");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        setIsAuthorized(true);
      } else {
        // Handle case where response or response.data is undefined
        toast.error("Registration failed: Unexpected response data");
      }
    } catch (error) {
      // Handle axios request error
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Registration failed: Unexpected error");
      }
    }
  };

  if(isAuthorized){
    return <Navigate to={'/'}/>
  }


  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src={Quizz} alt="logo" />
            <h3>Create a new account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaPencilAlt />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <div className="inputTag">
              <label>Confirm Password</label>
              <div>
                <input
                  type="password"
                  placeholder="confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleRegister}>
              Register
            </button>
            <Link to={"/login"}>Login Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src={Logo1} alt="login" />
        </div>
      </section>
    </>
  );
};

export default Register;