import React from "react";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava ,FaNodeJs} from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { SiSpring } from "react-icons/si";
import { FaAws } from "react-icons/fa";
const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Java",
      icon: <FaJava />,
    },
    {
      id: 2,
      title: "Python",
      icon: <FaPython />,
    },
    {
      id: 3,
      title: "C++",
      icon: <GrCloudSoftware />,
    },
    {
      id: 4,
      title: "React Js",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Spring Boot",
      icon: <SiSpring/>,
    },
    {
      id:6,
      title:"Node Js",
      icon:<FaNodeJs />

    },
    {
       id:7,
       title:"CPP",
       icon:<GrCloudSoftware />
    },
    {
      id: 7,
      title: "AWS ",

      icon: <FaAws />,
    },
  ];
  return (
    <div className="categories">
      <div className="populartag">
        <h1 className="text-2xl font-bold">Popular Categories</h1>
      </div>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;