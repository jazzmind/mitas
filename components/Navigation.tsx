import React, { useState } from 'react';
import { Monitor, ScrollText, Menu, X } from 'lucide-react';
import { usePresentationMode } from '@/contexts/PresentationContext';
import { slideData } from '@/data/pitchDeckContent';
import Image from 'next/image';

export const Navigation = () => {
  const { isPresentationMode, togglePresentationMode } = usePresentationMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 right-0 z-50 dark:invert w-full bg-white/80 backdrop-blur-sm shadow-sm`}>
      <div className="flex items-center justify-between px-4 py-2">
        <Image 
          src="/mit_logo.png" 
          alt="MIT Logo"
          width={120}
          height={60}
          className="hidden md:block"
          priority 
        />
        
        {!isPresentationMode && (
          <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center gap-8 text-sm font-medium">
              <a href="#opportunity" onClick={(e) => handleScroll(e, '#opportunity')} className="hover:text-mit-red transition-colors">{slideData[1].title}</a>
              <a href="#overview" onClick={(e) => handleScroll(e, '#overview')} className="hover:text-mit-red transition-colors">{slideData[2].title}</a>
              <a href="#program" onClick={(e) => handleScroll(e, '#program')} className="hover:text-mit-red transition-colors">{slideData[3].title}</a>
              <a href="#candidates" onClick={(e) => handleScroll(e, '#candidates')} className="hover:text-mit-red transition-colors">{slideData[4].title}</a>
              <a href="#partnerships" onClick={(e) => handleScroll(e, '#partnerships')} className="hover:text-mit-red transition-colors">{slideData[5].title}</a>
              <a href="#timeline" onClick={(e) => handleScroll(e, '#timeline')} className="hover:text-mit-red transition-colors">{slideData[6].title}</a>
              <a href="#next-steps" onClick={(e) => handleScroll(e, '#next-steps')} className="hover:text-mit-red transition-colors">{slideData[8].title}</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </>
        )}

        <button
          onClick={togglePresentationMode}
          className="p-2 dark:bg-black bg-white rounded-full shadow-md hover:shadow-lg transition-all"
          title={isPresentationMode ? "Switch to scroll mode" : "Switch to presentation mode"}
        >
          {isPresentationMode ? <ScrollText size={24} /> : <Monitor size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {!isPresentationMode && isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-sm shadow-lg py-4">
          <div className="flex flex-col gap-4 px-4">
            <a href="#opportunity" 
               onClick={(e) => {
                 handleScroll(e, '#opportunity');
                 setIsMenuOpen(false);
               }} 
               className="hover:text-mit-red transition-colors py-2 border-b border-gray-100">
              {slideData[1].title}
            </a>
            <a href="#overview" 
               onClick={(e) => {
                 handleScroll(e, '#overview');
                 setIsMenuOpen(false);
               }} 
               className="hover:text-mit-red transition-colors py-2 border-b border-gray-100">
              {slideData[2].title}
            </a>
            {/* ... Add similar entries for other navigation items ... */}
          </div>
        </div>
      )}
    </nav>
  );
};