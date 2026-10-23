'use client';

import { useState } from 'react';
import GutReliefAnnouncement from '@/components/GutReliefAnnouncement';
import GutReliefHeader from '@/components/GutReliefHeader';
import GutReliefHero from '@/components/GutReliefHero';
import GutReliefPainPoints from '@/components/GutReliefPainPoints';
import GutReliefIngredients from '@/components/GutReliefIngredients';
import GutReliefComparison from '@/components/GutReliefComparison';
import GutReliefHowToUse from '@/components/GutReliefHowToUse';
import GutReliefReviews from '@/components/GutReliefReviews';
import GutReliefPricing from '@/components/GutReliefPricing';
import GutReliefCheckout from '@/components/GutReliefCheckout';
import GutReliefFaq from '@/components/GutReliefFaq';
import GutReliefFooter from '@/components/GutReliefFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import RecentOrderToast from '@/components/RecentOrderToast';

export default function Home() {
  // Default to pack-2 (the 2-bottle bundle, most profitable and requested)
  const [selectedPackId, setSelectedPackId] = useState<string>('pack-2');

  const scrollToCheckout = () => {
    const el = document.getElementById('order-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPack = (packId: string) => {
    setSelectedPackId(packId);
    scrollToCheckout();
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-900 selection:bg-[#0B3D2E] selection:text-white">
      {/* 1. Urgency & Moroccan Shipping Announcement */}
      <GutReliefAnnouncement />

      {/* 2. Official Balurix Brand Header with Logo */}
      <GutReliefHeader onOrderClick={scrollToCheckout} />

      {/* 3. Hero Section with 3-Angle Bottle Viewer */}
      <GutReliefHero onOrderClick={scrollToCheckout} />

      {/* 4. Digestive Pain Points Agitation */}
      <GutReliefPainPoints />

      {/* 5. Scientific Formulation & Active Ingredients from the Real Label */}
      <GutReliefIngredients />

      {/* 6. Comparison Table (Balurix vs. Chemical Laxatives / Others) */}
      <GutReliefComparison />

      {/* 7. How to Use & Official Precautions */}
      <GutReliefHowToUse />

      {/* 8. Real Moroccan Customer Reviews & Social Proof */}
      <GutReliefReviews />

      {/* 9. Value Pricing Packs (1, 2, or 3 bottles) */}
      <GutReliefPricing
        selectedPackId={selectedPackId}
        onSelectPack={handleSelectPack}
      />

      {/* 10. Moroccan COD Fast Checkout Form */}
      <GutReliefCheckout
        selectedPackId={selectedPackId}
        onSelectPack={setSelectedPackId}
      />

      {/* 11. Frequently Asked Questions */}
      <GutReliefFaq />

      {/* 12. Footer with Brand Values and Disclaimers */}
      <GutReliefFooter />

      {/* 13. Floating WhatsApp Support Button */}
      <FloatingWhatsApp />

      {/* 14. Real-time Order Social Proof Toast */}
      <RecentOrderToast />
    </main>
  );
}
