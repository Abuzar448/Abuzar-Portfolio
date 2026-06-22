import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import BackToTop from "./BackToTop";

// Sub-component completely fixed with strict unit transformation mapping
const Stacking3DCard = ({ project, index, fadeInUp }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Core transformation mapping to ensure strict degree output unit string injection
  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  function handleMouseMove(event) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Double looping array to facilitate smooth infinite marquee execution
  const duplicatedTech = [...project.tech, ...project.tech, ...project.tech];

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "sticky",
        top: `calc(100px + ${index * 25}px)`,
        zIndex: index + 1,
        display: "block",
        textDecoration: "none",
        width: "100%",
      }}
    >
      <motion.div
        className="project-card responsive-stack-card"
        variants={fadeInUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.01 }}
        style={{
          boxShadow: "0 -10px 30px -15px rgba(0,0,0,0.8)",
          border: "1px solid #404040",
          background: "black",
          transformStyle: "preserve-3d",
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        <motion.div
          className="project-image"
          style={{
            backgroundImage: `url('${project.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "250px", // Ensured standard mobile dimensions constraint fallback
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        />

        <div
          className="card-details-wrapper"
          style={{ overflow: "hidden", width: "100%" }}
        >
          <h3 style={{ color: "white" }}>{project.title}</h3>
          <p style={{ color: "#ccc" }}>{project.desc}</p>

          {/* --- Infinite Marquee Container --- */}
          <div
            style={{
              width: "100%",
              padding: "8px 0",
              marginTop: "16px",
              position: "relative",
              overflow: "hidden",
              background: "rgba(255,255,255,0.02)",
              borderTop: "1px solid rgba(25, 145, 163, 0.2)",
              borderBottom: "1px solid rgba(25, 145, 163, 0.2)",
              borderRadius: "8px",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
            }}
          >
            <motion.div
              style={{
                display: "flex",
                gap: "16px",
                width: "max-content",
              }}
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              {duplicatedTech.map((techItem, techIndex) => (
                <span
                  key={techIndex}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "0.8rem",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    color: "#1991a3",
                    background: "rgba(25, 145, 163, 0.05)",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    border: "1px solid rgba(25, 145, 163, 0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  ⚡ {techItem}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectData = [
    {
      href: "https://rent-mate--abuzar21.replit.app",
      img: "/projects/Rentmate(portfolio).jpg",
      title: "Rentmate - Smart Rental Management System",
      desc: "A full-stack MERN application that streamlines property rental management by connecting tenants and landlords seamlessly.",
      tech: [
        "React.js",
        "Javascript",
        "Node.js",
        "Backend API",
        "Mongodb",
        "Express",
      ],
    },
    {
      href: "https://github.com/Abuzar448/codevector_Assignment",
      img: "/projects/Backend_App.jpg",
      title: "ScaleStream - High-Performance Data Engine",
      desc: "A scalable MERN application optimizing database lookups across 200,000+ indexed records using advanced cursor-based pagination and compound indexing.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Database Indexing",
      ],
    },
    {
      href: "https://github.com/Abuzar448/vibe-fullstack-social-app",
      img: "/projects/Vibe_Project.jpg",
      title: "VIBE - A Detailed Social Media Platform",
      desc: "A production-grade MERN social media platform engineered with dynamic Mongo schemas and Cloudinary integration for seamless media streaming. Features secure JWT authentication, modular backend controllers, and high-performance feeds optimized for scalable user interactions.",
      tech: [
        "React.js",
        "Javascript",
        "Node.js",
        "Backend API",
        "Mongodb",
        "Express",
      ],
    },
    {
      href: "https://sidcup-web.netlify.app/",
      img: "/projects/Frontend(portfolio).jpg",
      title: "FlowVerse – The Art of Animated Web Design",
      desc: "A visually engaging website built using HTML, CSS, and JavaScript, enhanced with GSAP animations for smooth, interactive transitions. It focuses on creative motion design and modern UI flow, blending aesthetics with performance.",
      tech: ["Javascript", "GSAP", "CSS"],
    },
    {
      href: "https://abuzar448.github.io/Myntra_Clone/",
      img: "/projects/Myntra_Clone.jpg",
      title: "StyleHub - Myntra Functional Clone",
      desc: 'A fully responsive, functional web application that replicates the core user interface and "Add to Bag" functionality of the popular e-commerce platform, Myntra.',
      tech: ["HTML5", "Javascript", "CSS5", "Tailwind", "Media Queries"],
    },
    {
      href: "https://ems-react-nu.vercel.app/",
      img: "/projects/EMS.jpg",
      title: "SyncroWork: Enterprise Task Monitoring System",
      desc: "A React & Tailwind-based system featuring a dual-interface for Admin task assignment and Employee progress tracking. Fully responsive, high-performance, and powered by Context API for seamless, real-time state management.",
      tech: ["React.js", "Javascript", "CSS5", "Tailwind", "Media Queries"],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ width: "100%", position: "relative" }}
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
        className="font-semibold project_heading md:mb-10"
      >
        <span className="font-bold text-[white] md:text-7xl">My </span>
        <span className="font-bold text-[#1991a3] md:text-8xl">Projects</span>
      </motion.h2>

      <motion.div
        className="project-grid"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projectData.map((project, index) => (
          <Stacking3DCard
            key={index}
            project={project}
            index={index}
            fadeInUp={fadeInUp}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
