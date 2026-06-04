import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaDownload } from "react-icons/fa";
import LoottieAnimation from "./LootieAnimation";
import "../Style/hero.css";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const slideRight = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.1 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero relative w-full h-auto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 block md:hidden">
        <LoottieAnimation />
      </div>
      
        <div className="hero-container relative z-10">
          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="hero-badge">
              <span>👋 Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="glitch"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              Abuzar khan
            </motion.h1>

            <motion.h2 className="hero-subtitle">
              A Creative FullStack Developer & Designer
            </motion.h2>

            <motion.p className="hero-description" variants={fadeInUp}>
              I craft digital experiences that combine design with powerful
              functionality. Specializing in modern web applications and
              interactive user interfaces.
            </motion.p>

            <motion.div className="cta-buttons" variants={staggerContainer}>
              <motion.a
                href="#projects"
                className="cta-primary"
                variants={slideRight}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Work
              </motion.a>
              <motion.a
                href="/Abuzar_k_Resume.pdf"
                download="abuzar_khan_resume.pdf"
                target="_blank"
                className="cta-secondary"
                variants={slideRight}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="">Resume...</span>
                <FaDownload className="font-semibold h-[20px] w-[25px]" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="code-display">
              <SyntaxHighlighter
                style={vscDarkPlus}
                language="typescript"
                customStyle={{
                  margin: 0,
                  padding: "2rem",
                  height: "100%",
                  borderRadius: "20px",
                  background: "transparent",
                  backdropFilter: "",
                }}
              >
                {`const aboutMe: DeveloperProfile = {
          codename: "Abuzar-khan",
          origin: "🌍 Somewhere between a coffee shop and a terminal",
          role: "Fullstack Web Sorcerer",
          stack: {
            languages: ["JavaScript", "TypeScript", "SQL"],
            frameworks: ["React", "Next.js", "TailwindCSS", "Supabase"],
          },
          traits: [
           "pixel-perfectionist",
           "API whisperer",
           "dark mode advocate",
           "terminal aesthetic enthusiast",
          ],
          missionStatement:
            "Turning ideas into interfaces and bugs into feature",
            availability: "Available for hire",
             };`}
              </SyntaxHighlighter>
            </div>

            <motion.div
              className="floating-card"
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="card-content">
                <span className="card-icon">💻</span>
                <span className="card-text">
                  Currently Working on Something awesome....
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        

    </motion.section>
  );
};

export default Hero;