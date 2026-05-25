import React, { useRef } from "react";
import gsap from "gsap";

const SvgString = () => {
  const pathRef = useRef(null);
  
  // Ye wahi initial path hai jo tumne diya tha
  const finalPath = `M 50 100 Q 650 100 1280 100`;

  const handleMouseMove = (dets) => {
    // dets.nativeEvent.offsetX aur offsetY se hum container ke andar ki exact position lete hain
    const newPath = `M 50 100 Q ${dets.nativeEvent.offsetX} ${dets.nativeEvent.offsetY} 1280 100`;

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
      ease: "elastic.out(1, 0.3)", // Wahi guitar string wala jhatka (vibration)
    });
  };

  return (
    <div 
      
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      style={{ height: "250px", width: "100%", background: "black", display: "flex", alignItems: "center" }}
      className="string"
    >
      <svg width="100%" height="200" preserveAspectRatio="none">
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