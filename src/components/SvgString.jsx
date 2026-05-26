import React, { useRef } from "react";
import gsap from "gsap";

const SvgString = () => {
  const pathRef = useRef(null);
  
  // FIXED: Responsive Grid base coordinates (1000x200 matrix)
  // Ab string exact center me (Y=100) stretch hogi har screen par
  const finalPath = "M 20 100 Q 500 100 980 100";

  const handleMouseMove = (dets) => {
    // Get absolute bounding box to calculate relative percentages inside the SVG viewbox
    const container = dets.currentTarget.getBoundingClientRect();
    
    // Convert absolute screen mouse position to 1000x200 SVG Coordinate spaces
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
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1, 0.3)", // Guitar string vibration preserved
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      // CRITICAL FIXES: 
      // 1. 'hidden md:flex' -> Mobile par 100% hidden, tablet/desktop par layout screen me active.
      // 2. Clear background container with layout alignment properties.
      className="string hidden md:flex h-[200px] w-full items-center justify-center bg-transparent relative my-10"
    >
      {/* FIXED: Added explicit viewBox to scale math coordinates proportionately across screen widths */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1000 200" 
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <path
          ref={pathRef}
          d={finalPath}
          stroke="white"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default SvgString;