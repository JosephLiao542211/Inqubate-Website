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
      className="text-white border border-white rounded-[12px] hover:bg-gray-500  absolute w-[200px] h-[64px] "
      style={{ width: '200px', height: '54px' }}
    >
    Explore More
    </button>
  );
};

export default Button;