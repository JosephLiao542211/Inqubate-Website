'use client';
import Contactform from './contactform.jsx';
import Image from 'next/image.js';
import React from 'react';

const Contact = () => {
    return (
        <div className="absolute">
            <div className="ml-64 w-1/2">
                <h1 className="text-6xl font-bold mb-4" id="contact">
                    Support Us
                </h1>
                <p className="mb-8">
                    Interested in supporting inQUbate or becoming a member? Fill
                    out the form below and we will get back to you as soon as
                    possible.
                </p>
                <Contactform />
            </div>
        </div>
    );
};

export default Contact;
