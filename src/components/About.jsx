// src/components/About.jsx
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import ManAnimation from "./ManAnimation";

const About = () => {
  return (
    <section id="about" className="w-full h-[150vh] bg-[black] overflow-hidden flex flex-col items-center justify-center">
      <ContainerScroll
        titleComponent={
          <p className="text-[40px] md:text-[50px] font-semibold text-white">About Me</p>
        }
      >
        {/* INSIDE TAB MOCKUP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center p-4 md:p-8 bg-[black]">
{/* ANIMATION BOX */}
          <div className="lg:col-span-5 flex justify-center items-center bg-[#0f172a] rounded-2xl p-4 border border-[#22222a] h-full min-h-[200px]">
            <div className="w-full max-w-[260px] md:max-w-[400px]">
              <ManAnimation />
            </div>
          </div>
          
          {/* TEXT ENGINE */}
          <div className="tab lg:col-span-7 text-center flex flex-col items-center justify-center gap-6 overflow-y-auto max-h-full pr-2 ">
            <p className="text-sm md:text-base leading-relaxed text-slate-300">
              I’m a passionate <span className="text-blue-400 font-bold">Full Stack Web Developer</span> focused on building modern, responsive, and scalable web applications.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-slate-300">
              I enjoy turning complex problems into clean, efficient solutions using technologies like <span className="text-blue-400 font-bold">React, Node.js, Express, and MongoDB.</span>
            </p>
            <p className="text-sm md:text-base leading-relaxed text-slate-300">
              Currently in my final year of <span className="text-blue-400 font-semibold">B.Tech in Computer Science</span>, I am bridge-building between my foundation in the MERN stack and my growing passion for AI Engineering.
            </p>

            {/* BADGES METRIC */}
            <div className="w-full flex flex-wrap gap-3 mt-4 items-center justify-center">
              {["Frontend dev.", "Backend", "DB Management", "AI/ML", "Figma", "API Integration"].map((skill, index) => (
                <div
                  key={index}
                  className="tabSkill text-xs px-3 py-1.5 rounded-xl border border-neutral-700 bg-[#16161e] text-slate-300 font-mono"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          

        </div>
      </ContainerScroll>
    </section>
  );
};

export default About;