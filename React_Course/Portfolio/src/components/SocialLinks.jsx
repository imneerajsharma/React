import React from "react";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <div className="flex items-center">
      <img src="/linkedin.png" alt="LinkedIn" width={50} height={50} />
      {/* <span className="ml-2 font-bold text-lg"></span> */}
      
      
      
    </div>
      ),
      href: "https://www.linkedin.com/in/neeraj-kr-sharma/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <div className="flex items-center">
        <img src="/github.png" alt="GitHub" width={50} height={50} />
        {/* <span className="ml-2 font-bold text-lg"></span> */}
        
      </div>
      ),
      href: "https://github.com/imneerajsharma",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <div className="flex items-center">
        <img src="/gmail.png" alt="Gmail" width={50} height={50} />
        {/* <span className="ml-2 font-bold text-lg"></span> */}
       
      </div>
      ),
      href: "mailto:neeraj_kr_sharma@outlook.com",
    },
    {
      id: 4,
      child: (
        <div className="flex items-center">
        <img src="/resume1.png" alt="Resume" width={50} height={50} />
        {/* <span className="ml-2 font-bold text-lg"></span> */}
        
      </div>
      ),
      href: "/Neeraj_Sharma.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  

  return (
    
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:fixed top-4 left-4">
      <ul className="flex flex-col lg:flex-row lg:space-x-2 ">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              
              
               "flex justify-between items-center w-full h-14 px-4 hover:translate-x-2 duration-300 bg-blue-100 rounded-md shadow-md" +
              // "flex justify-between items-center w-full h-14 px-4 hover:translate-x-2 duration-300 bg-transparent rounded-md shadow-md" +
              " " +
              style
            }
            
          >
            <a
              href={href}
              
              className="flex justify-between items-center w-full text-gray-800"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
