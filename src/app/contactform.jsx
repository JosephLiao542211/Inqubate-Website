"use client";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';


export const ContactUs = () => {

  const [isSubmitted, setIsSubmitted] = useState(false); // Change state to track submission
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0tuvwuv', 'template_gxpi41h', form.current, {
        publicKey: '-1vvJnu-quO1S4d-2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 relative left-[350px]">
    
=    <input
      type="text"
      name="user_name"
      className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px] h-10" // Customize size
      placeholder="Enter your name"
    />
    
    
    <input
      type="email"
      name="user_email"
      className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px] h-12" // Customize size
      placeholder="Enter your email"
    />
    
    <textarea
      name="message"
      className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px] h-[150px] resize-none" // Customize size
      placeholder="Enter your message"
    />
    
    <div className='pt-8 -8 flex items-cente'>
    <img src="/message.svg" alt="Message Icon" className="w-[500px] h-28 relative left-[200px] top-[-30px] pl-[20px]"  /> {/* Use img tag for SVG */}
    <input
        type="submit"
        value={isSubmitted ? "Completed" : "Submit"} // Toggle between 'Submit' and 'Completed'
        className="font-bold absolute border border-white text-white pb-1 rounded-[10px] cursor-pointer w-44 h-12 transition-transform duration-400 hover:scale-110 hover:bg-slate-900"
    />


    </div>

    </form>
    

  );
};

export default ContactUs;