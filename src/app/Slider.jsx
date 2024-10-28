"use client"
import Sponsors from "./Sponsors"
import { useRef, useEffect } from "react";

export default function Slider(){
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
        <div className="slider-container overflow-hidden whitespace-nowrap">
            <div className="slider flex gap-6 w-max animate-slider">
                <Sponsors></Sponsors>
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