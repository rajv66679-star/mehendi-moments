import React, { useState, useEffect } from 'react';
import { ServiceCategory, BookingFormData } from '../types';
import {
  calculateEstimate,
  formatWhatsAppMessage,
  ARTIST_PHONE,
  WHATSAPP_PHONE,
  DISPLAY_PHONE,
  EstimateResult,
} from '../utils/booking';
import { HYDERABAD_AREAS } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import {
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Info,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface BookingEstimatorProps {
  initialService?: ServiceCategory;
}

export const BookingEstimator: React.FC<BookingEstimatorProps> = ({ initialService = 'bridal' }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    functionDate: '',
    functionTime: 'Morning (10:00 AM)',
    locationArea: 'Banjara Hills, Hyderabad',
    eventType: 'Wedding / Sangeet',
    serviceType: initialService,
    guestSidesCount: 15,
    coverageLevel: 'standard',
    specialRequirements: '',
  });

  const [estimate, setEstimate] = useState<EstimateResult>(() =>
    calculateEstimate(initialService, 15, 'standard')
  );
  const [errors] = useState<Record<string, string>>({});
  const [touched] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const res = calculateEstimate(
      formData.serviceType,
      formData.guestSidesCount,
      formData.coverageLevel
    );
    setEstimate(res);
  }, [formData.serviceType, formData.guestSidesCount, formData.coverageLevel]);

  // Compute real-time WhatsApp booking URL based on user selections
  const liveWhatsAppUrl = formatWhatsAppMessage(formData, estimate);

  const directWhatsAppUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    'Hello Mehendi Moments! I would like to book my date for an upcoming function in Hyderabad.'
  )}`;

  return (
    <section id="booking-calculator" className="py-16 md:py-24 bg-[#121414] relative border-t border-[#1B4332]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A1E1D] text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-3 border border-[#DC2626]/40 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
            <span>{t.nav.pricing}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            {t.booking.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent mx-auto mt-3 mb-4" />
          <p className="text-base sm:text-lg text-[#D4D4D8] font-medium leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Booking Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#181B1A] rounded-3xl p-6 sm:p-8 border border-[#2D6A4F]/50 shadow-xl">
            <div className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#EF4444] mb-2.5">
                  {t.booking.step1Title} *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'bridal', label: `👰 ${t.services.bridalTitle}`, tag: 'From ₹2000' },
                    { id: 'guest', label: `💚 ${t.services.guestTitle}`, tag: '₹75/side' },
                    { id: 'legs', label: `✨ ${t.services.legsTitle}`, tag: 'From ₹400' },
                    { id: 'khafif', label: `🌿 ${t.services.khafifTitle}`, tag: 'From ₹1500' },
                    { id: 'bulk_event', label: `🌸 ${t.services.bulkTitle}`, tag: 'Group Rates' },
                  ].map((srv) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          serviceType: srv.id as ServiceCategory,
                        }))
                      }
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        formData.serviceType === srv.id
                          ? 'border-[#DC2626] bg-[#241718] ring-1 ring-[#DC2626]'
                          : 'border-[#2D6A4F]/40 bg-[#141716] hover:bg-[#1E2221]'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {srv.label}
                      </span>
                      <span className="text-[11px] font-medium text-[#4ADE80] mt-1">
                        {srv.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="functionDate" className="block text-xs font-bold uppercase tracking-wider text-[#D4D4D8] mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                    {t.booking.eventDate} *
                  </label>
                  <input
                    id="functionDate"
                    type="date"
                    value={formData.functionDate}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, functionDate: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2D6A4F]/60 bg-[#141716] text-sm text-white focus:ring-2 focus:ring-[#EF4444] focus:outline-hidden"
                  />
                  {touched && errors.functionDate && (
                    <p className="text-xs text-[#EF4444] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.functionDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="functionTime" className="block text-xs font-bold uppercase tracking-wider text-[#D4D4D8] mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#4ADE80]" />
                    {t.booking.eventTime}
                  </label>
                  <select
                    id="functionTime"
                    value={formData.functionTime}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, functionTime: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2D6A4F]/60 bg-[#141716] text-sm text-white focus:ring-2 focus:ring-[#EF4444] focus:outline-hidden"
                  >
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                    <option value="Night Ceremony (08:00 PM onwards)">Night Ceremony (08:00 PM onwards)</option>
                  </select>
                </div>
              </div>

              {/* Event Type & Hyderabad Locality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventType" className="block text-xs font-bold uppercase tracking-wider text-[#D4D4D8] mb-1.5">
                    Occasion / Event Type
                  </label>
                  <select
                    id="eventType"
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, eventType: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2D6A4F]/60 bg-[#141716] text-sm text-white focus:ring-2 focus:ring-[#EF4444] focus:outline-hidden"
                  >
                    <option value="Bridal Wedding">💍 Bridal Wedding</option>
                    <option value="Engagements & Sangeet">👰 Engagements & Sangeet</option>
                    <option value="Haldi & Baby Showers">🌼 Haldi & Baby Showers</option>
                    <option value="Birthday Parties & Family Functions">🎊 Birthday & Family Function</option>
                    <option value="Corporate Events & Festivals">🏢 Corporate / Festive Event</option>
                    <option value="Bulk Mehendi Gathering">🎉 Bulk Mehendi Gathering</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="locationArea" className="block text-xs font-bold uppercase tracking-wider text-[#D4D4D8] mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" />
                    {t.booking.locationArea} *
                  </label>
                  <input
                    id="locationArea"
                    type="text"
                    placeholder={t.booking.locationPlaceholder}
                    value={formData.locationArea}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, locationArea: e.target.value }))
                    }
                    list="hyderabad-locations-list"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2D6A4F]/60 bg-[#141716] text-sm text-white focus:ring-2 focus:ring-[#EF4444] focus:outline-hidden placeholder:text-stone-500"
                  />
                  <datalist id="hyderabad-locations-list">
                    {HYDERABAD_AREAS.map((area) => (
                      <option key={area} value={`${area}, Hyderabad`} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Conditional Options: Guest sides count or Bridal coverage */}
              {(formData.serviceType === 'guest' || formData.serviceType === 'bulk_event') && (
                <div className="p-4 rounded-xl bg-[#141716] border border-[#2D6A4F]/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="guestSidesRange" className="text-xs font-bold uppercase tracking-wider text-[#EF4444]">
                      {t.booking.guestSides} ({formData.guestSidesCount})
                    </label>
                    <span className="text-xs font-bold text-[#4ADE80] bg-[#1B4332]/60 px-2 py-0.5 rounded-md border border-[#2D6A4F]">
                      @ ₹75 / {t.booking.perSide}
                    </span>
                  </div>
                  <input
                    id="guestSidesRange"
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={formData.guestSidesCount}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        guestSidesCount: parseInt(e.target.value, 10),
                      }))
                    }
                    className="w-full accent-[#EF4444] cursor-pointer"
                  />
                </div>
              )}

              {/* Special requirements */}
              <div>
                <label htmlFor="specialReqs" className="block text-xs font-bold uppercase tracking-wider text-[#D4D4D8] mb-1.5">
                  {t.booking.specialRequests}
                </label>
                <textarea
                  id="specialReqs"
                  rows={2}
                  placeholder="e.g. Traditional portrait figures, groom name hidden, specific bride story motifs..."
                  value={formData.specialRequirements}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, specialRequirements: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2D6A4F]/60 bg-[#141716] text-sm text-white focus:ring-2 focus:ring-[#EF4444] focus:outline-hidden placeholder:text-stone-500"
                />
              </div>

              {/* Action Buttons: Book on WhatsApp & Call Now */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={liveWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-sm text-white bg-[#1B4332] hover:bg-[#2D6A4F] border border-[#40916C]/60 shadow-lg hover:shadow-green-950/40 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-[#4ADE80] fill-current" />
                  <span>{t.booking.bookOnWhatsApp}</span>
                </a>

                <a
                  href={`tel:${ARTIST_PHONE}`}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-sm text-[#EF4444] bg-[#141716] hover:bg-[#251819] border-2 border-[#DC2626] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-[#EF4444]" />
                  <span>{t.nav.callNow}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quotation & Urgent Direct Contact Info Card (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Pricing Breakdown Card */}
            <div className="bg-gradient-to-br from-[#181B1A] via-[#151917] to-[#0D281E]/60 rounded-3xl p-6 sm:p-7 border border-[#2D6A4F]/60 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#2D6A4F]/40">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#EF4444]">
                    Quotation Summary
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">
                    {t.booking.estimatedInvestment}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-[#EF4444]">
                    ₹{estimate.estimatedTotal.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-stone-400 block">approx. starting</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#D4D4D8]">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Service Category:</span>
                  <span className="font-bold text-white capitalize">{formData.serviceType.replace('_', ' ')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Location:</span>
                  <span className="font-semibold text-white">{formData.locationArea || 'Hyderabad'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Home Service:</span>
                  <span className="font-semibold text-[#4ADE80] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {t.coverage.title}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141716] border border-[#2D6A4F]/40 text-xs text-[#D4D4D8] space-y-1.5">
                <p className="font-semibold text-[#EF4444] flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  Pricing Note:
                </p>
                <p className="italic text-[11px] leading-relaxed text-stone-300">
                  {estimate.priceNote}
                </p>
              </div>

              {/* Direct WhatsApp Instant Inquiry button */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-[#4ADE80] bg-[#1B4332]/50 hover:bg-[#1B4332] border border-[#2D6A4F] transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-[#4ADE80] fill-current" />
                <span>{t.hero.whatsappInquire}</span>
              </a>
            </div>

            {/* Direct & Urgent Contact Banner in Crimson Red */}
            <div className="bg-gradient-to-br from-[#991B1B] via-[#881337] to-[#7F1D1D] text-white rounded-3xl p-6 shadow-xl border border-[#EF4444]/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-black/30 border border-white/20 flex items-center justify-center text-white shrink-0">
                  <Phone className="w-6 h-6 animate-pulse text-[#FCA5A5]" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-white">
                    {t.hero.callArtist}
                  </h4>
                  <p className="text-xs text-[#FECACA]">
                    {t.nav.homeServiceAvailable}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${ARTIST_PHONE}`}
                  className="w-full py-3 rounded-xl bg-white text-[#991B1B] font-bold text-sm text-center shadow-md hover:bg-stone-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#991B1B]" />
                  <span>Call {DISPLAY_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
