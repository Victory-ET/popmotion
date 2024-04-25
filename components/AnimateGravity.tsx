"use client";
// import React, { useRef, useEffect } from "react";

// const AnimateGravity = () => {
//   const ref = useRef(null);
//   const ballXY = { x: 0, y: 0 };
//   let gravity = 0.7;
//   let bounce = 0.7;

//   useEffect(() => {
//     const ball = ref.current;

//     const update = () => {
//       ballXY.y += gravity;
//       if (ballXY.y + ball.clientHeight > window.innerHeight) {
//         // Reverse direction and apply bounce
//         ballXY.y = window.innerHeight - ball.clientHeight;
//         gravity *= -bounce;
//       } else {
//         // Apply gravity
//         gravity += 0.1; // Optional: Increase gravity over time for more realistic effect
//       }
//     };

//     const render = () => {
//       ball.style.left = ballXY.x + "px";
//       ball.style.top = ballXY.y + "px";
//     };

//     const loop = () => {
//       update();
//       render();
//       requestAnimationFrame(loop);
//     };

//     loop();

//     // Cleanup function to stop the animation when the component unmounts
//     return () => cancelAnimationFrame(loop);
//   }, []);

//   return (
//     <div>
//       <div
//         ref={ref}
//         className="ball"
//         style={{
//           position: "absolute",
//           width: "50px",
//           height: "50px",
//           backgroundColor: "red",
//           borderRadius: "50%",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default AnimateGravity;

// import React, { useRef, useEffect } from "react";
// import { animate } from "popmotion";

// const AnimateGravity = () => {
//   const ref = useRef(null);
//   const ballXY = { x: 0, y: 0 };
//   let gravity = 0.7;
//   let bounce = 0.7;

//   useEffect(() => {
//     const ball = ref.current;

//     const update = () => {
//       ballXY.y += gravity;
//       if (ballXY.y + ball.clientHeight > window.innerHeight) {
//         // scale the ball on the x axis to apply a squish effect
//         animate({
//           from: 1,
//           to: 0.5,
//           onUpdate: (latest) => {
//             ball.style.transform = `scale(${latest}, 1)`;
//           },
//         });

//         // Reverse direction and apply bounce
//         ballXY.y = window.innerHeight - ball.clientHeight;
//         gravity *= -bounce;
//       } else {
//         // Apply gravity
//         gravity += 0.1; // Optional: Increase gravity over time for more realistic effect
//       }
//     };

//     const loop = () => {
//       update();
//       animate({
//         from: ballXY.y,
//         to: ballXY.y + gravity,
//         onUpdate: (latest) => {
//           ballXY.y = latest;
//           ball.style.top = latest + "px";
//         },
//       });
//       requestAnimationFrame(loop);
//     };

//     loop();

//     // Cleanup function to stop the animation when the component unmounts
//     return () => cancelAnimationFrame(loop);
//   }, []);

//   return (
//     <div className="">
//       <div
//         ref={ref}
//         className="ball"
//         style={{
//           position: "absolute",
//           width: "70px",
//           height: "70px",
//           backgroundColor: "red",
//           borderRadius: "50%",
//           left: ballXY.x + "px",
//           top: ballXY.y + "px",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default AnimateGravity;

// animate openreplay

import React, { useEffect, useRef } from "react";
import { animate } from "popmotion";

const AnimateLetters = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const letters = Array.from(text.children); // Get individual letters

    letters.forEach((letter, index) => {
      const delay = index * 100; // Calculate delay for each letter
      const fallDuration = 1000; // Duration of the fall animation
      const bounceDuration = 200; // Duration of the bounce animation

      animate({
        from: {
          y: -100, // Start from above the screen
          opacity: 0, // Hide initially
        },
        to: {
          y: 200, // Move to its original position
          opacity: 1, // Fade in
        },
        duration: fallDuration, // Duration of the fall animation

        onUpdate: (latest) => {
          // Apply animated styles to the letter
          letter.style.transform = `translateY(${latest.y}px)`;
          letter.style.opacity = latest.opacity;
        },
        onComplete: () => {
          // Bounce animation when the letter hits the bottom platform
          animate({
            from: { y: 200 },
            to: { y: 180 }, // Move the letter up slightly
            duration: bounceDuration / 2,
            repeat: 2, // Repeat the animation indefinitely
            repeatDelay: delay, // Delay the bounce animation
            repeatType: "mirror", // Reverse the animation direction after each cycle
            onUpdate: (latest) => {
              // Apply bounce effect to the letter
              letter.style.transform = `translateY(${latest.y}px)`;
            },
          });
        },
      });
    });
  }, []);

  return (
    <div ref={textRef} className="text-4xl font-bold">
      {"OpenReplay".split("").map((letter, index) => (
        <span key={index} className="inline-block mx-1">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default AnimateLetters;
