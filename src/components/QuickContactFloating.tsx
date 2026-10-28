import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { ARTIST_PHONE, DISPLAY_PHONE, getWhatsAppUrl } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';

interface QuickContactFloatingProps {
  onBookDateClick: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = () => {
  const { t } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(
    'Hello Mehendi Moments! I would like to book my mehendi date in Hyderabad.'
  );

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Quick Floating Pill in Forest Green */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#1B4332] text-white shadow-xl hover:shadow-2xl hover:bg-[#2D6A4F] border border-[#40916C]/60 transition-all transform hover:scale-105"
        aria-label="Book on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current text-[#4ADE80]" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          {t.floating.whatsapp}
        </span>
      </a>

      {/* Floating Call Pill in Crimson Red */}
      <a
        href={`tel:${ARTIST_PHONE}`}
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#B91C1C] text-white shadow-xl hover:shadow-2xl hover:bg-[#991B1B] border border-[#EF4444]/50 transition-all transform hover:scale-105"
        aria-label={`Call Mehendi Artist at ${DISPLAY_PHONE}`}
      >
        <Phone className="w-5 h-5 animate-pulse text-white" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          {t.floating.call} {DISPLAY_PHONE}
        </span>
      </a>
    </div>
  );
};
