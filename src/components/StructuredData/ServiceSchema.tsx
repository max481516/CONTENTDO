export default function ServiceSchema() {
  const origin = "https://contentdo.ru";
  
  const services = [
    {
      "@type": "Service",
      "serviceType": "Видеопродакшн",
      "provider": {
        "@type": "Organization",
        "name": "CONTENTDO",
        "url": origin
      },
      "areaServed": {
        "@type": "City",
        "name": "Москва"
      },
      "description": "Полный цикл видеопродакшна: реклама, музыкальные клипы, трейлеры. Съёмка, монтаж, графика, звук.",
      "availableLanguage": "ru"
    },
    {
      "@type": "Service",
      "serviceType": "Постановка трюков и каскадерские услуги",
      "provider": {
        "@type": "Organization",
        "name": "CONTENTDO",
        "url": origin
      },
      "areaServed": {
        "@type": "City",
        "name": "Москва"
      },
      "description": "Разработка и постановка экшн-сцен, хореография трюков, работа с каскадерами и экшн-операторами.",
      "availableLanguage": "ru"
    },
    {
      "@type": "Service",
      "serviceType": "Постпродакшн",
      "provider": {
        "@type": "Organization",
        "name": "CONTENTDO",
        "url": origin
      },
      "areaServed": {
        "@type": "City",
        "name": "Москва"
      },
      "description": "Монтаж, цветокоррекция, графика, визуальные эффекты и звуковое оформление.",
      "availableLanguage": "ru"
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  );
}
