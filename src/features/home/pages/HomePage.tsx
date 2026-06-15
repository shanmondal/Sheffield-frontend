// src/features/home/pages/HomePage.tsx

import { useState } from 'react';

import { HeroSection } from '../sections/HeroSection';
import { CapabilitiesSection } from '../sections/CapabilitiesSection';
import { ContactCTASection } from '../sections/ContactCTASection';
import { QuoteModal } from '@/shared/componets/QuoteModal';
import { AboutSheffieldSection } from '../sections/AboutSheffieldSection';

export const HomePage = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />

      <CapabilitiesSection />
      <AboutSheffieldSection />
      <ContactCTASection />

     <QuoteModal
  isOpen={isQuoteOpen}
  onClose={() => setIsQuoteOpen(false)}
  source="homepage-hero"
/>
    </>
  );
};
