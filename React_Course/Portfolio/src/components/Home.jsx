import React from "react";
import HeroImage from "../assets/heroImage4.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      // className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-wrap"
      //className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center"

    >
      {/* <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-0 md:flex-row"> */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* <div className="flex flex-col justify-center h-full"> */}
        <div className="flex flex-col justify-center h-full flex-1">
          <h2 className="text-base sm:text-5xl font-bold text-white">
            I'm a Software Development Engineer
          </h2>
          {/* <p className=" text-1xl sm:text-2xl text-gray-500 py-4 max-w-md"> */}
          {/* <p className="text-base sm:text-2xl text-gray-500 py-2 md:py-4 max-w-md">  */}
          <p className="text-base sm:text-lg text-gray-500 py-2 md:py-4 max-w-md"> 
            I have experience in building and designing software.
            Currently, I love to work on web applications using technologies like
            Java,Spring, Data Structures and Algorithms, React, JavaScript, REST API,and Hibernate.
          </p>
          

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* <div>
          <img
            src={HeroImage}
            alt="my profile"
            // className="rounded-2xl mx-3 w-1/2 md:w-full"
            className="rounded-2xl mx-3 w-full md:w-1/2"
            
          />
        </div> */}
        <div className="flex justify-center flex-1">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-full max-w-full md:w-1/2 mx-3"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
