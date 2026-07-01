import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import "../Style/about.css";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // About Header Animation
      gsap.from(".about-header", {
        y: 100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 80%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });

      // Meta Box Animation
      gsap.from(".about-meta-box", {
        y: 80,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".about-meta-box",
          start: "top 70%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });

      gsap.from(".reveal-line", {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-desc-box",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".services-container .sub-heading", {
        y: 80,
        opacity: 0,
        stagger: 4,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".services-container .sub-heading",
          start: "top 90%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });

      // Services Grid
      gsap.from(".services-container .services-grid", {
        y: 100,
        opacity: 0,
        stagger: 8,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".services-container .services-grid",
          start: "top 90%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });

      // Skills Sub-heading
      gsap.from(".skills-container .sub-heading", {
        y: 100,
        opacity: 0,
        stagger: 8,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".skills-container .sub-heading",
          start: "top 90%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });

      // Skills Grid
      gsap.from(".skills-container .skills-grid", {
        y: 100,
        opacity: 0,
        stagger: 8,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".skills-container .skills-grid",
          start: "top 90%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });

      // Profile Name Individual Word Animation
      gsap.from(".animate-word", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".profile-name",
          start: "top 80%",
          end: "top 60%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  const specializations = [
    {
      title: "Frontend Architecture",
      desc: "Crafting production-grade, optimized user journeys with seamless motion design.",
      icon: "💻",
    },
    {
      title: "Backend & Systems",
      desc: "Designing scalable APIs, state machines, and relational database schemas.",
      icon: "⚙️",
    },
    {
      title: "AI Pipeline Flows",
      desc: "Integrating intelligent automation layers and context models inside standard web applications.",
      icon: "🧠",
    },
  ];

  const coreSkills = {
    frontend: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    backend: ["Node.js", "Express", "Supabase", "PostgreSQL"],
    tools: ["Git", "Docker", "AI Pipelines", "REST APIs"],
  };

  return (
    <section id="about" className="about-section relative" ref={containerRef}>
      <div className="about-glow-orb" />

      <div className="about-wrapper">
        <div className="about-header">
          <h2 className="about-header heading">Abuzar Khan</h2>
          <div className="accent-bar"></div>
        </div>

        <div className="about-grid">
          <div className="about-meta-box">
            <h3 className="profile-name">
              {"Full-Stack Web Developer & Designer"
                .split(" ")
                .map((word, index) => (
                  <span
                    key={index}
                    className="animate-word"
                    style={{ display: "inline-block", marginRight: "8px" }}
                  >
                    {word}
                  </span>
                ))}
            </h3>
            <p className="place text-2xl">
              Muktainagar, dist.Jalgaon, Maharashtra
            </p>
          </div>

          <div className="about-desc-box">
            {/* Paragraph 1 */}
            <p className="about-text">
              <span className="line-wrapper">
                <span className="reveal-line">
                  Pursuing a{" "}
                  <span className="highlight-text">
                    B.Tech in Computer Science
                  </span>
                  ,
                </span>
              </span>
              <span className="line-wrapper">
                <span className="reveal-line">
                  I build production-grade web systems using the
                </span>
              </span>
              <span className="line-wrapper">
                <span className="reveal-line">
                  <span className="highlight-text">MERN Stack</span>, focusing
                  strictly on scalable applications
                </span>
              </span>
              <span className="line-wrapper">
                <span className="reveal-line">
                  and advanced engineering architecture.
                </span>
              </span>
            </p>

            {/* Paragraph 2 */}
            <p className="about-text">
              <span className="line-wrapper">
                <span className="reveal-line">
                  Currently expanding into{" "}
                  <span className="highlight-text">AI Engineering</span>
                </span>
              </span>
              <span className="line-wrapper">
                <span className="reveal-line">
                  to master automated pipeline flows, aiming to
                </span>
              </span>
              <span className="line-wrapper">
                <span className="reveal-line">
                  bridge pixel-perfect UI/UX design with
                </span>
              </span>
              <span className="line-wrapper">
                <span className="reveal-line">
                  high-performance system backends.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="services-container">
        <h4 className="sub-heading">What I Focus On</h4>
        <div className="services-grid">
          {specializations.map((spec, index) => (
            <div className="service-card" key={index}>
              <span className="service-icon">{spec.icon}</span>
              <h5>{spec.title}</h5>
              <p>{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <h4 className="sub-heading">Current Arsenal</h4>
        <div className="skills-grid">
          <div className="skills-column">
            <h6>Frontend</h6>
            <ul>
              {coreSkills.frontend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h6>Backend & DB</h6>
            <ul>
              {coreSkills.backend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h6>Tools & Core</h6>
            <ul>
              {coreSkills.tools.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
