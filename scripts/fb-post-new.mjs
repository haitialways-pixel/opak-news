#!/usr/bin/env node
// Posts each story not yet in scripts/fb-posted.json to the Opak News Facebook Page.
// Usage: node scripts/fb-post-new.mjs [--dry-run] [--seed]
// Token: FB_PAGE_TOKEN env or /home/box/.secrets/fb_page_token (never logged).
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const stateFile = path.join(root, "scripts/fb-posted.json");
const SITE = "https://opak-news.haitialways.workers.dev";
const dry = process.argv.includes("--dry-run");
const seed = process.argv.includes("--seed");

const out = await build({
  entryPoints: [path.join(root, "src/data/stories.ts")],
  bundle: true, write: false, format: "esm", platform: "node",
});
const mod = await import("data:text/javascript;base64," + Buffer.from(out.outputFiles[0].text).toString("base64"));
const stories = mod.STORIES.filter((s) => !s.isSample);

const state = fs.existsSync(stateFile) ? JSON.parse(fs.readFileSync(stateFile, "utf8")) : { posted: [] };
const done = new Set(state.posted);
const save = () => fs.writeFileSync(stateFile, JSON.stringify({ posted: [...done] }, null, 2) + "\n");

if (seed) {
  stories.forEach((s) => done.add(s.id)); save();
  console.log(`Seeded ${done.size} story ids; nothing posted.`); process.exit(0);
}

const pending = stories
  .filter((s) => !done.has(s.id))
  .sort((a, b) => (a.publishedTime || a.publishedAt).localeCompare(b.publishedTime || b.publishedAt));
console.log(`${pending.length} new story(ies) to post${dry ? " (dry run)" : ""}.`);
if (!pending.length || dry) { pending.forEach((s) => console.log(" -", s.id)); process.exit(0); }

const read = (f) => fs.readFileSync(f, "utf8").trim();
const token = process.env.FB_PAGE_TOKEN || read("/home/box/.secrets/fb_page_token");
const pageId = process.env.FB_PAGE_ID || read("/home/box/.secrets/fb_page_id");

let failed = 0;
for (const s of pending) {
  const body = new URLSearchParams({
    message: `${s.headline.fr}\n\n${s.brief.fr}\n\nPlus d’actualités sur opak-news.haitialways.workers.dev`,
    link: `${SITE}/story/${s.id}`,
    access_token: token,
  });
  const res = await fetch(`https://graph.facebook.com/v21.0/${pageId}/feed`, { method: "POST", body });
  const j = await res.json().catch(() => ({}));
  if (res.ok && j.id) { done.add(s.id); save(); console.log(`Posted ${s.id} -> ${j.id}`); }
  else { failed++; console.error(`Failed ${s.id}: ${res.status} ${j.error?.message ?? ""}`); }
}
process.exit(failed ? 1 : 0);
