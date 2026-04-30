import React from "react";
import { motion } from "framer-motion";
import ManAnimation from "./ManAnimation";
import BackToTop from "./BackToTop";


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

  return (
    <motion.section
      id="about"
      className="aboutsection w-full min-h-screen py-10 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >

      <motion.h1
        className="heading font-semibold text-4xl md:text-5xl "
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
      >
        About Me
      </motion.h1>
      

      {/* Main Container - Laptop pe Row, Mobile pe Column */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl  md:px-20 gap-10 bg-gradient-to-b from-[#7c3aed] to-transparent md:bg-none rounded-t-[120px]">
        {/* LEFT SECTION (Text) */}
        <motion.div
          className="left w-full lg:w-1/2 md:px-0 order-2 lg:order-1"
          variants={fadeFromLeft}
          initial="initial"
          whileInView="animate"
        >
          <div className="about text-left">
            <p className="text-base md:text-lg leading-relaxed text-slate-200">
              I’m a passionate{" "}
              <span className="text-blue-400 font-bold">
                Full Stack Web Developer
              </span>{" "}
              focused on building modern, responsive, and scalable web
              applications.
              <br />
              <br />I enjoy turning complex problems into clean, efficient
              solutions using technologies like{" "}
              <span className="text-blue-400 font-bold">
                React, Node.js, Express, and MongoDB.
              </span>
              <br />
              <br />I believe in writing code that is structured, reusable, and
              maintainable.
            </p>
            <p className="mt-4 text-slate-200">
              Currently in my final year of{" "}
              <span className="text-blue-400 font-semibold">
                B.Tech in Computer Science
              </span>
              , I spend my days honing my technical craft. I am bridge-building
              between my foundation in the{" "}
              <span className="text-blue-400 font-semibold">MERN stack</span>{" "}
              and my growing passion for
              <span className="text-blue-400 font-semibold">
                {" "}
                AI Engineering
              </span>
              .
            </p>
<br />
            <div className="fGoal mt-10 p-4   rounded-r-lg">
              <p className="italic text-blue-300">
                My goal is to become a skilled Full Stack Developer capable of
                building scalable web applications that solve real-world
                problems.
              </p>
            </div>
            <br />
            <div className="w-full flex flex-wrap gap-2">
              <div className="min-w-[120px] h-[50px] px-4 py-4 rounded-2xl border-black border-2 text-center flex items-center justify-center">Frontend dev.</div>
              <div className="min-w-[100px] h-[50px] px-4 py-4 rounded-2xl border-black border-2 text-center flex items-center justify-center">Backend</div>
              <div className="min-w-[150px] h-[50px] px-4 py-4 rounded-2xl border-black border-2 text-center flex items-center justify-center">DB Management</div>
              <div className="min-w-[80px] h-[50px] px-4 py-4 rounded-2xl border-black border-2 text-center flex items-center justify-center">AI/ML</div>
              <div className="min-w-[80px] h-[50px] px-4 py-4 rounded-2xl border-black border-2 text-center flex items-center justify-center">Figma</div>
              <div className="min-w-[120px] h-[50px] px-4 py-4 rounded-2xl border-black border-2 text-center flex items-center justify-center">API Integration</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SECTION (Animation) */}
        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px]">
            <ManAnimation />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
