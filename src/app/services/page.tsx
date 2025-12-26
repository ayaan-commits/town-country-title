import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Title Insurance & Closing Services in Florida',
  description: 'Comprehensive title insurance and closing services across Florida. Title searches, escrow services, residential & commercial closings. Get your free quote today.',
  alternates: {
    canonical: '/services/'
  }
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' }
      ]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Title Insurance & Closing Services
            </h1>
            <p className="text-xl text-primary-100">
              Comprehensive title and closing solutions designed to protect your investment
              and ensure a smooth real estate transaction in Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="card group border-2 border-transparent hover:border-primary-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="text-primary-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">How Our Process Works</h2>
            <p className="section-subheading">
              From initial contact to closing day, we make your real estate transaction simple and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Request Quote</h3>
              <p className="text-gray-600 text-sm">Submit your transaction details for a free, no-obligation quote.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Title Search</h3>
              <p className="text-gray-600 text-sm">We conduct a comprehensive search of all property records.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Issue Title</h3>
              <p className="text-gray-600 text-sm">Title commitment issued with any issues resolved.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Close & Record</h3>
              <p className="text-gray-600 text-sm">Complete closing and record documents with the county.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote or to discuss your title insurance needs.
          </p>
          <Link href="/quote/" className="btn-primary bg-white text-primary-500 hover:bg-primary-50">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
