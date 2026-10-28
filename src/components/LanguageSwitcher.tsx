import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES, Language } from '../translations';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'compact',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'full') {
    return (
      <div className={`space-y-1.5 ${className}`}>
        <label className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] flex items-center gap-1.5 mb-2">
          <Globe className="w-3.5 h-3.5 text-[#2D6A4F]" />
          <span>Language / భాష / भाषा</span>
        </label>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#0A0C0B] rounded-xl border border-[#1B4332]/60">
          {LANGUAGES.map((item) => {
            const isActive = language === item.code;
            return (
              <button
                key={item.code}
                onClick={() => setLanguage(item.code as Language)}
                type="button"
                className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#B91C1C] to-[#990000] text-white shadow-md border border-[#EF4444]/40'
                    : 'text-[#D4D4D8] hover:text-white hover:bg-[#1E2221]'
                }`}
                aria-pressed={isActive}
                aria-label={`Switch language to ${item.name}`}
              >
                <span className="text-sm font-semibold">{item.nativeName}</span>
                <span className="text-[10px] opacity-75 font-normal tracking-wide">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center bg-[#0D100F] border border-[#2D6A4F]/60 rounded-xl p-0.5 shadow-xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="px-2 text-[#40916C] flex items-center shrink-0">
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
      </div>
      <div className="flex items-center gap-0.5">
        {LANGUAGES.map((item) => {
          const isActive = language === item.code;
          return (
            <button
              key={item.code}
              onClick={() => setLanguage(item.code as Language)}
              type="button"
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#B91C1C] text-white shadow-xs border border-[#EF4444]/40 scale-102'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#1A1D1C]'
              }`}
              title={`${item.name} (${item.nativeName})`}
              aria-pressed={isActive}
              aria-label={`Switch to ${item.name}`}
            >
              <span className="inline">{item.nativeName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
