import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Man account Icon.json";
  // Yahan apni JSON file ka path do

const ManAnimation = () => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
      />
    </div>
  );
};

export default ManAnimation;