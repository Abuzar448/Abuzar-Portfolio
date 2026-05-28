import React, { useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const constraintsRef = useRef(null);

  const movingSkills = [
    { name: "React", icon: "⚛️" }, { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" }, { name: "Python", icon: "🐍" },
    { name: "Express", icon: "🚂" }, { name: "Redux", icon: "🟣" },
    { name: "Tailwind", icon: "🌊" }, { name: "Next.js", icon: "⚫" },
  ];

  const duplicatedSkills = [...movingSkills, ...movingSkills];

  const skills = [
    { name: "HTML/CSS", category: "FrontEnd" }, { name: "React.js", category: "FrontEnd" },
    { name: "Javascript", category: "FrontEnd" }, { name: "Tailwind CSS", category: "FrontEnd" },
    { name: "Next.js", category: "FrontEnd" }, { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" }, { name: "MongoDB", category: "Backend" },
    { name: "API Integration", category: "Backend" }, { name: "Git/Github", category: "Tools" },
    { name: "Figma", category: "Tools" }, { name: "VS Code", category: "Tools" },
  ];

  return (
    <section id="skills" className="skillsMainBox flex flex-col justify-center items-center py-16 md:py-24 px-4 relative bg-[black] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-blue-500">Skills &</span> 
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          <span className="text-blue-500">Technical Stack</span> 
        </h2>

        {/* --- Moving Skills Section --- */}
        <div className="py-6 md:py-10 bg-transparent overflow-hidden whitespace-nowrap group">
          <div className="flex w-fit">
            <motion.div
              className="flex gap-4 md:gap-8 px-2 md:px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 18, repeat: Infinity }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="movingSkills flex items-center gap-2 md:gap-3 px-6 md:px-10 py-4 md:py-6 bg-white/[0.02] border border-neutral-800 rounded-2xl">
                  <span className="text-lg md:text-2xl">{skill.icon}</span>
                  <span className="text-white text-sm md:text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Floating Sandbox Grid --- */}
        <div ref={constraintsRef} className="skillsBox grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 border border-white/5 rounded-3xl p-4 md:p-6 bg-white/[0.01] backdrop-blur-sm overflow-hidden select-none touch-none">
          {skills.map((skill, key) => (
            <motion.div
              key={key}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.5}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }}
              
              // Zero Gravity Floating Animation Effect
              animate={{
                y: [0, key % 2 === 0 ? -6 : -4, 0],
              }}
              transition={{
                duration: key % 2 === 0 ? 3 : 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.97, cursor: "grabbing" }}
              className="skillBox flex flex-col items-center justify-between min-h-[120px] md:h-[135px] border border-neutral-800 hover:border-blue-500/50 bg-neutral-900/20 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-2xl transition-colors duration-300 relative group cursor-grab overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/[0.01] pointer-events-none" />
              <div className="text-center mt-1 md:mt-2 pointer-events-none">
                <h3 className="font-bold text-sm md:text-base text-white group-hover:text-blue-400 transition-colors duration-200 tracking-tight">{skill.name}</h3>
              </div>
              <div className="w-full flex justify-between items-center pointer-events-none mt-3 md:mt-4">
                <span className="skill-category text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-950/90 px-2 py-1 rounded-md border border-neutral-800/60">{skill.category}</span>
                <span className="text-[9px] md:text-[10px] font-mono text-blue-500/60 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline">Floating ✓</span>
                <span className="text-[9px] font-mono text-blue-400/80 transition-all duration-300">
                  <span className="inline sm:group-hover:hidden text-neutral-600 sm:text-neutral-500">
                    ⋮⋮ Grab
                  </span>
                  <span className="hidden sm:group-hover:inline animate-pulse text-blue-500 font-semibold">
                    Drag Me ⚡
                  </span>
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