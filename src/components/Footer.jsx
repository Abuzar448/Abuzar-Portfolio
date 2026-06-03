import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import '../Style/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/abuzar-khan-4a03b0290/", label: "LinkedIn" },
    { icon: <FaGithub size={20} />, url: "https://github.com/Abuzar448", label: "GitHub" },
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/abuzar_khan_t/", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", target: "#home" },
    { name: "Projects", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Left Column: Brand & Interactive Mail Node */}
        <div className="footer-brand">
          <h3 className="footer-logo">
            Abuzar <span>.</span>
          </h3>
          <p className="footer-tagline">
            Building scalable full-stack solutions and robust architectures with precision.
          </p>
          <a href="mailto:your-email@example.com" className="footer-mail-card">
            <div className="mail-icon-wrapper">
              <HiOutlineMail size={22} />
            </div>
            <div className="mail-text">
              <span>Drop a message</span>
              <strong>your-email@example.com</strong>
            </div>
            <FiArrowUpRight className="arrow-diagonal" size={18} />
          </a>
        </div>

        {/* Right Columns Grid */}
        <div className="footer-links-grid">
          
          {/* Navigation Links Block */}
          <div className="footer-link-group">
            <h4>Explore</h4>
            <ul>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.target}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Block (New Interactive Format) */}
          <div className="footer-link-group">
            <h4>Connect</h4>
            <div className="footer-social-strip">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon-box"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Baseline Strip */}
      <div className="footer-baseline">
        <div className="baseline-content">
          <p>
            © {currentYear} | Designed & Developed with Precision by{" "}
            <strong>Abuzar Khan</strong>.
          </p>
          <div className="baseline-status">
            <span className="pulse-dot"></span> Available for Opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;