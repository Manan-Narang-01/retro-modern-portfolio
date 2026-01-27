import React from 'react';

export const RetroBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#ffffff]">
      {/* 1. Static Grid Pattern - Dark lines on White */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 2. Scanlines Overlay */}
      <div className="absolute inset-0 scanlines opacity-50 pointer-events-none"></div>

      {/* 3. Moving Scan Bar (Refresh Rate Artifact) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="w-full h-[150px] scan-bar opacity-10"></div>
      </div>

      {/* 4. Vignette for CRT feel - Inverted for Light Mode (Dark corners) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.15)_100%)]"></div>
      
      {/* 5. Paper Grain Texture (Optional Noise) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
    </div>
  );
};