import { BookingFormData, ServiceCategory } from '../types';

// The artist's 10-digit Indian phone number is 9182939671
export const ARTIST_MOBILE = '9182939671';
export const ARTIST_PHONE = '9182939671';
export const WHATSAPP_PHONE = '9182939671';
export const DISPLAY_PHONE = '+91 91829 39671';
export const WHATSAPP_BASE_URL = 'https://wa.me/9182939671';

export function getWhatsAppUrl(customText?: string): string {
  if (customText && customText.trim()) {
    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(customText.trim())}`;
  }
  return WHATSAPP_BASE_URL;
}

export interface EstimateResult {
  basePrice: number;
  estimatedTotal: number;
  priceNote: string;
  isCustomQuote: boolean;
}

export function calculateEstimate(
  serviceType: ServiceCategory,
  guestSidesCount: number = 10,
  coverageLevel: 'standard' | 'elbow' | 'full_arm' | 'bridal_complete' = 'standard'
): EstimateResult {
  switch (serviceType) {
    case 'bridal': {
      let total = 2000;
      if (coverageLevel === 'elbow') total = 3200;
      else if (coverageLevel === 'full_arm') total = 4500;
      else if (coverageLevel === 'bridal_complete') total = 5500;

      return {
        basePrice: 2000,
        estimatedTotal: total,
        priceNote: 'Starting price ₹2000.00. Final charges depend on customized design complexity & coverage.',
        isCustomQuote: false,
      };
    }

    case 'guest': {
      const sides = Math.max(1, guestSidesCount);
      const total = sides * 75;
      return {
        basePrice: 75,
        estimatedTotal: total,
        priceNote: '₹75.00 per side applies to bulk/Event Bookings. Simple, stylish & attractive guest patterns.',
        isCustomQuote: sides < 10,
      };
    }

    case 'legs': {
      let total = 400;
      if (coverageLevel === 'elbow') total = 750;
      else if (coverageLevel === 'full_arm' || coverageLevel === 'bridal_complete') total = 1200;

      return {
        basePrice: 400,
        estimatedTotal: total,
        priceNote: 'Starting price ₹400.00. Elegant feet & ankle mehendi designs.',
        isCustomQuote: false,
      };
    }

    case 'khafif': {
      let total = 1500;
      if (coverageLevel === 'elbow' || coverageLevel === 'full_arm') total = 2200;

      return {
        basePrice: 1500,
        estimatedTotal: total,
        priceNote: 'Starting price ₹1500.00. Intricate Dubai/Gulf style negative space Khafif patterns.',
        isCustomQuote: false,
      };
    }

    case 'bulk_event': {
      const sides = Math.max(10, guestSidesCount);
      const total = sides * 75;
      return {
        basePrice: 75,
        estimatedTotal: total,
        priceNote: '₹75.00 per side applies to bulk/Event Bookings only. Final charges depend on design, coverage, and location.',
        isCustomQuote: false,
      };
    }

    default:
      return {
        basePrice: 2000,
        estimatedTotal: 2000,
        priceNote: 'Custom quote based on design requirements.',
        isCustomQuote: true,
      };
  }
}

export function formatWhatsAppMessage(data: Partial<BookingFormData>, estimate?: EstimateResult): string {
  const serviceLabels: Record<ServiceCategory, string> = {
    bridal: 'Bridal Mehendi (Customised Designs)',
    guest: 'Guest Mehendi (Arabic & Traditional)',
    legs: 'Leg Mehendi Designs',
    khafif: 'Khafif Mehendi Designs',
    bulk_event: 'Bulk & Event Mehendi Orders',
  };

  const lines = [
    '✨ *New Booking Inquiry - Mehendi Moments Hyderabad* ✨',
    '',
    `👤 *Name:* ${data.fullName?.trim() || 'Client Inquiry'}`,
    `📞 *Contact:* ${data.phone?.trim() || 'Via WhatsApp'}`,
    `📅 *Function Date:* ${data.functionDate || 'Please share available dates'}`,
    data.functionTime ? `⏰ *Time:* ${data.functionTime}` : '',
    `📍 *Hyderabad Location:* ${data.locationArea || 'Hyderabad (Home Service)'}`,
    `🎉 *Event Type:* ${data.eventType || 'Wedding / Special Occasion'}`,
    `🌿 *Selected Service:* ${data.serviceType ? serviceLabels[data.serviceType] : 'Bridal / Event Mehendi'}`,
  ];

  if (data.serviceType === 'guest' || data.serviceType === 'bulk_event') {
    lines.push(`👥 *Estimated Sides/Guests:* ${data.guestSidesCount || 10} sides`);
  }

  if (data.coverageLevel) {
    const coverageMap = {
      standard: 'Standard Coverage (Wrist / Ankle)',
      elbow: 'Mid Coverage (Up to Forearm / Calf)',
      full_arm: 'Elbow to Full Arm',
      bridal_complete: 'Complete Bridal Package (Both Hands & Feet)',
    };
    lines.push(`📏 *Coverage:* ${coverageMap[data.coverageLevel]}`);
  }

  if (estimate) {
    lines.push(`💰 *Estimated Starting Price:* Approx ₹${estimate.estimatedTotal.toLocaleString('en-IN')}`);
  }

  if (data.specialRequirements?.trim()) {
    lines.push(`📝 *Requirements / Custom Design:* ${data.specialRequirements.trim()}`);
  }

  lines.push('');
  lines.push('Please confirm availability and share your design catalogue for my date. Thank you! 💚');

  const cleanMessage = lines.filter((line) => line !== '').join('\n');
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(cleanMessage)}`;
}

export function validateBookingForm(data: Partial<BookingFormData>): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your name.';
  }

  if (!data.phone || !/^[0-9+\s-]{8,15}$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number (10 digits).';
  }

  if (!data.functionDate) {
    errors.functionDate = 'Please select your function date.';
  }

  if (!data.locationArea || data.locationArea.trim().length < 3) {
    errors.locationArea = 'Please enter your Hyderabad locality or address.';
  }

  return errors;
}
