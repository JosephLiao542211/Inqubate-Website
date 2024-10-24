'use client'
import { useEffect, useRef } from "react"

import Image from "next/image"
import Navigation from "./Navigation"
import Sponsors from "./sponsors"
import Tube from "./Tube"

export default function Landing(){
    const isInitialized = useRef(false);    // Track if component has been rendered already

    useEffect(() => {
        if (isInitialized.current) return;  // Only run useEffect once

        // Setup
        const slider = document.querySelector('.slider');
        const slidingElements = [...slider.children];
        const gapSize = parseInt(window.getComputedStyle(slider).gap);     // px 
        const cycleWidth = slider.scrollWidth + gapSize;  // px

        // Must ensure enough cycles to cover 2 x screen
        let sliderScrollWidth = cycleWidth;   // px
        while (sliderScrollWidth < 2*window.innerWidth) {
            slidingElements.forEach(element => {
                let dupe = element.cloneNode(true);
                slider.appendChild(dupe);
            });
            sliderScrollWidth = slider.scrollWidth;
        }

        let cycles = 1;
        while (window.innerWidth > cycles*cycleWidth) {
            cycles++;
        }

        const START_POINT = -sliderScrollWidth + cycles*(cycleWidth);
        const END_POINT = START_POINT + cycleWidth + 0*gapSize;

        updateKeyframes(START_POINT, END_POINT);
        isInitialized.current = true;
    });

    return (
        <div className="mb-36">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="landing-morph-lines.svg" alt="webs" className="-z-50 absolute" />
            <nav className="px-20 py-6 flex bg-none">
                <Image src="inqubate.svg" alt="inqubate" width={250} height={250} className=""/>
                <div className="grow flex gap-5 justify-center">
                    <Navigation href="#home">Home</Navigation>
                    <Navigation href="#about">Who we are</Navigation>
                    <Navigation href="#about">Ventures</Navigation>
                    <Navigation href="#contact">Blog</Navigation>
                </div>
                <a
                href="#contact"
                className="w-48 rounded-md text-center px-6 py-4 bg-gradient-to-r from-red-500 to-pink-700 shadow-[2px_5px_20px_grey] hover:-translate-y-1 transition-transform">
                    Contact Us
                </a>
            </nav>
            <Tube/>
            <Image
            src="red-gradient.svg"
            width={900}
            height={700}
            alt="red gradient"
            className="absolute -z-30 top-0"
            />
            <Image
            src="blue-gradient.svg"
            width={1000}
            height={700}
            alt="blue gradient"
            className="absolute -z-30 right-0 top-0"
            />
            <div className="flex h-[80vh] items-center justify-around">
                <div className="animate-fade-in">
                    <h1 className="font-bold text-6xl w-96 leading-snug">
                        Queen&apos;s <br/> #1 Incubator
                    </h1>
                    <p>🚀 Innovate, Collaborate, & Succeed</p>
                </div>

                <div className="grow-1 flex flex-col gap-16">
                    {/* <Image src="innovate.svg" width={500} height={500} alt="INNOVATE"/>
                    <Image src="disrupt.svg" width={500} height={500} alt="DISRUPT"/>
                    <Image src="create.svg" width={500} height={500} alt="CREATE"/> */}

                    <Image className="animate-fade-in" src="innovate-disrupt-create.svg" width={500} height={500} alt="INNOVATE DISRUPT CREATE"/>
                </div>
            </div>
            <div>
                <h1 className="text-center text-stone-300 text-2xl font-thin tracking-widest mb-8 mt-16">PAST PARTNERS AND SPONSORS</h1>
                <div className="slider-container overflow-hidden whitespace-nowrap">
                    <div className="slider flex gap-6 w-max animate-slider">
                        <Sponsors></Sponsors>
                    </div>
                </div>
            </div>
        </div>
    )
}

function updateKeyframes(start, end) {
    const stylesheets = [...document.styleSheets];
    const sponsorSlideKeyframeName = 'slide';

    stylesheets.forEach(sheet => {
        const cssRules = [...sheet.cssRules];
        cssRules.forEach(rule => {
            if (rule.type === CSSRule.KEYFRAMES_RULE && rule.name === sponsorSlideKeyframeName) {
                const ruleStyles = [...rule.cssRules];
                ruleStyles.forEach(line => {
                    if (line.keyText === '0%') { line.style.transform = `translateX(${start}px)` }
                    if (line.keyText === '100%') { line.style.transform = `translateX(${end}px)` }
                });
            }
        });
    });
}