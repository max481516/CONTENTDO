export default function OrganizationSchema() {
  const origin = "https://contentdo.ru";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CONTENTDO",
    url: origin,
    logo: `${origin}/android-chrome-512x512.png`,
    sameAs: [
      "https://m.vk.com/contentdo",
      "https://www.instagram.com/content_do",
      "https://www.youtube.com/@SkillQuant"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Москва",
      addressCountry: "RU"
    },
    areaServed: "RU-MOW",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: ["ru"],
        url: origin
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
