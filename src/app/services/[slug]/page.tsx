import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Phone, Mail, ChevronDown, Check, ArrowRight } from 'lucide-react';

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
      <section className="relative py-20 overflow-hidden bg-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="w-16 h-16 bg-accent-400/20 rounded-xl flex items-center justify-center mb-4">
              <ServiceIcon slug={service.slug} className="w-8 h-8 text-accent-400" />
            </div>
            <span className="eyebrow mb-4 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {service.title}
            </h1>
            <p className="text-xl text-primary-200 mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote/" className="btn-primary">
                Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About This Service */}
              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold text-primary-900 mb-4">
                  About Our {service.shortTitle} Services
                </h2>
                <p className="text-primary-600 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white border border-primary-100 rounded-xl shadow-soft"
                    >
                      <div className="w-6 h-6 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-sage-500" />
                      </div>
                      <span className="text-primary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">
                  Benefits of Our {service.shortTitle}
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent-500" />
                      </div>
                      <span className="text-primary-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white border border-primary-100 rounded-xl p-5 shadow-soft hover:shadow-elevated transition-all duration-300"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg text-primary-900">
                        {faq.question}
                        <ChevronDown className="w-5 h-5 text-accent-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                      </summary>
                      <p className="mt-4 text-primary-600 leading-relaxed">
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
                <div className="bg-accent-400 text-white rounded-2xl p-6 shadow-elevated">
                  <h3 className="text-xl font-heading font-bold mb-3">Get a Free {service.shortTitle} Quote</h3>
                  <p className="text-white/90 mb-4">
                    Receive a no-obligation quote for your Florida transaction.
                  </p>
                  <Link
                    href="/quote/"
                    className="block w-full bg-primary-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Contact Card */}
                <div className="bg-white border border-primary-100 rounded-2xl p-6 shadow-soft">
                  <h3 className="text-lg font-heading font-bold text-primary-900 mb-4">Need Help?</h3>
                  <p className="text-primary-600 mb-4">
                    Our team is ready to answer your questions about {service.shortTitle.toLowerCase()}.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-3 text-primary-700 hover:text-accent-500 transition-colors"
                    >
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent-500" />
                      </div>
                      {companyInfo.phone}
                    </a>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="flex items-center gap-3 text-primary-700 hover:text-accent-500 transition-colors"
                    >
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent-500" />
                      </div>
                      Email Us
                    </a>
                  </div>
                </div>

                {/* Related Services */}
                <div className="bg-white border border-primary-100 rounded-2xl p-6 shadow-soft">
                  <h3 className="text-lg font-heading font-bold text-primary-900 mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/services/${related.slug}/`}
                          className="flex items-center gap-3 text-primary-600 hover:text-accent-500 transition-colors p-2 rounded-lg hover:bg-cream"
                        >
                          <ServiceIcon slug={related.slug} className="w-5 h-5 text-primary-400" />
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
      <section className="py-20 bg-accent-400">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready for Professional {service.shortTitle}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the Town & Country Title Guaranty difference. Contact us today to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all duration-300 shadow-lg"
            >
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
