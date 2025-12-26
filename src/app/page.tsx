import Link from 'next/link';
import { services } from '@/data/services';
import { companyInfo, statistics } from '@/data/company';
import { floridaCounties } from '@/data/counties';

const popularRegions = [
  { name: 'South Florida', counties: ['Miami-Dade', 'Broward', 'Palm Beach'] },
  { name: 'Tampa Bay', counties: ['Hillsborough', 'Pinellas', 'Pasco'] },
  { name: 'Central Florida', counties: ['Orange', 'Osceola', 'Seminole'] },
  { name: 'Southwest Florida', counties: ['Lee', 'Collier', 'Sarasota'] },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Modern Split Layout */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

        <div className="container-custom py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 text-sm text-blue-600 mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Trusted by 10,000+ Florida Homeowners
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-8 leading-[1.1]">
                Close With
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Confidence</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Florida&apos;s premier title insurance company. Protecting your property investment with seamless closings since 1976.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/quote/"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Free Quote
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {companyInfo.phone}
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">67</div>
                  <div className="text-sm text-gray-500">FL Counties</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <span className="text-3xl font-bold text-gray-900">4.9</span>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Visual - Bento Style Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl shadow-blue-500/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Title Insurance</h3>
                  <p className="text-sm text-gray-600">Full protection for your property</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">10K+</div>
                  <div className="text-blue-100">Successful Closings</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl shadow-blue-500/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Fast Closings</h3>
                  <p className="text-sm text-gray-600">On your schedule, at your location</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl shadow-blue-500/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Title Search</h3>
                  <p className="text-sm text-gray-600">Thorough property research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Everything You Need for a <br className="hidden md:block" />Smooth Closing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive title and closing services tailored for Florida real estate
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large Feature Card */}
            <Link
              href="/services/title-insurance/"
              className="group md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 flex flex-col justify-between text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
            >
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-3xl font-bold mb-3">Title Insurance</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Protect your investment with comprehensive title insurance coverage that safeguards against ownership disputes and hidden claims.
                </p>
              </div>
              <div className="flex items-center gap-2 text-white/80 group-hover:text-white group-hover:gap-4 transition-all">
                <span className="font-medium">Learn more</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Standard Cards */}
            {services.slice(1, 5).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group bg-gray-50 hover:bg-white rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div>
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.shortTitle}
                  </h3>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}

            {/* Wide Card */}
            <Link
              href="/services/"
              className="group md:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 flex items-center justify-between text-white hover:shadow-xl transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">Explore All Services</h3>
                <p className="text-gray-400">8 specialized services for your needs</p>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Florida&apos;s Most Trusted Title Company
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                For nearly five decades, we&apos;ve built our reputation on integrity, expertise, and unwavering commitment to our clients.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: '🏆', title: 'Since 1976', desc: '49 years of excellence' },
                  { icon: '📍', title: 'Mobile Closings', desc: 'We come to you' },
                  { icon: '⚡', title: 'Fast Service', desc: 'Same-day available' },
                  { icon: '🤝', title: 'Expert Team', desc: '99+ years combined' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card - Glassmorphism */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg">
                  <span className="text-3xl transform -rotate-12">✨</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Get Your Free Quote Today
                </h3>
                <p className="text-gray-600 mb-8">
                  Receive a comprehensive title insurance quote within 24 hours. No obligations, transparent pricing.
                </p>

                <div className="space-y-4 mb-8">
                  {['Free, no-obligation quote', 'Transparent pricing', 'Expert consultation', 'Fast turnaround'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/quote/"
                  className="block w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Request Free Quote
                </Link>
                <p className="text-center text-gray-500 mt-4">
                  Or call <a href={`tel:${companyInfo.phone}`} className="text-blue-600 font-medium hover:underline">{companyInfo.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm font-medium rounded-full mb-4">Coverage Area</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Serving All 67 Florida Counties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Miami to Pensacola, we&apos;re your local title experts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularRegions.map((region) => (
              <div key={region.name} className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {region.name}
                </h3>
                <ul className="space-y-2">
                  {region.counties.map((county) => {
                    const countyData = floridaCounties.find(c => c.name === county);
                    return (
                      <li key={county}>
                        <Link
                          href={`/locations/${countyData?.slug}/`}
                          className="text-gray-600 hover:text-blue-600 text-sm flex items-center gap-1 group"
                        >
                          <span>{county}</span>
                          <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/locations/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              View All 67 Counties
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 text-sm font-medium rounded-full mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Loved by Florida Homeowners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'Town & Country made our first home purchase so smooth. They came to our house for the closing and explained everything clearly.', name: 'Maria S.', role: 'First-Time Homebuyer', location: 'Miami-Dade County' },
              { quote: 'As a realtor, I\'ve worked with many title companies. Town & Country stands out for their professionalism and quick turnaround.', name: 'Robert T.', role: 'Real Estate Agent', location: 'Broward County' },
              { quote: 'They found an old lien that could have caused major problems. Their thorough title search saved us thousands!', name: 'James K.', role: 'Property Investor', location: 'Palm Beach County' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Ready to Close?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get your free title insurance quote today. No obligations, just expert guidance for your Florida real estate transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-xl hover:shadow-white/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
