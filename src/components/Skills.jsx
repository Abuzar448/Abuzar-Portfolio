import React, { useRef } from "react";
import BackToTop from "./BackToTop";
import { motion } from "framer-motion";

const Skills = () => {
  const movingSkills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Python", icon: "🐍" },
    { name: "Express", icon: "🚂" },
    { name: "Redux", icon: "🟣" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Next.js", icon: "⚫" },
  ];

  const duplicatedSkills = [...movingSkills, ...movingSkills];

  const skills = [
    { name: "HTML/CSS", level: 95, category: "FrontEnd" },
    { name: "React.js", level: 95, category: "FrontEnd" },
    { name: "Javascript", level: 90, category: "FrontEnd" },
    { name: "Tailwind CSS", level: 90, category: "FrontEnd" },
    { name: "Next.js", level: 80, category: "FrontEnd" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express", level: 90, category: "Backend" },
    { name: "MongoDB", level: 90, category: "Backend" },
    { name: "API Integration", level: 85, category: "Backend" },
    { name: "GIt/Github", level: 80, category: "tools" },
    { name: "Figma", level: 80, category: "tools" },
    { name: "VS Code", level: 80, category: "tools" },
  ];

  return (
    <section
      id="skills"
      className="skillsMainBox flex flex-col justify-center items-center py-24 px-4 relative bg-[#0f172a]"
    >
      <div className="w-full container max-w-5xl">
        <BackToTop />
        <br />
        <br />
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-blue-500">Skills &</span> 
        </h2>

        {/* --- Moving Skills Section --- */}
        <div className="py-10 bg-transparent overflow-hidden whitespace-nowrap group">
          <h2 className="text-center text-2xl font-bold text-white mb-10">
             <span className="text-blue-500">Technical</span> Stack
          </h2>
          <br />
          <div className="flex w-fit">
            <motion.div
              className="flex gap-8 px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 15,
                repeat: Infinity,
              }}
              whileHover={{ transition: { duration: 0 } }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="movingSkills flex items-center gap-3 px-10 py-8 bg-white/[0.02] border border-neutral-800 rounded-2xl hover:border-blue-500 transition-colors"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Skills Grid Section (Static, No Drag) --- */}
        <div 
          className="skillsBox grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 border border-white/5 rounded-3xl p-6 bg-white/[0.01] backdrop-blur-sm"
        >
          {skills.map((skill, key) => (
            <motion.div
              key={key}
              // Drag hataya gaya hai, bas subtle hover effect rakha hai
              whileHover={{ scale: 1.02 }}
              className="skillBox flex flex-col items-center justify-center h-[120px] border border-neutral-800 hover:border-blue-500 bg-white/[0.03] backdrop-blur-md p-6 rounded-xl shadow-xl transition-all duration-300 mx-2"
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
              </div>
              <div className="bg-black/50 w-full h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level + "%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-blue-600 h-full rounded-full"
                ></motion.div>
              </div>
              <div className="w-full text-right mt-1">
                <span className="text-xs text-neutral-500">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;