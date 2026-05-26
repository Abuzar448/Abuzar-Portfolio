// src/components/ui/sticky-scroll-reveal.jsx
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const [isSectionActive, setIsSectionActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      setIsSectionActive(true);
    } else {
      setIsSectionActive(false);
    }

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
      {/* LEFT CONTENT: TEXT BLOCK & MOBILE IMAGES */}
      <div className="relative flex items-start w-full lg:w-1/2">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="certificateBox md:block lg:block min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center first:pt-0 last:pb-20">
              {/* Text Title */}
              <motion.h3
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.2 }}
                className="text-xl md:text-2xl font-bold text-white tracking-tight"
              >
                {item.title}
              </motion.h3>
              
              {/* Text Description */}
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.2 }}
                className="text-sm md:text-base text-neutral-400 mt-4 leading-relaxed"
              >
                {item.description}
              </motion.p>
              
              {/* MOBILE REVEAL IMAGE CONTAINER */}
              {/* CRITICAL FIX FOR MOBILE: Div ko motion.div kiya aur dynamic text sync opacity setup lagayi */}
              <motion.div 
                animate={{ 
                  opacity: activeCard === index ? 1 : 0.1,
                  scale: activeCard === index ? 1 : 0.95
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="img block lg:hidden w-full h-[240px] rounded-2xl mt-6 overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl"
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT: BROWSER VIEWPORT FIXED STICKY SCREEN (LAPTOP ONLY) */}
      <motion.div 
        animate={{ 
          opacity: isSectionActive ? 1 : 0, 
          scale: isSectionActive ? 1 : 0.95 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="hidden lg:block h-[26rem] w-[26rem] rounded-2xl bg-neutral-900 sticky top-24 overflow-hidden border border-neutral-800 shadow-2xl self-start mt-10"
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${content[activeCard].imgUrl})` }}
        />
      </motion.div>
    </div>
  );
};