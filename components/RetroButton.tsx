import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // Light Mode: Hard borders, Hard shadows (brutalist/neo-brutalism)
  const baseStyles = "px-6 py-3 font-bold uppercase tracking-wider transition-all duration-150 border-2 active:translate-y-1 active:shadow-none";
  
  const variants = {
    // Primary: Black background, White text, Black Border
    primary: "bg-retro-accent text-white border-retro-border hover:bg-gray-800 shadow-[4px_4px_0px_0px_#000000]",
    
    // Secondary: Transparent, Black text, Black Border
    secondary: "bg-transparent text-retro-text border-retro-border hover:bg-gray-100 shadow-[4px_4px_0px_0px_#000000]",
    
    // Ghost: Transparent, Gray text
    ghost: "bg-transparent text-retro-muted border-transparent hover:text-retro-accent hover:bg-gray-100 border-none shadow-none"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};