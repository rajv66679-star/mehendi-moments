import React from 'react';
import { ShieldCheck, Flame, Droplets, Sun, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const StainCareGuide: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      icon: Droplets,
      title: t.stainGuide.tip1Title,
      description: t.stainGuide.tip1Desc,
    },
    {
      num: '02',
      icon: Sun,
      title: t.stainGuide.tip2Title,
      description: t.stainGuide.tip2Desc,
    },
    {
      num: '03',
      icon: Flame,
      title: t.stainGuide.tip3Title,
      description: t.stainGuide.tip3Desc,
    },
    {
      num: '04',
      icon: Clock,
      title: t.stainGuide.tip4Title,
      description: t.stainGuide.tip4Desc,
    },
  ];

  return (
    <section id="stain-guide" className="py-16 md:py-24 bg-[#141716] relative border-t border-[#1B4332]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1B4332]/40 text-[#4ADE80] text-xs font-bold tracking-widest uppercase mb-3 border border-[#2D6A4F]/60">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" />
            <span>{t.hero.badgeOrganic}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            {t.stainGuide.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#2D6A4F] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-base sm:text-lg text-[#D4D4D8] font-medium leading-relaxed">
            {t.stainGuide.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-[#181B1A] rounded-2xl p-6 border border-[#2D6A4F]/40 shadow-md hover:shadow-xl hover:border-[#DC2626]/50 transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-2 right-4 text-4xl font-display font-bold text-[#DC2626]/20 select-none">
                  {st.num}
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#1B4332]/60 border border-[#2D6A4F] flex items-center justify-center text-[#4ADE80]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#D4D4D8] leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
