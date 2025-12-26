import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Title Insurance & Closing Services in Florida',
  description: 'Comprehensive title insurance and closing services across Florida. Title searches, escrow services, residential & commercial closings. Get your free quote today.',
  alternates: {
    canonical: '/services/'
  }
};

// Categorize services
const coreServices = services.filter(s =>
  ['title-insurance', 'title-search', 'closing-services', 'escrow-services'].includes(s.slug)
);
const specializedServices = services.filter(s =>
  ['commercial-title-services', 'residential-title-services', 'refinancing-services', 'lien-search-services'].includes(s.slug)
);

const stats = [
  { value: '50K+', label: 'Closings Completed' },
  { value: '99+', label: 'Years Combined Experience' },
  { value: '67', label: 'Florida Counties Served' },
  { value: '24hr', label: 'Quote Turnaround' },
];

const benefits = [
  {
    icon: '🛡️',
    title: 'Full Protection',
    description: 'Comprehensive coverage against title defects, liens, and ownership disputes'
  },
  {
    icon: '⚡',
    title: 'Fast & Efficient',
    description: 'Streamlined processes with quick turnaround times for all transactions'
  },
  {
    icon: '💰',
    title: 'Competitive Rates',
    description: 'Transparent pricing with no hidden fees - always the best value'
  },
  {
    icon: '🤝',
    title: 'Expert Support',
    description: 'Dedicated professionals guiding you through every step'
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Get Your Free Quote',
    description: 'Submit your property details online or call us. Receive a comprehensive quote within 24 hours.',
    icon: '📝',
  },
  {
    step: '02',
    title: 'Title Search & Examination',
    description: 'Our experts conduct thorough searches of public records to uncover any potential issues.',
    icon: '🔍',
  },
  {
    step: '03',
    title: 'Issue Title Commitment',
    description: 'We resolve any title issues and issue your commitment, ensuring a clear path to closing.',
    icon: '📋',
  },
  {
    step: '04',
    title: 'Close & Celebrate',
    description: 'Sign documents at your convenience - we come to you! Then celebrate your new property.',
    icon: '🎉',
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' }
      ]} />

      {/* Hero Section - Dark Theme */}
      <section className="relative bg-dark-950 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Gold accent orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-accent-500/5 to-dark-800/50 rounded-full blur-3xl"></div>

        <div className="container-custom py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-dark-900/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-dark-700">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent-400">Trusted Since 1976</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Professional Title
                <span className="block text-gold-gradient">
                  Services
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                From title insurance to closings, we provide comprehensive solutions
                that protect your investment and ensure smooth transactions across all 67 Florida counties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote/"
                  className="btn-primary btn-glow inline-flex items-center justify-center gap-2 px-8 py-4"
                >
                  Get Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-dark-700 text-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-dark-800 hover:border-accent-500/50 transition-all"
                >
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-900/80 backdrop-blur-sm rounded-2xl p-6 border border-dark-700 hover:border-accent-500/30 hover:shadow-glow transition-all"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-dark-800 border border-dark-700 hover:border-accent-500/30 hover:shadow-glow transition-all group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 rounded-full text-sm font-medium mb-4 border border-accent-500/20">
              Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Essential Title & Closing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The foundation of every successful real estate transaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group relative bg-dark-900 rounded-3xl hover:shadow-glow transition-all duration-300 overflow-hidden border border-dark-800 hover:border-accent-500/30"
              >
                {/* Service Image Background */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center text-3xl shadow-glow flex-shrink-0 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-xs bg-dark-800 text-gray-300 px-3 py-1 rounded-full border border-dark-700"
                          >
                            <svg className="w-3 h-3 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-accent-400 font-semibold group-hover:gap-3 transition-all">
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 rounded-full text-sm font-medium mb-4 border border-accent-500/20">
              Specialized Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Tailored Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized expertise for unique transaction types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group bg-dark-800 rounded-2xl p-6 hover:shadow-glow transition-all duration-300 border border-dark-700 hover:border-accent-500/30"
              >
                <div className="w-14 h-14 bg-dark-700 group-hover:bg-accent-500/20 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors border border-dark-600 group-hover:border-accent-500/30">
                  {service.icon}
                </div>
                <h3 className="font-bold text-white group-hover:text-accent-400 transition-colors mb-2">
                  {service.shortTitle}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-accent-400 text-sm font-medium group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 rounded-full text-sm font-medium mb-4 border border-accent-500/20">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Four simple steps from quote to closing
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 rounded-full opacity-30" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-dark-900 rounded-2xl p-6 border border-dark-800 hover:border-accent-500/30 hover:shadow-glow transition-all group">
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-dark-950 font-bold text-lg mb-4 shadow-glow group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>

                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <svg className="w-6 h-6 text-accent-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-dark-900 border-y border-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-white text-lg mb-2">Industry Leaders</h3>
              <p className="text-gray-500 text-sm">Member of ALTA and Florida Land Title Association</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-white text-lg mb-2">5-Star Rated</h3>
              <p className="text-gray-500 text-sm">Consistently rated 4.9+ by our clients on Google</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-white text-lg mb-2">Fully Insured</h3>
              <p className="text-gray-500 text-sm">Backed by top underwriters for your protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-600 via-accent-700 to-accent-800 text-dark-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-dark-950 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-dark-950 rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-dark-950/80 mb-8">
              Get your free, no-obligation quote today. Our team is ready to help
              make your real estate transaction smooth and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center gap-2 bg-dark-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-dark-900 transition-all shadow-lg"
              >
                Get Your Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 border-2 border-dark-950/30 text-dark-950 px-8 py-4 rounded-xl font-bold hover:bg-dark-950/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-6 text-dark-950/60 text-sm">
              Or call us directly at{' '}
              <a href={`tel:${companyInfo.phone}`} className="text-dark-950 font-medium hover:underline">
                {companyInfo.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
