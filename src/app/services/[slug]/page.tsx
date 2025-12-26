import { Metadata } from 'next';
import Link from 'next/link';
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
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="text-6xl mb-4">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote/" className="btn-primary bg-white text-primary-500 hover:bg-primary-50">
                Get a Free Quote
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary border-white text-white hover:bg-white/10">
                Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About This Service */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                  About Our {service.shortTitle} Services
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Benefits of Our {service.shortTitle}
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <details key={index} className="card group">
                      <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg text-gray-900">
                        {faq.question}
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-gray-600">
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
                <div className="bg-primary-500 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Get a Free {service.shortTitle} Quote</h3>
                  <p className="text-primary-100 mb-4">
                    Receive a no-obligation quote for your Florida transaction.
                  </p>
                  <Link
                    href="/quote/"
                    className="block w-full bg-white text-primary-500 text-center py-3 rounded-lg font-bold hover:bg-primary-50 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Contact Card */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Our team is ready to answer your questions about {service.shortTitle.toLowerCase()}.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-3 text-primary-500 hover:text-primary-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {companyInfo.phone}
                    </a>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="flex items-center gap-3 text-primary-500 hover:text-primary-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Us
                    </a>
                  </div>
                </div>

                {/* Related Services */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/services/${related.slug}/`}
                          className="flex items-center gap-3 text-gray-700 hover:text-primary-500 transition-colors"
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
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Ready for Professional {service.shortTitle}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the Town & Country Title Guaranty difference. Contact us today to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote/" className="btn-primary">
              Get Free Quote
            </Link>
            <Link href="/contact/" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
