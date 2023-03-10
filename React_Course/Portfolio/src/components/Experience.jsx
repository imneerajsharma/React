import React from "react";

import Java from "../assets/Java.svg";
import Spring from "../assets/spring.svg";
import MongoDB from "../assets/mongodb.svg";
import Express from "../assets/express.svg";
import ReactImage from "../assets/react.svg";
import JavaScript from "../assets/JS.svg";
import Node from "../assets/nodejs.svg";
import MySql from "../assets/mysql.svg";
import GIT from "../assets/git.svg";
import Jenkins from "../assets/jenkins.svg";
import AWS from "../assets/aws.svg";

// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.svg";
// import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Java,
      title: "JAVA",
      style: "shadow-red-500",
      
    },
    {
      id: 2,
      src: Spring,
      title: "Spring",
      style: "shadow-green-500",
      
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: Express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: MySql,
      title: "MySql",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: GIT,
      title: "GitHub",
      style: "shadow-orange-600",
    },
    {
      id: 10,
      src: Jenkins,
      title: "Jenkins",
      style: "shadow-red-600",
    },
    {
      id: 10,
      src: AWS,
      title: "AWS",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="experience"
      // className="bg-gradient-to-b from-gray-800 to-gray-500 w-full h-screen"
      className="bg-gradient-to-b from-gray-800 to-gray-500 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"> */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 md:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
