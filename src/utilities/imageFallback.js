// Shown when an item or material icon is missing, e.g. a new relic step whose
// icons haven't been added to public/icons/ yet.
export const FALLBACK_ICON = "/icons/not_found.png";

// onError handler for <img>: swaps in the fallback icon once. The check stops
// an endless error loop if the fallback itself fails to load. Returns true if
// it swapped, false if the fallback was already the one that failed.
export function showFallbackIcon(event) {
  const img = event.currentTarget;
  if (img.src.endsWith(FALLBACK_ICON)) return false;
  img.src = FALLBACK_ICON;
  return true;
}

// True if an <img> has already finished loading a real picture. `complete` is
// also true for a broken image, so `naturalWidth` (0 when broken) tells them
// apart. Used to skip the loading skeleton for icons the browser has cached.
export function isImageLoaded(img) {
  return Boolean(img?.complete && img.naturalWidth > 0);
}
