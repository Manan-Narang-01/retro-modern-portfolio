import React from 'react';
import { SectionType } from '../types';
import { Terminal, Briefcase, Code, GraduationCap, Mail } from 'lucide-react';

interface NavbarProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate, mobileMenuOpen, setMobileMenuOpen }) => {
  
  const navItems = [
    { type: SectionType.HOME, label: 'SYS_ROOT', icon: Terminal },
    { type: SectionType.EXPERIENCE, label: 'EXEC_LOG', icon: Briefcase },
    { type: SectionType.PROJECTS, label: 'MODULES', icon: Code },
    { type: SectionType.EDUCATION, label: 'DATA_BANK', icon: GraduationCap },
    { type: SectionType.CONTACT, label: 'COMMS', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-retro-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => onNavigate(SectionType.HOME)}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-black group-hover:bg-gray-700 transition-colors"></div>
              <span className="text-xl font-bold tracking-tighter text-black group-hover:underline decoration-2 underline-offset-4">
                PORTFOLIO.EXE
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.type}
                  onClick={() => onNavigate(item.type)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all duration-200 border-2 rounded-none ${
                    currentSection === item.type
                      ? 'text-white bg-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'
                      : 'text-retro-muted bg-transparent border-transparent hover:border-black hover:text-black'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none border-2 border-transparent focus:border-black"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-retro-border bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.type}
                onClick={() => {
                  onNavigate(item.type);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-3 py-4 text-base font-bold border-2 transition-all ${
                  currentSection === item.type
                    ? 'text-white bg-black border-black'
                    : 'text-gray-600 border-transparent hover:border-black hover:text-black'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};