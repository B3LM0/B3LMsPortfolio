// Tiny className combiner — avoids pulling in clsx/tailwind-merge as deps.
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
