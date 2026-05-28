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
    <section id="skills" className="skillsMainBox flex flex-col justify-center items-center py-12 md:py-24 px-4 relative bg-[black] overflow-hidden">
      {/* Background Aesthetic Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[500px] h-[200px] md:h-[300px] bg-blue-500/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full container max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-white tracking-tight">
          My <span className="text-blue-500">Skills &</span> 
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-white tracking-tight">
          <span className="text-blue-500">Technical Stack</span> 
        </h2>

        {/* --- Moving Skills Section --- */}
        <div className="py-4 md:py-10 bg-transparent overflow-hidden whitespace-nowrap group">
          <div className="flex w-fit">
            <motion.div
              className="flex gap-3 md:gap-8 px-2 md:px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 18, repeat: Infinity }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="movingSkills flex items-center gap-2 md:gap-3 px-4 md:px-10 py-3 md:py-6 bg-white/[0.02] border border-neutral-800 rounded-xl md:rounded-2xl">
                  <span className="text-base md:text-2xl">{skill.icon}</span>
                  <span className="text-white text-xs md:text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Fast Floating Zero-Gravity Grid (Responsive & Mobile-Safe) --- */}
        <div 
          ref={constraintsRef} 
          className="skillsBox grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 border border-white/5 rounded-2xl md:rounded-3xl p-3 md:p-6 bg-white/[0.01] backdrop-blur-sm overflow-hidden select-none"
        >
          {skills.map((skill, key) => (
            <motion.div
              key={key}
              
              // High-Speed Floating Engine (Duration reduced to 1.8s - 2.4s for organic energetic motion)
              animate={{
                y: [
                  0, 
                  key % 3 === 0 ? -8 : key % 3 === 1 ? -4 : -5, 
                  key % 3 === 0 ? 3 : key % 3 === 1 ? 2 : 2,
                  0
                ],
                x: [0, key % 2 === 0 ? 3 : -3, 0]
              }}
              transition={{
                duration: key % 3 === 0 ? 1.8 : key % 3 === 1 ? 2.2 : 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.04, y: -10, zIndex: 10 }}
              className="skillBox flex flex-col items-center justify-between min-h-[110px] sm:min-h-[120px] md:h-[135px] border border-neutral-800 hover:border-blue-500/50 bg-neutral-900/20 backdrop-blur-md p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl transition-colors duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/[0.01] pointer-events-none" />
              
              {/* Skill Title Block with auto wrap for longer names */}
              <div className="text-center mt-1 md:mt-2 pointer-events-none w-full px-1">
                <h3 className="font-bold text-xs sm:text-sm md:text-base text-white group-hover:text-blue-400 transition-colors duration-200 tracking-tight break-words">
                  {skill.name}
                </h3>
              </div>

              {/* Layout Footer Badges */}
              <div className="w-full flex justify-between items-center pointer-events-none mt-3 md:mt-4 gap-1">
                <span className="skill-category text-[8px] md:text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-950/90 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md border border-neutral-800/60 truncate max-w-[65%]">
                  {skill.category}
                </span>
                
                <span className="text-[8px] md:text-[10px] font-mono text-blue-500/60 opacity-40 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  ⚡ Active
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