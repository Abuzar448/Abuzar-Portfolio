import React from "react";
import { motion } from "framer-motion";

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
        className="font-semibold"
      >
        Certifications
      </motion.h2>
      {/* 1 */}
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
            style={{
              backgroundImage: "url('/projects/FullStack-Certificate.jpg')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
        </motion.div>

        {/* 2 */}
        <motion.div
          className="certification-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="certification-image"
            style={{
              backgroundImage: "url('/projects/Internship-Certificate.jpg')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
        </motion.div>

        {/* 3 */}
        <motion.div
          className="certification-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="certification-image"
            style={{ backgroundImage: "url('/projects/Mongodb_Abuzar.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
        </motion.div>

        {/* 4 */}

        <motion.div
          className="certification-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="certification-image"
            style={{
              backgroundImage: "url('/projects/Cloud_Computing_Abuzar.jpg')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
        </motion.div>

        {/* 5 */}

        <motion.div
          className="certification-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="certification-image"
            style={{
              backgroundImage:
                "url('/projects/static_visualization_python.jpg')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
