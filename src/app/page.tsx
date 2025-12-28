'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { companyInfo } from '@/data/company';
import { floridaCounties } from '@/data/counties';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Shield, Clock, MapPin, Users, Check, ArrowRight, Phone, Star, Calculator, Car, FileCheck, Award } from 'lucide-react';
import { ClosingCostCalculator } from '@/components/ClosingCostCalculator';

const popularRegions = [
  { name: 'South Florida', counties: ['Miami-Dade', 'Broward', 'Palm Beach'] },
  { name: 'Tampa Bay', counties: ['Hillsborough', 'Pinellas', 'Pasco'] },
  { name: 'Central Florida', counties: ['Orange', 'Osceola', 'Seminole'] },
  { name: 'Southwest Florida', counties: ['Lee', 'Collier', 'Sarasota'] },
];

const credentials = [
  'Florida Bar Member',
  'ALTA Member',
  'BBB Accredited',
  'First American Title',
  'Old Republic Title',
  'Stewart Title',
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Asymmetric, Personality-Forward */}
      <section className="relative py-16 lg:py-24 bg-warm-gradient overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="lg:pr-8">
              <span className="eyebrow mb-4 block">
                Serving Florida Since 1976
              </span>

              <h1 className="mb-6">
                We handle the paperwork.
                <br />
                <span className="text-highlight">You get the keys.</span>
              </h1>

              <p className="text-xl text-primary-700 mb-8 leading-relaxed">
                Title insurance and closings across all 67 Florida counties.
                We&apos;ll even come to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/calculator/" className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Get Your Closing Costs
                </Link>
                <Link href="/services/" className="btn-ghost px-8 py-4 text-lg inline-flex items-center gap-2">
                  See How It Works
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Social Proof - Specific */}
              <div className="flex items-center gap-4 pt-6 border-t border-primary-200">
                <div className="flex -space-x-2">
                  {['M', 'R', 'J', 'S'].map((initial, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-sm font-medium text-primary-700"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-primary-600 italic">
                    &ldquo;Smoothest closing we&apos;ve ever had&rdquo;
                  </p>
                  <p className="text-xs text-primary-500">Maria S., Miami</p>
                </div>
              </div>
            </div>

            {/* Right - Stats Card + Visual */}
            <div className="relative">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl p-8 shadow-float">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-cream rounded-xl">
                    <div className="stat-number">49</div>
                    <div className="text-sm text-primary-600 mt-1">Years in Business</div>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-xl">
                    <div className="stat-number">67</div>
                    <div className="text-sm text-primary-600 mt-1">Florida Counties</div>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-xl">
                    <div className="stat-number">10K+</div>
                    <div className="text-sm text-primary-600 mt-1">Closings Done</div>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-xl">
                    <div className="stat-number flex items-center justify-center gap-1">
                      4.9 <Star className="w-6 h-6 text-gold-500 fill-gold-500" />
                    </div>
                    <div className="text-sm text-primary-600 mt-1">Google Rating</div>
                  </div>
                </div>

                {/* Quick Contact */}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary-900 text-white rounded-xl font-semibold hover:bg-primary-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos - Simple, Static */}
      <section className="py-8 bg-white border-y border-primary-100">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {credentials.map((name, index) => (
              <span
                key={index}
                className="text-sm font-medium text-primary-500 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Featured + Grid */}
      <section className="py-20 bg-sand">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <span className="eyebrow mb-3 block">What We Do</span>
            <h2 className="mb-4">Title Services That Actually Make Sense</h2>
            <p className="text-lg text-primary-600">
              No confusing jargon. No surprise fees. Just clear, honest service.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured Service - Large */}
            <div className="lg:col-span-7">
              <Link
                href="/services/title-insurance/"
                className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-600/30 rounded-full blur-2xl" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 bg-accent-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-white text-xl font-heading font-semibold mb-2">Protect Your Investment</h4>
                    <p className="text-primary-200 text-sm max-w-xs">One-time premium. Lifetime protection.</p>
                  </div>
                </div>
                <div className="p-8">
                  <span className="badge mb-3">Most Popular</span>
                  <h3 className="text-2xl mb-3 group-hover:text-accent-500 transition-colors">Title Insurance</h3>
                  <p className="text-primary-600 mb-4">
                    Protection that lasts as long as you own your property. We handle owner&apos;s and lender&apos;s policies with top-rated underwriters.
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent-500 font-medium group-hover:gap-3 transition-all">
                    Learn about title insurance <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Other Services - Grid */}
            <div className="lg:col-span-5 grid gap-4">
              {services.slice(1, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group flex items-center gap-4 p-5 bg-white rounded-xl shadow-card hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-100 transition-colors">
                    <ServiceIcon slug={service.slug} className="w-6 h-6 text-accent-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary-900 group-hover:text-accent-500 transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-primary-500 line-clamp-1">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-300 group-hover:text-accent-500 transition-colors" />
                </Link>
              ))}

              <Link
                href="/services/"
                className="flex items-center justify-center gap-2 p-5 border-2 border-dashed border-primary-200 rounded-xl text-primary-600 hover:border-accent-300 hover:text-accent-500 transition-colors"
              >
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Story-Driven */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Big Stat + Story */}
            <div>
              <div className="mb-8">
                <span className="stat-number text-7xl">49</span>
                <span className="text-3xl text-primary-600 font-heading ml-2">years in business</span>
              </div>
              <p className="text-xl text-primary-700 mb-6 leading-relaxed">
                We opened our doors when bell-bottoms were in style. We&apos;re still here
                because we do things right—not because we have fancy marketing.
              </p>
              <p className="text-lg text-primary-600 mb-8">
                When your previous title company finds a lien two days before closing,
                we&apos;re the ones who step in and fix it. That&apos;s what 49 years of
                experience gets you.
              </p>
              <Link href="/about/" className="link-underline font-medium">
                Read our story <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>

            {/* Right - Benefits */}
            <div className="grid gap-6">
              {[
                {
                  icon: Car,
                  title: 'We Come to You',
                  description: 'Kitchen table, coffee shop, your office—we&apos;ll close wherever works for you.',
                },
                {
                  icon: Clock,
                  title: 'Same-Day Searches',
                  description: 'Rush job? We can turn around most title searches in 24 hours or less.',
                },
                {
                  icon: Shield,
                  title: 'Triple-Backed Protection',
                  description: 'Your policy is underwritten by First American, Old Republic, or Stewart—your choice.',
                },
                {
                  icon: Award,
                  title: 'Family-Owned Since 1976',
                  description: 'Not a faceless corporation. Real people who answer the phone.',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="flex gap-5 p-6 bg-cream rounded-2xl">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-card">
                    <benefit.icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">{benefit.title}</h3>
                    <p className="text-primary-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA - Floating Design */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700/50 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-white mb-4">
                Get Your Closing Costs in 30 Seconds
              </h2>
              <p className="text-primary-200 text-lg mb-8">
                No email required. No sales pitch. Just instant, accurate estimates
                using Florida&apos;s official regulated rates.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-primary-300 text-sm">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-300" /> Instant results
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-300" /> 100% accurate rates
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-300" /> No email required
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-float">
              <ClosingCostCalculator variant="mini" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Clean Grid with Florida Identity */}
      <section className="py-20 bg-sand">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="eyebrow mb-3 block">Coverage</span>
              <h2 className="mb-2">From Pensacola to Key West</h2>
              <p className="text-primary-600">We cover every corner of Florida—all 67 counties.</p>
            </div>
            <Link
              href="/locations/"
              className="link-underline font-medium inline-flex items-center gap-2"
            >
              View all locations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {popularRegions.map((region) => (
              <div key={region.name}>
                <h3 className="font-semibold text-primary-900 mb-4 text-lg">{region.name}</h3>
                <ul className="space-y-2">
                  {region.counties.map((county) => {
                    const countyData = floridaCounties.find(c => c.name === county);
                    return (
                      <li key={county}>
                        <Link
                          href={`/locations/${countyData?.slug}/`}
                          className="text-primary-600 hover:text-accent-500 transition-colors"
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

      {/* Testimonials - Featured Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Featured testimonial */}
            <div className="bg-cream rounded-3xl p-8 md:p-12 relative">
              <div className="absolute top-8 right-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-heading text-primary-900 mb-8 leading-relaxed">
                &ldquo;After three failed closings with other companies, Town & Country
                got us into our first home in two weeks. They found a lien the previous
                company missed and resolved it overnight.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-200 rounded-full flex items-center justify-center text-xl font-bold text-primary-700">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-primary-900">Maria & Carlos Rodriguez</div>
                  <div className="text-primary-500">First-time homebuyers, Miami-Dade County</div>
                </div>
              </div>
            </div>

            {/* Secondary testimonials */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white border border-primary-100 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-primary-700 mb-4">
                  &ldquo;Professional and quick turnaround. As a realtor, I recommend them
                  to all my clients. They make my job easier.&rdquo;
                </p>
                <div className="text-sm">
                  <span className="font-medium text-primary-900">Robert T.</span>
                  <span className="text-primary-500"> · Real Estate Agent, Broward</span>
                </div>
              </div>

              <div className="bg-white border border-primary-100 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-primary-700 mb-4">
                  &ldquo;Found an old lien that could have caused major problems down the road.
                  Their thorough search saved us from a nightmare.&rdquo;
                </p>
                <div className="text-sm">
                  <span className="font-medium text-primary-900">James K.</span>
                  <span className="text-primary-500"> · Property Investor, Palm Beach</span>
                </div>
              </div>
            </div>

            {/* Google Reviews Link */}
            <div className="text-center mt-8">
              <a
                href="https://g.page/townandcountrytitle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-accent-500 transition-colors"
              >
                <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                See all 127 reviews on Google
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Warm, Inviting */}
      <section className="py-16 bg-accent-400">
        <div className="container-custom text-center">
          <h2 className="text-primary-900 mb-4">
            Ready to Close With Confidence?
          </h2>
          <p className="text-primary-800/80 text-lg mb-8 max-w-xl mx-auto">
            Get your free closing cost estimate or give us a call.
            We&apos;ll take it from here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="px-8 py-4 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors shadow-soft"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-4 bg-white/20 text-primary-900 font-semibold rounded-lg border-2 border-primary-900/20 hover:bg-white/40 transition-colors"
            >
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
