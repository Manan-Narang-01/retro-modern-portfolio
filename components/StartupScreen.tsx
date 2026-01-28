import React, { useState, useEffect, useRef } from 'react';

interface StartupScreenProps {
  onComplete: () => void;
}

export const StartupScreen: React.FC<StartupScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    // Prevents double-triggering in React Strict Mode
    if (hasStarted.current) return;
    hasStarted.current = true;

    const sequence = async () => {
       const addLine = (text: string, delay: number) => 
         new Promise<void>(resolve => setTimeout(() => {
           setLines(prev => [...prev, text]);
           if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
           resolve();
         }, delay));

       // --- BOOT SEQUENCE ---
       await addLine("PHOENIX BIOS 4.0 Release 6.0", 600);
       await addLine("Copyright 1985-2025 Phoenix Technologies Ltd.", 300);
       await addLine("All Rights Reserved", 300);
       await addLine("", 300);
       await addLine("CPU: INTEL(R) CORE(TM) I9-14900K @ 6.00GHz", 500);
       await addLine("64GB RAM SYSTEM DETECTED", 400);
       await addLine("MEMORY TEST: 65536K OK", 800);
       await addLine("", 200);
       await addLine("DETECTING IDE PRIMARY MASTER ... PORTFOLIO_DRIVE_V1", 600);
       await addLine("DETECTING IDE PRIMARY SLAVE ... NONE", 400);
       await addLine("BOOTING FROM DRIVE C:", 800);
       
       // --- LOADING BAR ---
       setLines(prev => [...prev, "LOADING SYSTEM... [                    ] 0%"]);
       const barLength = 20;
       for(let i=1; i<=barLength; i++) {
           // Slower increment (80ms per tick)
           await new Promise(r => setTimeout(r, 80)); 
           setLines(prev => {
               const newLines = [...prev];
               const percent = Math.floor((i/barLength)*100);
               const filled = "=".repeat(i);
               const empty = " ".repeat(barLength - i);
               newLines[newLines.length-1] = `LOADING SYSTEM... [${filled}${empty}] ${percent}%`;
               return newLines;
           });
       }

       // --- FINAL STEPS ---
       await addLine("", 300);
       await addLine("INIT: ENTERING RUNLEVEL 3", 500);
       await addLine("STARTING SERVICES: [ OK ]", 400);
       await addLine("MOUNTING FILESYSTEMS: [ OK ]", 400);
       await addLine("SYSTEM READY.", 1000); // Wait a full second at the end
       
       setTimeout(onComplete, 500);
    };

    sequence();
  }, [onComplete]);

  return (
    <div 
      onClick={onComplete} // Still allows skipping if the user is in a hurry
      className="fixed inset-0 bg-black text-gray-300 font-mono z-[100] flex flex-col p-8 md:p-16 text-sm md:text-xl leading-snug overflow-hidden select-none cursor-wait"
    >
        <div className="flex justify-between border-b-2 border-gray-700 pb-2 mb-4 uppercase text-xs md:text-sm tracking-widest text-gray-500">
            <span>Energy Star Ally</span>
            <span>Bios Date: 09/24/24</span>
        </div>
        
        <div ref={scrollRef} className="flex-grow flex flex-col justify-start overflow-hidden relative z-10">
            {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap font-bold">{line}</div>
            ))}
            <div className="animate-pulse mt-1">_</div>
        </div>

        <div className="border-t-2 border-gray-700 pt-2 flex justify-between text-xs text-gray-500 uppercase mt-4">
             <span>Click to skip boot</span>
             <span>Press DEL to enter setup</span>
        </div>

        {/* CRT Screen Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
    </div>
  );
};