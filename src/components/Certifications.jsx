// src/components/Certificates.jsx
import React from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "./sticky-scroll-reveal";

const Certifications = () => {
  const certificatesData = [
    {
      title: "Top Performer & Group Lead | Barclays Corporate Readiness",
      description: "Selected by campus authorities to lead the Core Development Student Track in a 3-day intensive seminar conducted by Barclays. Effectively presented modern software development architectures to students and faculty, and was felicitated directly by the College Placement Head as a Top 3 performer campus-wide.",
      images: ["/projects/Barclays_2.jpeg","/projects/Barclays_3.jpg","/projects/Barclays_1.jpeg"]
    },
    {
      title: "Full-Stack MERN Developer Certification",
      description: "Validation of robust full-stack engineering principles. Covered asynchronous server-side architectures inside Node.js, specialized Express routing pipelines, MongoDB database indexing strategies, and multi-tier secure JWT authentication layers.",
      images: ["/projects/FullStack-Certificate.jpg"]
    },
    {
      title: "Corporate Web Development Internship",
      description: "Hands-on industrial experience building and optimizing performance-driven web products. Implemented scalable React layouts, handled production API state management frameworks, and aligned clean UI/UX paradigms with production-ready benchmarks.",
      images: ["/projects/Internship-Certificate.jpg"]
    },
    {
      title: "MongoDB Database Engineering Core",
      description: "Deep technical comprehension of NoSQL databases. Mastered schema design patterns, aggregation pipelines, document structural models, and transactional reliability setups required for modern high-traffic server hubs.",
      images: ["/projects/Mongodb_Abuzar.jpg"]
    },
    {
      title: "Cloud Computing Infrastructure & Systems",
      description: "Architecting decentralized modern applications. Explored cloud deployment methodologies, virtualization pipelines, remote infrastructure scaling, and robust backend operational environments for high availability.",
      images: ["/projects/Cloud_Computing_Abuzar.jpg"]
    },
    {
      title: "Data Visualization & Analytics with Python",
      description: "Foundational data engineering and mathematical logic profiling. Built advanced static data visualization matrices using Python pipelines, manipulated structured datasets, and optimized programmatic scripting logic.",
      images: ["/projects/static_visualization_python.jpg"]
    }
  ];

  return (
    <motion.section
      className="certification w-full bg-black py-20 px-4 md:px-10 relative overflow-visible flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="certificateText text-2xl md:text-4xl font-bold text-white mb-16 tracking-tight text-center lg:text-left"
        >
          Certifications & Achievements
        </motion.h2>
        <br />
        <br />
        <StickyScroll content={certificatesData} />
      </div>
    </motion.section>
  );
};

export default Certifications;