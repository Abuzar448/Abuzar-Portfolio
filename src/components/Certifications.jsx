import React from 'react'
import { motion } from 'framer-motion';

const Certifications = () => {

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
      className="certification"
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
        className='font-semibold'
      >
        Certifications
      </motion.h2>
      <motion.div
        className="certification-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="certification-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="certification-image"
            style={{ backgroundImage: "url('/projects/FullStack-Certificate.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
        </motion.div>

        <motion.div
          className="certification-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="certification-image"
            style={{ backgroundImage: "url('/projects/Internship-Certificate.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
        </motion.div>
        

        
        
      </motion.div>
    </motion.section>
  )
}

export default Certifications;