
import React from "react";
import Logo3 from "./img.png";
const WhyQuiz = () => {
  return (
    <>
      <div className="flex flex-col " style={{paddingTop:"25px"}}>
        <div className=" flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="font-sans text-4xl md:text-6xl text-center relative top-5 ">
              Why Quizz?
            </h1>
            <br></br>
            <div className="h-auto md:h-full">
            <p className="font-sans text-sm md:text-base text-justify md:text-left leading-relaxed" style={{textAlign:"justify",paddingTop:"40px",paddingLeft:"15px",fontFamily:"inherit",paddingRight:"15px"}}>
              Quizz offers a comprehensive platform for individuals to enhance
              their proficiency in various programming languages through
              interactive quizzes. Our website provides a tailored learning
              experience, allowing users to select quizzes based on their
              preferred programming languages and topics of interest. By
              offering a diverse range of quizzes, Quizz empowers learners to
              assess and strengthen their knowledge in a dynamic and engaging
              manner. With user-friendly navigation and a rich repository of
              quiz content, Quizz stands as a valuable resource for programmers
              of all levels seeking to deepen their understanding and master
              programming concepts effectively
            </p>
            </div>
          </div>
          <div className="">
          {/* Adjust the size of the image by changing the width */}
          <img src={Logo3} alt="hero" className="w-full h-auto"style={{ width: "4000px", height: "auto" }} />
        </div>
        </div>
      </div>
    </>
  );
};

export default WhyQuiz;
