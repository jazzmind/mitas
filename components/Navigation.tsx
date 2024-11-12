import React from 'react';
import { Monitor, ScrollText } from 'lucide-react';
import { usePresentationMode } from '@/contexts/PresentationContext';
import { slideData } from '@/data/pitchDeckContent';
import Image from 'next/image';

export const Navigation = () => {
  const { isPresentationMode, togglePresentationMode } = usePresentationMode();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 right-0 z-50 flex items-center gap-4 px-4 ${!isPresentationMode ? 'w-full bg-white/80 backdrop-blur-sm shadow-sm' : ''}`}>
      {!isPresentationMode && (
        <>
        <Image src="/mit_logo.png" 
            alt="MIT Logo"
            width={120}
            height={60}
            className="dark:invert"
            priority />
        <div className="flex-1 flex justify-center gap-8 text-sm font-medium">
          <a href="#opportunity" onClick={(e) => handleScroll(e, '#opportunity')} className="hover:text-mit-red transition-colors">{slideData[1].title}</a>
          <a href="#overview" onClick={(e) => handleScroll(e, '#overview')} className="hover:text-mit-red transition-colors">{slideData[2].title}</a>
          <a href="#program" onClick={(e) => handleScroll(e, '#program')} className="hover:text-mit-red transition-colors">{slideData[3].title}</a>
          <a href="#candidates" onClick={(e) => handleScroll(e, '#candidates')} className="hover:text-mit-red transition-colors">{slideData[4].title}</a>
          <a href="#partnerships" onClick={(e) => handleScroll(e, '#partnerships')} className="hover:text-mit-red transition-colors">{slideData[5].title}</a>
          <a href="#timeline" onClick={(e) => handleScroll(e, '#timeline')} className="hover:text-mit-red transition-colors">{slideData[6].title}</a>
          <a href="#next-steps" onClick={(e) => handleScroll(e, '#next-steps')} className="hover:text-mit-red transition-colors">{slideData[8].title}</a>
        </div>
        </>
      )}
      <button
        onClick={togglePresentationMode}
        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        title={isPresentationMode ? "Switch to scroll mode" : "Switch to presentation mode"}
      >
        {isPresentationMode ? <ScrollText size={24} /> : <Monitor size={24} />}
      </button>
    </nav>
  );
};