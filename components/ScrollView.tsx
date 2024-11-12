import React from 'react';
import { slideData } from '@/data/pitchDeckContent';
import { renderSlide } from './Slides';
import Image from 'next/image';

export const ScrollView = () => {
  return (
    <div className="min-h-screen">
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
          {renderSlide(0, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>

      {/* Stats Section */}
      <section id="opportunity" className="py-32 bg-gradient-to-br from-mit-red to-red-900">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(1, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>

      {/* Program Overview */}
      <section id="overview" className="py-32 bg-grey-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/circuit-pattern.png" alt="Circuit Pattern" fill className="object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          {renderSlide(2, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>

      {/* Candidate Profile */}
      <section id="program" className="py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(3, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>

      {/* Partnership Network */}
      <section id="candidates" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(4, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>

      {/* Timeline */}
      <section id="partnerships" className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(5, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>

      {/* Foundation */}
      <section id="timeline" className="py-32 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <Image src="/grid-pattern.png" alt="Grid Pattern" fill className="object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          {renderSlide(6, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>

     {/* Next Steps */}
      <section id="next-steps" className="py-32 bg-gradient-to-br from-mit-red to-red-900">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(8, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>

  
      {/* MITAS */}
      <section id="mitas" className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          {renderSlide(7, { showElements: true, isScrollView: true, setModalContent: () => {}, autoExpand: false })}
        </div>
      </section>


    </div>
  );
};