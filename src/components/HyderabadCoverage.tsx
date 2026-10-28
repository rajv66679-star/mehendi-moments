import React from 'react';
import { HYDERABAD_AREAS } from '../data/servicesData';
import { MapPin, Home, CheckCircle2, Phone } from 'lucide-react';
import { ARTIST_PHONE, DISPLAY_PHONE } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';

export const HyderabadCoverage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-14 bg-[#121414] border-t border-[#1B4332]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181B1A] rounded-3xl p-8 border border-[#2D6A4F]/60 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4332]/40 text-[#4ADE80] text-xs font-bold uppercase tracking-wider border border-[#2D6A4F]/60">
                <Home className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>{t.coverage.title}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {t.coverage.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                {t.coverage.subtitle} {t.coverage.travelGuarantee}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${ARTIST_PHONE}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#EF4444] bg-[#141716] border border-[#DC2626]/60 hover:bg-[#251819] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EF4444]" />
                  <span>{t.nav.callNow}: {DISPLAY_PHONE}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-wider text-[#EF4444] mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>{t.coverage.zonesTitle}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {HYDERABAD_AREAS.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#141716] border border-[#2D6A4F]/40 text-xs font-medium text-[#E4E4E7] shadow-xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#4ADE80]" />
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-stone-400 italic mt-3">
                *{t.booking.freeTravelNote}*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
