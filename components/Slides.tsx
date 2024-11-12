import React, { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { slideData } from '@/data/pitchDeckContent';
import { SlideProps } from '@/data/types';
import * as Icons from 'lucide-react';

// Create a separate component for the first slide to handle its state
const IntroSlide = ({ slide, props }: { slide: any; props: SlideProps }) => {
  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-8" ref={slideRef}>
      <AnimatedSection show={props.showElements}>
      <div className="relative h-[200px]">
        <div className="flex flex-col justify-center space-x-8 items-center h-full">
          <h1 className={`text-6xl font-bold ${props.isScrollView ? 'text-mit-red drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]' : 'text-mit-red'} mb-8 text-center`}>{slideData[0].title}</h1>
          <div className="text-center space-y-4 relative">
            <h1 className={`text-4xl font-bold ${props.isScrollView ? 'text-white  drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]' : 'text-mit-red'}`}>
              {slide.subtitle}
            </h1>
            <p className={`text-xl my-5  ${props.isScrollView ? 'text-white  drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' : 'text-black'} font-medium`}>
              {slide.description}
            </p>
          </div>
        </div>
      </div>
      </AnimatedSection>

      {props.isScrollView && (
      <AnimatedSection show={props.showElements}>
      <div className="relative h-[200px]">
      <div className="flex justify-center space-x-8 items-center h-full"> 
      <div className="my-5 grid grid-cols-3 gap-6" >
        {slide.actions.map((action: any, i: number) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => props.setModalContent({
              title: action.title,
              content: (
                <div>
                  <p>{action.description}</p>
                  <p className="mt-4 text-mit-red">Click to continue →</p>
                </div>
              )
            })}
          >
            <h3 className="font-semibold text-mit-red mb-2">{action.title}</h3>
            <p className="text-sm">{action.description}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
    </AnimatedSection>
    )}

     {!props.isScrollView && (
      <AnimatedSection show={props.showElements} delay={200}>
        <div className="relative h-[250px] transition-all duration-500">
          <div className="flex justify-center space-x-8 items-center h-full">
            {slide.features.map((feature: any, i: number) => {
              const Icon = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
              
              return (
                <div
                  key={i}
                  className={`
                    transition-all duration-500 ease-in-out 
                    bg-white rounded-lg shadow-md 
                    cursor-pointer hover:shadow-lg
                  `}
                >
                  <div className={`
                    p-6 h-full flex flex-col
                  `}>
                    <Icon 
                      className={`
                        text-mit-red mb-4 transition-all
                      `}
                    />
                    <h3 className={`
                      font-semibold mb-2 transition-all
                    `}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
      )}
    </div>
  );
};

const renderOverview = (slide: any, props: SlideProps) => {
  return (
    <div className="space-y-8">
      <h2 className={`text-4xl font-bold mb-16 ${props.isScrollView ? 'text-black' : 'text-mit-red'} text-center`}>{slide.title} Overview</h2>

      <AnimatedSection show={props.showElements} delay={200}>
      <div className="relative h-[400px] transition-all duration-500">
        <div className="flex justify-center space-x-8 items-center h-full">
          {slide.features.map((feature: any, i: number) => {
            const Icon = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
            
            return (
              <div
                key={i}
                className={`
                  transition-all duration-500 ease-in-out 
                  bg-white rounded-lg shadow-md 
                  w-[600px] h-[350px] z-10
                  cursor-pointer hover:shadow-lg
                `}
              >
                <div className={`
                  p-6 h-full flex flex-col
                  items-start text-left
                `}>
                  <Icon 
                    className={`
                      text-mit-red mb-4 transition-all
                      w-12 h-12
                    `}
                  />
                  <h3 className={`
                    font-semibold mb-2 transition-all
                    text-xl
                  `}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                  <AnimatedSection show={true} delay={100}>
                    <div className="space-y-4 mt-4">
                      <h4 className="font-semibold text-mit-red">{feature.modal.title}</h4>
                      <ul className="space-y-2">
                        {feature.modal.bullets.map((bullet: string, j: number) => (
                          <li key={j} className="flex items-center">
                            <Icons.ArrowRight className="text-mit-red mr-2" size={16} />
                            <span dangerouslySetInnerHTML={{ __html: bullet }}></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
    </div>
  )
} 


const renderStats = (slide: any, props: SlideProps) => {
  // Handle Partnership Network slide differently
  if (slide.partnerships) {
    return (
      <div className="space-y-8">
      <h2 className={`text-4xl font-bold mb-16 ${props.isScrollView ? 'text-black' : 'text-mit-red'} text-center`}>{slide.title}</h2>

        <AnimatedSection show={props.showElements}>
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(slide.partnerships).map(([key, items], i) => (
              <div key={key} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-mit-red mb-4 capitalize">{key}</h3>
                <ul className="space-y-2">
                  {(items as string[]).map((item, j) => (
                    <li key={j} className="flex items-center">
                      <Icons.ArrowRight className="text-mit-red mr-2" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        <AnimatedSection show={props.showElements} delay={200}>
          <div className="grid grid-cols-4 gap-4">
            {slide.highlights.map((highlight: string, i: number) => (
              <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-sm text-mit-red">{highlight}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    );
  }

  // Original stats rendering for other slides
  return (
    <div className="space-y-6">
      <h2 className={`text-4xl font-bold mb-16 ${props.isScrollView ? 'text-white' : 'text-mit-red'} text-center`}>{slide.title}</h2>

      {slide.sections?.map((section: any, i: number) => (
        <AnimatedSection key={i} show={props.showElements} delay={i * 200}>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-mit-red mb-4">{section.title}</h3>
            {section.stats ? (
              <div className="grid grid-cols-3 gap-4">
                {section.stats.map((stat: any, j: number) => (
                  <div key={j} className="text-center">
                    <div className="text-2xl font-bold text-mit-red">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {section.bullets.map((bullet: string, j: number) => (
                  <li key={j} className="flex items-center">
                    <Icons.ArrowRight className="text-mit-red mr-2" size={16} />
                    <span dangerouslySetInnerHTML={{ __html: bullet }}></span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

const renderTimeline = (slide: any, props: SlideProps) => (
  <div className="space-y-8">
    <h2 className={`text-4xl font-bold mb-16 ${props.isScrollView ? 'text-black' : 'text-black'} text-center`}>{slide.title}</h2>

    <AnimatedSection show={props.showElements}>
      <div className="relative pb-8">
        <div className="h-1 bg-mit-red/20 absolute w-full top-5"></div>
        <div className="grid grid-cols-4 gap-4 relative">
          {slide.phases.map((phase: TimelinePhase, i: number) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 bg-mit-red rounded-full mx-auto mb-3 flex items-center justify-center text-white font-semibold">
                {i + 1}
              </div>
              <h4 className="font-semibold mb-1">{phase.phase}</h4>
              <p className="text-xs mt-2 max-w-[150px] mx-auto">{phase.details}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection show={props.showElements} delay={300}>
      <div className="grid grid-cols-4 gap-4 mt-8">
      {slide.phases.map((phase: TimelinePhase, i: number) => (
          <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="text-sm text-mit-red font-medium">{phase.duration}</span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </div>
);

const renderCandidateProfile = (slide: any, props: SlideProps) => (
  <div className="space-y-8">
    <h2 className={`text-4xl font-bold mb-16 ${props.isScrollView ? 'text-black' : 'text-mit-red'} text-center`}>{slide.title}</h2>

    <AnimatedSection show={props.showElements}>
      <div className="grid grid-cols-2 gap-8">
        {Object.entries(slide.criteria).map(([key, criteria]: [string, any], i) => (
          <div key={key} className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4 text-mit-red capitalize">{key}</h4>
            <ul className="space-y-2">
              {criteria.map((criterion: string, j: number) => (
                <li key={j} className="flex items-center">
                  <Icons.ArrowRight className="text-mit-red mr-2" size={16} />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
    <AnimatedSection show={props.showElements} delay={200}>
      <div className="grid grid-cols-4 gap-4">
        {slide.successMetrics.map((metric: string, i: number) => (
          <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="text-sm">{metric}</span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </div>
);

const renderProgram = (slide: any, props: SlideProps) => (
  <div className="space-y-8">
    <h2 className={`text-4xl font-bold mb-16 ${props.isScrollView ? 'text-white' : 'text-mit-red'} text-center`}>{slide.title}</h2>

    <AnimatedSection show={props.showElements}>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-mit-red mb-4">{slide.stats.title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {slide.stats.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center p-4">
                <div className="text-2xl font-bold text-mit-red">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-mit-red mb-4">Key Initiatives</h3>
          <ul className="space-y-2">
            {slide.initiatives.map((initiative: string, i: number) => (
              <li key={i} className="flex items-center">
                <Icons.ArrowRight className="text-mit-red mr-2" size={16} />
                <span>{initiative}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  </div>
);

const renderNextSteps = (slide: any, props: SlideProps) => (
  <div className="space-y-8">
    <h2 className={`text-4xl font-bold mb-16 ${props.isScrollView ? 'text-white' : 'text-mit-red'} text-center`}>{slide.title}</h2>

    <AnimatedSection show={props.showElements}>
      <div className="grid grid-cols-3 gap-6">
        {slide.actions.map((action: any, i: number) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => props.setModalContent({
              title: action.title,
              content: (
                <div>
                  <p>{action.description}</p>
                  <p className="mt-4 text-mit-red">Click to continue →</p>
                </div>
              )
            })}
          >
            <h3 className="font-semibold text-mit-red mb-2">{action.title}</h3>
            <p className="text-sm">{action.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
    <AnimatedSection show={props.showElements} delay={200}>
      <div className={`${props.isScrollView ? 'bg-white' : 'bg-mit-red/5'}  p-6 rounded-lg`}>
        <h3 className="font-semibold text-mit-red mb-4">Important Dates</h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(slide.timeline).map(([key, value]: [string, any], i) => (
            <div key={key} className="text-center">
              <div className="font-semibold text-mit-red">{value}</div>
              <div className="text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export const renderSlide = (slideIndex: number, props: SlideProps) => {
  let slide = slideData[slideIndex];
  
  switch (slideIndex) {
    case 0:
      return <IntroSlide slide={slide} props={props} />;
    case 1:
      return renderStats(slide, props);
    case 2:
      slide = slideData[0];
      return renderOverview(slide, props);
    case 3:
      return renderStats(slide, props);
    case 4:
      return renderCandidateProfile(slide, props);
    case 5:
      return renderStats(slide, props); // Partnership network uses same layout
    case 6:
      return renderTimeline(slide, props);
    case 7:
      return renderProgram(slide, props);
    case 8:
      return renderNextSteps(slide, props);
    default:
      return null;
  }
};