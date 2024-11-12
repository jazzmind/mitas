export interface Stat {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  role: string;
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  details: string;
}

export interface SlideProps {
  showElements: boolean;
  setModalContent: (content: {
    title: string;
    content: React.ReactNode;
  } | null) => void;
  autoExpand?: boolean;
  onAllFeaturesShown?: () => void;
  isScrollView?: boolean;
}

export interface Slide {
  title: string;
  content: (props: SlideProps) => React.ReactNode;
}