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
function App() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  
  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Certifications></Certifications>
      <Contact></Contact>

      <>
      <p className="footer"> @copy: 2025 CodeSeekho.All rights reserved</p>
      </>
    </div>
  );
}

export default App;
