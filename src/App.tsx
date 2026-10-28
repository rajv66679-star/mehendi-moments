/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BookingEstimator } from './components/BookingEstimator';
import { StainCareGuide } from './components/StainCareGuide';
import { HyderabadCoverage } from './components/HyderabadCoverage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { QuickContactFloating } from './components/QuickContactFloating';
import { ServiceCategory } from './types';

function AppContent() {
  const [selectedService, setSelectedService] = useState<ServiceCategory>('bridal');

  const scrollToBooking = (service?: ServiceCategory) => {
    if (service) {
      setSelectedService(service);
    }
    const elem = document.getElementById('booking-calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const elem = document.getElementById('portfolio');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121414] text-[#F4F4F5]">
      {/* Navigation with Language Switcher */}
      <Navbar
        onBookDateClick={() => scrollToBooking()}
        onViewWorkClick={scrollToPortfolio}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookDateClick={() => scrollToBooking()}
          onViewWorkClick={scrollToPortfolio}
        />

        {/* Our Services Section */}
        <ServicesSection onSelectService={(sId) => scrollToBooking(sId)} />

        {/* Visual Work & Portfolio Gallery */}
        <PortfolioSection onSelectServiceForBooking={(sId) => scrollToBooking(sId)} />

        {/* Appointments - Book Your Date Calculator */}
        <BookingEstimator initialService={selectedService} />

        {/* Dark Stain Secrets Guide */}
        <StainCareGuide />

        {/* Hyderabad Home Service Coverage */}
        <HyderabadCoverage />

        {/* Client Reviews */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onBookDateClick={() => scrollToBooking()} />

      {/* Sticky Floating Quick Contact Actions */}
      <QuickContactFloating onBookDateClick={() => scrollToBooking()} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
