import React from "react";
import { useContext ,useState} from "react";
import { Context } from "../../index";
import { Navigate } from "react-router-dom";
import PopularCategories from "./PopularCategories";
import HeroSection from "./HeroSection";


const Home = () => {
  const { isAuthorized } = useContext(Context);

//   if (!isAuthorized) {
//     return <Navigate to={"/login"} />;
//   }
  return (
    <>
      <section className="homePage page">
    <HeroSection/>
    <PopularCategories/>
    {/* <h1>Hello</h1> */}
      </section>
    </>
  );
};

export default Home;