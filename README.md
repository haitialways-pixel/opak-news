# Opak News

Mobile-first Haiti news digest (**Opak News**): 1440-style *Need to Know* + *In the Know*, Haitian Creole primary with French on every story, featured video from Obelika’s YouTube channel, and a story detail page with an ad slot under the brief.

> Sample content only in v1. Curation automation and live AdMob come later.

## Stack

- **Vite + React + TypeScript** SPA
- **React Router** for `/` and `/story/:id`
- **Cloudflare Workers Static Assets** (`wrangler` → `dist/`)

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Deploy (Cloudflare)

```bash
npx wrangler login   # once, in a browser-capable environment
npm run deploy       # build + wrangler deploy
```

Config: `wrangler.jsonc` (assets from `./dist`, SPA `not_found_handling`).

## Obelika YouTube

Edit `src/config.ts` (or set Vite env vars):

| Key | Default |
| --- | --- |
| `OBELIKA_YOUTUBE_URL` / `VITE_OBELIKA_YOUTUBE_URL` | `https://www.youtube.com/@Obelika` |
| `OBELIKA_YOUTUBE_CHANNEL_ID` / `VITE_OBELIKA_YOUTUBE_CHANNEL_ID` | `UCRii3A1yALqUcgYj4ZcssBQ` |

The front page embeds the channel **uploads playlist** (`UC…` → `UU…`) so the latest uploads appear without hard-coding a video id.

Optional `.env`:

```env
VITE_OBELIKA_YOUTUBE_URL=https://www.youtube.com/@Obelika
VITE_OBELIKA_YOUTUBE_CHANNEL_ID=UCRii3A1yALqUcgYj4ZcssBQ
```

## Content model

Stories live in `src/data/stories.ts`:

- `tier`: `need-to-know` | `quick-hit`
- `topic`: politics, development, tech, commerce, security, society
- `headline` / `brief`: `{ ht, fr }`
- `isManual`: reserved for editor-pushed stories
- `isSample`: marks placeholder copy

Topics: `src/data/topics.ts`.

## App map

| Path | What |
| --- | --- |
| `/` | Masthead, Need to Know, Featured Video, In the Know |
| `/story/:id` | Brief + language toggle + **ad placeholder under brief** |

## Still placeholder

- **Ads**: dashed AdMob/web slot under the story brief (no SDK yet)
- **Feed automation**: static sample stories; no crawler/API yet
- **Manual push UI**: data flag `isManual` ready; no editor form yet

## License

Private / unpublished unless you choose otherwise on GitHub.
