// Turns the build output into a plain static site: keeps only dist/client
// (prerendered index.html, CSS, JS, images) and moves it up to dist/.
import { cpSync, existsSync, rmSync } from "node:fs";

if (!existsSync("dist/client/index.html")) {
  console.error("static-export: dist/client/index.html missing — prerender failed");
  process.exit(1);
}
rmSync("dist-static", { recursive: true, force: true });
cpSync("dist/client", "dist-static", { recursive: true });
rmSync("dist", { recursive: true, force: true });
cpSync("dist-static", "dist", { recursive: true });
rmSync("dist-static", { recursive: true, force: true });
console.log("static-export: dist/ now contains only static files");
