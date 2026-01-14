import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-auto border-t border-gray-100 bg-white/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-2 mb-3">
           {/* Mini Tricolour Bar */}
           <div className="h-1 w-8 bg-india-saffron rounded-full"></div>
           <div className="h-1 w-8 bg-white border border-gray-200 rounded-full"></div>
           <div className="h-1 w-8 bg-india-green rounded-full"></div>
        </div>
        <p className="font-serif text-gray-700 text-sm tracking-widest uppercase font-bold">
          Dedicated to the spirit of India 🇮🇳 by{' '}
          <a 
            href="https://hrishikesh-shahane-portfolio.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-gray-400 hover:decoration-india-saffron hover:text-india-saffron transition-all duration-300"
          >
            Hrishikesh
          </a>
        </p>
      </div>
    </footer>
  );
};