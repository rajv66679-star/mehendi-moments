import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateEstimate,
  formatWhatsAppMessage,
  validateBookingForm,
  getWhatsAppUrl,
  ARTIST_PHONE,
  WHATSAPP_PHONE,
  WHATSAPP_BASE_URL,
} from './booking.ts';

test('calculateEstimate returns correct base starting prices matching client request', () => {
  // Bridal starting price 2000
  const bridal = calculateEstimate('bridal', 0, 'standard');
  assert.equal(bridal.basePrice, 2000);
  assert.equal(bridal.estimatedTotal, 2000);

  // Guest mehendi starting price 75 per side
  const guest = calculateEstimate('guest', 20, 'standard');
  assert.equal(guest.basePrice, 75);
  assert.equal(guest.estimatedTotal, 1500);

  // Leg mehendi starting price 400
  const legs = calculateEstimate('legs', 0, 'standard');
  assert.equal(legs.basePrice, 400);
  assert.equal(legs.estimatedTotal, 400);

  // Khafif designs starting price 1500
  const khafif = calculateEstimate('khafif', 0, 'standard');
  assert.equal(khafif.basePrice, 1500);
  assert.equal(khafif.estimatedTotal, 1500);

  // Bulk & Event mehendi orders starting price 75 per side
  const bulk = calculateEstimate('bulk_event', 30, 'standard');
  assert.equal(bulk.basePrice, 75);
  assert.equal(bulk.estimatedTotal, 2250);
});

test('WhatsApp constants use the reliable cross-platform https://wa.me/9182939671 format', () => {
  assert.equal(ARTIST_PHONE, '9182939671');
  assert.equal(WHATSAPP_BASE_URL, 'https://wa.me/9182939671');
  
  // Default URL without text
  const defaultUrl = getWhatsAppUrl();
  assert.equal(defaultUrl, 'https://wa.me/9182939671');

  // URL with custom inquiry message
  const quickUrl = getWhatsAppUrl('Hello');
  assert.equal(quickUrl, 'https://wa.me/9182939671?text=Hello');
});

test('formatWhatsAppMessage builds valid https://wa.me/9182939671 URL with booking parameters', () => {
  const url = formatWhatsAppMessage({
    fullName: 'Ananya Sharma',
    phone: '9876543210',
    functionDate: '2026-11-15',
    locationArea: 'Banjara Hills, Hyderabad',
    eventType: 'Sangeet & Wedding',
    serviceType: 'bridal',
  });

  assert.ok(url.startsWith('https://wa.me/9182939671?text='));
  assert.ok(url.includes('Ananya%20Sharma'));
  assert.ok(url.includes('Banjara%20Hills'));
  assert.ok(url.includes('Bridal%20Mehendi'));
});

test('validateBookingForm flags empty required inputs', () => {
  const errors = validateBookingForm({
    fullName: '',
    phone: '',
    functionDate: '',
    locationArea: '',
  });

  assert.ok(errors.fullName);
  assert.ok(errors.phone);
  assert.ok(errors.functionDate);
  assert.ok(errors.locationArea);

  const validErrors = validateBookingForm({
    fullName: 'Sneha Reddy',
    phone: '9182939671',
    functionDate: '2026-12-05',
    locationArea: 'Kondapur, Hyderabad',
  });

  assert.equal(Object.keys(validErrors).length, 0);
});
