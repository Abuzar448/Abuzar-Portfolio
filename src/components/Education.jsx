import React from "react";
import { Timeline } from "./Timeline";
import BackToTop from "./BackToTop";

const EducationPage = () => {
  const data = [
    {
      title: "2026",
      content: (
        <div className="w-full text-center center">
          <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            B.Tech Final Year - Computer Science
          </h4>
          <p className="text-neutral-700 dark:text-neutral-400 mt-2">
            Currently completing my engineering at Shri Sant Gadgebaba College
            of Engineering & Technology, Bhusawal. <br />
            Focusing on system design and preparing for the IT industry.
          </p>
          <p className="text-[18px] ">
            Current CGPA : 7.5 <br />
            <span className=" course px-2 py-1 text-pink-600 rounded text-[18px] m-4">
              Actively Seeking Opportunities | Industry Transition in Progress
            </span>
          </p>

          <div className="mt-4 courseDiv">
            <span className=" course px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xl m-4">
              Engineering
            </span>
            <span className="course px-2 py-1 bg-purple-500/10 text-purple-500 rounded text-xl">
              Final Year
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2026",
      content: (
        <div className="w-full text-center">
          <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            AI Engineering & Python Journey
          </h4>
          <p className="text-neutral-700 dark:text-neutral-400 mt-2">
            Started a structured path to learn AI. Exploring Machine Learning,<br />
            Data Models, and Python-driven automation.
            <br />
          </p>
          <p className="text-neutral-700 dark:text-neutral-400 mt-2">
          Initiated a dedicated transition into <span className="text-blue-500">Artificial Intelligence</span>,<br /> leveraging 
          Python to explore the intersection of data-driven intelligence and modern web applications.
        </p>
          <div className="mt-4 courseDiv">
            <span className=" course px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xl m-4">
              Self Paced
            </span>
            <span className="course px-2 py-1 bg-purple-500/10 text-purple-500 rounded text-xl">
              Ongoing
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Ongoing",
      content: (
        <div className="w-full text-center">
          <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Full-Stack Mastery (MERN)
          </h4>
          <p className="text-neutral-700 dark:text-neutral-400 mt-2">
            Developed deep expertise in <span className="text-blue-500"><strong>MongoDB, Express, React, and Node.js
            with API Integretion.</strong></span><br /> Built a 
            full-scale Social Media Platform and Employee Service Applications.
            <br />
            Developed a full fetched real world applications <br></br>
            using the following technologies :
          </p>
          <div className="icons">
            <div className="mt-4 courseDiv">
              <span className=" course px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xl m-4">
                Frontend
              </span>
              <span className="course px-2 py-1 bg-purple-500/10 text-purple-500 rounded text-xl">
                Backend
              </span>
              <span className="course px-2 py-1 bg-purple-500/10 text-blue-500 rounded text-xl">
                Database
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-4">
          <h4 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            Higher Secondary Education (HSC)
          </h4>

          <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed">
            Completed my secondary education with a focus on{" "}
            <span className="text-blue-500 font-medium">
              Science and Mathematics
            </span>
            <div className="br"></div> This period was crucial in developing my
            analytical thinking and problem-solving skills,
             which eventually led me to pursue <br /><span className="text-blue-500">Computer Science
            Engineering.</span>
          </p>
          <p className="text-[18px] ">
            <span className=" text-pink-600 rounded text-[15px]">
              Institution: Jagjivandas English Medium School, Muktainagar
            </span>
          </p>
          <p className="text-[18px] ">
            <span className=" text-pink-600 rounded text-[15px]">
              Stream: PCMB (Physics, Chemistry, Mathematics, Biology)
            </span>
          </p>
          <br />
          <div className="hidden  mt-4 p-4 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
            <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
              "This stage laid the groundwork for my technical journey, sparking
              a deep curiosity for how complex systems and logic-based
              structures operate."
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full flex pt-8 bg-black">
      <Timeline data={data} />
    </div>
  );
};

export default EducationPage;
