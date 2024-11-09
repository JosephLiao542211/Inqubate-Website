"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const slides = [
  {
    name: "Daniel Wang",
    role: "Founder",
    desc: "In the heart of the city, there’s a quirky café known for its eclectic mix of antiques and modern tech gadgets. The café has been a local favorite for 8 years, serving an average of 150 customers daily. Its most popular drink, the “Cosmic Brew,” contains precisely 42 secret ingredients, which are mixed using a state-of-the-art espresso machine that costs $3,500.",
    imageUrl: "/images/Team/Daniel_Wang.png",
  },
  {
    name: "Daniel Wang Again",
    role: "Founder",
    desc: "In the heart of the city, there’s a quirky café known for its eclectic mix of antiques and modern tech gadgets. The café has been a local favorite for 8 years, serving an average of 150 customers daily. Its most popular drink, the “Cosmic Brew,” contains precisely 42 secret ingredients, which are mixed using a state-of-the-art espresso machine that costs $3,500.",
    imageUrl: "/images/Team/Daniel_Wang.png",
  },
];

const TeamSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div className="ml-56 relative w-[1100px] justify-center items-center h-[700px]">
      <Slider {...settings} className="ml-40 w-full">
        {slides.map((slide, index) => (
          <main className="mt-4 w-full">
            <div className="flex gap-5">
              <section className="flex flex-col pt-16 rounded-none">
                <div className="flex flex-col justify-center px-6 w-full h-[275px] bg-stone-300 bg-opacity-30 rounded-[30px]">
                  <Image
                    loading="lazy"
                    width={400}
                    height={400}
                    src={slide.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="z-10 mt-0 w-full aspect-[0.84] mb-[26%]"
                  />
                </div>
              </section>
              <section className="flex flex-col ml-10">
                <div className="flex flex-col items-start mt-16 w-full font-bold">
                  <h1 className="text-6xl text-white max-md:text-4xl">
                    {slide.name}
                  </h1>
                  <h2 className="mt-3 text-4xl bg-gradient-to-r from-[#3F99BA] to-[#FF3144] inline-block text-transparent bg-clip-text">
                    {slide.role}
                  </h2>
                  <div className="flex gap-10 self-stretch mt-7 text-base font-thin text-white">
                    <p className="flex-auto w-[600px]">{slide.desc}</p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-next {
          right: 0;
        }
        .slick-prev {
          left: -40px;
        }
        .slick-prev:before {
          color: #ececec;
          opacity: 0.5;
          font-size: 30px;
        }
        .slick-next:before {
          color: #ececec;
          opacity: 0.5;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default TeamSlider;
