"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "popmotion";

const BallAnimate = () => {
  const animatedElementRef: any = useRef(null);

  useEffect(() => {
    const animation = animate({
      from: {
        y: 0,
        scale: 1,
      },
      to: {
        y: 500,
        scale: 1.5,
      },
      duration: 1000,
      repeatType: "reverse",
      repeatDelay: 100,
      repeat: 7,
      onPlay: () => {
        // change background color when animation starts
        if (animatedElementRef.current) {
          animatedElementRef.current.style.backgroundColor = "red";
        }
      },
      onUpdate: (latest) => {
        // animate ball position and scale
        if (animatedElementRef.current) {
          animatedElementRef.current.style.transform = `translateY(${latest.y}px) scale(${latest.scale})`;
        }
      },
      onRepeat() {
        // random background rgba
        if (animatedElementRef.current) {
          animatedElementRef.current.style.backgroundColor = `rgba(${
            Math.random() * 255
          },${Math.random() * 255},${Math.random() * 255},1)`;
        }
      },
      onComplete() {
        // change background color when animation ends
        if (animatedElementRef.current) {
          animatedElementRef.current.style.backgroundColor = "blue";
        }
      },
    });

    return () => {
      animation.stop();
    };
  }, []);
  return (
    <div
      className=" h-14 w-14 rounded-full bg-blue-700"
      ref={animatedElementRef}
    ></div>
  );
};

export default BallAnimate;
