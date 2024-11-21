'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.add('animate');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    const elements = wrapperRef.current?.querySelectorAll('.char');
    if (elements) {
      gsap.set(elements, { opacity: 0, y: 20, display: 'inline-block' });
      
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        }
      });
    }
  }, { scope: wrapperRef });

  return (
    <>
      <span className="sr-only">{children}</span>
      <span ref={wrapperRef} className="inline-block" aria-hidden="true">
        {children.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split('').map((char, charIndex) => (
              <span key={charIndex} className="inline-block char opacity-0">
                {char}
              </span>
            ))}
            <span>&nbsp;</span>
          </span>
        ))}
      </span>
    </>
  );
};

export default AnimatedText;