import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${slug}/`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related services (excluding current)
  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
        { name: service.shortTitle, url: `/services/${slug}/` }
      ]} />
      <LocalBusinessSchema pageType="service" serviceName={service.title} />
      <FAQSchema faqs={service.faqs} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-950/95 via-dark-950/90 to-accent-900/40" />
        </div>

        {/* Gold Accent Glow */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="text-6xl mb-4 animate-fade-in-up">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white animate-fade-in-up">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link href="/quote/" className="btn-primary btn-glow">
                Get a Free Quote
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary border-accent-500/50 text-accent-400 hover:bg-accent-500/10 hover:border-accent-500">
                Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About This Service */}
              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                  About Our {service.shortTitle} Services
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-dark-900 border border-dark-800 rounded-lg hover:border-accent-500/30 transition-all duration-300"
                    >
                      <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  Benefits of Our {service.shortTitle}
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-accent-500/30">
                        <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
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
                  <h3 className="text-xl font-bold mb-3">Get a Free {service.shortTitle} Quote</h3>
                  <p className="text-dark-950/80 mb-4">
                    Receive a no-obligation quote for your Florida transaction.
                  </p>
                  <Link
                    href="/quote/"
                    className="block w-full bg-dark-950 text-white text-center py-3 rounded-lg font-bold hover:bg-dark-900 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Contact Card */}
                <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Need Help?</h3>
                  <p className="text-gray-400 mb-4">
                    Our team is ready to answer your questions about {service.shortTitle.toLowerCase()}.
                  </p>
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

                {/* Related Services */}
                <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/services/${related.slug}/`}
                          className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors p-2 rounded-lg hover:bg-dark-800"
                        >
                          <span className="text-xl">{related.icon}</span>
                          <span>{related.shortTitle}</span>
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
            Ready for Professional {service.shortTitle}?
          </h2>
          <p className="text-xl text-dark-950/80 mb-8 max-w-2xl mx-auto">
            Experience the Town & Country Title Guaranty difference. Contact us today to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote/" className="inline-flex items-center justify-center px-8 py-4 bg-dark-950 text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-dark-950 text-dark-950 font-bold rounded-lg hover:bg-dark-950/10 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
