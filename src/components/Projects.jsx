import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="font-semibold"
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <a href="https://c1bbe7d5-09c2-4873-8d0c-d9538677d326-00-2in90n41zc1j2.sisko.replit.dev/listings">
          <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Rentmate(portfolio).jpg')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Rentmate - Smart Rental Management System</h3>
          <p>
            A full-stack MERN application that streamlines property rental
            management by connecting tenants and landlords seamlessly.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>Javascript</span>
            <span>Node.js</span>
            <span>Backend API</span>
            <span>Mongodb</span>
            <span>Express</span>
          </div>
        </motion.div>
        </a>
        
        <a href="https://69036271ea3020341e292a15--sidcup-web.netlify.app/">
          <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Frontend(portfolio).jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>FlowVerse – The Art of Animated Web Design</h3>
          <p>
            A visually engaging website built using HTML, CSS, and JavaScript,
            enhanced with GSAP animations for smooth, interactive transitions.
            It focuses on creative motion design and modern UI flow, blending
            aesthetics with performance.
          </p>
          <div className="project-tech">
            <span>Javascript</span>
            <span>GSAP</span>
            <span>CSS</span>
          </div>
        </motion.div>
        </a>
        
      </motion.div>
    </motion.section>
  );
};

export default Projects;
