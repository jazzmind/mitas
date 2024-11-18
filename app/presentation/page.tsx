
"use client";
import dynamic from "next/dynamic";

const PitchDeck = dynamic(() => import("../../components/PitchDeck"), {
  ssr: false,
});

export default function PresentationMode() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <PitchDeck presentationMode={true} />
    </div>
  );
}