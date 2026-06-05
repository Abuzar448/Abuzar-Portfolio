import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import BackToTop from "./BackToTop";
import '../Style/Education.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Timeline = ({ data, activeTab }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    // Yield execution context slightly for DOM painting
    setTimeout(updateHeight, 100);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 10%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // GSAP Entry Animation Layer
 

  // GSAP Filter Reactivity Stagger Transition
  useGSAP(() => {
    gsap.fromTo(
      ".timeline-row-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
    );
  }, { dependencies: [activeTab, data], scope: containerRef });

  // Preserved Original 3D Hover Inline Injector
  const cardBoxStyle = {
    width: "100%",
    maxWidth: "650px",
    margin: "0 auto",
    padding: "2.5rem 2rem",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    transformStyle: "preserve-3d",
    perspective: "1000px",
    transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s, border-color 0.3s, box-shadow 0.4s",
  };

  const injectHoverEffect = (e, status) => {
    if (status === "enter") {
      e.currentTarget.style.transform = "rotateX(6deg) rotateY(-4deg) translateY(-8px) translateZ(10px)";
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
      e.currentTarget.style.borderColor = "rgb(25, 145, 163)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgb(25, 145, 163,0.15), 0 30px 60px rgba(0, 0, 0, 0.7)";
    } else {
      e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)";
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
    }
  };

  return (
    <div id="education" className="w-full bg-black font-sans educationMain" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 gap-y-16 md:gap-y-32 w-full">
          {data.map((item, index) => (
            <div 
              key={item.id || index} 
              className="timeline-row-item grid grid-cols-[1fr_2fr] md:grid-cols-[35%_65%] w-full relative items-start gap-2 md:gap-8 z-1"
            >
              
              <div className="flex items-center relative min-h-[60px] pt-2 w-full">              
                <h3 className="text-2xl lg:text-4xl font-bold text-zinc-300 pl-6 md:pl-[90px] pr-2 break-words leading-tight z-100 bg-black timeline_title">
                  {item.title}
                </h3>
              </div>

              {/* Dynamic Content Card Module */}
              <div className="w-full flex flex-col items-start pr-4 md:pr-10">
                <div className="w-full flex justify-start">
                  <div 
                    style={cardBoxStyle}
                    onMouseEnter={(e) => injectHoverEffect(e, "enter")}
                    onMouseLeave={(e) => injectHoverEffect(e, "leave")}
                    className="text-center"
                  >
                    <h4 className="text-xl font-bold text-[#1991a3] tracking-tight">
                      {item.subtitle}
                    </h4>

                    {item.institution && (
                      <p className="text-neutral-300 font-medium text-sm mt-1">
                        {item.institution}
                      </p>
                    )}

                    <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {item.metrics && (
                      <p className="text-neutral-200 mt-2 text-base font-semibold">
                        {item.metrics}
                      </p>
                    )}

                    {item.statusText && (
                      <p className="text-sm font-medium text-pink-600 mt-3 tracking-wide">
                        {item.statusText}
                      </p>
                    )}

                    {/* Tags Layer Module */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap justify-center gap-3">
                        {item.tags.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx} 
                            className={`px-3 py-1 text-sm rounded font-medium ${
                              tagIdx % 2 === 0 
                                ? "bg-blue-500/10 text-blue-500" 
                                : "bg-purple-500/10 text-purple-500"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        
        <div
          style={{ height: height + "px" }}
          className="absolute left-6 md:left-[50px] top-2 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-[120px] w-[2px] bg-gradient-to-t from-purple-500 via-[#1991a3] to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};