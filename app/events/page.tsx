"use client";
import { events, suggestForm } from '@/data/events';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';

export default function Events() {
  const [expandedEventIndex, setExpandedEventIndex] = useState<number | null>(null);
  
  const togglePresentationMode = () => {
    window.location.href = '/presentation';
  };

  const toggleExpand = (index: number) => {
    setExpandedEventIndex(expandedEventIndex === index ? null : index);
  };

  return (
    <>
      <Navigation presentationMode={false} togglePresentationMode={togglePresentationMode} />
      <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        <div className="min-h-screen bg-[#f5f5f5] p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/" className="hover:opacity-80">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-3xl font-bold">Upcoming Events</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {event.leadImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={event.leadImage}
                        alt={event.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                    <div className="text-gray-600 mb-4">
                      <p>{event.date}</p>
                      <p>{event.startTime} - {event.endTime}</p>
                      <p className="capitalize">{event.location}</p>
                    </div>
                    {event.speakers.length > 0 && (
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">Speakers:</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {event.speakers.map((speaker, idx) => (
                            <li key={idx}>{speaker}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mb-4">
                      <p className={`text-gray-600 ${expandedEventIndex === index ? '' : 'line-clamp-3'}`}>
                        {event.description}
                      </p>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-2 text-mit-red flex items-center gap-1 hover:opacity-80 transition-opacity"
                      >
                        {expandedEventIndex === index ? (
                          <>Show Less <ChevronUp size={16} /></>
                        ) : (
                          <>Read More <ChevronDown size={16} /></>
                        )}
                      </button>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <a
                        href={event.registrationForm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-mit-red text-white text-center px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Register for Event
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href={suggestForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-mit-red border-2 border-mit-red px-6 py-3 rounded-lg hover:bg-red-50 transition-colors"
              >
                Suggest an Event or Speaker
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
