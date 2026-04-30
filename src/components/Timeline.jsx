import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import BackToTop from "./BackToTop";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Height calculation ko thoda delay dena padta hai taaki content render ho jaye
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]); // data change hone par height phir se check hogi

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    // Dark mode classes ko force kiya hai yahan
    <div id="education" className="w-full bg-[black] dark:bg-black font-sans educationMain " ref={containerRef}>
      <BackToTop></BackToTop>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl mb-4 text-black dark:text-white font-bold ">
          Educational <span className="text-blue-500">Journey</span>
        </h2>
        <br />
        <br />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex min-h-[500px] w-full gap-12  justify-center pt-10 md:pt-40 relative ">
            <div className="flex ml-10 justify-between">
            {/* STICKY DOT & TITLE */}
            <div className="point flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-lg border border-neutral-700">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border-2 border-blue-500" />
              </div>
              
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-700">
                {item.title}
              </h3>
            </div>

            {/* CONTENT BOX */}
            <div className="contentBox flex flex-col items-center absolute right-0 relative pl-20 pr-4 md:pl-4 w-full ">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-blue-500">
                {item.title}
              </h3>
              
              {/* Actual Content Card */}
              <div className="flex dark:bg-black pl-6 rounded-3xl">
                {item.content}
              </div>
            </div>
            </div>
            
            
          </div>
        ))}

        {/* THE ANIMATED LINE - positioning carefully adjusted */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};