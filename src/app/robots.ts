import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://revelationsigns.one/sitemap.xml",
    host: "https://revelationsigns.one",
  };
}
