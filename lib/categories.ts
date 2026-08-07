export type Category = {
  label: string;       // display label with emoji
  value: string;       // stored value (no emoji)
  emoji: string;
};

export const CATEGORIES: Category[] = [
  { label: 'Y2K Flash', value: 'Y2K Flash', emoji: '🔥' },
  { label: 'Cinematic', value: 'Cinematic', emoji: '🎬' },
  { label: 'Vinyl Toy', value: 'Vinyl Toy', emoji: '📦' },
  { label: 'Golden Hour', value: 'Golden Hour', emoji: '🌅' },
  { label: 'A24 Poster', value: 'A24 Poster', emoji: '🎞️' },
];

export const FILTER_PILLS: { label: string; value: string }[] = [
  { label: 'All', value: 'All' },
  { label: '🔥 Y2K Flash', value: 'Y2K Flash' },
  { label: '🎬 Cinematic', value: 'Cinematic' },
  { label: '📦 Vinyl Toy', value: 'Vinyl Toy' },
  { label: '🌅 Golden Hour', value: 'Golden Hour' },
  { label: '🎞️ A24 Poster', value: 'A24 Poster' },
];

export function categoryEmoji(value: string): string {
  return CATEGORIES.find((c) => c.value === value)?.emoji ?? '✨';
}

export const CATEGORY_COLORS: Record<string, string> = {
  'Y2K Flash': 'text-fuchsia-700 bg-fuchsia-50',
  Cinematic: 'text-amber-800 bg-amber-50',
  'Vinyl Toy': 'text-cyan-800 bg-cyan-50',
  'Golden Hour': 'text-orange-800 bg-orange-50',
  'A24 Poster': 'text-emerald-800 bg-emerald-50',
};

export function categoryClass(value: string): string {
  return CATEGORY_COLORS[value] ?? 'text-neutral-700 bg-neutral-100';
}
