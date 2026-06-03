import React, { useRef, useState } from "react";
import gsap from "gsap";

const SvgString = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const finalPath = "M 20 100 Q 500 100 980 100";

  const handleMouseMove = (dets) => {
    setIsHovered(true);
    const container = dets.currentTarget.getBoundingClientRect();
    
    const relativeX = ((dets.clientX - container.left) / container.width) * 1000;
    const relativeY = ((dets.clientY - container.top) / container.height) * 200;

    const newPath = `M 20 100 Q ${relativeX} ${relativeY} 980 100`;

    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="string hidden md:flex h-[160px] w-full items-center justify-center bg-transparent relative my-16 select-none cursor-grab active:cursor-grabbing"
      style={{ overflow: "visible" }}
    >
      {/* --- UX Context Text Indicator --- */}
      <div 
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "rgba(25, 145, 163, 0.4)",
          fontFamily: "monospace",
          fontSize: "0.75rem",
          letterSpacing: "4px",
          pointerEvents: "none",
          textTransform: "uppercase",
          opacity: isHovered ? 0 : 1,
          transition: "opacity 0.4s ease"
        }}
      >
        ✦ pull the wire ✦
      </div>

      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1000 200" 
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <defs>
          {/* Neon Glow Filter Engine matching portfolio accent */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          ref={pathRef}
          d={finalPath}
          stroke={isHovered ? "#1991a3" : "rgba(255, 255, 255, 0.2)"}
          strokeWidth={isHovered ? "3" : "1.5"}
          fill="transparent"
          filter={isHovered ? "url(#neon-glow)" : "none"}
          style={{
            transition: "stroke 0.4s ease, stroke-width 0.2s ease, filter 0.3s ease"
          }}
        />
      </svg>
    </div>
  );
};

export default SvgString;