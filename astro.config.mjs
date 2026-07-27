import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const publicSiteUrl = process.env.PUBLIC_SITE_URL?.trim() || undefined;

export default defineConfig({
  output: "static",
  site: publicSiteUrl,
  integrations: publicSiteUrl ? [sitemap()] : [],
  build: {
    format: "directory",
  },
});
