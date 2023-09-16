import React, { ReactNode, useEffect, useRef, useState } from 'react';
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
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Stop observing once the animation is triggered
                        observer.unobserve(animatedWrapperRef.current!);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (animatedWrapperRef.current) {
            observer.observe(animatedWrapperRef.current);
        }

        return () => {
            if (animatedWrapperRef.current) {
                observer.unobserve(animatedWrapperRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`animated-wrapper ${animationType} ${isVisible ? 'visible' : ''}`}
            ref={animatedWrapperRef}
            data-aos={isVisible ? animationType : undefined} // Update data-aos conditionally
        >
            {children}
        </div>
    );
};

export default AnimatedWrapper;
