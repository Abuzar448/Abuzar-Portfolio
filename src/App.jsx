import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Education from "./components/Education";
import CustomCursor from "./components/CustomCursor";
import SvgString from "./components/SvgString";
import Footer from "./components/Footer";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div
      className={`${isLoaded ? "loaded" : ""} OuterMostDiv relative w-full min-h-screen`}
    >
      <Navbar></Navbar>
      <CustomCursor></CustomCursor>
      <div className="pt-20 md:pt-0">
        <Hero />
        
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <SvgString></SvgString>
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;