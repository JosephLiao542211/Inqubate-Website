"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/images/inqubate_photo.png',
  '/images/image2.png',
  '/images/image4.png',
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div
      className="relative"
      style={{
        width: '387px',
        height: '700px',
        overflow: 'visible',
      }}
    >
      <Slider {...settings} style={{ width: '387px', height: '508px', left: '200px' }}>
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
                border: '4px rgba(255, 255, 255, 0.3)',
                borderRadius: '15px',
              }}
            />
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-dots {
          top: 510px;
          right: 10px;
          transform: none;
        }
        .slick-dots li {
          margin-right: 1px;
        }
        .slick-dots li button:before {
          font-size: 9px;
          color: white;
        }
        .slick-dots li.slick-active button:before {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
