import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Big libraries go into their own chunks, so a deploy that only changes app
// code doesn't make returning visitors re-download them (their file names, and
// so the browser cache, stay the same). Each group must be self-contained:
// splitting one library across two chunks causes "Circular chunk" warnings.
const vendorChunks = {
  react: [
    "react",
    "react-dom",
    "scheduler",
    "react-router",
    "react-router-dom",
    "@remix-run/router",
  ],
  firebase: ["firebase", "@firebase", "idb"],
  motion: ["motion", "framer-motion", "motion-dom", "motion-utils"],
};

function vendorChunk(id) {
  if (!id.includes("node_modules/")) return undefined;
  // Package name from the last node_modules/ in the path ("@scope/name" or "name")
  const parts = id.split("node_modules/").pop().split("/");
  const pkg = parts[0].startsWith("@") ? `${parts[0]}/${parts[1]}` : parts[0];
  for (const [chunk, packages] of Object.entries(vendorChunks)) {
    if (packages.some((p) => pkg === p || pkg.startsWith(p + "/"))) {
      return chunk;
    }
  }
  return undefined;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: vendorChunk,
      },
    },
  },
});
