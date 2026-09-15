import type { MetadataRoute } from "next";
import { FORMS_ENABLED, LEGAL_DOCS, OPERATOR } from "@/legal/operator";

/**
 * Dynamic sitemap for CONTENTDO: the single landing page plus the legal
 * documents required by 152-ФЗ. Extend when new routes are added.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = OPERATOR.siteUrl;

  return [
    {
      url: origin,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${origin}${LEGAL_DOCS.privacy.path}`,
      lastModified: new Date(LEGAL_DOCS.privacy.updatedAt),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // The consent document is only relevant while the forms are live
    ...(FORMS_ENABLED
      ? [
          {
            url: `${origin}${LEGAL_DOCS.consent.path}`,
            lastModified: new Date(LEGAL_DOCS.consent.updatedAt),
            changeFrequency: "yearly" as const,
            priority: 0.3,
          },
        ]
      : []),
  ];
}
