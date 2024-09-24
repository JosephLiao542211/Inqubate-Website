"use client"; // Add this line at the top

import React from 'react';

const Button = () => {
  return (
    <button
      className="text-white border border-white rounded-lg bg-transparent hover:bg-white/30 transition ease-in-out duration-300"
      style={{ width: '200px', height: '54px' }}>
      Explore More
    </button>
  );
};

export default Button;