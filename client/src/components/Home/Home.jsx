import React, { memo, useState, useEffect } from 'react';


import { useRef } from "react";

import "./Home.css"
import { Blog } from '../blog/Blog';
import Robofest from '../Robofest/Robofest';
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";




function Home() {

  console.clear();
  gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);




  // About Section

  function triggerLaunch() {
    console.log("launch");
    document.body.classList.remove("overflow-hidden");
  }

  gsap.set(".main_section", {
    autoAlpha: 1
  });


  // const planet = gsap.timeline({ repeat: 0 });
  // const homePlanet = gsap.timeline({
  //   onComplete: triggerLaunch
  // });

  // const launchTheRocket = gsap.timeline({
  //   paused: true
  // });
  const animat = (planet) => {
    planet
      .to(".dot-line", {
        repeat: -1,
        rotation: "+=360",
        duration: 100,
        ease: "none",
        transformOrigin: "center center"
      })

      .to(
        ".planet-ab",
        {
          repeat: -1,
          rotation: "+=360",
          ease: "none",
          svgOrigin: "566.76 566.76",
          duration: 60,
          overwrite: "auto"
        },
        0
      );
  }

  //initialize useRef
  let featuredText = useRef(null);

  //start animation only when dom components are mounted.
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    const pl = gsap.timeline({ repeat: 0 });
    const planet = gsap.timeline({ repeat: 0 });
    const box = gsap.timeline({ repeat: 0 });
    const box1 = gsap.timeline({ repeat: 0 });
    animat(pl, featuredText);
    animat(planet, featuredText);
    animation(tl, featuredText);
    animation1(box, featuredText);
    animation2(box1, featuredText);
  }, []);

  //Animation
  const animation = (tl, el) => {
    tl.from(el, {
      opacity: 1,
      duration: 3,
      x: 1000,
      ease: "elastic",
      delay: 0,
    });
  };

  const animation1 = () => {
    gsap.to(".box", {
      scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
      x: 500,
      delay: 1,
    });
  }
  const animation2 = () => {
    gsap.to(".box1", {
      scrollTrigger: ".box1", // start the animation when ".box" enters the viewport (once)
      x: 200,
      delay: 1,
    });
  }

  return (
    <>
      <div className="overflow-hidden body">

        <div className="main_section">
          <main className="main_content">
            <div id="about" className="about sec">
              <div className="about_txt">
                <h1 className="about_title">
                  ROBOTIX CLUB
                </h1>
                <p>The Robotix Club of NIT RAIPUR is a vibrant and innovative community that brings together students with a passion for robotics, automation, and technology. Founded on the principles of collaboration, creativity, and hands-on learning, the club serves as a dynamic hub where students explore the fascinating world of robotics through various projects, workshops, competitions, and events.</p>
              </div>
              <div className="about_graphic">
                <svg viewBox="-25 0 1133.51 1133.51">
                  <g>
                    <circle className="solid_white" cx="566.76" cy="566.76" r="124.77" />
                    <circle className="white_line dot-line" cx="566.76" cy="566.76" r="212.78" />
                    <circle className="white_line dot-line" cx="566.76" cy="566.76" r="300.8" />
                    <circle className="white_line dot-line" cx="566.76" cy="566.76" r="388.38" />
                    <circle className="white_line dot-line" cx="566.76" cy="566.76" r="476.39" />
                    <circle className="white_line dot-line" cx="566.76" cy="566.76" r="566.1" />
                    <g className="planet-ab">
                      <ellipse cx="182.43" cy="510.49" rx="19.5" ry="19.66" />
                      <path className="yellow_fill" d="M189.76,510.49c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                    </g>
                    <g className="planet-ab">
                      <ellipse cx="55.97" cy="816.04" rx="19.5" ry="19.66" />
                      <path className="yellow_fill" d="M63.29,816.04c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                    </g>
                    <g className="planet-ab">
                      <ellipse cx="437.23" cy="841.18" rx="19.5" ry="19.66" />
                      <path className="yellow_fill" d="M444.56,841.18c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                    </g>
                    <g className="planet-ab">
                      <ellipse cx="792.68" cy="986.97" rx="19.5" ry="19.66" />
                      <path className="yellow_fill" d="M800.01,986.97c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                    </g>
                    <g className="planet-ab">
                      <ellipse cx="566.6" cy="265.8" rx="19.5" ry="19.66" />
                      <path className="yellow_fill" d="M573.93,265.8c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                    </g>
                    <g className="planet-ab">
                      <ellipse cx="1013.63" cy="220.76" rx="19.5" ry="19.66" />
                      <path className="yellow_fill" d="M1020.96,220.76c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                    </g>
                    <g className="planet-ab">
                      <ellipse cx="954.34" cy="560.72" rx="19.5" ry="19.66" />
                      <path className="yellow_fill" d="M961.67,560.72c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                    </g>
                    <g className="planet-ab">
                      <ellipse cx="738.96" cy="445.59" rx="19.5" ry="19.66" />
                      <path className="yellow_fill" d="M746.29,445.59c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Robofest />
      <Blog />
    </>
  );
}

export default memo(Home);