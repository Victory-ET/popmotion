"use client";
import React, { useEffect, useRef } from "react";
import { animate } from "popmotion";

const AnimateProps = () => {
  // within the component

  // initialize a ref to the animated element
  const animatedElementRef: any = useRef(null);

  useEffect(() => {
    const animation = animate({
      from: 0,
      to: 100,
      duration: 1000,
      onUpdate: (latest) => {
        if (animatedElementRef.current) {
          // animate width based on the latest value from the animation
          animatedElementRef.current.style.width = `${latest}%`;
          // animate color based on the latest value from the animation
          animatedElementRef.current.style.backgroundColor = `hsl(${latest}, 100%, 50%)`;
          // animate height based on the latest value from the animation
          animatedElementRef.current.style.height = `${latest}px`;
        }
      },
    });

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <div
      ref={animatedElementRef}
      style={{
        width: 0,
        height: 50,
      }}
    />
  );
};
export default AnimateProps;
