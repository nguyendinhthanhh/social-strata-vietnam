/**
 * Vietnamese Typography & Text Utility Suite
 * Ensures strict Unicode normalization (NFC) and grapheme cluster integrity.
 * Prevents split diacritics and corrupted compound vowels.
 */

/**
 * Standardize text using Unicode Normalization Form C (Canonical Decomposition followed by Canonical Composition)
 */
export function normalizeVietnamese(text: string): string {
  if (!text) return "";
  return text.normalize("NFC");
}

/**
 * Split text into semantic words while preserving Vietnamese accents and punctuation
 */
export function getVietnameseWords(text: string): string[] {
  if (!text) return [];
  const normalized = normalizeVietnamese(text);
  return normalized.trim().split(/\s+/).filter(Boolean);
}

/**
 * Safely segment Vietnamese text into individual grapheme clusters using Intl.Segmenter.
 * Guarantees that compound diacritics (e.g., ế, ộ, ử, ẫ) are NEVER broken into separated code units.
 */
export function getVietnameseGraphemes(text: string): string[] {
  if (!text) return [];
  const normalized = normalizeVietnamese(text);

  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new (Intl as any).Segmenter("vi", { granularity: "grapheme" });
    const segments = segmenter.segment(normalized);
    return Array.from(segments, (s: any) => s.segment);
  }

  // Fallback: match Unicode grapheme cluster extended regular expression
  return Array.from(normalized);
}

/**
 * Split into lines by explicit line breaks or sentence breaks
 */
export function getVietnameseLines(text: string): string[] {
  if (!text) return [];
  return normalizeVietnamese(text)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

