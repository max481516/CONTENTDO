import { Metadata } from "next";

/**
 * Site-wide metadata configuration for SEO optimization
 * Targeting Russian market (Yandex priority)
 */

const siteUrl = "https://contentdo.ru";

export const siteMetadata: Metadata = {
  // Basic metadata
  title: {
    default: "CONTENTDO — Видеопродакшн в Москве: каскадёры, трюки",
    template: "%s | CONTENTDO",
  },

  description:
    "Полный цикл видеопродакшна: реклама и клипы, экшн-сцены, постановка трюков и каскадёры. Сценарий, съёмка, монтаж, графика и звук — под ключ.",

  // Author and copyright
  authors: [{ name: "CONTENTDO" }],
  creator: "CONTENTDO",
  publisher: "CONTENTDO",
  metadataBase: new URL(siteUrl),

  // Robots directives (additional to robots.ts)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (for social media: VK, Telegram, WhatsApp, etc.)
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "CONTENTDO",
    title: "CONTENTDO — Видеопродакшн в Москве: каскадёры, трюки",
    description:
      "Полный цикл видеопродакшна: реклама и клипы, экшн-сцены, постановка трюков и каскадёры. Сценарий, съёмка, монтаж, графика и звук — под ключ.",
    images: [
      {
        url: `${siteUrl}/og-logo.png`,
        width: 1200,
        height: 630,
        alt: "CONTENTDO — Видеопродакшн, каскадеры",
      },
    ],
  },

  // Twitter Card (also used by some other platforms)
  twitter: {
    card: "summary_large_image",
    title: "CONTENTDO — Видеопродакшн в Москве: каскадёры, трюки",
    description:
      "Полный цикл видеопродакшна: реклама и клипы, экшн-сцены, постановка трюков и каскадёры. Сценарий, съёмка, монтаж, графика и звук — под ключ.",
    images: [`${siteUrl}/og-logo.png`],
  },

  // Additional metadata
  alternates: {
    canonical: siteUrl,
  },

  // Verification tags (you'll add these later when you register with Yandex)
  // verification: {
  //   yandex: 'your_yandex_verification_code',
  //   google: 'your_google_verification_code',
  // },

  // For better categorization
  category: "Video Production",
};
