/**
 * SEO Utility Functions
 * Provides helpers for canonical URLs and text truncation
 */

export const SITE_URL = "https://devmart.sr";

/**
 * Generate canonical URL from path
 */
export function canonical(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * Truncate text to max length with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
}
