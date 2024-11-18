"use client";
import dynamic from "next/dynamic";

const PitchDeck = dynamic(() => import("../components/PitchDeck"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <PitchDeck presentationMode={false} />
    </div>
  );
}
