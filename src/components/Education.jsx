import React from "react";
import { Timeline } from "./Timeline";
import '../Style/Education.css'

const EducationPage = () => {

const cardBoxStyle = {
  width: "100%", 
  maxWidth: "650px", 
  margin: "0 auto",
  padding: "2.5rem 2rem",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  transformStyle: "preserve-3d",
  perspective: "1000px",
  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s, border-color 0.3s, box-shadow 0.4s",
};

  const injectHoverEffect = (e, status) => {
    if (status === "enter") {
      e.currentTarget.style.transform = "rotateX(6deg) rotateY(-4deg) translateY(-8px) translateZ(10px)";
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
      e.currentTarget.style.borderColor = "rgb(25, 145, 163)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgb(25, 145, 163,0.15), 0 30px 60px rgba(0, 0, 0, 0.7)";
    } else {
      e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)";
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
    }
  };

  const data = [
    {
      title: "2026",
      content: (
        <div 
          style={cardBoxStyle}
          onMouseEnter={(e) => injectHoverEffect(e, "enter")}
          onMouseLeave={(e) => injectHoverEffect(e, "leave")}
          className="text-center center "
        >
          <h4 className="text-xl font-bold text-[#1991a3]">
            B.Tech Final Year - Computer Science
          </h4>
          <p className="text-zinc-400 mt-2">
            Currently completing my engineering at Shri Sant Gadgebaba College
            of Engineering & Technology, Bhusawal. <br />
            Focusing on system design and preparing for the IT industry.
          </p>
          <p className="text-[18px]">
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
      title: "Present",
      content: (
        <div 
          style={cardBoxStyle}
          onMouseEnter={(e) => injectHoverEffect(e, "enter")}
          onMouseLeave={(e) => injectHoverEffect(e, "leave")}
          className="text-center"
        >
          <h4 className="text-xl font-bold text-[#1991a3]">
            AI Engineering & Python Journey
          </h4>
          <p className="text-zinc-400 mt-2">
            Started a structured path to learn AI. Exploring Machine Learning,<br />
            Data Models, and Python-driven automation.
            <br />
          </p>
          <p className="text-zinc-400 mt-2">
          Initiated a dedicated transition into <span className="text-[#ffffff]">Artificial Intelligence</span>,<br /> leveraging 
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
      title: "2024-(2 months)",
      content: (
        <div 
          style={cardBoxStyle}
          onMouseEnter={(e) => injectHoverEffect(e, "enter")}
          onMouseLeave={(e) => injectHoverEffect(e, "leave")}
          className="text-center"
        >
          <h4 className="text-xl font-bold text-[#1991a3]">
            Web Developer Intern
          </h4>
          <p className="text-zinc-400 mt-2">
            Received an offer letter from codsoft ,<br /> Builds various mini to high level project that shape my skills in right way. <br /> I have used <span className="text-[#ffffffad]"><strong>Core javascript Concepts , React, and Node.js
            with API Integretion.</strong></span><br /> 
            <br />
            I Especially worked on my frontend skills ,<br /> i have engaged with multiple of new terms and tasks those i didnt use before 
          </p>
          <div className="icons">
            <div className="mt-4 courseDiv">
              
              <span className="course px-2 py-1 bg-purple-500/10 text-purple-500 rounded text-xl">
                FrontEnd
              </span>
              <span className="course px-2 py-1 bg-purple-500/10 text-blue-500 rounded text-xl">
                Framer-Motion
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div 
          style={cardBoxStyle}
          onMouseEnter={(e) => injectHoverEffect(e, "enter")}
          onMouseLeave={(e) => injectHoverEffect(e, "leave")}
          className="text-center"
        >
          <h4 className="text-xl font-bold text-[#1991a3]">
            Full-Stack Mastery (MERN)
          </h4>
          <p className="text-zinc-400 mt-2">
            Developed deep expertise in <span className="text-[#ffffffad]"><strong>MongoDB, Express, React, and Node.js
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
        <div 
          style={cardBoxStyle}
          onMouseEnter={(e) => injectHoverEffect(e, "enter")}
          onMouseLeave={(e) => injectHoverEffect(e, "leave")}
          className="space-y-4"
        >
          <h4 className="text-xl md:text-2xl font-bold text-white">
            Higher Secondary Education (HSC)
          </h4>

          <p className="text-neutral-400 leading-relaxed">
            Completed my secondary education with a focus on{" "}
            <span className="text-[#1991a3] font-medium">
              Science and Mathematics
            </span>
            <div className="br"></div> This period was crucial in developing my
            analytical thinking and problem-solving skills,
             which eventually led me to pursue <br /><span className="text-[#1991a3]">Computer Science
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
    <div className="relative w-full flex pt-8 bg-black overflow-hidden">
      <Timeline data={data} />
    </div>
  );
};

export default EducationPage;