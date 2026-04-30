import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Home element.json"; // Yahan apni JSON file ka path do

const LoottieAnimation = () => {
  return (
    <div style={{ width: "400px", height: "400px" }} className="absolute top-0 right-0">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
      />
    </div>
  );
};

export default LoottieAnimation;