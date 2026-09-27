// Turns the build output into a plain static site. The prerender pass writes
// index.html straight into dist/ alongside the copied public/ assets, so all
// we do is verify it exists and strip the server-side build artifacts.
import { existsSync, rmSync } from "node:fs";

if (!existsSync("dist/index.html")) {
  console.error("static-export: dist/index.html missing — prerender failed");
  process.exit(1);
}
rmSync("dist/server", { recursive: true, force: true });
rmSync("dist/nitro.json", { force: true });
console.log("static-export: dist/ now contains only static files");
