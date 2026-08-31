/**
 * Pricing data — numbers only, no copy.
 *
 * Labels live in the language dictionaries and are keyed by the ids below, so
 * ID and EN can never drift out of sync on price.
 */

export interface PriceBase {
  id: 'bot' | 'scraping' | 'ai';
  price: number;
}

export interface PriceAddon {
  id: 'dashboard' | 'database' | 'hosting' | 'antibot' | 'multichannel' | 'handover';
  price: number;
}

export const BASES: readonly PriceBase[] = [
  { id: 'bot', price: 2_500_000 },
  { id: 'scraping', price: 3_500_000 },
  { id: 'ai', price: 6_000_000 },
] as const;

export const ADDONS: readonly PriceAddon[] = [
  { id: 'dashboard', price: 2_000_000 },
  { id: 'database', price: 1_500_000 },
  { id: 'hosting', price: 1_800_000 },
  { id: 'antibot', price: 2_500_000 },
  { id: 'multichannel', price: 1_500_000 },
  { id: 'handover', price: 800_000 },
] as const;

/** Each data source / flow beyond the first. */
export const PER_SOURCE = 600_000;
export const SOURCE_MIN = 1;
export const SOURCE_MAX = 10;

/** Optional monthly retainer, quoted separately from the build. */
export const RETAINER_MONTHLY = 750_000;

export function formatIDR(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}
