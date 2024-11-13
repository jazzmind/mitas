import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Modal } from '@/components/Modal';
import { renderSlide } from './Slides';
import { slideData } from '@/data/pitchDeckContent';
import { logEvent } from '@/utils/tracking'; // Import tracking utility
import { usePresentationMode } from '@/contexts/PresentationContext';
import { Navigation } from './Navigation';
import { ScrollView } from './ScrollView';

const PitchDeck = () => {
  const { isPresentationMode } = usePresentationMode();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showElements, setShowElements] = useState(true);
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);
  const [autoExpandIntro, setAutoExpandIntro] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    setShowElements(false);
    const timer = setTimeout(() => setShowElements(true), 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    logEvent('Slide Viewed', { slideIndex: currentSlide, slideTitle: slideData[currentSlide].title });
    setStartTime(Date.now());
  }, [currentSlide]);

  const handleSlideChange = (direction: 'next' | 'prev') => {
    const endTime = Date.now();
    const timeSpent = endTime - startTime;
    logEvent('Time Spent on Slide', { slideIndex: currentSlide, timeSpent });

    if (direction === 'prev') {
      setShowElements(false);
      setAutoExpandIntro(false);
      setTimeout(() => {
        setCurrentSlide(prev => (prev - 1 + slideData.length) % slideData.length);
      }, 300);
      return;
    }

    // Handle next button click
    // if (currentSlide === 0 && !autoExpandIntro) {
    //   setAutoExpandIntro(true)  ;
    //   return;
    // }

    // Normal slide advancement
    setShowElements(false);
    setAutoExpandIntro(false);
    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % slideData.length);
    }, 300);
  };

  if (!isPresentationMode) {
    return (
      <>
        <Navigation />
        <ScrollView />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="nodark min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 md:p-8">
            <AnimatedSection show={showElements}>
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/mit_logo.png"
                    alt="MIT Logo"
                    width={120}
                    height={60}
                    className=""
                    priority
                  />
                </div>
                <Image
                  src="/mitas-logo.png"
                  alt="MITAS Logo"
                  width={250}
                  height={60}
                  className=""
                  priority
                />
              </div>
            </AnimatedSection>
            
            <div className="min-h-[500px]">
              {renderSlide(currentSlide, { 
                showElements, 
                setModalContent, 
                autoExpand: autoExpandIntro,
                onAllFeaturesShown: () => handleSlideChange('next')
              })}
            </div>

            <AnimatedSection show={showElements}>
              <div className="flex justify-between items-center mt-8 pt-8 border-t">
                <div className="w-1/3 flex justify-center">
                <Image
                    src="/mitalum-logo.png"
                    alt="MIT Alumni Logo"
                    width={100}
                    height={40}
                    className=""
                  />
                </div>
                <div className="w-1/3 flex justify-center">

                  <Image
                    src="/founders-circles-logo.png"
                    alt="Founders Circles Logo"
                    width={100}
                    height={40}
                    className=""
                  />
                </div>
                <div className="w-1/3 flex justify-center">
                <div className="text-sm text-gray-500">
                    {currentSlide + 1} / {slideData.length}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleSlideChange('prev')}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={24} className={currentSlide === 0 ? "text-gray-300" : "text-[#A31F34]"} />
              </button>
              
              <button
                onClick={() => handleSlideChange('next')}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={currentSlide === slideData.length - 1}
              >
                <ChevronRight size={24} className={currentSlide === slideData.length - 1 ? "text-gray-300" : "text-[#A31F34]"} />
              </button>
            </div>
          </div>
        </div>
        
        {modalContent && (
          <Modal content={modalContent} onClose={() => setModalContent(null)} />
        )}
      </div>
    </>
  );
};

export default PitchDeck;