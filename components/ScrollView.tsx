import React, { useEffect } from 'react';
import { renderSlide } from './Slides';
import Image from 'next/image';
import { logEvent } from '@/utils/tracking';

const sections = [
  { id: 'intro', title: 'Intro' },
  { id: 'opportunity', title: 'Opportunity' },
  { id: 'overview', title: 'Overview' },
  { id: 'program', title: 'Program' },
  { id: 'candidates', title: 'Candidates' },
  { id: 'partnerships', title: 'Partnerships' },
  { id: 'timeline', title: 'Timeline' },
  { id: 'next-steps', title: 'Next Steps' },
  { id: 'mitas', title: 'MITAS' },
];

export const ScrollView = () => {
  const commonProps = { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (scrollPosition >= rect.top + window.scrollY && scrollPosition < rect.bottom + window.scrollY) {
            logEvent('section_view', { section: section.title });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-16 md:pt-0"> {/* Add top padding for fixed nav */}
      {/* Hero Section */}
      <section id="intro" className="relative h-screen">
        <div className="absolute inset-0 bg-white/10 z-10" /> {/* Dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="/mit-dome.png"
            alt="MIT Dome"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        <div className="relative z-20 max-w-6xl mx-auto pt-32 px-4">
          {renderSlide(0, commonProps)}
        </div>
      </section>

      {/* Stats Section */}
      <section id="opportunity" className="py-16 md:py-32 bg-gradient-to-br from-mit-red to-red-900">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(1, commonProps)}
        </div>
      </section>

      {/* Program Overview */}
      <section id="overview" className="py-16 md:py-32 bg-gray-50 dark:bg-gray-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/circuit-pattern.png" alt="Circuit Pattern" fill className="object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          {renderSlide(2, commonProps)}
        </div>
      </section>

      {/* Candidate Profile */}
      <section id="program" className="py-16 md:py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(3, commonProps)}
        </div>
      </section>

      {/* Partnership Network */}
      <section id="candidates" className="py-16 md:py-32 dark:bg-gray-400  ">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(4, commonProps)}
        </div>
      </section>

      {/* Timeline */}
      <section id="partnerships" className="py-16 md:py-32 bg-mit-red dark:bg-mit-red">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(5, commonProps)}
        </div>
      </section>

      {/* Foundation */}
      <section id="timeline" className="py-16 md:py-32 bg-white dark:bg-gray-400 relative">
        <div className="absolute inset-0 opacity-5">
          <Image src="/grid-pattern.png" alt="Grid Pattern" fill className="object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          {renderSlide(6, commonProps)}
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="py-16 md:py-32 bg-gradient-to-br from-mit-red to-red-900">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(8, commonProps)}
        </div>
      </section>

      {/* MITAS */}
      <section id="mitas" className="py-16 md:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(7, commonProps)}
        </div>
      </section>
    </div>
  );
};