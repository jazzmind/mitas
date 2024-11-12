
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  show: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0, 
  show 
}) => (
  <div 
    className={`transition-all duration-500 ease-out transform ${
      show 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-4'
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
);