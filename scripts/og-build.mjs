#!/usr/bin/env node
// Builds per-story share cards (dist/og/<id>.png) and per-story HTML (dist/story/<id>.html) with OG tags.
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://opak-news.haitialways.workers.dev";
const load = async (f, n) => { const o = await build({ entryPoints: [path.join(root, f)], bundle: true, write: false, format: "esm", platform: "node" });
  return (await import("data:text/javascript;base64," + Buffer.from(o.outputFiles[0].text).toString("base64")))[n]; };
const stories = (await load("src/data/stories.ts", "STORIES")).filter((s) => !s.isSample);
const topics = await load("src/data/topics.ts", "TOPICS");
const dist = path.join(root, "dist");
fs.mkdirSync(path.join(dist, "og"), { recursive: true }); fs.mkdirSync(path.join(dist, "story"), { recursive: true });
const tpl = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const logo = path.join(root, "scripts/og-logo.png");
for (const s of stories) {
  const sec = topics.find((t) => t.id === s.topic)?.label.fr ?? "";
  const h = s.headline.fr, b = s.brief.fr;
  const mh = (m, w) => +execFileSync("convert", ["-background", "none", "-size", `${w}x`, `pango:${m}`, "-format", "%h", "info:"]).toString();
  let hs = 60; while (hs > 40 && mh(`<span font="Gelasio Bold ${hs}">${esc(h)}</span>`, 1080) > 240) hs -= 4;
  const room = 560 - (130 + mh(`<span font="Gelasio Bold ${hs}">${esc(h)}</span>`, 1080));
  let bt = b; while (bt.length > 20 && mh(`<span font="DejaVu Sans 23">${esc(bt)}</span>`, 940) > room) bt = bt.slice(0, -12).replace(/\s+\S*$/, "").replace(/[\s,;:.…]+$/, "") + "…";
  const png = path.join(dist, "og", `${s.id}.png`);
  execFileSync("convert", ["-size", "1200x630", "xc:#0b1f33",
    "(", "-size", "1200x10", "xc:#00209f", ")", "-geometry", "+0+0", "-composite",
    "(", "-size", "1200x10", "xc:#d21034", ")", "-geometry", "+0+10", "-composite",
    "(", "-background", "none", "-size", "980x", `pango:<span font="DejaVu Sans Bold 19" foreground="#8fb3ff" letter_spacing="2000">${esc(sec.toUpperCase())}</span>`, ")", "-geometry", "+60+60", "-composite",
    "(", "-background", "none", "-size", "1080x", `pango:<span font="Gelasio Bold ${hs}" foreground="#ffffff">${esc(h)}</span>`, ")", "-geometry", "+60+110", "-composite",
    "-write", "mpr:base", "+delete", "mpr:base", png]);
  // measure headline height to place teaser
  const hh = +execFileSync("convert", ["-background", "none", "-size", "1080x", `pango:<span font="Gelasio Bold ${hs}">${esc(h)}</span>`, "-format", "%h", "info:"]).toString();
  execFileSync("convert", [png,
    "(", "-background", "none", "-size", "940x", `pango:<span font="DejaVu Sans 23" foreground="#d6deea">${esc(bt)}</span>`, ")", "-geometry", `+60+${130 + hh}`, "-composite",
    "(", "-background", "none", "-size", "900x", `pango:<span font="DejaVu Sans 18" foreground="#8fa3bd">opak-news.haitialways.workers.dev</span>`, ")", "-geometry", "+60+580", "-composite",
    logo, "-gravity", "southeast", "-geometry", "+40+30", "-composite", png]);
  const url = `${SITE}/story/${s.id}`, img = `${SITE}/og/${s.id}.png`;
  const meta = `<meta property="og:type" content="article" /><meta property="og:site_name" content="Opak News" /><meta property="og:locale" content="fr_FR" />
    <meta property="og:url" content="${url}" /><meta property="og:title" content="${esc(h)}" /><meta property="og:description" content="${esc(b)}" />
    <meta property="og:image" content="${img}" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${esc(h)}" /><meta name="twitter:description" content="${esc(b)}" /><meta name="twitter:image" content="${img}" />
    <meta name="description" content="${esc(b)}" /><title>${esc(h)} | Opak News</title>`;
  const html = tpl.replace(/<meta property="og:[^>]*>\s*/g, "").replace(/<meta name="twitter:[^>]*>\s*/g, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, "").replace(/<title>.*?<\/title>/, meta);
  fs.writeFileSync(path.join(dist, "story", `${s.id}.html`), html);
}
console.log(`OG: ${stories.length} cards + pages`);
