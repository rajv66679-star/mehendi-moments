export type ServiceCategory = 'bridal' | 'guest' | 'legs' | 'khafif' | 'bulk_event';

export interface MehendiService {
  id: ServiceCategory;
  title: string;
  badge?: string;
  emoji: string;
  tagline: string;
  description: string;
  startingPrice: number;
  priceNote?: string;
  features: string[];
  imageUrl: string;
  acceptedEvents?: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  functionDate: string;
  functionTime: string;
  locationArea: string;
  eventType: string;
  serviceType: ServiceCategory;
  guestSidesCount: number;
  coverageLevel: 'standard' | 'elbow' | 'full_arm' | 'bridal_complete';
  specialRequirements: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  tag: string;
  image: string;
  stainLevel: 'Dark Maroon' | 'Rich Mahogany' | 'Deep Crimson';
  description: string;
  recommendedFor: string;
}

export interface ClientReview {
  id: string;
  name: string;
  event: string;
  location: string;
  rating: number;
  review: string;
  stainReview: string;
  date: string;
}
