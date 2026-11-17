// Shown when an item or material icon is missing, e.g. a new relic step whose
// icons haven't been added to public/icons/ yet.
export const FALLBACK_ICON = "/icons/not_found.png";

// onError handler for <img>: swaps in the fallback icon once. The check stops
// an endless error loop if the fallback itself fails to load.
export function showFallbackIcon(event) {
  const img = event.currentTarget;
  if (!img.src.endsWith(FALLBACK_ICON)) {
    img.src = FALLBACK_ICON;
  }
}
