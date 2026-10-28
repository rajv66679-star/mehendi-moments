import React from 'react';
import { Sparkles, Calendar, Eye, Phone, MessageCircle, MapPin, Home, Users, CheckCircle2 } from 'lucide-react';
import { ARTIST_PHONE, DISPLAY_PHONE, getWhatsAppUrl } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';
import bridalHeroImg from '../assets/images/bridal_mehendi_hd_1793127335817.jpg';

interface HeroProps {
  onBookDateClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDateClick, onViewWorkClick }) => {
  const { t } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(
    'Hello Mehendi Moments! I saw your website and would like to check availability and book my mehendi date.'
  );

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#121414] via-[#181B1A] to-[#121414]">
      {/* Decorative Traditional Mandala Background Accents in Forest Green & Crimson */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 opacity-15 pointer-events-none text-[#DC2626]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M100 0 L105 50 L100 100 L95 50 Z" />
          <path d="M100 100 L105 150 L100 200 L95 150 Z" />
          <path d="M0 100 L50 105 L100 100 L50 95 Z" />
          <path d="M100 100 L150 105 L200 100 L150 95 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 opacity-15 pointer-events-none text-[#2D6A4F]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Quote, Tags & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Page Name Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1E1D] border border-[#DC2626]/40 text-[#EF4444] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-[#EF4444]" />
              <span>{t.hero.brandTag}</span>
            </div>

            {/* Caption Header */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tight">
                {t.hero.titleMain} <span className="text-[#DC2626] block sm:inline">{t.hero.titleCity}</span>
              </h1>
            </div>

            {/* Highlighted Quote from prompt */}
            <div className="relative pl-0 lg:pl-5 border-l-0 lg:border-l-4 border-[#2D6A4F] py-2 bg-[#171A19]/60 rounded-r-xl p-3">
              <p className="text-lg sm:text-xl font-display italic text-[#E4E4E7] font-medium leading-relaxed">
                {t.hero.quote}
              </p>
            </div>

            {/* Bullet/Pill Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 pb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E2221] text-[#E4E4E7] text-xs sm:text-sm font-semibold border border-[#2D6A4F]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
                {t.hero.titleMain}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E2221] text-[#E4E4E7] text-xs sm:text-sm font-semibold border border-[#2D6A4F]/40">
                <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" />
                {t.hero.titleCity}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B4332]/35 text-[#4ADE80] text-xs sm:text-sm font-semibold border border-[#2D6A4F]/70">
                <Home className="w-3.5 h-3.5 text-[#4ADE80]" />
                {t.hero.badgeHomeService}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2A1416] text-[#FCA5A5] text-xs sm:text-sm font-semibold border border-[#DC2626]/40">
                <Users className="w-3.5 h-3.5 text-[#EF4444]" />
                {t.services.bulkTag}
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onBookDateClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm sm:text-base text-white bg-[#B91C1C] hover:bg-[#991B1B] shadow-lg hover:shadow-red-900/40 border border-[#EF4444]/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>{t.nav.bookYourDate}</span>
              </button>

              <button
                onClick={onViewWorkClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold tracking-wide text-sm sm:text-base text-[#4ADE80] bg-[#171A19] hover:bg-[#1B4332]/40 border-2 border-[#2D6A4F] shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-5 h-5 text-[#4ADE80]" />
                <span>{t.nav.work}</span>
              </button>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-[#A1A1AA]">
              <span className="font-medium text-stone-300">Direct Inquiry:</span>
              <a
                href={`tel:${ARTIST_PHONE}`}
                className="font-bold text-[#EF4444] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#EF4444]" />
                {t.hero.callArtist} {DISPLAY_PHONE}
              </a>
              <span className="text-[#2D6A4F]">•</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#4ADE80] hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current text-[#4ADE80]" />
                {t.hero.whatsappInquire}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Signature Artwork Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#1B4332] via-[#DC2626]/50 to-[#2D6A4F] opacity-35 blur-md" />

              <div className="relative rounded-2xl overflow-hidden bg-[#1A1D1C] shadow-2xl border border-[#2D6A4F]/60">
                <div className="relative h-80 sm:h-96 w-full">
                  <img
                    src={bridalHeroImg}
                    alt="Bridal Mehendi Art in Hyderabad - Mehendi Moments"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-black/30 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 bg-[#1B4332]/95 backdrop-blur-xs text-[#E8F5E9] px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[#4ADE80]/40 shadow-xs">
                    🌿 {t.hero.badgeOrganic}
                  </div>

                  <div className="absolute top-4 right-4 bg-[#B91C1C]/95 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[#EF4444]/40 shadow-xs">
                    ❤️ {t.portfolio.stainGuarantee}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#4ADE80] font-bold">
                      {t.services.bridalTitle}
                    </p>
                    <p className="text-lg font-display font-bold text-white drop-shadow-md">
                      {t.hero.titleMain}
                    </p>
                    <p className="text-xs text-stone-300 mt-1">
                      {t.coverage.subtitle}
                    </p>
                  </div>
                </div>

                {/* Micro trust row below photo */}
                <div className="p-4 bg-[#141716] grid grid-cols-3 gap-2 text-center text-xs text-[#E4E4E7] border-t border-[#2D6A4F]/40">
                  <div className="flex flex-col items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80] mb-1" />
                    <span className="font-bold text-[#EF4444]">500+</span>
                    <span className="text-[11px] text-stone-400">{t.testimonials.verifiedClient}</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-[#2D6A4F]/40">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80] mb-1" />
                    <span className="font-bold text-[#EF4444]">₹75</span>
                    <span className="text-[11px] text-stone-400">{t.booking.perSide}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80] mb-1" />
                    <span className="font-bold text-[#4ADE80]">100%</span>
                    <span className="text-[11px] text-stone-400">Natural Henna</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
