// Turns the build output into a plain static site: keeps only the
// prerendered client output (index.html, CSS, JS, images) and moves it up
// to dist/. The prerendered HTML may land at dist/client/index.html or
// directly at dist/index.html depending on the build, so handle both.
import { cpSync, existsSync, rmSync } from "node:fs";

const clientDir = existsSync("dist/client/index.html")
  ? "dist/client"
  : existsSync("dist/index.html")
    ? "dist"
    : null;

if (!clientDir) {
  console.error(
    "static-export: prerendered index.html not found in dist/client/ or dist/ — prerender failed",
  );
  process.exit(1);
}

if (clientDir === "dist/client") {
  rmSync("dist-static", { recursive: true, force: true });
  cpSync("dist/client", "dist-static", { recursive: true });
  rmSync("dist", { recursive: true, force: true });
  cpSync("dist-static", "dist", { recursive: true });
  rmSync("dist-static", { recursive: true, force: true });
} else {
  rmSync("dist/server", { recursive: true, force: true });
  rmSync("dist/nitro.json", { force: true });
}
console.log("static-export: dist/ now contains only static files");
