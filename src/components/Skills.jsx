import React, { useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const constraintsRef = useRef(null);

  // 1. Categorized & Expanded Stack for Multi-Row Infinite Marquees
  const frontendMoving = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "⚫" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "JavaScript", icon: "💛" },
    { name: "HTML5/CSS3", icon: "🎨" },
    { name: "Framer Motion", icon: "🍿" },
    { name: "Redux Toolkit", icon: "🟣" }
  ];

  const backendMoving = [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Python", icon: "🐍" },
    { name: "REST APIs", icon: "⚡" },
    { name: "MERN Stack", icon: "🚀" }
  ];

  const toolsMoving = [
    { name: "Git", icon: "🧡" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "📐" },
    { name: "Postman", icon: "🚀" },
    { name: "Vercel", icon: "▲" }
  ];

  // Helper arrays for continuous seamless looping
  const dupFrontend = [...frontendMoving, ...frontendMoving, ...frontendMoving];
  const dupBackend = [...backendMoving, ...backendMoving, ...backendMoving];
  const dupTools = [...toolsMoving, ...toolsMoving, ...toolsMoving];

  // 2. Comprehensive Floating Grid Skills Database
  const skills = [
    // FrontEnd
    { name: "React.js", category: "FrontEnd" },
    { name: "Next.js", category: "FrontEnd" },
    { name: "Javascript (ES6+)", category: "FrontEnd" },
    { name: "Tailwind CSS", category: "FrontEnd" },
    { name: "HTML5 & CSS3", category: "FrontEnd" },
    { name: "Framer Motion", category: "FrontEnd" },
    { name: "Redux / Context API", category: "FrontEnd" },
    
    // Backend & DB
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Python", category: "Language" },
    { name: "REST API Integration", category: "Backend" },
    { name: "MERN Architecture", category: "System" },
    
    // Tools
    { name: "Git & GitHub", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Figma UI/UX", category: "Tools" },
    { name: "Postman API client", category: "Tools" }
  ];

  return (
    <section id="skills" className="skillsMainBox w-full flex flex-col justify-center items-center py-16 md:py-24 md:px-16 relative bg-black overflow-hidden select-none">
      
      {/* Background Aesthetic Subtle Radial Glow (Guaranteed No-Overflow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-[#1991a3]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        
        {/* Headings */}
        <div className="skill_heading text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            My <span className="text-[#1991a3]">Skills &</span> 
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mt-2">
            <span className="text-[#1991a3] heading">Technical Stack</span> 
          </h2>
        </div>

        {/* --- Multi-Row Categorized Moving Skills Marquees --- */}
        <div className="w-full flex flex-col gap-4 md:gap-6 mb-16 md:mb-24 overflow-hidden">
          
          {/* Row 1: Frontend (Right to Left) */}
          <div className="w-full overflow-hidden whitespace-nowrap flex py-1">
            <motion.div
              className="flex gap-4 md:gap-6 shrink-0"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            >
              {dupFrontend.map((skill, index) => (
                <div key={`fe-${index}`} className="movingSkills1 flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/[0.02] border border-neutral-900 rounded-xl md:rounded-2xl hover:border-[#1991a3]/50 transition-colors duration-300">
                  <span className="text-xl md:text-2xl">{skill.icon}</span>
                  <span className="text-white text-sm md:text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Backend & Database (Left to Right) */}
          <div className="w-full overflow-hidden whitespace-nowrap flex py-1">
            <motion.div
              className="flex gap-4 md:gap-6 shrink-0"
              animate={{ x: ["-33.33%", "0%"] }}
              transition={{ ease: "linear", duration: 22, repeat: Infinity }}
            >
              {dupBackend.map((skill, index) => (
                <div key={`be-${index}`} className="movingSkills flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/[0.02] border border-neutral-900 rounded-xl md:rounded-2xl hover:border-[#1991a3]/50 transition-colors duration-300">
                  <span className="text-xl md:text-2xl">{skill.icon}</span>
                  <span className="text-white text-sm md:text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3: Tools & Ecosystem (Right to Left) */}
          <div className="w-full overflow-hidden whitespace-nowrap flex py-1">
            <motion.div
              className="flex gap-4 md:gap-6 shrink-0"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ ease: "linear", duration: 24, repeat: Infinity }}
            >
              {dupTools.map((skill, index) => (
                <div key={`tl-${index}`} className="movingSkills flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/[0.02] border border-neutral-900 rounded-xl md:rounded-2xl hover:border-[#1991a3]/50 transition-colors duration-300">
                  <span className="text-xl md:text-2xl">{skill.icon}</span>
                  <span className="text-white text-sm md:text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* --- Fast Floating Zero-Gravity Grid Layout --- */}
        <div 
          ref={constraintsRef} 
          className="skillsBox grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-8 bg-white/[0.01] backdrop-blur-md overflow-hidden"
        >
          {skills.map((skill, key) => (
            <motion.div
              key={key}
              animate={{
                y: [
                  0, 
                  key % 3 === 0 ? -6 : key % 3 === 1 ? -4 : -5, 
                  key % 3 === 0 ? 3 : key % 3 === 1 ? 2 : 1,
                  0
                ],
                x: [0, key % 2 === 0 ? 2 : -2, 0]
              }}
              transition={{
                duration: key % 3 === 0 ? 2.2 : key % 3 === 1 ? 2.5 : 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03, y: -5, zIndex: 10 }}
              className="skillBox flex flex-col items-center justify-between min-h-[110px] sm:min-h-[120px] md:h-[130px] border border-neutral-900 hover:border-[#1991a3]/60 bg-neutral-900/10 backdrop-blur-lg p-4 md:p-5 rounded-xl md:rounded-2xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1991a3]/[0.01] pointer-events-none" />
              
              {/* Skill Title Block */}
              <div className="text-center mt-2 pointer-events-none w-full px-1 flex-grow flex items-center justify-center">
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-neutral-200 group-hover:text-[#1991a3] transition-colors duration-200 tracking-tight break-words max-w-full">
                  {skill.name}
                </h3>
              </div>

              {/* Layout Footer Badges */}
              <div className="w-full flex justify-between items-center pointer-events-none mt-4 gap-2 pt-2 border-t border-white/[0.02]">
                <span className="skill-category text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-950 px-2 py-0.5 md:py-1 rounded-md border border-neutral-800/80 truncate max-w-[70%]">
                  {skill.category}
                </span>
                
                <span className="text-[9px] md:text-[10px] font-mono text-[#1991a3] opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  ⚡ Stack
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