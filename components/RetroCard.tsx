import React from 'react';

interface RetroCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const RetroCard: React.FC<RetroCardProps> = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-white border-2 border-retro-border relative group overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-gray-100 border-b-2 border-retro-border shrink-0">
        <div className="flex gap-1.5 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 border border-black"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 border border-black"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black"></div>
        </div>
        {title && (
          <span className="text-xs uppercase tracking-widest text-retro-text font-bold">
            {title}
          </span>
        )}
        <div className="flex gap-1">
            {/* Retro Window Controls decoration */}
            <div className="w-3 h-[2px] bg-black my-auto"></div>
            <div className="w-3 h-[2px] bg-black my-auto"></div>
        </div> 
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-10 text-retro-text flex-grow flex flex-col">
        {children}
      </div>

      {/* Decorative corner accents */}
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};