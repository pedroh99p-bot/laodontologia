import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const publicSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim().replace(
    /\/+$/,
    "",
  );
  const lines = ["User-agent: *", "Allow: /", "Disallow: /obrigado/"];

  if (publicSiteUrl) {
    lines.push(`Sitemap: ${publicSiteUrl}/sitemap-index.xml`);
  }

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
