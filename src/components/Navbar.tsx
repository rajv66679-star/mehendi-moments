import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, Calendar } from 'lucide-react';
import { ARTIST_PHONE, DISPLAY_PHONE, getWhatsAppUrl } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  onBookDateClick: () => void;
  onViewWorkClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookDateClick, onViewWorkClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const whatsappUrl = getWhatsAppUrl(
    'Hello Mehendi Moments! I would like to inquire about Mehendi bookings in Hyderabad.'
  );

  return (
    <header className="sticky top-0 z-40 bg-[#141716]/95 backdrop-blur-md border-b border-[#1B4332]/50 shadow-md">
      {/* Top Banner Notice */}
      <div className="bg-[#0A0C0B] text-[#E4E4E7] text-xs py-1.5 px-3 sm:px-4 font-medium tracking-wide text-center flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-[#1B4332]/30">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#B91C1C] animate-pulse shrink-0" />
          <span className="text-[#F4F4F5]">{t.nav.topNotice}</span>
        </span>
        <span className="hidden md:inline text-[#2D6A4F]">•</span>
        <span className="hidden md:inline text-stone-300">{t.nav.homeServiceAvailable}</span>
        <span className="text-[#2D6A4F]">•</span>
        <a
          href={`tel:${ARTIST_PHONE}`}
          className="underline font-semibold text-[#DC2626] hover:text-[#EF4444] transition-colors flex items-center gap-1 shrink-0"
        >
          <Phone className="w-3 h-3 text-[#2D6A4F]" />
          {DISPLAY_PHONE}
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group focus:outline-hidden pr-2">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#990000] to-[#B91C1C] text-white flex items-center justify-center shadow-lg border border-[#2D6A4F] group-hover:scale-105 transition-transform shrink-0">
            <svg
              className="w-6 h-6 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C12.5 5 14 7 17 7.5C14 8 12.5 10 12 13C11.5 10 10 8 7 7.5C10 7 11.5 5 12 2ZM12 14C12.5 16.5 14 18 16.5 18.5C14 19 12.5 20.5 12 23C11.5 20.5 10 19 7.5 18.5C10 18 11.5 16.5 12 14ZM18 12C18.5 13.5 19.5 14.5 21 15C19.5 15.5 18.5 16.5 18 18C17.5 16.5 16.5 15.5 15 15C16.5 14.5 17.5 13.5 18 12ZM6 12C6.5 13.5 7.5 14.5 9 15C7.5 15.5 6.5 16.5 6 18C5.5 16.5 4.5 15.5 3 15C4.5 14.5 5.5 13.5 6 12Z" />
            </svg>
          </div>
          <div>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-display font-bold tracking-tight text-[#FFFFFF] leading-none whitespace-nowrap">
              Mehendi<span className="text-[#DC2626]">__</span>Moments
            </span>
            <span className="text-[11px] md:text-xs text-[#40916C] font-semibold tracking-wider flex items-center gap-1 mt-0.5 whitespace-nowrap">
              <MapPin className="w-3 h-3 text-[#2D6A4F]" />
              {t.nav.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6 text-sm font-semibold text-[#D4D4D8]">
          <a href="#services" className="hover:text-[#EF4444] transition-colors whitespace-nowrap">
            {t.nav.services}
          </a>
          <button
            onClick={onViewWorkClick}
            className="hover:text-[#EF4444] transition-colors cursor-pointer text-left whitespace-nowrap"
          >
            {t.nav.work}
          </button>
          <a href="#booking-calculator" className="hover:text-[#EF4444] transition-colors whitespace-nowrap">
            {t.nav.pricing}
          </a>
          <a href="#stain-guide" className="hover:text-[#40916C] transition-colors whitespace-nowrap">
            {t.nav.stainGuide}
          </a>
          <a href="#reviews" className="hover:text-[#EF4444] transition-colors whitespace-nowrap">
            {t.nav.reviews}
          </a>
        </div>

        {/* Action Buttons & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher in Navigation Bar */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>

          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${ARTIST_PHONE}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#F4F4F5] bg-[#1E2221] hover:bg-[#252A28] border border-[#2D6A4F]/60 transition-all"
              title="Call Mehendi Artist"
            >
              <Phone className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="hidden lg:inline">{t.nav.callNow}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#2D6A4F] border border-[#40916C]/40 shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#4ADE80]" />
              <span className="hidden lg:inline">{t.nav.whatsapp}</span>
            </a>

            <button
              onClick={onBookDateClick}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold text-white bg-[#B91C1C] hover:bg-[#991B1B] shadow-sm hover:shadow-md transition-all cursor-pointer border border-[#EF4444]/40 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>{t.nav.bookYourDate}</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#F4F4F5] hover:bg-[#1E2221] transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#DC2626]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#141716] border-b border-[#1B4332]/50 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Mobile Language Switcher (Full Variant) */}
          <div className="pb-3 border-b border-[#1B4332]/40">
            <LanguageSwitcher variant="full" />
          </div>

          <div className="flex flex-col space-y-2 text-base font-medium text-[#E4E4E7]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1E2221] text-[#EF4444] font-semibold"
            >
              {t.nav.services}
            </a>
            <button
              onClick={() => {
                onViewWorkClick();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#1E2221]"
            >
              {t.nav.work}
            </button>
            <a
              href="#booking-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1E2221]"
            >
              {t.nav.pricing}
            </a>
            <a
              href="#stain-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1E2221]"
            >
              {t.nav.stainGuide}
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1E2221]"
            >
              {t.nav.reviews}
            </a>
          </div>

          <div className="pt-3 border-t border-[#1B4332]/40 grid grid-cols-2 gap-2">
            <a
              href={`tel:${ARTIST_PHONE}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-[#F4F4F5] bg-[#1E2221] border border-[#2D6A4F]/60"
            >
              <Phone className="w-4 h-4 text-[#DC2626]" />
              {t.nav.callNow}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1B4332] border border-[#40916C]/40"
            >
              <MessageCircle className="w-4 h-4 text-[#4ADE80] fill-current" />
              {t.nav.whatsapp}
            </a>
          </div>

          <button
            onClick={() => {
              onBookDateClick();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-white bg-[#B91C1C] hover:bg-[#991B1B] shadow-sm flex items-center justify-center gap-2 border border-[#EF4444]/40 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white" />
            {t.nav.bookYourDate}
          </button>
        </div>
      )}
    </header>
  );
};
