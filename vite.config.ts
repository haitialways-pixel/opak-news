import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static SPA → build to dist; Wrangler serves via assets.directory.
// Cloudflare Vite plugin optional later if we add a Worker API.
export default defineConfig({
  plugins: [react()],
});
