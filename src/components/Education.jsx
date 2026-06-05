import React, { useRef, useState } from "react";
import { Timeline } from "./Timeline";
import '../Style/Education.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const EducationPage = () => {
  const containerRef = useRef(null);

   useGSAP(() => {
      gsap.from('.education .edu_heading', {
        y: 150,
        opacity: 0,
        duration: 10,
        ease: "easeIn",
        scrollTrigger: {
          trigger: '.education .edu_heading',
          start: 'top 80%',
          end: 'top 100%',
          scrub: 2,
          toggleActions: "play none none none",
        }
      });
    }, { scope: containerRef });

  // Production Target: Experience State Layer configured as default active view
  const [activeTab, setActiveTab] = useState("experience");

  const journeyData = [
    {
      id: 1,
      type: "education",
      title: "2026",
      subtitle: "B.Tech Final Year - Computer Science",
      institution: "Shri Sant Gadgebaba College of Engineering & Technology, Bhusawal.",
      description: "Currently completing my engineering. Focusing on system design and preparing for the IT industry.",
      metrics: "Current CGPA : 7.5",
      statusText: "Actively Seeking Opportunities | Industry Transition in Progress",
      tags: ["Engineering", "Final Year"]
    },
    {
      id: 2,
      type: "experience",
      title: "Present",
      subtitle: "AI Engineering & Python Journey",
      institution: "Self Paced",
      description: "Started a structured path to learn AI. Exploring Machine Learning, Data Models, and Python-driven automation. Initiated a dedicated transition into Artificial Intelligence, leveraging Python to explore the intersection of data-driven intelligence and modern web applications.",
      metrics: null,
      statusText: null,
      tags: ["Self Paced", "Ongoing"]
    },
    {
      id: 3,
      type: "experience",
      title: "2024-(2 months)",
      subtitle: "Web Developer Intern",
      institution: "CodSoft",
      description: "Received an offer letter from codsoft. Builds various mini to high level project that shape my skills in right way. I have used Core javascript Concepts, React, and Node.js with API Integration. Especially worked on my frontend skills, engaged with multiple new terms and tasks those I didn't use before.",
      metrics: null,
      statusText: null,
      tags: ["FrontEnd", "Framer-Motion"]
    },
    {
      id: 4,
      type: "experience",
      title: "Present",
      subtitle: "Full-Stack Mastery (MERN)",
      institution: "Self Project Practice",
      description: "Developed deep expertise in MongoDB, Express, React, and Node.js with API Integration. Built a full-scale Social Media Platform and Employee Service Applications. Developed full fetched real world applications using production-ready architectural design systems.",
      metrics: null,
      statusText: null,
      tags: ["Frontend", "Backend", "Database"]
    },
    {
      id: 5,
      type: "education",
      title: "2022",
      subtitle: "Higher Secondary Education (HSC)",
      institution: "Jagjivandas English Medium School, Muktainagar",
      description: "Completed my secondary education with a focus on Science and Mathematics. This period was crucial in developing my analytical thinking and problem-solving skills, which eventually led me to pursue Computer Science Engineering.",
      metrics: "Stream: PCMB (Physics, Chemistry, Mathematics, Biology)",
      statusText: null,
      tags: ["Science", "Mathematics"]
    }
  ];

  // Client side data stream selector
  const filteredData = journeyData.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  return (
    <div className="education relative w-full flex flex-col pt-8 bg-[transparent] overflow-hidden" ref={containerRef}>
      
      {/* FIXED CONTAINER: Is wrapper ki wajah se tabs component absolute horizon par center lock ho jayega */}
      <div className="max-w-full mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="edu_heading text-xl text-center md:text-5xl mb-4 text-white font-bold">
          Educational & <br /> Experience <span className="text-[#1991a3]">Journey</span>
        </h2>
      </div>

      <div className="w-full flex justify-center items-center mb-4 px-4 z-30">
        <div className="flex justify-center items-center gap-3 bg-[black] border border-neutral-900 p-1.5 rounded-[50px] w-fit backdrop-blur-xl relative">
          {["experience", "education", "all"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab px-6 py-2 text-xs md:text-sm font-mono uppercase tracking-wider rounded-[50px] font-bold transition-all  ease-in duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-[#1991a3] text-black shadow-md shadow-[#1991a3]/20"
                  : "text-neutral-400 hover:text-[#1991a3] hover:scale-120"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* State context successfully passed downwards */}
      <Timeline data={filteredData} activeTab={activeTab} />
    </div>
  );
};

export default EducationPage;