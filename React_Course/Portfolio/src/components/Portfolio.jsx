import React from "react";
import cineflix from "../assets/portfolio/cineflix1.png";
import iNotebook from "../assets/portfolio/inotebook.png";
import MovieFlix from "../assets/portfolio/Moviesflix.jpg";
import Textutils from "../assets/portfolio/textutils.png";
import Newsfox from "../assets/portfolio/newsfox.png";
import amazon from  "../assets/portfolio/amazon.png"
import threadstrends from  "../assets/portfolio/threadstrends.png"



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Amazon ( Coming Soon... )",
      src: amazon,
      demoUrl: "https://github.com/imneerajsharma/React/tree/main/React_Course/Ecommerce",
      codeUrl: "https://github.com/imneerajsharma/React/tree/main/React_Course/Ecommerce",
    },
    {
      id: 2,
      name: "Threads and Trends",
      src: threadstrends,
      demoUrl: "https://www.youtube.com/watch?v=NNAVuI9lLqQ",
      codeUrl: "https://www.youtube.com/watch?v=NNAVuI9lLqQ",
    },
    {
      id: 3,
      name: "CineFlix",
      src: cineflix,
      demoUrl: "https://cineflix-13d1c.web.app/",
      codeUrl: "https://www.youtube.com/watch?v=28nHDzbj3Ro",
    },
    {
      id: 4,
      name: "iNotebook",
      src: iNotebook,
      demoUrl: "https://www.youtube.com/watch?v=oxxAVNQSlis",
      codeUrl: "https://www.youtube.com/watch?v=oxxAVNQSlis",
    },
    {
      id: 5,
      name: "Newsfox",
      src: Newsfox,
      demoUrl: "https://www.youtube.com/watch?v=7jh27Aq5FZI",
      codeUrl: "https://www.youtube.com/watch?v=7jh27Aq5FZI",
    },
    {
      id: 6,
      name: "Wordwise",
      src: Textutils,
      demoUrl: "https://neerajsharma-wordwise.vercel.app/",
      codeUrl: "https://www.youtube.com/watch?v=a0bQ4mqH_ak",
    },

    {
      id: 7,
      name: "MovieFlix",
      src: MovieFlix,
      demoUrl: "https://github.com/imneerajsharma/Movie_flix",
      codeUrl: "https://github.com/imneerajsharma/Movie_flix",
    },


  ];

  return (
    <div
      name="projects"
      // className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      // className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id,name, src, demoUrl, codeUrl  }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div>
                <div className="text-center py-2">{name}</div>
              </div>
              <div className="flex items-center justify-center">
                
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeUrl} target="_blank"  rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Video
                  </button>
                </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
