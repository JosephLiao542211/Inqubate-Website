"use client"; // Add this line at the top

import React, { useState } from 'react';

const Button = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <button
      onClick={handleToggle}
      className="text-white border border-white rounded-[12px]  transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
      style={{ width: '200px', height: '54px' }} 
    >
    Explore More
    </button>
  );
};

export default Button;