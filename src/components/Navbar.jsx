import React from "react";
import { motion } from "framer-motion";
import { FaUserCheck } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { LuFolderCode } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";


const fadeInUp = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Navbar = () => {
  return (
    <motion.div className="absolute flex items-center justify-center w-full h-[100vh]">
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <motion.ul
          className="nav-links"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          <motion.li
          className="aboutNavpoint flex flex-col items-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserCheck className="lg:hidden" size={20}/>
            <a href="#about">About</a>
          </motion.li>
          
          <motion.li
          className="flex flex-col items-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWandMagicSparkles className="lg:hidden" size={20}/>
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li
          className="flex flex-col items-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LuFolderCode className="lg:hidden" size={20}/>
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li
          className="flex flex-col items-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoIosMail className="lg:hidden" size={20}/>
            <a href="#contact">Contact</a>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
