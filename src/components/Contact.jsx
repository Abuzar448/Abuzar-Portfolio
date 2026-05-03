import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import BackToTop from "./BackToTop";
import ContactAnimation from "./ContactAnimation";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      );

      setFormStatus(
        {
          submitting: false,
          success: true,
          error: false,
          message: "Message sent successfully!",
        },
        setFormData({
          name: "",
          email: "",
          message: "",
        }),
      );
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };
  return (
    <>
      <motion.section
        id="contact"
        className="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        
        <div className="contact-f">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
            className="font-semibold heading"
          >
            Get in Touch
          </motion.h2>

          <motion.div className="contact-content" variants={fadeInUp}>
            <motion.form className="contact-form" onSubmit={handleSubmit}>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name..."
                value={formData.name}
                required
                whileFocus={{ scale: 1.02 }}
                onChange={handleInputChange}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email..."
                value={formData.email}
                required
                whileFocus={{ scale: 1.02 }}
                onChange={handleInputChange}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message..."
                value={formData.message}
                required
                whileFocus={{ scale: 1.02 }}
                onChange={handleInputChange}
              />

              <motion.button
                className="submit-btn"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </motion.button>

              {formStatus.message && (
                <motion.div
                  className={`form-status ${
                    formStatus.success ? "success" : "error"
                  } `}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
        <div className="contact-anime">
          <ContactAnimation></ContactAnimation>
          <div className="flex gap-8 w-full items-center justify-center">
              <p className="font-semibold social-heading">Social Links : </p>
            
            <div className="w-[50px] h-[50px] border border-blue-300 cursor-pointer flex items-center justify-center bg-[#5c55e2] hover:border-2 hover:border-blue-400 hover:bg-transparent rounded-full">
              <FaLinkedin />
            </div>
            <div className="w-[50px] h-[50px] border border-blue-300 cursor-pointer flex items-center justify-center bg-[#5c55e2] hover:border-2 hover:border-blue-400 hover:bg-transparent rounded-full">
              <FaInstagramSquare /> 
            </div>
            <div className="w-[50px] h-[50px] border border-blue-300 cursor-pointer flex items-center justify-center bg-[#5c55e2] hover:border-2 hover:border-blue-400 hover:bg-transparent rounded-full">
              <FaGithub />
            </div>
            
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
