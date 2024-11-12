"use client";
import dynamic from "next/dynamic";

// Disable SSR for the PitchDeck component to ensure client-side animations work properly
const PitchDeck = dynamic(() => import("../components/PitchDeck"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <PitchDeck />

    </div>
  );
}
