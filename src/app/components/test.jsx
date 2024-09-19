"use client"; // Ensure this component runs on the client side
import React, { useState, useEffect } from 'react';

const TestIndicators = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['/images/image1.svg', '/images/image2.svg', '/images/image3.svg'];
  
    return (
      <div className="relative w-[378px] h-[508px] overflow-hidden">
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-500'
              }`}
              style={{ border: '1px solid black' }} // Debugging border
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default TestIndicators;