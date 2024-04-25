"use client";
import { useEffect, useRef } from 'react';
import { animate } from 'popmotion';

const AnimateSpring = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const springAnimation = animate({
            from: 0,
            to: 150,
            stiffness: 500,
            damping: 20,
            mass: 2,
            velocity: 1000,
            duration: 1000,
            bounce: 0.2,
            restDelta: 0.5,
            restSpeed: 5,
            onUpdate: (value) => {
                textRef.current.style.transform = `translateX(${value}px)`;
            }
        });

        return () => {
            springAnimation.stop();
        };
    }, []);

    return (
        <div ref={textRef} style={{ fontSize: '54px', transition: 'transform 0.3s ease-in-out' }}>
            Animated Text
        </div>
    );

};

export default AnimateSpring;
