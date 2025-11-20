import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Define your main routes here
  const routes = [""].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: currentDate,
  }));

  return [...routes];
}
