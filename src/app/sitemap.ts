import type { MetadataRoute } from 'next';

/**
 * Dynamic sitemap for CONTENTDO
 * Single-page site for now — include root URL. Extend when new routes are added.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://contentdo.ru';
  const now = new Date();

  return [
    {
      url: origin,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
