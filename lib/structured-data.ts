import { siteConfig } from '@/data/site';

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SahulatKaar",
    description:
      "Pakistan mein task management service. Documents, shopping, healthcare - sab kuch handle karte hain.",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 30.3753,
        longitude: 69.3451,
      },
    },
    priceRange: "PKR 500 - PKR 5000+",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    sameAs: [
      `https://instagram.com/${siteConfig.instagramHandle}`,
    ],
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Task Management & Errand Service",
    provider: {
      "@type": "Organization",
      name: "SahulatKaar",
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SahulatKaar Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Document Services",
            description: "NADRA, property documents, tax forms, government office submissions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Shopping & Errands",
            description: "Market shopping, bill payments, home delivery coordination",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Healthcare Services",
            description: "Medicine pickup, hospital documents, appointment scheduling",
          },
        },
      ],
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
