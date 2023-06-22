import React, { useEffect, useState } from "react";


const LeetCodeProfile = () => {
  const [solvedProblems, setSolvedProblems] = useState(0);
  const [submissionHistory, setSubmissionHistory] = useState("");

  useEffect(() => {
    const fetchLeetCodeProfile = async () => {
      try {
        const response = await fetch(
          `https://leetcode.com/api/user/imNeerajSharma/`
        );
        const data = await response.json();
        setSolvedProblems(data.num_solved);
        setSubmissionHistory(data.submissions_dump);
      } catch (error) {
        console.error("Error fetching LeetCode profile:", error);
      }
    };

    fetchLeetCodeProfile();
  }, []);

  return (
    <div id="Leetcode">
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            LeetCode
          </h2>
          <p className="py-6">
            Check out my LeetCode profile and problem-solving journey
          </p>
        </div>

        <div className="flex flex-col items-center">
          <iframe
            title="LeetCode Profile"
            src="https://leetcode.com/imNeerajSharma/"
            className="w-full h-96 md:h-128"
          ></iframe>
          
        </div>

        {/* <div className="mt-8">
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
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default LeetCodeProfile;
