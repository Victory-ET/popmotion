"use client";

import { useEffect, useRef } from 'react';
import { animate, angle, degreesToRadians, pointFromVector, snap } from 'popmotion';

const AnimateCircular = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;

        const angleStep = 5; // Angle step for each position of the element
        const radius = 80; // Radius of the circular motion
        const totalSteps = 360 / angleStep; // Total steps to complete a circle

        const animateElement = (angleValue) => {
            const { x, y } = pointFromVector({ x: circle.offsetWidth / 2, y: circle.offsetHeight / 2 }, angleValue, radius);
            circle.style.transform = `translate(${x - circle.offsetWidth / 2}px, ${y - circle.offsetHeight / 2}px) rotate(${angleValue}deg)`;
        };

        const springAnimation = animate({
            from: 0,
            to: totalSteps, // Total steps to complete a circle
            onUpdate: (value) => {
                const angleValue = snap([0, 360], angle({ x: 0, y: 0 }, { x: 45, y: 100 }) * (value / totalSteps)); // Calculate the angle for each step
                animateElement(angleValue);
            },
            duration: 2000, // Duration of the animation
            repeat: Infinity, // Repeat the animation indefinitely
        });

        return () => {
            springAnimation.stop();
        };
    }, []);

    return (
        <>
            <div
                ref={circleRef}
                style={{
                    width: '20px',
                    height: '20px',
                    background: 'orange',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    );
};

export default AnimateCircular;

