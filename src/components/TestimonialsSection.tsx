import React from 'react';
import { CLIENT_REVIEWS } from '../data/servicesData';
import { Star, MapPin, Sparkles, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#141716] relative border-t border-[#1B4332]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A1E1D] text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-3 border border-[#DC2626]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EF4444]" />
            <span>{t.testimonials.ratingText}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            {t.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#2D6A4F] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-base sm:text-lg text-[#D4D4D8] font-medium leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#181B1A] rounded-2xl p-6 border border-[#2D6A4F]/40 shadow-md hover:shadow-xl hover:border-[#DC2626]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* 5-star rating in Crimson Red */}
                <div className="flex items-center gap-1 text-[#EF4444]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-[#2D6A4F]/60" />

                <p className="text-xs text-[#D4D4D8] leading-relaxed italic">
                  "{rev.review}"
                </p>

                {/* Stain highlight tag in Forest Green */}
                <div className="p-2 rounded-lg bg-[#1B4332]/40 border border-[#2D6A4F]/60 text-[11px] text-[#4ADE80] font-medium flex items-center gap-1">
                  <span>🌿</span>
                  <span>{rev.stainReview}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#2D6A4F]/30">
                <h4 className="font-display font-bold text-sm text-white">
                  {rev.name}
                </h4>
                <p className="text-[11px] text-[#EF4444] font-semibold">{rev.event}</p>
                <p className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#4ADE80]" />
                  {rev.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
