/**
 * Base-aware URLs.
 *
 * The site is served from the domain root in production, but GitHub Pages
 * serves a project repo from /<repo>/. Every absolute link has to go through
 * here or it breaks on one of the two.
 */
const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return BASE.replace(/\/$/, '') + path;
}
