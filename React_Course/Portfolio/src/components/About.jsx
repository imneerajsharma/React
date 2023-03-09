import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p
          className="text-xl"
          style={{ textAlign: "justify", color: "#969696" }}
        >
          Welcome My name is Neeraj Sharma, and I am an experienced Software
          Development Engineer with a passion for creating reliable and scalable
          software systems. I have a strong foundation in Java, DSA, Python, and
          various frameworks such as Spring, Django, and React. I am proficient
          in Agile development methodologies and have experience working with
          cloud computing platforms such as AWS, Heroku, and Vercel.
        </p>
        <br />
        <p
          className="text-xl"
          style={{ textAlign: "justify", color: "#969696" }}
        >
          In my previous role at Larsen & Toubro (L&T) Technology Services, I
          worked as a Software Development Engineer and was responsible for
          developing online pickup-in applications and home delivery platforms
          for Menards. With my cross-functional team, I designed and developed
          user interfaces using various technologies including JSP, JavaScript,
          jQuery, Angular JS, HTML, and CSS. I also developed business layer
          modules utilizing core Java concepts such as Collections Framework,
          Strings, String buffer, and OOP. I deployed server-side modules with
          Spring Framework and design patterns such as MVC, Factory, and
          Singleton.
        </p>

        <br />

        <p
          className="text-xl"
          style={{ textAlign: "justify", color: "#969696" }}
        >
          In addition to my work experience, I have also worked on several
          personal projects to further develop my skills and showcase my
          abilities.iNotebook,NewsFox,TextUtils,MovieFlix I hold a Master of
          Management degree from York University's Schulich School of Business
          and a Post Graduate Diploma in Advanced Computing from the Center for
          Development of Advanced Computing in Pune, India. I also hold a
          Bachelor of Technology degree in Civil Engineering from KIIT
          University in Orissa, India.
        </p>

        <br />
        <p
          className="text-xl"
          style={{ textAlign: "justify", color: "#969696" }}
        >
          I am excited about taking on a Junior SDE role in a dynamic and
          fast-paced environment, and I am confident that my technical skills,
          work experience, and personal projects demonstrate my ability to be a
          valuable asset to any team. Thank you for taking the time to review my
          portfolio, and please feel free to contact me with any questions or
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
