import React from "react";
  import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          {/* LinkedIn <FaLinkedin size={30} color="#0077B5"/> */}
          LinkedIn <img src="/linkedin.png" alt="LinkedIn" width={50} height={50} className="ml-6"/>
        </>
      ),
      href: "https://www.linkedin.com/in/neeraj-kr-sharma/",
      style: "rounded-tr-md",
      bgColor: "#0077B5",
      
    },
    {
      id: 2,
      child: (
        <>
          {/* GitHub <FaGithub size={30} color="#211F1F"/> */}
          GitHub <img src="/github.png" alt="GitHub" width={50} height={50} className="ml-9"/>
        </>
      ),
      href: "https://github.com/imneerajsharma",
      bgColor: "#211F1F",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          {/* GitHub <FaGithub size={30} color="#211F1F"/> */}
          LeetCode<img src="/Leetcode.png" alt="Leetcode" width={50} height={50} className="ml-4"/>
        </>
      ),
      href: "https://leetcode.com/imNeerajSharma/",
      bgColor: "#211F1F",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          {/* Mail <HiOutlineMail size={30} color="#D44638"/> */}
          <div className="flex items-center ml-4"></div>
          Mail <img src="/gmail.png" alt="Gmail" width={50} height={50} className="ml-10"/>
        </>
      ),
      href: "mailto:neeraj_kr_sharma@outlook.com",
      style: "rounded-tr-md",
      bgColor: "#D44638",
    },
    {
      id: 5,
      child: (
        <>
          {/* Resume <BsFillPersonLinesFill size={30} color="#0077B5"/> */}
          Resume <img src="/resume1.png" alt="Resume" width={50} height={50} className="ml-7"/>
          
        </>
      ),
      href: "/Neeraj_Sharma.pdf",
      style: "rounded-br-md",
      download: true,
      bgColor: "#0077B5",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download, bgColor }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              " " +
              style
            }
            style={{ backgroundColor: bgColor }}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
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
