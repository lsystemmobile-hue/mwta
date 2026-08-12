import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the MWTA website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>MWTA Segurança em Laranjal Paulista/i);
  assert.match(html, /Segurança e tranquilidade para o que importa\./);
  assert.match(html, /<source src="\/media\/video_hero\.mp4" type="video\/mp4"\/>/i);
  assert.match(html, /https:\/\/mwta\.com\.br\/og-gold\.png/i);
  assert.match(html, /https:\/\/wa\.me\/551532835300/i);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps production assets and source references in sync", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    access(new URL("../public/media/video_hero.mp4", import.meta.url)),
    access(new URL("../public/og-gold.png", import.meta.url)),
  ]);

  assert.match(page, /src="\/media\/video_hero\.mp4"/);
  assert.match(page, /<RevealObserver \/>/);
  assert.match(layout, /url:\s*"\/og-gold\.png"/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);

});
