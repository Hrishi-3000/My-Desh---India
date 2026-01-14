import React, { useState, useEffect } from 'react';
import { PATRIOTIC_QUOTES } from '../constants';

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PATRIOTIC_QUOTES.length);
    }, 10000); // Cycle every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 w-full">
      {/* Flag Container */}
      <div className="relative w-full max-w-md mb-8 transform transition-transform duration-700 hover:scale-[1.01]">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
          alt="National Flag of India" 
          className="w-full h-auto drop-shadow-2xl rounded-sm ring-1 ring-gray-200/50" 
        />
        {/* Subtle sheen effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-sm"></div>
      </div>

      {/* Quotes with Active Highlight Logic */}
      <div className="flex flex-col items-center space-y-6 text-center w-full max-w-xl">
        {PATRIOTIC_QUOTES.map((quote, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={index} className="flex flex-col items-center w-full transition-all duration-700">
              <p className={`font-display text-2xl md:text-3xl leading-relaxed tracking-tight transition-all duration-1000 ease-in-out
                ${isActive 
                  ? 'font-bold text-india-navy scale-105 opacity-100' 
                  : 'font-medium text-gray-400 scale-95 opacity-50 blur-[0.5px]'}
              `}>
                “{quote.text}”
              </p>
              {/* Decorative separator */}
              {index < PATRIOTIC_QUOTES.length - 1 && (
                <div className={`h-0.5 mt-4 transition-all duration-1000 ease-in-out
                  ${isActive 
                    ? 'w-16 bg-gradient-to-r from-transparent via-india-saffron to-transparent opacity-100' 
                    : 'w-8 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30'}
                `}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};