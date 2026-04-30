import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import About from "./components/About";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Education from "./components/Education";
function App() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  
  return (
    <div className={`app ${isLoaded ? 'loaded' : ''} relative w-full h-[100vh]`}>
        <Hero />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Certifications />
        <Contact />

      <>
      <p className="footer"> @copy: 2025 CodeSeekho.All rights reserved</p>
      </>
    </div>
  );
}

export default App;
