export default function OrganizationSchema() {
  const origin = "https://contentdo.ru";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CONTENTDO",
    url: origin,
    logo: `${origin}/android-chrome-512x512.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
