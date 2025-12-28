import { companyInfo } from '@/data/company';

// Organization Schema - for company-wide SEO
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${companyInfo.url}/#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: companyInfo.url,
    logo: `${companyInfo.url}/images/logos/logo.svg`,
    description: companyInfo.description,
    foundingDate: companyInfo.founded.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${companyInfo.address.street} ${companyInfo.address.suite}`,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: companyInfo.address.zip,
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.phone,
      contactType: 'customer service',
      email: companyInfo.email,
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish']
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 20
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
      containedInPlace: {
        '@type': 'Country',
        name: 'United States'
      }
    },
    knowsAbout: [
      'Title Insurance',
      'Real Estate Closings',
      'Title Search',
      'Escrow Services',
      'Refinancing',
      'Commercial Title Services',
      'Mobile Closings',
      'Florida Real Estate Law'
    ],
    sameAs: [
      companyInfo.social.facebook,
      companyInfo.social.linkedin,
      companyInfo.social.google
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  pageType?: 'home' | 'service' | 'location' | 'article';
  serviceName?: string;
  locationName?: string;
  articleData?: {
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    author: string;
  };
}

export function LocalBusinessSchema({ pageType = 'home', serviceName, locationName }: LocalBusinessSchemaProps) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': `${companyInfo.url}/#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    description: companyInfo.description,
    url: companyInfo.url,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    foundingDate: companyInfo.founded.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${companyInfo.address.street} ${companyInfo.address.suite}`,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: companyInfo.address.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.0107,
      longitude: -80.2256
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    priceRange: '$$',
    image: `${companyInfo.url}/images/office.jpg`,
    areaServed: {
      '@type': 'State',
      name: 'Florida',
      containedInPlace: {
        '@type': 'Country',
        name: 'United States'
      }
    },
    serviceArea: {
      '@type': 'State',
      name: 'Florida'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Title Insurance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Title Insurance'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Title Search'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Closing Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Escrow Services'
          }
        }
      ]
    },
    sameAs: [
      companyInfo.social.facebook,
      companyInfo.social.linkedin,
      companyInfo.social.google
    ]
  };

  let schema = baseSchema;

  if (pageType === 'service' && serviceName) {
    schema = {
      ...baseSchema,
      '@type': 'ProfessionalService',
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
          provider: {
            '@type': 'LocalBusiness',
            name: companyInfo.name
          }
        }
      }
    } as typeof baseSchema;
  }

  if (pageType === 'location' && locationName) {
    schema = {
      ...baseSchema,
      areaServed: {
        '@type': 'AdministrativeArea',
        name: locationName,
        containedInPlace: {
          '@type': 'State',
          name: 'Florida'
        }
      }
    } as typeof baseSchema;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${companyInfo.url}${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: companyInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: `${companyInfo.url}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${companyInfo.url}${url}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyInfo.name,
    url: companyInfo.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${companyInfo.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
