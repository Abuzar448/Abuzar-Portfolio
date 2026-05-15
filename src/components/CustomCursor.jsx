import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        // dets.x ki jagah e.clientX aur e.clientY use hota hai standard JS mein
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Cleanup function: Jab page change ho toh memory leak na ho
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div id="cursor" ref={cursorRef} className='absolute z-50'></div>
  );
};

export default CustomCursor;