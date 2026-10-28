import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/servicesData';
import { PortfolioItem, ServiceCategory } from '../types';
import { Eye, Sparkles, X, MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioSectionProps {
  onSelectServiceForBooking: (serviceId: ServiceCategory) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t.portfolio.filterAll },
    { id: 'bridal', label: `👰 ${t.portfolio.filterBridal}` },
    { id: 'khafif', label: `🌿 ${t.portfolio.filterKhafif}` },
    { id: 'guest', label: `💚 ${t.portfolio.filterGuest}` },
    { id: 'legs', label: `✨ ${t.portfolio.filterLegs}` },
    { id: 'bulk_event', label: `🌸 ${t.portfolio.filterBulk}` },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const getInquiryUrl = (item: PortfolioItem) => {
    const text = `Hello Mehendi Moments! I love your portfolio design "${item.title}" (${item.tag}). I would like to book this style for my upcoming function in Hyderabad.`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-[#141716] relative border-t border-[#1B4332]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A1E1D] text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-3 border border-[#DC2626]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EF4444]" />
            <span>{t.portfolio.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            {t.nav.work}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#2D6A4F] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-base sm:text-lg text-[#D4D4D8] font-medium">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#B91C1C] text-white shadow-md border border-[#EF4444]/40'
                  : 'bg-[#1E2221] text-[#D4D4D8] hover:bg-[#252A28] border border-[#2D6A4F]/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#181B1A] border border-[#2D6A4F]/40 shadow-md hover:shadow-2xl hover:border-[#DC2626]/60 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181B1A] via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Stain Level Badge */}
                <div className="absolute top-3 left-3 bg-[#B91C1C]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#EF4444]/40">
                  ❤️ {t.portfolio.stainGuarantee}: {item.stainLevel}
                </div>

                {/* Quick view button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#141716]/80 backdrop-blur-xs flex items-center justify-center text-[#4ADE80] border border-[#2D6A4F]/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Card Title & Info Overlaid */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4ADE80] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3.5 bg-[#141716] border-t border-[#2D6A4F]/30 flex items-center justify-between text-xs text-[#E4E4E7]">
                <span className="flex items-center gap-1 font-medium text-[#4ADE80]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {item.recommendedFor}
                </span>
                <span className="font-semibold text-[#EF4444] group-hover:underline flex items-center gap-1">
                  {t.nav.work} &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Selected Item */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#141716] text-[#F4F4F5] rounded-3xl overflow-hidden shadow-2xl border border-[#2D6A4F] animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-[#B91C1C] flex items-center justify-center transition-colors cursor-pointer border border-[#EF4444]/40"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-900">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141716] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4ADE80]">
                    {activeModalItem.tag}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {activeModalItem.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-[#D4D4D8] leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#1C1F1E] border border-[#2D6A4F]/40 text-xs text-[#E4E4E7]">
                  <div>
                    <span className="text-stone-400 block">{t.portfolio.stainGuarantee}:</span>
                    <span className="font-bold text-[#EF4444]">❤️ {activeModalItem.stainLevel} (Natural)</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Ideal For:</span>
                    <span className="font-bold text-[#4ADE80]">{activeModalItem.recommendedFor}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={getInquiryUrl(activeModalItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#1B4332] hover:bg-[#2D6A4F] border border-[#40916C]/40 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#4ADE80] fill-current" />
                    <span>{t.portfolio.inquireThisDesign}</span>
                  </a>

                  <button
                    onClick={() => {
                      onSelectServiceForBooking(activeModalItem.category);
                      setActiveModalItem(null);
                    }}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#B91C1C] hover:bg-[#991B1B] border border-[#EF4444]/40 transition-colors cursor-pointer"
                  >
                    {t.portfolio.bookDateWithDesign}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
