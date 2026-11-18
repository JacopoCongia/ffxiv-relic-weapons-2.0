import { useLayoutEffect, useRef, useState } from "react";
import { isImageLoaded, showFallbackIcon } from "../utilities/imageFallback.js";

// Tracks whether an <img> has loaded, so a card can show a skeleton until it
// has. Spread the returned `imgProps` onto the <img>. `status` is:
// - "loading": not there yet (show the skeleton, hide the image)
// - "cached": already loaded when the card appeared, e.g. reopening a section
//   (show it straight away, no skeleton and no fade)
// - "loaded": arrived after the card appeared (fade it in)
export function useImageLoad() {
  const ref = useRef(null);
  const [status, setStatus] = useState("loading");

  // A layout effect runs before the browser paints, so a cached image never
  // shows even one frame of skeleton
  useLayoutEffect(() => {
    if (isImageLoaded(ref.current)) setStatus("cached");
  }, []);

  function onLoad() {
    setStatus((current) => (current === "loading" ? "loaded" : current));
  }

  // Swap in the fallback icon (its load then ends the skeleton). If the
  // fallback itself failed, stop the skeleton anyway so it doesn't pulse forever.
  function onError(event) {
    if (!showFallbackIcon(event)) setStatus("loaded");
  }

  return { status, imgProps: { ref, onLoad, onError } };
}
