import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import BackToTop from "./BackToTop";
import '../Style/Education.css'

export const Timeline = ({ data }) => {
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

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 10%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id="education" className="w-full bg-black font-sans educationMain" ref={containerRef}>
      <BackToTop />
      
      <div className="max-w-full mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="edu_heading text-xl md:text-5xl mb-4 text-white font-bold">
          Educational & <br /> Experience <span className="text-[#1991a3]">Journey</span>
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        
        <div className="grid grid-cols-1 gap-y-16 md:gap-y-32 w-full">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-[1fr_2fr] md:grid-cols-[35%_65%] w-full relative items-start gap-4 md:gap-8">
             
              <div className="flex items-center relative min-h-[60px] pt-2 w-full">              
                <h3 className="hidden md:block text-2xl lg:text-4xl font-bold text-zinc-300 pl-[90px] pr-2 break-words leading-tight z-10 bg-black">
                  {item.title}
                </h3>
              </div>

              <div className="w-full flex flex-col items-start pr-4 md:pr-10">
               
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#1991a3]">
                  {item.title}
                </h3>
          
                <div className="w-full flex justify-start">
                  {item.content}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div
          style={{ height: height + "px" }}
          className="absolute left-6 md:left-[50px] top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-[#1991a3] to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};