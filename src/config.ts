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
  github: 'https://github.com/hanbaenom-coder',
  linkedin: 'https://www.linkedin.com/in/rafifriyanto/',
} as const;

/**
 * PLACEHOLDER — the contact form posts here.
 * Create a free endpoint at https://web3forms.com or https://formspree.io and
 * paste the URL. Until then the form falls back to opening the user's mail app.
 */
export const FORM_ENDPOINT = '';

export const LOCALES = ['id', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
