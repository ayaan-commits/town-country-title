import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { floridaCounties, getCountyBySlug } from '@/data/counties';
import { services } from '@/data/services';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '@/components/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return floridaCounties.map((county) => ({
    slug: county.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const county = getCountyBySlug(slug);

  if (!county) {
    return {
      title: 'County Not Found',
    };
  }

  return {
    title: `Title Insurance in ${county.name} County, FL | Local Title Company`,
    description: `Professional title insurance and closing services in ${county.name} County, Florida. Serving ${county.majorCities.join(', ')} and all surrounding areas. Get your free quote today.`,
    alternates: {
      canonical: `/locations/${slug}/`
    },
    openGraph: {
      title: `Title Insurance in ${county.name} County, FL`,
      description: `Professional title insurance and closing services in ${county.name} County, Florida. Serving ${county.majorCities.join(', ')}.`,
      type: 'website',
    }
  };
}

export default async function CountyPage({ params }: Props) {
  const { slug } = await params;
  const county = getCountyBySlug(slug);

  if (!county) {
    notFound();
  }

  // Generate FAQs specific to this county
  const countyFaqs = [
    {
      question: `What title insurance services do you offer in ${county.name} County?`,
      answer: `We provide comprehensive title insurance services in ${county.name} County including owner's title insurance, lender's title insurance, title searches, closing services, escrow services, and more. We serve ${county.majorCities.join(', ')} and all surrounding areas.`
    },
    {
      question: `How much does title insurance cost in ${county.name} County, Florida?`,
      answer: `Title insurance rates in Florida are regulated by the state. The cost depends on your property's purchase price or loan amount. Contact us for a free, personalized quote for your ${county.name} County transaction.`
    },
    {
      question: `Do you offer mobile closings in ${county.name} County?`,
      answer: `Yes! We offer convenient on-location closings throughout ${county.name} County. Our team can meet you at your home, office, or any convenient location in ${county.majorCities[0]} or surrounding areas.`
    },
    {
      question: `How long does a title search take in ${county.name} County?`,
      answer: `A standard title search in ${county.name} County typically takes 3-5 business days. We have experience with ${county.name} County records and can expedite the process when needed.`
    }
  ];

  // Get nearby counties for internal linking
  const nearbyCounties = floridaCounties
    .filter(c => c.slug !== slug)
    .slice(0, 6);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Service Areas', url: '/locations/' },
        { name: `${county.name} County`, url: `/locations/${slug}/` }
      ]} />
      <LocalBusinessSchema pageType="location" locationName={`${county.name} County, Florida`} />
      <FAQSchema faqs={countyFaqs} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

        {/* Gold Accent Orbs */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="text-accent-400 mb-2 animate-fade-in-up">Title Insurance Services in</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white animate-fade-in-up">
              {county.name} County, Florida
            </h1>
            <p className="text-xl text-gray-300 mb-6 animate-fade-in-up">
              {county.description}
            </p>
            <p className="text-gray-500 mb-8 animate-fade-in-up">
              Serving: {county.majorCities.join(' • ')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link href="/quote/" className="btn-primary btn-glow">
                Get Free Quote for {county.name} County
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary border-accent-500/50 text-accent-400 hover:bg-accent-500/10 hover:border-accent-500">
                Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* County Info */}
      <section className="py-16 bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About County */}
              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Title Insurance & Closing Services in {county.name} County
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  Town & Country Title Guaranty is proud to serve {county.name} County with
                  comprehensive title insurance and real estate closing services. With a population
                  of {county.population} residents, {county.name} County is an important market
                  for Florida real estate.
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  {county.realEstateInfo}
                </p>
              </div>

              {/* Cities Served */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  Cities We Serve in {county.name} County
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {county.majorCities.map((city, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-dark-900 border border-dark-800 rounded-lg hover:border-accent-500/30 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Offered */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  Our Services in {county.name} County
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      className="flex items-center gap-3 p-4 bg-dark-900 border border-dark-800 rounded-lg hover:border-accent-500/30 hover:shadow-glow transition-all duration-300"
                    >
                      <span className="text-2xl">{service.icon}</span>
                      <span className="text-gray-300 font-medium">{service.shortTitle}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Local Landmarks */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  About {county.name} County
                </h2>
                <div className="bg-dark-900 border border-dark-800 rounded-xl p-6">
                  <p className="text-gray-400 mb-4">
                    <span className="text-accent-400 font-medium">County Seat:</span> {county.countySeats}
                  </p>
                  {county.population && (
                    <p className="text-gray-400 mb-4">
                      <span className="text-accent-400 font-medium">Population:</span> {county.population}
                    </p>
                  )}
                  <p className="text-accent-400 font-medium mb-2">Notable Landmarks & Attractions:</p>
                  <ul className="space-y-1">
                    {county.landmarks.map((landmark, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-400">
                        <span className="text-accent-500 mt-1">•</span>
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  {county.name} County Title Insurance FAQs
                </h2>
                <div className="space-y-4">
                  {countyFaqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-dark-900 border border-dark-800 rounded-xl p-5 hover:border-accent-500/30 transition-all duration-300"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg text-white">
                        {faq.question}
                        <svg className="w-5 h-5 text-accent-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quote CTA */}
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-dark-950 rounded-2xl p-6 shadow-glow">
                  <h3 className="text-xl font-bold mb-3">
                    Free Quote for {county.name} County
                  </h3>
                  <p className="text-dark-950/80 mb-4">
                    Get a no-obligation title insurance quote for your property in {county.name} County.
                  </p>
                  <Link
                    href="/quote/"
                    className="block w-full bg-dark-950 text-white text-center py-3 rounded-lg font-bold hover:bg-dark-900 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Contact */}
                <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-3 text-accent-400 hover:text-accent-300 transition-colors"
                    >
                      <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center border border-accent-500/20">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      {companyInfo.phone}
                    </a>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="flex items-center gap-3 text-accent-400 hover:text-accent-300 transition-colors"
                    >
                      <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center border border-accent-500/20">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Email Us
                    </a>
                  </div>
                </div>

                {/* Nearby Counties */}
                <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Nearby Counties</h3>
                  <ul className="space-y-2">
                    {nearbyCounties.map((nearby) => (
                      <li key={nearby.slug}>
                        <Link
                          href={`/locations/${nearby.slug}/`}
                          className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                        >
                          {nearby.name} County →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent-600 via-accent-500 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-dark-950 mb-4">
            Need Title Insurance in {county.name} County?
          </h2>
          <p className="text-xl text-dark-950/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re in {county.majorCities[0]} or anywhere in {county.name} County,
            our team is ready to help with your real estate transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-950 text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-dark-950 text-dark-950 font-bold rounded-lg hover:bg-dark-950/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
