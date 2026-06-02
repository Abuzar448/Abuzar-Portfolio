import React from "react";
import { motion } from "framer-motion";
import "../Style/about.css";

const About = () => {
  // Sophisticated stagger system 
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
      y: 30 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.215, 0.610, 0.355, 1.000] // Premium cubic-bezier curve
      } 
    },
  };

  return (
    <motion.section
      className="about-section"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Decorative clean ambient background grid glow */}
      <div className="about-glow-orb" />

      <div className="about-wrapper">
        <motion.div className="about-header" variants={itemVariants}>
          <span className="section-tag">01. Discovery</span>
          <h2 className="heading">About Me</h2>
          <div className="accent-bar"></div>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-meta-box" variants={itemVariants}>
            <h3 className="profile-name">Abuzar Khan</h3>
            <p className="profile-title">Full-Stack Web Developer & Designer</p>
          </motion.div>
          
          <motion.div className="about-desc-box" variants={itemVariants}>
            <p className="about-text">
              Currently pursuing my <span className="highlight-text">B.Tech</span> in{" "}
              <span className="highlight-text">Computer Science and Engineering</span>. 
              I specialize in the MERN Stack, moving away from minor tutorials to build 
              production-ready, real-world applications with advanced architecture.
            </p>
            <p className="about-text">
              Currently, I am actively expanding my skillset into <span className="highlight-text">AI Engineering</span> by 
              focusing on the pipeline execution flow. My ultimate goal is to bridge the gap between 
              pixel-perfect UI/UX design and highly scalable system performance.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;