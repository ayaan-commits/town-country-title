'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { companyInfo } from '@/data/company';
import { floridaCounties } from '@/data/counties';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Shield, Clock, MapPin, Users, Check, ArrowRight, Phone, Star, Calculator } from 'lucide-react';
import { ClosingCostCalculator } from '@/components/ClosingCostCalculator';

const popularRegions = [
  { name: 'South Florida', counties: ['Miami-Dade', 'Broward', 'Palm Beach'] },
  { name: 'Tampa Bay', counties: ['Hillsborough', 'Pinellas', 'Pasco'] },
  { name: 'Central Florida', counties: ['Orange', 'Osceola', 'Seminole'] },
  { name: 'Southwest Florida', counties: ['Lee', 'Collier', 'Sarasota'] },
];

const affiliations = ['Florida Bar Member', 'ALTA Member', 'BBB Accredited', 'First American', 'Old Republic', 'Stewart Title'];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - With Calculator */}
      <section className="py-16 lg:py-24 bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Content */}
            <div>
              <p className="text-accent-500 font-medium mb-4">
                Florida Title Insurance & Closing Services
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Your Florida Title Experts Since 1976
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We handle title insurance and real estate closings across all 67 Florida counties.
                Straightforward service, transparent pricing, and closings at your location.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/calculator/" className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Calculate Closing Costs
                </Link>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="btn-secondary px-8 py-4 text-lg inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {companyInfo.phone}
                </a>
              </div>

              {/* Simple Stats */}
              <div className="flex flex-wrap gap-x-12 gap-y-4 pt-8 border-t border-dark-800">
                <div>
                  <div className="text-2xl font-bold text-white">49 Years</div>
                  <div className="text-sm text-gray-500">In Business</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">67 Counties</div>
                  <div className="text-sm text-gray-500">Statewide Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-sm text-gray-500">Closings Completed</div>
                </div>
              </div>
            </div>

            {/* Right - Mini Calculator */}
            <div className="lg:sticky lg:top-32">
              <ClosingCostCalculator variant="mini" />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations - Scrolling Marquee */}
      <section className="py-6 bg-dark-900 border-y border-dark-800 overflow-hidden">
        <div className="flex animate-marquee">
          {[...affiliations, ...affiliations].map((name, index) => (
            <span key={index} className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300 whitespace-nowrap px-8">
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Services Section - Asymmetric Layout */}
      <section className="py-24 bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Heading */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Title & Closing Services
              </h2>
              <p className="text-gray-400 mb-6">
                Everything you need for a smooth Florida real estate transaction.
              </p>
              <Link
                href="/services/"
                className="text-accent-500 hover:text-accent-400 font-medium inline-flex items-center gap-2"
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - Services List */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {services.slice(0, 6).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className="group p-6 bg-dark-900 rounded-lg border border-dark-800 hover:border-dark-600 transition-colors"
                  >
                    <ServiceIcon slug={service.slug} className="w-6 h-6 text-gray-500 mb-4" />
                    <h3 className="font-semibold text-white mb-2 group-hover:text-accent-500 transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Simple Two Column */}
      <section className="py-24 bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Why Florida Trusts Us
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Since 1976, we&apos;ve helped thousands of Floridians close on their properties
                with confidence. No surprises, no hidden fees—just professional service.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Clock, title: 'Since 1976', desc: '49 years of Florida expertise' },
                  { icon: MapPin, title: 'Mobile Closings', desc: 'We come to your location' },
                  { icon: Shield, title: 'Full Protection', desc: 'Comprehensive title insurance' },
                  { icon: Users, title: 'Local Team', desc: 'Florida-based professionals' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - CTA Box */}
            <div className="bg-dark-800 rounded-xl p-8 lg:p-10 border border-dark-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get Your Free Quote
              </h3>
              <p className="text-gray-400 mb-8">
                Receive a detailed title insurance quote within 24 hours.
                Transparent pricing with no hidden fees.
              </p>

              <ul className="space-y-3 mb-8">
                {['Free, no-obligation quote', 'Transparent pricing', 'Expert consultation', 'Fast turnaround'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/quote/" className="btn-primary w-full py-4 text-center">
                Request Free Quote
              </Link>

              <p className="text-center text-gray-500 text-sm mt-4">
                Or call{' '}
                <a href={`tel:${companyInfo.phone}`} className="text-accent-500 hover:underline">
                  {companyInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Clean Grid */}
      <section className="py-24 bg-dark-950">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                Service Areas
              </h2>
              <p className="text-gray-400">Covering all 67 Florida counties</p>
            </div>
            <Link
              href="/locations/"
              className="text-accent-500 hover:text-accent-400 font-medium inline-flex items-center gap-2"
            >
              View all locations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {popularRegions.map((region) => (
              <div key={region.name}>
                <h3 className="font-semibold text-white mb-4">{region.name}</h3>
                <ul className="space-y-2">
                  {region.counties.map((county) => {
                    const countyData = floridaCounties.find(c => c.name === county);
                    return (
                      <li key={county}>
                        <Link
                          href={`/locations/${countyData?.slug}/`}
                          className="text-gray-500 hover:text-white text-sm transition-colors"
                        >
                          {county} County
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Varied Layout */}
      <section className="py-24 bg-dark-900">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              Client Reviews
            </h2>
            <p className="text-gray-400">What our clients say about working with us</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured Testimonial - Large */}
            <div className="lg:col-span-2 bg-dark-800 rounded-xl p-8 lg:p-10 border border-dark-700">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                &ldquo;Town & Country made our first home purchase so smooth. They came to our house
                for the closing and explained everything clearly. Highly recommend!&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-white">Maria S.</div>
                  <div className="text-sm text-gray-500">First-Time Homebuyer, Miami-Dade</div>
                </div>
              </div>
            </div>

            {/* Smaller Testimonials */}
            <div className="space-y-6">
              <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &ldquo;Professional and quick turnaround. As a realtor, I recommend them to all my clients.&rdquo;
                </p>
                <div className="text-sm">
                  <span className="text-white font-medium">Robert T.</span>
                  <span className="text-gray-500"> · Real Estate Agent</span>
                </div>
              </div>

              <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-accent-500 fill-accent-500' : 'text-accent-500 fill-accent-500/50'}`} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &ldquo;Found an old lien that could have caused major problems. Their thorough search saved us.&rdquo;
                </p>
                <div className="text-sm">
                  <span className="text-white font-medium">James K.</span>
                  <span className="text-gray-500"> · Property Investor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Clean, Solid Background */}
      <section className="py-20 bg-accent-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-950 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-dark-950/70 text-lg mb-8 max-w-xl mx-auto">
            Get your free title insurance quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="px-8 py-4 bg-dark-950 text-white font-semibold rounded-lg hover:bg-dark-900 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-4 bg-transparent text-dark-950 font-semibold rounded-lg border-2 border-dark-950/20 hover:border-dark-950/40 transition-colors"
            >
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
