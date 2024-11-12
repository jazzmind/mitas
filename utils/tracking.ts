
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const logEvent = (eventName: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    console.log('Event:', eventName, params);
  }
};