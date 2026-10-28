/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OBELIKA_YOUTUBE_URL?: string;
  readonly VITE_OBELIKA_YOUTUBE_CHANNEL_ID?: string;
  readonly VITE_OBELIKA_FEATURED_VIDEO_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
