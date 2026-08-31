/**
 * Site-wide constants. Everything a human needs to change after launch lives
 * here — contact details, social handles, and the form endpoint.
 */

export const SITE = {
  domain: 'rafifriyanto.com',
  url: 'https://rafifriyanto.com',
  name: 'Rafif Riyanto',
  /** Shown in the nav / footer wordmark. */
  wordmark: 'RAFIF RIYANTO',
} as const;

export const CONTACT = {
  email: 'rafifriyanto@gmail.com',
  /** International format, digits only — this feeds the wa.me link. */
  whatsapp: '6281386100409',
  whatsappDisplay: '+62 813-8610-0409',
  /** PLACEHOLDER — swap for your own profile, or drop the link from the footer. */
  github: 'https://github.com/tradesdontlie',
  /** PLACEHOLDER — swap for your own profile, or drop the link from the footer. */
  linkedin: 'https://www.linkedin.com/in/',
} as const;

/**
 * PLACEHOLDER — the contact form posts here.
 * Create a free endpoint at https://web3forms.com or https://formspree.io and
 * paste the URL. Until then the form falls back to opening the user's mail app.
 */
export const FORM_ENDPOINT = '';

export const LOCALES = ['id', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
