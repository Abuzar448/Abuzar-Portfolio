import React from "react";
import { motion } from "framer-motion";
import "../Style/about.css";

const About = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1.0], // Premium cubic-bezier curve
      },
    },
  };

  const specializations = [
    {
      title: "Frontend Architecture",
      desc: "Crafting production-grade, optimized user journeys with seamless motion design.",
      icon: "💻",
    },
    {
      title: "Backend & Systems",
      desc: "Designing scalable APIs, state machines, and relational database schemas.",
      icon: "⚙️",
    },
    {
      title: "AI Pipeline Flows",
      desc: "Integrating intelligent automation layers and context models inside standard web applications.",
      icon: "🧠",
    },
  ];

  const coreSkills = {
    frontend: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    backend: ["Node.js", "Express", "Supabase", "PostgreSQL"],
    tools: ["Git", "Docker", "AI Pipelines", "REST APIs"],
  };

  return (
    <motion.section
      className="about-section"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="about-glow-orb" />

      <div className="about-wrapper">
        <motion.div className="about-header" variants={itemVariants}>
          <h2 className="about-header heading">Abuzar Khan</h2>
          <div className="accent-bar"></div>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-meta-box" variants={itemVariants}>
            <h3 className="profile-name">
              Full-Stack Web Developer & Designer
            </h3>
            <p className="place">Muktainagar, dist.Jalgaon, Maharashtra</p>
          </motion.div>

          <motion.div className="about-desc-box" variants={itemVariants}>
            <p className="about-text">
              Currently pursuing my{" "}
              <span className="highlight-text">B.Tech</span> in{" "}
              <span className="highlight-text">
                Computer Science and Engineering
              </span>
              . I specialize in the MERN Stack, moving away from minor tutorials
              to build production-ready, real-world applications with advanced
              architecture.
            </p>
            <p className="about-text">
              Currently, I am actively expanding my skillset into{" "}
              <span className="highlight-text">AI Engineering</span> by focusing
              on the pipeline execution flow. My ultimate goal is to bridge the
              gap between pixel-perfect UI/UX design and highly scalable system
              performance.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="services-container animate-item"
        variants={itemVariants}
      >
        <h4 className="sub-heading">What I Focus On</h4>
        <div className="services-grid">
          {specializations.map((spec, index) => (
            <div className="service-card" key={index}>
              <span className="service-icon">{spec.icon}</span>
              <h5>{spec.title}</h5>
              <p>{spec.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
      {/* new */}
      <motion.div
        className="skills-container animate-item"
        variants={itemVariants}
      >
        <h4 className="sub-heading">Current Arsenal</h4>
        <div className="skills-grid">
          <div className="skills-column">
            <h6>Frontend</h6>
            <ul>
              {coreSkills.frontend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h6>Backend & DB</h6>
            <ul>
              {coreSkills.backend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h6>Tools & Core</h6>
            <ul>
              {coreSkills.tools.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
