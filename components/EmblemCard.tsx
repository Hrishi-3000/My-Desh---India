import React from 'react';
import { LinkItem } from '../types';

interface EmblemCardProps {
  item: LinkItem;
}

export const EmblemCard: React.FC<EmblemCardProps> = ({ item }) => {
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col items-center p-3 lg:p-4 transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-white rounded-lg hover:shadow-lg border border-transparent hover:border-gray-100 w-full max-w-[180px]"
    >
      <div className="h-16 w-16 lg:h-20 lg:w-20 mb-2 lg:mb-3 relative flex items-center justify-center">
        <img 
          src={item.logoUrl} 
          alt={item.altText} 
          className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-md opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
      </div>
      <span className="font-serif text-gray-800 font-semibold text-xs lg:text-sm tracking-wide text-center uppercase border-b-2 border-transparent group-hover:border-india-saffron transition-colors pb-0.5 leading-tight">
        {item.title}
      </span>
    </a>
  );
};