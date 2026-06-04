// src/features/home/pages/HomePage.tsx

import { useState } from "react";

import { HeroSection } from "../sections/HeroSection";
import { CapabilitiesSection } from "../sections/CapabilitiesSection";
import { ContactCTASection } from "../sections/ContactCTASection";
import { QuoteModal } from "@/shared/componets/QuoteModal";



export const HomePage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <HeroSection
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      <CapabilitiesSection />

      <ContactCTASection />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};