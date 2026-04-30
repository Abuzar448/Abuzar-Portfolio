import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react'; // Ya tum koi bhi icon use kar sakte ho

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll position check karne ke liye
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // 300px scroll hone ke baad dikhega
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="absolute bottom-2  font-semibold right-8 z-100 p-4 rounded-full bg-Blue-300 text-[white] shadow-2xl hover:bg-blue-600 transition-colors border border-Black-400/20"
        >
          <ArrowUp size={50} strokeWidth={1.5} className='rounded-full bg-[black]'/>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;