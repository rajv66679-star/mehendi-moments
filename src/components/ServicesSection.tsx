import React from 'react';
import { MEHENDI_SERVICES } from '../data/servicesData';
import { ServiceCategory } from '../types';
import { Sparkles, Check, ArrowRight, Info, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceCategory) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  const getServiceLocalizedTitle = (id: ServiceCategory, fallback: string) => {
    switch (id) {
      case 'bridal':
        return t.services.bridalTitle;
      case 'guest':
        return t.services.guestTitle;
      case 'khafif':
        return t.services.khafifTitle;
      case 'legs':
        return t.services.legsTitle;
      case 'bulk_event':
        return t.services.bulkTitle;
      default:
        return fallback;
    }
  };

  const getServiceLocalizedTag = (id: ServiceCategory, fallback: string) => {
    switch (id) {
      case 'bridal':
        return t.services.bridalTag;
      case 'guest':
        return t.services.guestTag;
      case 'khafif':
        return t.services.khafifTag;
      case 'legs':
        return t.services.legsTag;
      case 'bulk_event':
        return t.services.bulkTag;
      default:
        return fallback;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#121414] relative border-t border-[#1B4332]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A1E1D] text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-3 border border-[#DC2626]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EF4444]" />
            <span>{t.services.includedPerks}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-lg sm:text-xl text-[#D4D4D8] font-medium leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEHENDI_SERVICES.map((service) => {
            const isFeatured = service.id === 'bridal';
            const isBulk = service.id === 'bulk_event';
            const localizedTitle = getServiceLocalizedTitle(service.id, service.title);
            const localizedTag = getServiceLocalizedTag(service.id, service.tagline);

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl overflow-hidden bg-[#181B1A] border transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-red-950/20 ${
                  isFeatured
                    ? 'border-[#DC2626] shadow-xl ring-1 ring-[#DC2626]/50 lg:scale-[1.02]'
                    : isBulk
                    ? 'border-[#2D6A4F] shadow-md md:col-span-2 lg:col-span-2'
                    : 'border-[#2D6A4F]/40 shadow-md'
                }`}
              >
                {/* Header Tag / Badge */}
                {service.badge && (
                  <div
                    className={`absolute top-3 right-3 z-10 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
                      isFeatured
                        ? 'bg-[#B91C1C] text-white border border-[#EF4444]/40'
                        : isBulk
                        ? 'bg-[#1B4332] text-[#4ADE80] border border-[#2D6A4F]'
                        : 'bg-[#1E2221] text-[#E4E4E7] border border-[#2D6A4F]/60'
                    }`}
                  >
                    {service.badge}
                  </div>
                )}

                {/* Service Card Image */}
                <div className={`relative w-full overflow-hidden ${isBulk ? 'h-52 sm:h-64' : 'h-48'}`}>
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} by Mehendi Moments Hyderabad`}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181B1A] via-black/35 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{service.emoji}</span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white drop-shadow-md">
                        {localizedTitle}
                      </h3>
                    </div>
                    <p className="text-xs text-[#4ADE80] font-semibold tracking-wide mt-0.5">
                      {localizedTag}
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-sm text-[#D4D4D8] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Accepted Events List */}
                    {service.acceptedEvents && (
                      <div className="p-4 rounded-xl bg-[#131615] border border-[#2D6A4F]/50 space-y-2.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#EF4444] flex items-center gap-1.5">
                          <span>🌸 {t.hero.titleCity} Celebrations:</span>
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#E4E4E7]">
                          {service.acceptedEvents.map((evt, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <span>{evt}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-[#2D6A4F]/40 flex items-center gap-2 text-xs text-[#4ADE80] font-semibold">
                          <Sparkles className="w-3.5 h-3.5 text-[#EF4444]" />
                          <span>*{t.services.allPackagesInclude}*</span>
                        </div>
                      </div>
                    )}

                    {/* Key features bullets */}
                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#EF4444]">
                        {t.services.includedPerks}:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                        {service.features.slice(0, isBulk ? 4 : 3).map((feat, fidx) => (
                          <li key={fidx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
                            <span className="text-[#D4D4D8]">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing Box & CTA */}
                  <div className="pt-4 border-t border-[#2D6A4F]/30 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-[#A1A1AA] uppercase tracking-wider font-semibold block">
                          {t.services.startingFrom}
                        </span>
                        <span className="text-2xl font-bold font-display text-[#EF4444]">
                          ₹{service.startingPrice.toFixed(2)}
                          {service.id === 'guest' ? (
                            <span className="text-xs font-sans text-[#A1A1AA] font-normal ml-1">
                              ({t.booking.perSide})
                            </span>
                          ) : null}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#4ADE80] bg-[#1B4332]/50 px-2 py-0.5 rounded-md border border-[#2D6A4F]/60">
                        {t.nav.tagline}
                      </span>
                    </div>

                    {/* Pricing disclaimer note */}
                    {service.id === 'bulk_event' && (
                      <p className="text-[11px] text-[#D4D4D8] italic flex items-start gap-1 bg-[#1A1314] p-2 rounded-lg border border-[#DC2626]/40">
                        <Info className="w-3.5 h-3.5 text-[#EF4444] shrink-0 mt-0.5" />
                        <span>
                          *₹75 {t.booking.perSide} applies to bulk/Event Bookings only. {t.booking.homeServiceNote}.*
                        </span>
                      </p>
                    )}

                    <button
                      onClick={() => onSelectService(service.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isFeatured
                          ? 'bg-[#B91C1C] hover:bg-[#991B1B] text-white shadow-md border border-[#EF4444]/40'
                          : 'bg-[#1E2221] hover:bg-[#B91C1C] text-[#E4E4E7] hover:text-white border border-[#2D6A4F]/60 hover:border-[#EF4444]/40'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t.services.bookService}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
