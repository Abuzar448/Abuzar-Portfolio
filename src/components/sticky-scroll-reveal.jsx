// src/components/ui/sticky-scroll-reveal.jsx
import React, { useRef, useState, useEffect } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  
  // Pure window/page level scroll progress track karenge section ke respect me
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Breakpoints calculation based on absolute page scroll
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        if (latest >= breakpoint) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div 
      ref={ref}
      className="w-full flex flex-col lg:flex-row justify-center items-center relative gap-15 bg-transparent"
    >
      <div className="relative flex items-start w-full lg:w-1/2">
        <div className="w-full">
          {content.map((item, index) => (

            <div key={item.title + index} className="certificateBox md:block lg:block min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center first:pt-0 last:pb-20">
              <motion.h3
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.2 }}
                className="text-xl md:text-2xl font-bold text-white tracking-tight"
              >
                {item.title}
              </motion.h3>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.2 }}
                className="text-sm md:text-base text-neutral-400 mt-4 leading-relaxed"
              >
                {item.description}
              </motion.p>
              
              
              <div className="img block lg:hidden w-full h-[240px] rounded-2xl mt-6 overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT: BROWSER VIEWPORT FIXED STICKY SCREEN (LAPTOP ONLY) */}
      {/* CRITICAL FIX: top-24 stack position aur sticky behavior global page configuration ke sath sync kiya */}
      <div className="hidden lg:block h-[26rem] w-[26rem] rounded-2xl bg-neutral-900 sticky top-24 overflow-hidden border border-neutral-800 shadow-2xl self-start mt-10">
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${content[activeCard].imgUrl})` }}
        />
      </div>
    </div>
  );
};