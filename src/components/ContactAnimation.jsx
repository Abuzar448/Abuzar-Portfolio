import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/TTA Contact Us.json";

const ContactAnimation = () => {
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

export default ContactAnimation;