"use client";
import React, { createContext, useContext, useState } from 'react';

type PresentationContextType = {
  isPresentationMode: boolean;
  togglePresentationMode: () => void;
};

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const PresentationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const togglePresentationMode = () => setIsPresentationMode(!isPresentationMode);

  return (
    <PresentationContext.Provider value={{ isPresentationMode, togglePresentationMode }}>
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentationMode = () => {
  const context = useContext(PresentationContext);
  if (context === undefined) {
    throw new Error('usePresentationMode must be used within a PresentationProvider');
  }
  return context;
};