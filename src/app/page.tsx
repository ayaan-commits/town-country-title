import Link from 'next/link';
import { services } from '@/data/services';
import { companyInfo, statistics } from '@/data/company';
import { floridaCounties } from '@/data/counties';

// Popular Florida regions for display
const popularRegions = [
  { name: 'South Florida', counties: ['Miami-Dade', 'Broward', 'Palm Beach'] },
  { name: 'Tampa Bay', counties: ['Hillsborough', 'Pinellas', 'Pasco'] },
  { name: 'Central Florida', counties: ['Orange', 'Osceola', 'Seminole'] },
  { name: 'Southwest Florida', counties: ['Lee', 'Collier', 'Sarasota'] },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Florida&apos;s Trusted Title Insurance & Closing Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Since 1976, we&apos;ve been protecting Florida homebuyers with reliable title insurance,
              comprehensive searches, and seamless closings across all 67 counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/" className="btn-primary bg-white text-primary-500 hover:bg-primary-50 text-lg px-8 py-4">
                Get Your Free Quote
              </Link>
              <Link href="/services/" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                Explore Our Services
              </Link>
            </div>
            <p className="mt-6 text-primary-200 text-sm">
              <span className="font-semibold">Free Quotes</span> • On-Location Closings • Same-Day Title Searches Available
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Title & Closing Services</h2>
            <p className="section-subheading">
              Comprehensive title insurance and real estate closing solutions designed to protect your investment
              and ensure a smooth transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="card group hover:border-primary-500 border-2 border-transparent"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
                <div className="mt-4 text-primary-500 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services/" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Why Florida Trusts Town & Country Title Guaranty
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                For nearly five decades, we&apos;ve built our reputation on integrity, expertise, and
                unwavering commitment to our clients. When you choose us, you&apos;re choosing
                peace of mind.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed title insurance agency with comprehensive coverage.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">On-Location Closings</h3>
                    <p className="text-gray-600">We come to you - your home, office, or any convenient location.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Fast Turnaround</h3>
                    <p className="text-gray-600">Quick title searches and efficient closings to meet your timeline.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Experienced Team</h3>
                    <p className="text-gray-600">Over 99 years of combined experience in Florida real estate.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about/" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Get Your Free Title Quote Today</h3>
                <p className="text-primary-100 mb-6">
                  Receive a comprehensive quote for your real estate transaction within 24 hours.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No obligation quote
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Transparent pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Expert consultation
                  </li>
                </ul>
                <Link
                  href="/quote/"
                  className="block w-full bg-white text-primary-500 text-center py-3 rounded-lg font-bold hover:bg-primary-50 transition-colors"
                >
                  Request Free Quote
                </Link>
                <p className="text-center text-sm text-primary-200 mt-4">
                  Or call us at <a href={`tel:${companyInfo.phone}`} className="underline">{companyInfo.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Serving All 67 Florida Counties</h2>
            <p className="section-subheading">
              From Miami to Pensacola, we provide title insurance and closing services
              throughout the entire state of Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {popularRegions.map((region) => (
              <div key={region.name} className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{region.name}</h3>
                <ul className="space-y-2">
                  {region.counties.map((county) => {
                    const countyData = floridaCounties.find(c => c.name === county);
                    return (
                      <li key={county}>
                        <Link
                          href={`/locations/${countyData?.slug}/`}
                          className="text-primary-500 hover:text-primary-600 text-sm"
                        >
                          {county} County →
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations/" className="btn-secondary">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Our Clients Say</h2>
            <p className="section-subheading">
              Real feedback from real Florida homeowners and real estate professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Town & Country made our first home purchase so smooth. They came to our house for the closing
                and explained everything clearly. Highly recommend!&quot;
              </p>
              <div className="font-medium text-gray-900">Maria S.</div>
              <div className="text-sm text-gray-500">First-Time Homebuyer, Miami-Dade County</div>
            </div>

            <div className="card">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;As a realtor, I&apos;ve worked with many title companies. Town & Country stands out for their
                professionalism and quick turnaround. They never miss a deadline.&quot;
              </p>
              <div className="font-medium text-gray-900">Robert T.</div>
              <div className="text-sm text-gray-500">Real Estate Agent, Broward County</div>
            </div>

            <div className="card">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;They found an old lien that could have caused major problems. Their thorough title
                search saved us thousands. Worth every penny!&quot;
              </p>
              <div className="font-medium text-gray-900">James & Linda K.</div>
              <div className="text-sm text-gray-500">Property Investors, Palm Beach County</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="section-subheading">
                Get answers to common questions about title insurance and closing services.
              </p>
            </div>

            <div className="space-y-4">
              <details className="card group">
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg">
                  What is title insurance and why do I need it?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  Title insurance protects you from financial loss due to defects in the title of your property.
                  This includes issues like unknown liens, forgery, fraud, or errors in public records that could
                  affect your ownership rights.
                </p>
              </details>

              <details className="card group">
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg">
                  How much does title insurance cost in Florida?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  Florida title insurance rates are regulated by the state. The cost is based on the property&apos;s
                  purchase price or loan amount. Use our free quote calculator to get an accurate estimate for
                  your transaction.
                </p>
              </details>

              <details className="card group">
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg">
                  How long does a title search take?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  A standard title search typically takes 3-5 business days. However, complex properties or
                  those with extensive history may require additional time. We also offer expedited services
                  when needed.
                </p>
              </details>
            </div>

            <div className="text-center mt-8">
              <Link href="/faq/" className="btn-secondary">
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation title insurance quote.
            Our team is ready to assist with your Florida real estate transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote/" className="btn-primary bg-white text-primary-500 hover:bg-primary-50">
              Get Free Quote
            </Link>
            <a href={`tel:${companyInfo.phone}`} className="btn-secondary border-white text-white hover:bg-white/10">
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
