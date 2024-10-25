"use client";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';


export const ContactUs = () => {

  const [isSubmitted, setIsSubmitted] = useState(false); // Change state to track submission
  const [sending, setSending] = useState(false); 
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('service_0tuvwuv', 'template_gxpi41h', form.current, {
        publicKey: '-1vvJnu-quO1S4d-2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setSending(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
    
    <input
      type="text"
      name="user_name"
      className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px] h-10" // Customize size
      placeholder="Enter your name"
      required
    />
    
    
    <input
      type="email"
      name="user_email"
      className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px] h-12" // Customize size
      placeholder="Enter your email"
      required
    />
    
    <textarea
      name="message"
      className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px] h-[150px] resize-none" // Customize size
      placeholder="Enter your message"
      required
    />
    {!isSubmitted && !sending && (
      <button
          className="font-bold border border-white pb-1 rounded-lg cursor-pointer w-44 h-12 transition-transform duration-400 hover:-translate-y-1 hover:bg-slate-900 mt-8"
      >
        Submit
      </button>
    )}
    {sending && (
      <p className='h-14'>Sending...</p>
    )}
    {isSubmitted && (
      <p className='h-14'>Thanks for contacting us!</p>
    )}
    </form>
    

  );
};

export default ContactUs;