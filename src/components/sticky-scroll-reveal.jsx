// src/components/ui/sticky-scroll-reveal.jsx
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const [isSectionActive, setIsSectionActive] = useState(false);
  
  const [mobileImgIdx, setMobileImgIdx] = useState({});
  const [desktopImgIdx, setDesktopImgIdx] = useState(0);

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
    
    if (closestBreakpointIndex !== activeCard) {
      setActiveCard(closestBreakpointIndex);
      setDesktopImgIdx(0); 
    }
  });

  const handleScrollTracking = (e, isMobile, cardIdx = null) => {
    const container = e.target;
    const scrollPosition = container.scrollLeft;
    const clientWidth = container.clientWidth;
    const calculatedIndex = Math.round(scrollPosition / clientWidth);

    if (isMobile) {
      setMobileImgIdx(prev => ({ ...prev, [cardIdx]: calculatedIndex }));
    } else {
      setDesktopImgIdx(calculatedIndex);
    }
  };

  // RAW CSS OBJECT: Browser level scrollbars ko invisible karne ke liye inline fallback engine
  const hideScrollbarStyle = {
    msOverflowStyle: "none",  /* IE and Edge */
    scrollbarWidth: "none",   /* Firefox */
    WebkitOverflowScrolling: "touch"
  };

  return (
    <div 
      ref={ref}
      className="w-full flex flex-col lg:flex-row justify-center items-center relative gap-12 bg-transparent"
    >
      {/* LEFT CONTENT: TEXT BLOCK & MOBILE IMAGES */}
      <div className="relative flex items-start w-full lg:w-1/2">
        <div className="w-full">
          {content.map((item, index) => {
            const currentMobileSubIndex = mobileImgIdx[index] || 0;
            return (
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
                
                {/* MOBILE REVEAL IMAGE CONTAINER WITH ACTIVE DOTS */}
                <motion.div 
                  animate={{ 
                    opacity: activeCard === index ? 1 : 0.1,
                    scale: activeCard === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="img relative block lg:hidden w-full h-[250px] rounded-2xl mt-6 overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl"
                >
                  {/* Image Tape */}
                  <div 
                    onScroll={(e) => handleScrollTracking(e, true, index)}
                    style={hideScrollbarStyle}
                    className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                  >
                    {item.images.map((img, imgIdx) => (
                      <div 
                        key={imgIdx}
                        className="w-full h-full shrink-0 snap-center bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    ))}
                  </div>

                  {/* Micro Indicators Layer */}
                  {item.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                      {item.images.map((_, imgIdx) => (
                        <div 
                          key={imgIdx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentMobileSubIndex === imgIdx ? "w-5 bg-white" : "w-1.5 bg-neutral-600"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT CONTENT: STICKY SCREEN WITH PREMIUM PAGINATION DOTS (LAPTOP ONLY) */}
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
          className="w-full h-full relative"
        >
          {/* Main Desktop Scroll View */}
          <div 
            onScroll={(e) => handleScrollTracking(e, false)}
            style={hideScrollbarStyle}
            className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          >
            {content[activeCard].images.map((img, imgIdx) => (
              <div 
                key={imgIdx}
                className="w-full h-full shrink-0 snap-center bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>

          {/* Desktop Pagination Pills Engine */}
          {content[activeCard].images.length > 1 && (
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10 backdrop-blur-sm bg-black/10 py-2 max-w-[100px] mx-auto rounded-full border border-neutral-800/40">
              {content[activeCard].images.map((_, imgIdx) => (
                <div 
                  key={imgIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    desktopImgIdx === imgIdx ? "w-6 bg-white" : "w-1.5 bg-neutral-600"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};