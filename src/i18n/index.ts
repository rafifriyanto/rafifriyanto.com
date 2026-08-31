import type { Locale } from '../config';
import { id, type Dict } from './id';
import { en } from './en';

const DICTS: Record<Locale, Dict> = { id, en };

export function useDict(locale: Locale): Dict {
  return DICTS[locale];
}

/** Root-relative href for a locale. `id` is the default and carries no prefix. */
export function localeHome(locale: Locale): string {
  return locale === 'id' ? '/' : `/${locale}/`;
}

export type { Dict };
export { id, en };
