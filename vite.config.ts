// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss,
// nitro, path aliases, etc. — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export: "/" is prerendered to dist/client/index.html at build time;
// scripts/static-export.mjs then keeps only those static files in dist/.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
