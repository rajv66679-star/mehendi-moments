import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'hero' | 'mark';
  theme?: 'light' | 'dark' | 'auto';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'auto',
}) => {
  // Bespoke Henna Mandala Insignia Icon
  const MandalaIcon = ({ size = 44 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Mehendi Moments Henna Insignia"
    >
      <defs>
        {/* Rich Gold Gradient */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB76C" />
          <stop offset="50%" stopColor="#C59B4B" />
          <stop offset="100%" stopColor="#9E7326" />
        </linearGradient>

        {/* Deep Royal Henna Crimson Gradient */}
        <linearGradient id="hennaCrimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9B1D2E" />
          <stop offset="60%" stopColor="#7E1422" />
          <stop offset="100%" stopColor="#5B0C17" />
        </linearGradient>

        {/* Soft Radial Glow */}
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F5E6CA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle outer warm background disc */}
      <circle cx="50" cy="50" r="48" fill="url(#hennaCrimsonGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="44" stroke="#DFB76C" strokeWidth="0.75" strokeDasharray="1.5 2.5" opacity="0.85" />
      <circle cx="50" cy="50" r="40" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.6" />

      {/* Henna Pearls (Bundi Dots) Ring */}
      <circle cx="50" cy="8" r="1.5" fill="#FCE7BA" />
      <circle cx="80" cy="20" r="1.5" fill="#FCE7BA" />
      <circle cx="92" cy="50" r="1.5" fill="#FCE7BA" />
      <circle cx="80" cy="80" r="1.5" fill="#FCE7BA" />
      <circle cx="50" cy="92" r="1.5" fill="#FCE7BA" />
      <circle cx="20" cy="80" r="1.5" fill="#FCE7BA" />
      <circle cx="8" cy="50" r="1.5" fill="#FCE7BA" />
      <circle cx="20" cy="20" r="1.5" fill="#FCE7BA" />

      {/* 8-Petal Intricate Henna Lotus / Paisley Geometry */}
      <g stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Cardinal Petals */}
        <path d="M50 20 C46 32 46 38 50 44 C54 38 54 32 50 20 Z" fill="#FCE7BA" fillOpacity="0.15" />
        <path d="M50 80 C46 68 46 62 50 56 C54 62 54 68 50 80 Z" fill="#FCE7BA" fillOpacity="0.15" />
        <path d="M20 50 C32 46 38 46 44 50 C38 54 32 54 20 50 Z" fill="#FCE7BA" fillOpacity="0.15" />
        <path d="M80 50 C68 46 62 46 56 50 C62 54 68 54 80 50 Z" fill="#FCE7BA" fillOpacity="0.15" />

        {/* Diagonal Petals */}
        <path d="M29 29 C37 38 41 42 46 46 C42 41 38 37 29 29 Z" fill="#FCE7BA" fillOpacity="0.15" />
        <path d="M71 29 C63 38 59 42 54 46 C58 41 62 37 71 29 Z" fill="#FCE7BA" fillOpacity="0.15" />
        <path d="M71 71 C63 62 59 58 54 54 C58 59 62 63 71 71 Z" fill="#FCE7BA" fillOpacity="0.15" />
        <path d="M29 71 C37 62 41 58 46 54 C42 59 38 63 29 71 Z" fill="#FCE7BA" fillOpacity="0.15" />

        {/* Curved Henna Swirls / Floral Vines */}
        <path d="M50 32 Q58 35 56 42" strokeWidth="0.8" opacity="0.8" />
        <path d="M50 68 Q42 65 44 58" strokeWidth="0.8" opacity="0.8" />
        <path d="M32 50 Q35 42 42 44" strokeWidth="0.8" opacity="0.8" />
        <path d="M68 50 Q65 58 58 56" strokeWidth="0.8" opacity="0.8" />
      </g>

      {/* Central Radiant Lotus Jewel */}
      <circle cx="50" cy="50" r="7" fill="url(#hennaCrimsonGrad)" stroke="url(#goldGrad)" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="3.5" fill="#FCE7BA" />
      <circle cx="50" cy="50" r="1.5" fill="#7E1422" />
    </svg>
  );

  if (variant === 'mark') {
    return <MandalaIcon size={44} />;
  }

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        <div className="relative mb-3">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#DFB76C]/30 via-[#9B1D2E]/20 to-[#DFB76C]/30 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
          <MandalaIcon size={76} />
        </div>
        <div className="space-y-1">
          <span className="block text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#1F1916] drop-shadow-xs">
            Mehendi Moments
          </span>
          <span className="block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#9B1D2E]">
            Professional Mehendi Artist • Hyderabad
          </span>
          <span className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#6B5E55]">
            Home Service • Bridal & Event Artistry
          </span>
        </div>
      </div>
    );
  }

  let titleColor = 'text-stone-900 group-hover:text-[#9B1D2E]';
  let subtitleColor = 'text-[#841926]';

  if (theme === 'dark') {
    titleColor = 'text-[#FAF5EE] group-hover:text-[#FCE7BA]';
    subtitleColor = 'text-[#DFB76C]';
  } else if (theme === 'light') {
    titleColor = 'text-[#1F1916]';
    subtitleColor = 'text-[#9B1D2E]';
  }

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      <div className="relative shrink-0">
        <MandalaIcon size={variant === 'compact' ? 38 : 46} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1">
          <span className={`font-display text-2xl md:text-[26px] font-bold tracking-tight leading-none ${titleColor} transition-colors`}>
            Mehendi Moments
          </span>
        </div>
        {variant === 'full' && (
          <span className={`text-[10.5px] md:text-[11px] font-semibold tracking-[0.16em] uppercase ${subtitleColor} mt-1 flex items-center gap-1.5 whitespace-nowrap`}>
            <span>Hyderabad</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#DFB76C]" />
            <span>Bridal & Events</span>
          </span>
        )}
      </div>
    </div>
  );
};
