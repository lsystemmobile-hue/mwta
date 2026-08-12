import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the Vercel production configuration and assets in sync", async () => {
  const [page, layout, packageJson, vercelConfig] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
    access(new URL("../public/media/video_hero.mp4", import.meta.url)),
    access(new URL("../public/og-gold.png", import.meta.url)),
  ]);

  assert.equal(JSON.parse(vercelConfig).framework, "nextjs");
  assert.equal(JSON.parse(packageJson).scripts.build, "next build");
  assert.match(page, /src="\/media\/video_hero\.mp4"/);
  assert.match(page, /<RevealObserver \/>/);
  assert.match(layout, /url:\s*"\/og-gold\.png"/);
  assert.match(layout, /VERCEL_PROJECT_PRODUCTION_URL/);
  assert.match(page, /https:\/\/wa\.me\/551532835300/i);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);
});
