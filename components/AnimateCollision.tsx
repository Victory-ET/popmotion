"use client";
// import React, { useEffect, useRef } from "react";
// import { animate, inertia } from "popmotion";

// const CollisionAnimation = () => {
//   const openRef = useRef(null);
//   const replayRef = useRef(null);

//   useEffect(() => {
//     const openText = openRef.current;
//     const replayText = replayRef.current;

//     const openAnimation = animate({
//       from: { x: -200 }, // Start from outside the left of the screen
//       to: { x: window.innerWidth / 2 - openText.offsetWidth / 2 }, // Move to the middle of the screen
//       duration: 2000, // Longer duration
//       velocity: 500, // Increased initial velocity
//       onUpdate: (latest) => {
//         // Apply animated styles to the "open" text
//         openText.style.transform = `translateX(${latest.x}px)`;
//       },
//     });

//     const replayAnimation = animate({
//       from: { x: window.innerWidth }, // Start from outside the right of the screen
//       to: { x: window.innerWidth / 2 + replayText.offsetWidth / 2 }, // Move to the middle of the screen
//       duration: 2000, // Longer duration
//       velocity: -500, // Increased initial velocity
//       onUpdate: (latest) => {
//         // Apply animated styles to the "replay" text
//         replayText.style.transform = `translateX(${latest.x}px)`;
//       },
//     });

//     // Trigger collision animation when both texts are in position
//     Promise.all([openAnimation, replayAnimation]).then(() => {
//       inertia({
//         from: 0, // Initial position
//         velocity: 1000, // Increased initial velocity
//         power: 0.8, // Power of the collision
//         onUpdate: (latest) => {
//           // Apply animated styles to both texts during collision
//           openText.style.transform = `translateX(${latest}px)`;
//           replayText.style.transform = `translateX(-${latest}px)`;
//         },
//       });
//     });
//   }, []);

//   return (
//     <div>
//       <div
//         ref={openRef}
//         className="text-4xl font-bold"
//         style={{ position: "absolute", top: "50%", left: 0 }}
//       >
//         Open
//       </div>
//       <div
//         ref={replayRef}
//         className="text-4xl font-bold"
//         style={{ position: "absolute", top: "50%", right: 0 }}
//       >
//         Replay
//       </div>
//     </div>
//   );
// };

// export default CollisionAnimation;

import React, { useEffect, useRef } from "react";
import { animate, inertia } from "popmotion";

const CollisionAnimation = () => {
  const openRef = useRef(null);
  const replayRef = useRef(null);

  useEffect(() => {
    const openText = openRef.current;
    const replayText = replayRef.current;

    const openAnimation = animate({
      from: { x: -200 }, // Start from outside the left of the screen
      to: { x: window.innerWidth / 2 - openText.offsetWidth / 2 }, // Move to the middle of the screen
      duration: 2000, // Longer duration
      velocity: 500, // Increased initial velocity
      onUpdate: (latest) => {
        // Apply animated styles to the "open" text
        openText.style.transform = `translateX(${latest.x}px)`;
      },
    });

    const replayAnimation = animate({
      from: { x: window.innerWidth }, // Start from outside the right of the screen
      to: { x: window.innerWidth / 2 + replayText.offsetWidth / 2 }, // Move to the middle of the screen
      duration: 2000, // Longer duration
      velocity: -500, // Increased initial velocity
      onUpdate: (latest) => {
        // Apply animated styles to the "replay" text
        replayText.style.transform = `translateX(${latest.x}px)`;
      },
    });

    // Trigger collision animation when both texts are in position
    Promise.all([openAnimation, replayAnimation]).then(() => {
      inertia({
        from: 0, // Initial position
        velocity: 1000, // Increased initial velocity
        power: 0.8, // Power of the collision
        onUpdate: (latest) => {
          // Check if bounding rectangles intersect
          const openRect = openText.getBoundingClientRect();
          const replayRect = replayText.getBoundingClientRect();

          if (
            openRect.right >= replayRect.left &&
            openRect.left <= replayRect.right &&
            openRect.bottom >= replayRect.top &&
            openRect.top <= replayRect.bottom
          ) {
            // Adjust positions to simulate collision effect
            console.log("Collision detected");
            openText.style.transform = `translateX(${latest}px)`;
            replayText.style.transform = `translateX(-${latest}px)`;
          } else {
            // Apply animated styles to both texts during collision
            openText.style.transform = `translateX(${latest}px)`;
            replayText.style.transform = `translateX(-${latest}px)`;
          }
        },
      });
    });
  }, []);

  return (
    <div>
      <div
        ref={openRef}
        className="text-4xl font-bold"
        style={{ position: "absolute", top: "50%", left: 0 }}
      >
        Open
      </div>
      <div
        ref={replayRef}
        className="text-4xl font-bold"
        style={{ position: "absolute", top: "50%", right: 0 }}
      >
        Replay
      </div>
    </div>
  );
};

export default CollisionAnimation;


