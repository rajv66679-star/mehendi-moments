import { ARTIST_PHONE, DISPLAY_PHONE, getWhatsAppUrl } from '../utils/booking';
import { Phone, MessageCircle, MapPin, Sparkles, Heart, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onBookDateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookDateClick }) => {
  const { t } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(
    'Hello Mehendi Moments! I would like to inquire about Mehendi booking in Hyderabad.'
  );

  return (
    <footer className="bg-[#0A0C0B] text-[#D4D4D8] border-t-4 border-[#DC2626] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2D6A4F]/30">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#990000] to-[#B91C1C] text-white flex items-center justify-center border border-[#2D6A4F]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-white">
                Mehendi<span className="text-[#DC2626]">__</span>Moments
              </span>
            </div>
            <p className="text-xs text-[#D4D4D8] italic leading-relaxed">
              {t.hero.quote}
            </p>
            <p className="text-xs text-stone-400">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider">
              {t.services.title}
            </h4>
            <ul className="space-y-2 text-xs text-[#D4D4D8]">
              <li>👰 {t.services.bridalTitle}</li>
              <li>💚 {t.services.guestTitle}</li>
              <li>✨ {t.services.legsTitle}</li>
              <li>🌿 {t.services.khafifTitle}</li>
              <li>🌸 {t.services.bulkTitle}</li>
            </ul>
          </div>

          {/* Hyderabad Home Service Info */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider">
              {t.coverage.title}
            </h4>
            <div className="space-y-2 text-xs text-[#D4D4D8]">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <span>{t.coverage.subtitle}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#EF4444] shrink-0" />
                <span>Morning 09:00 AM - 10:00 PM</span>
              </p>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${ARTIST_PHONE}`}
                className="flex items-center gap-2 text-xs font-semibold text-[#EF4444] hover:underline"
              >
                <Phone className="w-4 h-4 text-[#EF4444]" />
                <span>+91 {DISPLAY_PHONE}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#4ADE80] hover:underline"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#4ADE80]" />
                <span>WhatsApp: +91 {DISPLAY_PHONE}</span>
              </a>
              <button
                onClick={onBookDateClick}
                className="mt-2 w-full py-2.5 px-3 rounded-xl bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#EF4444]/40"
              >
                {t.nav.bookYourDate}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Guarantee */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <div className="flex items-center gap-2">
            <span>🌿 {t.footer.organicPledge}</span>
            <span>•</span>
            <span>📍 {t.footer.servingAreas}</span>
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>© {new Date().getFullYear()} Mehendi__Moments. {t.footer.copyright} Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#DC2626] fill-current" />
            <span>for Hyderabad Brides.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
