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
const logo = path.join(root, "scripts/og-logo-lg.png");
for (const s of stories) {
  const sec = topics.find((t) => t.id === s.topic)?.label.fr ?? "";
  const h = s.headline.fr, b = s.brief.fr;
  const mh = (m, w) => +execFileSync("convert", ["-background", "none", "-size", `${w}x`, `pango:${m}`, "-format", "%h", "info:"]).toString();
  let hs = 54; while (hs > 36 && mh(`<span font="Gelasio Bold ${hs}">${esc(h)}</span>`, 1080) > 190) hs -= 4;
  const room = 560 - (250 + mh(`<span font="Gelasio Bold ${hs}">${esc(h)}</span>`, 1080));
  let bt = b; while (bt.length > 20 && mh(`<span font="DejaVu Sans 23">${esc(bt)}</span>`, 940) > room) bt = bt.slice(0, -12).replace(/\s+\S*$/, "").replace(/[\s,;:.…]+$/, "") + "…";
  const png = path.join(dist, "og", `${s.id}.png`);
  execFileSync("convert", ["-size", "1200x630", "xc:#0b1f33",
    "(", "-size", "1200x10", "xc:#00209f", ")", "-geometry", "+0+0", "-composite",
    "(", "-size", "1200x10", "xc:#d21034", ")", "-geometry", "+0+10", "-composite",
    "(", "-background", "none", "-size", "980x", `pango:<span font="DejaVu Sans Bold 19" foreground="#8fb3ff" letter_spacing="2000">${esc(sec.toUpperCase())}</span>`, ")", "-geometry", "+60+172", "-composite",
    "(", logo, "-resize", "x110", ")", "-geometry", "+60+38", "-composite",
    "(", "-background", "none", `pango:<span font="Gelasio Bold 44" foreground="#ffffff">Opak News</span>`, ")", "-geometry", "+228+66", "-composite",
    "(", "-background", "none", "-size", "1080x", `pango:<span font="Gelasio Bold ${hs}" foreground="#ffffff">${esc(h)}</span>`, ")", "-geometry", "+60+215", "-composite",
    "-write", "mpr:base", "+delete", "mpr:base", png]);
  // measure headline height to place teaser
  const hh = +execFileSync("convert", ["-background", "none", "-size", "1080x", `pango:<span font="Gelasio Bold ${hs}">${esc(h)}</span>`, "-format", "%h", "info:"]).toString();
  execFileSync("convert", [png,
    "(", "-background", "none", "-size", "940x", `pango:<span font="DejaVu Sans 23" foreground="#d6deea">${esc(bt)}</span>`, ")", "-geometry", `+60+${245 + hh}`, "-composite",
    "(", "-background", "none", "-size", "900x", `pango:<span font="DejaVu Sans 18" foreground="#8fa3bd">opak-news.haitialways.workers.dev</span>`, ")", "-geometry", "+60+580", "-composite",
    png]);
  // Portrait 1080x1350 (4:5) card for phone feeds
  { const W = 960; let ph = 80; while (ph > 48 && mh(`<span font="Gelasio Bold ${ph}">${esc(h)}</span>`, W) > 480) ph -= 4;
    const phh = mh(`<span font="Gelasio Bold ${ph}">${esc(h)}</span>`, W);
    const ty = 390 + phh + 45, troom = 1190 - ty;
    let ts = 34; while (ts > 26 && mh(`<span font="DejaVu Sans ${ts}">${esc(b)}</span>`, W) > troom) ts -= 2;
    let pt = b; while (pt.length > 20 && mh(`<span font="DejaVu Sans ${ts}">${esc(pt)}</span>`, W) > troom) pt = pt.slice(0, -12).replace(/\s+\S*$/, "").replace(/[\s,;:.…]+$/, "") + "…";
    execFileSync("convert", ["-size", "1080x1350", "xc:#0b1f33",
      "(", "-size", "1080x14", "xc:#00209f", ")", "-geometry", "+0+0", "-composite",
      "(", "-size", "1080x14", "xc:#d21034", ")", "-geometry", "+0+14", "-composite",
      "(", "-background", "none", "-size", `${W}x`, `pango:<span font="DejaVu Sans Bold 24" foreground="#8fb3ff" letter_spacing="2500">${esc(sec.toUpperCase())}</span>`, ")", "-geometry", "+60+300", "-composite",
      "(", logo, "-resize", "x140", ")", "-geometry", "+60+64", "-composite",
      "(", "-background", "none", `pango:<span font="Gelasio Bold 60" foreground="#ffffff">Opak News</span>`, ")", "-geometry", "+272+92", "-composite",
      "(", "-size", "960x2", "xc:#22384f", ")", "-geometry", "+60+246", "-composite",
      "(", "-size", "90x5", "xc:#d21034", ")", "-geometry", "+60+355", "-composite",
      "(", "-background", "none", "-size", `${W}x`, `pango:<span font="Gelasio Bold ${ph}" foreground="#ffffff">${esc(h)}</span>`, ")", "-geometry", "+60+390", "-composite",
      "(", "-background", "none", "-size", `${W}x`, `pango:<span font="DejaVu Sans ${ts}" foreground="#d6deea">${esc(pt)}</span>`, ")", "-geometry", `+60+${ty}`, "-composite",
      "(", "-size", "960x2", "xc:#22384f", ")", "-geometry", "+60+1225", "-composite",
      "(", "-background", "none", "-size", "800x", `pango:<span font="DejaVu Sans 24" foreground="#8fa3bd">opak-news.haitialways.workers.dev</span>`, ")", "-geometry", "+60+1262", "-composite",
      path.join(dist, "og", `${s.id}-portrait.png`)]); }
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
