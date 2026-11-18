// Unit tests for the icon helpers in src/utilities/imageFallback.js (used by
// the item and material cards). Run with `npm test`.
import { describe, expect, test } from "vitest";
import {
  FALLBACK_ICON,
  isImageLoaded,
  showFallbackIcon,
} from "../../src/utilities/imageFallback.js";

describe("isImageLoaded", () => {
  test("true once a real picture has loaded", () => {
    expect(isImageLoaded({ complete: true, naturalWidth: 128 })).toBe(true);
  });

  test("false while still loading", () => {
    expect(isImageLoaded({ complete: false, naturalWidth: 0 })).toBe(false);
  });

  test("false for a broken image (complete, but no picture)", () => {
    expect(isImageLoaded({ complete: true, naturalWidth: 0 })).toBe(false);
  });

  test("false before the ref is attached", () => {
    expect(isImageLoaded(null)).toBe(false);
  });
});

describe("showFallbackIcon", () => {
  const errorOn = (src) => ({ currentTarget: { src } });

  test("swaps a missing icon for the fallback", () => {
    const event = errorOn("http://localhost/icons/missing.png");
    expect(showFallbackIcon(event)).toBe(true);
    expect(event.currentTarget.src).toBe(FALLBACK_ICON);
  });

  test("leaves the fallback alone if it fails too", () => {
    const event = errorOn(`http://localhost${FALLBACK_ICON}`);
    expect(showFallbackIcon(event)).toBe(false);
    expect(event.currentTarget.src).toBe(`http://localhost${FALLBACK_ICON}`);
  });
});
