import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.('config', 'G-BNQNGL6ZQ4', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
}