import React from "react";
import { motion } from "framer-motion";
import BackToTop from "./BackToTop";

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
      <BackToTop></BackToTop>
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
        <a href="https://rent-mate--abuzar21.replit.app">
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

        <a href="https://abuzar448.github.io/Myntra_Clone/">
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/Myntra_Clone.jpg')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3> StyleHub - Myntra Functional Clone</h3>
            <p>
              A fully responsive, functional web application that replicates the
              core user interface and "Add to Bag" functionality of the popular
              e-commerce platform, Myntra.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>Javascript</span>
              <span>CSS5</span>
              <span>Tailwind</span>
              <span>Media Queries</span>
            </div>
          </motion.div>
        </a>

        <a href="https://ems-react-nu.vercel.app/">
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/EMS.jpg')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>SyncroWork: Enterprise Task Monitoring System</h3>
            <p>
              A React & Tailwind-based system featuring a dual-interface for Admin task assignment and Employee progress tracking. Fully responsive, high-performance, and powered by Context API for seamless, real-time state management.
            </p>
            <div className="project-tech">
              <span>React.js</span>
              <span>Javascript</span>
              <span>CSS5</span>
              <span>Tailwind</span>
              <span>Media Queries</span>
            </div>
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
