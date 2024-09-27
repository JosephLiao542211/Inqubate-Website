"use client"; // Ensure this component runs on the client side

import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel'; // Ensure this import is correctly positioned

// List of images for the slider
const images = [
  '/images/inqubate_photo.png',
  '/images/image2.png',
  '/images/image4.png',
];

const ImageSlider = () => {
  // Reference to the slider container
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize Slick Slider if sliderRef is set and window is defined
    if (sliderRef.current && typeof window !== 'undefined') {
      $(sliderRef.current).slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        fade: true, // Use fade effect for smooth transitions
      });
    }

    // Cleanup function to destroy the Slick Slider when the component unmounts
    return () => {
      if (sliderRef.current && typeof window !== 'undefined') {
        $(sliderRef.current).slick('unslick');
      }
    };
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <div
      className="relative"
      style={{
        width: '387px',
        height: '700px',
        overflow: 'visible',
      }}
    >
      {/* Attach the ref to the slider container */}
      <div
        ref={sliderRef}
        className="single-item"
        style={{ width: '387px', height: '508px',  left: '200px' }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              width: '387px',
              height: '508px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: '387px',
                height: '508px',
                objectFit: 'cover',
                border:'4px rgba(255, 255, 255, 0.3)',
                borderRadius:'15px',
              }}
            />
          </div>
        ))}
      </div>

      {/* Custom Styling for Arrows and Dots */}
      <style jsx global>{`
        .slick-dots {
          top: 510px; /* Adjust distance from the top */
          right: 10px; /* Align dots to the left */
          transform: none; /* Remove centering transform */
        }
        .slick-dots li {
          margin-right: 1px; /* Add space between dots */
        }
        .slick-dots li button:before {
          font-size: 9px; /* Customize dot size */
          color: white;
        }
        .slick-dots li.slick-active button:before {
          color: White; /* Active dot color */
        }
      `}</style>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ImageSlider), { ssr: false });
