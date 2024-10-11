"use client";
import Contactform from './contactform.jsx';



import React, {  } from 'react';

const Contact = () => {

  return (
    <div className=" min-h-screen max-w-[1440px]  max-h-[500px]">
  

    {/* Main content */}
    <h1 className="relative text-white max-w-[700px] left-[350px] text-6xl font-bold mb-4">Support Us</h1>
    <div className="relative left-[350px] max-w-[1000px]  max-h-[500px]  pt-0 pb-4 pl-0 pr-30 rounded-md shadow-sm w-1/2 h-full">
    <p className="text-left text-[13px] font-arial text-white pt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae inventore asperiores ducimus, ipsam cupiditate quisquam optio officia tenetur culpa rurur ugte peokekrmr hgrbh jeje jee.
    </p>
    </div>

    <div classname="absolute left-[200px] max-w-[1000px]">    
      <Contactform />
    </div>

    <div className="absolute  left-[400px] top-[-210px] z-2   ">
      <img
        src="/loop.svg"
        alt="Image"
        className=" w-[1200px] h-[1150px]"
      />
    </div>


</div>
 
  );
};

export default Contact;