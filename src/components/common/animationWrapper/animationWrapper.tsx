import React, { ReactNode, useEffect, useRef } from 'react';
import './animationWrapper.scss';

interface AnimatedWrapperProps {
    animationType: 'from-right' | 'from-left' | 'from-bottom';
    children: ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
    animationType,
    children,
}) => {
    const animatedWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'visible' class when the element is in the viewport
                        animatedWrapperRef.current?.classList.add('visible');
                    } else {
                        // Remove the 'visible' class when the element is not in the viewport
                        animatedWrapperRef.current?.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        // Start observing the element when the component mounts
        if (animatedWrapperRef.current) {
            observer.observe(animatedWrapperRef.current);
        }

        // Stop observing when the component unmounts
        return () => {
            if (animatedWrapperRef.current) {
                observer.unobserve(animatedWrapperRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`animated-wrapper ${animationType}`}
            ref={animatedWrapperRef}
            data-aos={animationType} // Add this line if using AOS library
        >
            {children}
        </div>
    );
};

export default AnimatedWrapper;
