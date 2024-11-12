
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
export const logEvent = (eventName: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    if (eventName === 'slide_viewed' && params.slideTitle) {
      window.gtag('event', eventName, {
        ...params,
        page_path: params.slideTitle,
      });
    } else {
      window.gtag('event', eventName, params);
    }
  } else {
    console.log('Event:', eventName, params);
  }
};