import test from 'node:test';
import assert from 'node:assert/strict';
import { translations, getTranslation, LANGUAGES, Language } from './index';

test('all required languages are defined in LANGUAGES array', () => {
  const codes = LANGUAGES.map((l) => l.code);
  assert.ok(codes.includes('en'), 'English should be available');
  assert.ok(codes.includes('te'), 'Telugu should be available');
  assert.ok(codes.includes('hi'), 'Hindi should be available');
  assert.equal(LANGUAGES.length, 3);
});

test('translations object contains dictionary for en, te, and hi', () => {
  assert.ok(translations.en, 'English translations must exist');
  assert.ok(translations.te, 'Telugu translations must exist');
  assert.ok(translations.hi, 'Hindi translations must exist');
});

test('all languages have complete nav keys', () => {
  const keys = Object.keys(translations.en.nav) as Array<keyof typeof translations.en.nav>;
  for (const lang of ['te', 'hi'] as Language[]) {
    for (const key of keys) {
      assert.ok(
        translations[lang].nav[key] && translations[lang].nav[key].length > 0,
        `Missing nav.${key} in language ${lang}`
      );
    }
  }
});

test('all languages have complete hero keys and quote', () => {
  const keys = Object.keys(translations.en.hero) as Array<keyof typeof translations.en.hero>;
  for (const lang of ['te', 'hi'] as Language[]) {
    for (const key of keys) {
      assert.ok(
        translations[lang].hero[key] && translations[lang].hero[key].length > 0,
        `Missing hero.${key} in language ${lang}`
      );
    }
  }
});

test('all languages have complete booking and services sections', () => {
  for (const lang of ['te', 'hi'] as Language[]) {
    assert.ok(translations[lang].services.title.length > 0);
    assert.ok(translations[lang].booking.step1Title.length > 0);
    assert.ok(translations[lang].booking.bookOnWhatsApp.length > 0);
    assert.ok(translations[lang].stainGuide.title.length > 0);
    assert.ok(translations[lang].footer.brandDesc.length > 0);
  }
});

test('getTranslation fallback returns English for unknown or invalid key', () => {
  // @ts-expect-error Testing invalid language fallback
  const fallback = getTranslation('unknown_lang');
  assert.equal(fallback.nav.callNow, 'Call Now');
});
