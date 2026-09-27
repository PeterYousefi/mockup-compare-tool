// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro, VITE_* env injection, @ path alias, React/TanStack dedupe, error logger plugins,
//     and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export: the home page is prerendered to plain HTML at build time and
// Nitro's "static" preset emits only files (no server runtime) into dist/.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  nitro: {
    preset: "static",
    output: { dir: "dist", publicDir: "dist" },
  },
});
