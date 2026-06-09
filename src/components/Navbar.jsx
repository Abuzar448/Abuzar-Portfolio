import React from "react";
import { motion } from "framer-motion";
import { FaUserCheck } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { LuFolderCode } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Navbar = () => {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="navbardiv">
        <motion.ul
          className="nav-links"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.li
            className="flex flex-col items-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserCheck className="lg:hidden" size={20} />
            <a href="#about">About</a>
          </motion.li>

          <motion.li
            className="flex flex-col items-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWandMagicSparkles className="lg:hidden" size={20} />
            <a href="#skills">Skills</a>
          </motion.li>

          <motion.li
            className="flex flex-col items-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LuFolderCode className="lg:hidden" size={20} />
            <a href="#projects">Projects</a>
          </motion.li>

          <motion.li
            className="flex flex-col items-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoIosMail className="lg:hidden" size={20} />
            <a href="#contact">Contact</a>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;