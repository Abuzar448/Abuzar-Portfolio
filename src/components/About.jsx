import React from "react";
import photo from "../assets/photo.jpg";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.3 },
  };

  return (
    <>
    <motion.div
      className="aboutsection"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="heading font-semibold"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      <motion.div className="main">
        {/* Left Section */}
        <motion.div
          className="left"
          variants={fadeFromLeft}
          initial="initial"
          whileInView="animate"
        >
          <div className="about">
            <p>
              I’m a passionate Full Stack Web Developer focused on building
              modern, responsive, and scalable web applications. I enjoy turning
              complex problems into clean, efficient solutions using
              technologies like React, Node.js, Express, and MongoDB. I believe
              in writing code that not only works but is structured, reusable,
              and maintainable.
              <br />
              Currently, I’m exploring advanced backend concepts and real-world
              project development to strengthen my overall stack expertise.
            </p>
            <br />
            <p className="fGoal">
              My goal is to become a skilled Full Stack Developer capable of
              building scalable and impactful web applications that solve
              real-world problems.
            </p>
          </div>

          <div className="education">
            <h3>Education</h3>
            <hr />
            <div className="educationPara">
              <p>
                SSGB College of Engineering and Technology, Bhusawal | CGPA - 7.5
              </p>
              <p>B.Tech | Computer Science & Engineering</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div className="right" variants={fadeIn} whileInView="animate">
          <div className="profilePhoto">
            <img src={photo} alt="Profile" />
          </div>

          <div className="social-icons">
            <a href="https://github.com/Abuzar448"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/abuzar-khan-4a03b0290/"><i className="fab fa-linkedin"></i></a>
            
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default About;
