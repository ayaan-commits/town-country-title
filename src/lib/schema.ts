// Schema.org JSON-LD markup generators for SEO
import { companyInfo } from '@/data/company';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://town-country-title.vercel.app/#organization",
  "name": "Town & Country Title Guaranty",
  "url": "https://town-country-title.vercel.app",
  "logo": "https://town-country-title.vercel.app/logo.png",
  "description": "Florida title insurance and closing services since 1976. Serving all 67 Florida counties with mobile closings, title searches, and escrow services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1779 N University Dr STE 202",
    "addressLocality": "Pembroke Pines",
    "addressRegion": "FL",
    "postalCode": "33024",
    "addressCountry": "US"
  },
  "telephone": "(954) 914-5343",
  "email": "townandcountrytitleguaranty@gmail.com",
  "foundingDate": "1976",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 5,
    "maxValue": 20
  },
  "areaServed": {
    "@type": "State",
    "name": "Florida",
    "containedInPlace": {
      "@type": "Country",
      "name": "United States"
    }
  },
  "knowsAbout": [
    "Title Insurance",
    "Real Estate Closings",
    "Title Search",
    "Escrow Services",
    "Refinancing",
    "Commercial Title Services"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://town-country-title.vercel.app/#localbusiness",
  "name": "Town & Country Title Guaranty",
  "image": "https://town-country-title.vercel.app/office.jpg",
  "description": "Florida's trusted title insurance and closing services company since 1976.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1779 N University Dr STE 202",
    "addressLocality": "Pembroke Pines",
    "addressRegion": "FL",
    "postalCode": "33024",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.0112,
    "longitude": -80.2356
  },
  "url": "https://town-country-title.vercel.app",
  "telephone": "(954) 914-5343",
  "email": "townandcountrytitleguaranty@gmail.com",
  "priceRange": "$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00",
      "description": "By appointment only"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Title Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Title Insurance",
          "description": "Owner's and Lender's title insurance policies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Estate Closing",
          "description": "Professional closing services with mobile closing options"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Title Search",
          "description": "Comprehensive title searches and examinations"
        }
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://town-country-title.vercel.app/#website",
  "url": "https://town-country-title.vercel.app",
  "name": "Town & Country Title Guaranty",
  "description": "Florida Title Insurance & Closing Services",
  "publisher": {
    "@id": "https://town-country-title.vercel.app/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://town-country-title.vercel.app/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@id": "https://town-country-title.vercel.app/#organization"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "description": service.description,
    "url": service.url
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateLocalBusinessSchemaForCounty(county: {
  name: string;
  slug: string;
  cities?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": `Town & Country Title Guaranty - ${county.name} County`,
    "description": `Title insurance and closing services in ${county.name} County, Florida`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pembroke Pines",
      "addressRegion": "FL",
      "postalCode": "33024",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${county.name} County, Florida`
    },
    "parentOrganization": {
      "@id": "https://town-country-title.vercel.app/#organization"
    },
    "url": `https://town-country-title.vercel.app/locations/${county.slug}/`,
    "telephone": "(954) 914-5343"
  };
}
