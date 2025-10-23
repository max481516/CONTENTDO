import type { MetadataRoute } from 'next';

/**
 * This file dynamically generates the robots.txt for the CONTENTDO website.
 * The robots.txt file tells search engine crawlers which pages or files the crawler
 * can or can't request from your site.
 *
 * Using a .ts file instead of a static .txt file allows us to:
 * - Use environment variables for different environments (dev/staging/prod)
 * - Maintain type safety with TypeScript
 * - Dynamically adjust rules based on conditions
 *
 * Target market: Russian market - Yandex is the primary search engine
 */
export default function robots(): MetadataRoute.Robots {
  // Get the base URL from environment variable or use default
  // TODO: Update this to your actual production domain
  const origin = 'https://contentdo.ru';

  return {
    // Rules for web crawlers
    rules: [
      {
        // General rules for all crawlers
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/', // Next.js internal files
          '/api/', // API routes (if you want to hide them)
        ],
      },
      {
        // Specific rules for Yandex (primary search engine for Russian market)
        userAgent: 'Yandex',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
        ],
      },
      {
        // Specific rules for Google (secondary)
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
        ],
      },
    ],

    // The 'host' directive is important for Yandex
    // It specifies the preferred domain for the website
    host: origin,

    // Sitemap location - helps crawlers discover all pages efficiently
    sitemap: `${origin}/sitemap.xml`,
  };
}
