import React from 'react';
import { LEFT_LINKS, RIGHT_LINKS } from './constants';
import { EmblemCard } from './components/EmblemCard';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-slate-50 relative overflow-hidden">
      
      {/* Subtle Background Elements - Ashoka Chakra Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.03]">
         <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" 
            alt="Ashoka Chakra Watermark"
            className="w-[90vh] h-[90vh] animate-[spin_120s_linear_infinite]"
         />
      </div>

      {/* Top Border - Tricolour */}
      <div className="h-1.5 w-full flex z-50 fixed top-0 left-0">
        <div className="h-full w-1/3 bg-india-saffron"></div>
        <div className="h-full w-1/3 bg-white"></div>
        <div className="h-full w-1/3 bg-india-green"></div>
      </div>

      <main className="flex-grow container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center h-full max-h-[90vh] py-8">
          
          {/* Left Panel - Military Branches */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-row lg:flex-col items-center justify-center lg:justify-center flex-wrap lg:flex-nowrap gap-4 lg:gap-2 lg:space-y-2">
            <div className="w-full border-b border-gray-200 pb-1 mb-2 lg:hidden hidden">
              <h3 className="text-center font-serif text-gray-400 text-xs uppercase tracking-[0.2em]">Defence Forces</h3>
            </div>
            {LEFT_LINKS.map((item) => (
              <EmblemCard key={item.title} item={item} />
            ))}
          </div>

          {/* Center Panel - Hero Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <HeroSection />
          </div>

          {/* Right Panel - Command & State */}
          <div className="lg:col-span-3 order-3 flex flex-row lg:flex-col items-center justify-center lg:justify-center flex-wrap lg:flex-nowrap gap-4 lg:gap-2 lg:space-y-2">
            <div className="w-full border-b border-gray-200 pb-1 mb-2 lg:hidden mt-4 hidden">
              <h3 className="text-center font-serif text-gray-400 text-xs uppercase tracking-[0.2em]">Supreme Command</h3>
            </div>
            {RIGHT_LINKS.map((item) => (
              <EmblemCard key={item.title} item={item} />
            ))}
          </div>
          
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;