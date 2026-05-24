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

  const projectData = [
    {
      href: "https://rent-mate--abuzar21.replit.app",
      img: "/projects/Rentmate(portfolio).jpg",
      title: "Rentmate - Smart Rental Management System",
      desc: "A full-stack MERN application that streamlines property rental management by connecting tenants and landlords seamlessly.",
      tech: ["React.js", "Javascript", "Node.js", "Backend API", "Mongodb", "Express"]
    },
    {
      href: "https://sidcup-web.netlify.app/",
      img: "/projects/Frontend(portfolio).jpg",
      title: "FlowVerse – The Art of Animated Web Design",
      desc: "A visually engaging website built using HTML, CSS, and JavaScript, enhanced with GSAP animations for smooth, interactive transitions. It focuses on creative motion design and modern UI flow, blending aesthetics with performance.",
      tech: ["Javascript", "GSAP", "CSS"]
    },
    {
      href: "https://abuzar448.github.io/Myntra_Clone/",
      img: "/projects/Myntra_Clone.jpg",
      title: "StyleHub - Myntra Functional Clone",
      desc: "A fully responsive, functional web application that replicates the core user interface and \"Add to Bag\" functionality of the popular e-commerce platform, Myntra.",
      tech: ["HTML5", "Javascript", "CSS5", "Tailwind", "Media Queries"]
    },
    {
      href: "https://ems-react-nu.vercel.app/",
      img: "/projects/EMS.jpg",
      title: "SyncroWork: Enterprise Task Monitoring System",
      desc: "A React & Tailwind-based system featuring a dual-interface for Admin task assignment and Employee progress tracking. Fully responsive, high-performance, and powered by Context API for seamless, real-time state management.",
      tech: ["React.js", "Javascript", "CSS5", "Tailwind", "Media Queries"]
    }
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <style>{`
        @media (min-width: 1024px) {
          .responsive-stack-card {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 40px !important;
            padding: 40px !important;
          }
          .responsive-stack-card .project-image {
            flex: 1 !important;
            width: 50% !important;
            height: 300px !important;
            margin-bottom: 0 !important;
          }
          .responsive-stack-card .card-details-wrapper {
            flex: 1 !important;
            width: 50% !important;
          }
        }
      `}</style>

      <BackToTop />
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
        // Grid setup ko linear stacking column control karne ke liye update kiya
        style={{ display: 'flex', flexDirection: 'column', gap: '80px', maxWidth: '1000px', margin: '0 auto' }}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projectData.map((project, index) => (
          <a 
            href={project.href} 
            key={index}
            style={{
              position: 'sticky',
              top: `calc(100px + ${index * 25}px)`, 
              zIndex: index + 1,
              display: 'block',
              textDecoration: 'none'
            }}
          >
            <motion.div
              // Original 'project-card' ke sath bas humari inline media utility class lagayi
              className="project-card responsive-stack-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              style={{
                boxShadow: '0 -10px 30px -15px rgba(0,0,0,0.8)',
                // FIX: Border radius gradient combo jo border radius kharab nahi karega
                border: '1px solid #2563eb',
                background: 'black',
                
              }}
            >
              <motion.div
                className="project-image"
                style={{
                  backgroundImage: `url('${project.img}')`,
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              />
              
              {/* Wrapped details inside a div to split cleanly on desktop screen formats */}
              <div className="card-details-wrapper">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((techItem, techIndex) => (
                    <span key={techIndex}>{techItem}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;