"use client";
import Contactform from "./contactform.jsx";
import Image from "next/image.js";
import React from "react";

const Contact = () => {
  return (
    <div className="absolute">
      <div className="ml-64 w-1/2">
        <h1 className="text-6xl font-bold mb-4" id="contact">Support Us</h1>
        <p className="mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          inventore asperiores ducimus, ipsam cupiditate quisquam optio officia
          tenetur culpa rurur ugte peokekrmr hgrbh jeje jee.
        </p>
        <Contactform />
      </div>
    </div>
  );
};

export default Contact;

