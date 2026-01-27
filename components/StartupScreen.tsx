import React, { useState, useEffect, useRef } from 'react';

interface StartupScreenProps {
  onComplete: () => void;
}

export const StartupScreen: React.FC<StartupScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sequence = async () => {
       const addLine = (text: string, delay: number) => 
         new Promise<void>(resolve => setTimeout(() => {
           setLines(prev => [...prev, text]);
           if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
           resolve();
         }, delay));

       // Boot Sequence Text
       await addLine("PHOENIX BIOS 4.0 Release 6.0", 400);
       await addLine("Copyright 1985-2025 Phoenix Technologies Ltd.", 200);
       await addLine("All Rights Reserved", 200);
       await addLine("", 200);
       await addLine("CPU: INTEL(R) CORE(TM) I9-14900K @ 6.00GHz", 300);
       await addLine("64GB RAM SYSTEM DETECTED", 300);
       await addLine("MEMORY TEST: 65536K OK", 400);
       await addLine("", 100);
       await addLine("DETECTING IDE PRIMARY MASTER ... PORTFOLIO_DRIVE_V1", 400);
       await addLine("DETECTING IDE PRIMARY SLAVE ... NONE", 200);
       await addLine("", 100);
       await addLine("BOOTING FROM DRIVE C:", 600);
       
       // Loading Bar Simulation
       setLines(prev => [...prev, "LOADING SYSTEM... [                    ] 0%"]);
       const barLength = 20;
       for(let i=1; i<=barLength; i++) {
           await new Promise(r => setTimeout(r, 60)); // Speed of loading bar
           setLines(prev => {
               const newLines = [...prev];
               const percent = Math.floor((i/barLength)*100);
               const filled = "=".repeat(i);
               const empty = " ".repeat(barLength - i);
               newLines[newLines.length-1] = `LOADING SYSTEM... [${filled}${empty}] ${percent}%`;
               return newLines;
           });
       }

       await addLine("", 200);
       await addLine("INIT: ENTERING RUNLEVEL 3", 400);
       await addLine("STARTING SERVICES: [ OK ]", 300);
       await addLine("MOUNTING FILESYSTEMS: [ OK ]", 300);
       await addLine("LOADING USER PROFILE: MANAN_NARANG...", 500);
       await addLine("SYSTEM READY.", 600);
       
       // Allow user to read "System Ready" briefly before transition
       setTimeout(onComplete, 800);
    };

    sequence();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-gray-300 font-mono z-[100] flex flex-col p-8 md:p-16 text-sm md:text-xl leading-snug overflow-hidden select-none cursor-wait">
        {/* Top Header */}
        <div className="flex justify-between border-b-2 border-gray-700 pb-2 mb-4 uppercase text-xs md:text-sm tracking-widest text-gray-500">
            <span>Energy Star Ally</span>
            <span>Bios Date: 09/24/24</span>
        </div>
        
        {/* Main Terminal Output */}
        <div ref={scrollRef} className="flex-grow flex flex-col justify-start overflow-hidden relative z-10">
            {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap font-bold">{line}</div>
            ))}
            {/* Blinking Cursor */}
            <div className="animate-pulse mt-1">_</div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-gray-700 pt-2 flex justify-between text-xs text-gray-500 uppercase mt-4">
             <span>Press DEL to enter setup</span>
             <span>Press F8 for Boot Menu</span>
        </div>

        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
    </div>
  );
};