import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t-2 border-retro-border bg-retro-bg py-10 mt-12 overflow-hidden">
      {/* CRT Curvature / Glare Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)]"></div>
      
      {/* Subtle Horizontal scanline just for the footer */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_2px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <p className="text-retro-muted text-sm font-bold tracking-widest">
          © {new Date().getFullYear()} SYSTEM_ADMIN. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[10px] text-retro-muted mt-4 uppercase tracking-[0.3em] font-medium">
          CRAFTED_BY_MANAN_NARANG // SYSTEM_UPTIME_100% // [V.1.0.1-STABLE]
        </p>
        
        {/* Retro Industrial Hardware Markers */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-2 h-2 border border-black bg-black"></div>
          <div className="w-2 h-2 border border-black bg-transparent"></div>
          <div className="w-2 h-2 border border-black bg-transparent"></div>
        </div>
      </div>
    </footer>
  );
};