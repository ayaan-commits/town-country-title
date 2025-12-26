'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { companyInfo } from '@/data/company';
import { floridaCounties } from '@/data/counties';
import { useEffect, useState, useRef } from 'react';

const popularRegions = [
  { name: 'South Florida', counties: ['Miami-Dade', 'Broward', 'Palm Beach'] },
  { name: 'Tampa Bay', counties: ['Hillsborough', 'Pinellas', 'Pasco'] },
  { name: 'Central Florida', counties: ['Orange', 'Osceola', 'Seminole'] },
  { name: 'Southwest Florida', counties: ['Lee', 'Collier', 'Sarasota'] },
];

// Trust logos/partners data
const trustLogos = [
  { name: 'Florida Bar', abbrev: 'FL BAR' },
  { name: 'ALTA Member', abbrev: 'ALTA' },
  { name: 'BBB Accredited', abbrev: 'BBB A+' },
  { name: 'First American', abbrev: 'FAT' },
  { name: 'Old Republic', abbrev: 'ORT' },
  { name: 'Stewart Title', abbrev: 'STG' },
  { name: 'Fidelity National', abbrev: 'FNF' },
  { name: 'Chicago Title', abbrev: 'CTG' },
];

// Animated counter hook
function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const startAnimation = () => {
      setHasAnimated(true);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (end - start) + start));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Check if already visible on mount (for above-the-fold elements)
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInView) {
        startAnimation();
      } else {
        observer.observe(ref.current);
      }
    }

    return () => observer.disconnect();
  }, [hasAnimated, end, start, duration]);

  return { count, ref };
}

// Intersection observer hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function HomePage() {
  const yearsCounter = useCounter(99, 2000);
  const countiesCounter = useCounter(67, 1500);
  const ratingCounter = useCounter(49, 1000); // 4.9 * 10
  const closingsCounter = useCounter(10, 1500);

  const servicesAnim = useScrollAnimation();
  const whyUsAnim = useScrollAnimation();
  const areasAnim = useScrollAnimation();
  const testimonialsAnim = useScrollAnimation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Dark Theme with Gold Accents */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark-950">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>

        {/* Animated Floating Orbs - Gold tinted */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-accent-500/5 to-dark-800/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-accent-400/10 to-accent-500/5 rounded-full blur-3xl animate-pulse-soft"></div>

        <div className="container-custom py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-900/80 backdrop-blur-sm rounded-full border border-dark-700 text-sm text-accent-400 mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
                Trusted by 10,000+ Florida Homeowners
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-[1.1]">
                Close With
                <span className="text-gold-gradient"> Confidence</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg animate-fade-in-up delay-200">
                Real people. Real protection. We&apos;ve been closing Florida real estate deals since 1976—and we&apos;re not slowing down.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
                <Link
                  href="/quote/"
                  className="btn-primary btn-glow group inline-flex items-center justify-center gap-2 px-8 py-4"
                >
                  Get Free Quote
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-900 text-gray-300 font-semibold rounded-xl border-2 border-dark-700 hover:border-accent-500/50 hover:bg-dark-800 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {companyInfo.phone}
                </a>
              </div>

              {/* Animated Trust Badges */}
              <div className="flex items-center gap-8 pt-8 border-t border-dark-800 animate-fade-in-up delay-400">
                <div className="text-center" ref={yearsCounter.ref}>
                  <div className="text-3xl font-bold text-accent-400">{yearsCounter.count}+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-dark-700"></div>
                <div className="text-center" ref={countiesCounter.ref}>
                  <div className="text-3xl font-bold text-accent-400">{countiesCounter.count}</div>
                  <div className="text-sm text-gray-500">FL Counties</div>
                </div>
                <div className="w-px h-12 bg-dark-700"></div>
                <div className="text-center" ref={ratingCounter.ref}>
                  <div className="flex items-center gap-1 justify-center">
                    <span className="text-3xl font-bold text-accent-400">{(ratingCounter.count / 10).toFixed(1)}</span>
                    <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Visual - Animated Bento Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-dark-900/80 backdrop-blur-xl rounded-2xl p-6 border border-dark-700 shadow-xl card-hover animate-fade-in-up delay-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 animate-float shadow-glow">
                    <svg className="w-6 h-6 text-dark-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Title Insurance</h3>
                  <p className="text-sm text-gray-400">Full protection for your property</p>
                </div>
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-6 text-dark-950 card-hover animate-fade-in-up delay-200 shadow-glow" ref={closingsCounter.ref}>
                  <div className="text-4xl font-bold mb-2">{closingsCounter.count}K+</div>
                  <div className="text-dark-950/80">Successful Closings</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-dark-900/80 backdrop-blur-xl rounded-2xl p-6 border border-dark-700 shadow-xl card-hover animate-fade-in-up delay-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center mb-4 animate-float shadow-glow" style={{ animationDelay: '0.5s' }}>
                    <svg className="w-6 h-6 text-dark-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Fast Closings</h3>
                  <p className="text-sm text-gray-400">On your schedule, at your location</p>
                </div>
                <div className="bg-dark-900/80 backdrop-blur-xl rounded-2xl p-6 border border-dark-700 shadow-xl card-hover animate-fade-in-up delay-400">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center mb-4 animate-float shadow-glow" style={{ animationDelay: '1s' }}>
                    <svg className="w-6 h-6 text-dark-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Title Search</h3>
                  <p className="text-sm text-gray-400">Thorough property research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos Section - Marquee Effect */}
      <section className="py-8 bg-dark-900 border-y border-dark-800 overflow-hidden">
        <div className="container-custom mb-4">
          <p className="text-center text-sm text-gray-500 font-medium">Trusted Partners & Affiliations</p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee">
            {[...trustLogos, ...trustLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 px-6 py-3 bg-dark-800 rounded-lg border border-dark-700 hover:border-accent-500/50 hover:bg-dark-700 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-dark-950 font-bold text-xs">
                    {logo.abbrev.slice(0, 2)}
                  </div>
                  <span className="text-gray-300 font-medium whitespace-nowrap">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid with Animations */}
      <section className="py-24 bg-dark-950" ref={servicesAnim.ref}>
        <div className="container-custom">
          <div className={`text-center mb-16 transition-all duration-700 ${servicesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-sm font-medium rounded-full mb-4 border border-accent-500/20">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Everything You Need for a <br className="hidden md:block" />Smooth Closing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive title and closing services tailored for Florida real estate
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] transition-all duration-700 delay-200 ${servicesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Large Feature Card */}
            <Link
              href="/services/title-insurance/"
              className="group md:col-span-2 md:row-span-2 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 rounded-3xl p-8 flex flex-col justify-between text-dark-950 hover:shadow-glow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div>
                <div className="w-16 h-16 bg-dark-950/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-3xl font-bold mb-3">Title Insurance</h3>
                <p className="text-dark-950/80 text-lg leading-relaxed">
                  Protect your investment with comprehensive title insurance coverage that safeguards against ownership disputes and hidden claims.
                </p>
              </div>
              <div className="flex items-center gap-2 text-dark-950/70 group-hover:text-dark-950 group-hover:gap-4 transition-all">
                <span className="font-medium">Learn more</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Standard Cards with staggered animations */}
            {services.slice(1, 5).map((service, index) => {
              const shortDescriptions: Record<string, string> = {
                'title-search': 'Thorough examination of property records to ensure clear ownership',
                'closing-services': 'Smooth, hassle-free closings at your preferred location',
                'refinancing-services': 'Fast turnaround and competitive rates for refinancing',
                'escrow-services': 'Secure handling of funds throughout your transaction',
              };
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group bg-dark-900 hover:bg-dark-800 rounded-3xl p-6 flex flex-col justify-between hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-dark-800 hover:border-accent-500/30"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div>
                    <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors mb-2">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {shortDescriptions[service.slug] || service.description.slice(0, 60) + '...'}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-accent-400 group-hover:translate-x-2 transition-all mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              );
            })}

            {/* Wide Card */}
            <Link
              href="/services/"
              className="group md:col-span-2 bg-dark-900 border border-dark-700 rounded-3xl p-6 flex items-center justify-between hover:shadow-glow hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white">Explore All Services</h3>
                  <p className="text-gray-400">8 specialized services for your needs</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center group-hover:bg-accent-500/30 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-accent-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Cards with Animations */}
      <section className="py-24 bg-dark-900" ref={whyUsAnim.ref}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${whyUsAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-sm font-medium rounded-full mb-4 border border-accent-500/20">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Florida&apos;s Most Trusted Title Company
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                For nearly five decades, we&apos;ve handled closings the right way—no shortcuts, no surprises, just results.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: '🏆', title: 'Since 1976', desc: '49 years of excellence' },
                  { icon: '📍', title: 'Mobile Closings', desc: 'We come to you' },
                  { icon: '⚡', title: 'Fast Service', desc: 'Same-day available' },
                  { icon: '🤝', title: 'Expert Team', desc: '99+ years combined' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-dark-800 rounded-2xl border border-dark-700 hover:border-accent-500/30 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card - Dark Glassmorphism with Animation */}
            <div className={`relative transition-all duration-700 delay-300 ${whyUsAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 rounded-3xl transform rotate-3 hover:rotate-6 transition-transform duration-500 shadow-glow-lg"></div>
              <div className="relative bg-dark-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-dark-700">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center transform rotate-12 shadow-glow animate-float">
                  <span className="text-3xl transform -rotate-12">✨</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get Your Free Quote Today
                </h3>
                <p className="text-gray-400 mb-8">
                  Receive a comprehensive title insurance quote within 24 hours. Transparent pricing, no games.
                </p>

                <div className="space-y-4 mb-8">
                  {['Free, no-obligation quote', 'Transparent pricing', 'Expert consultation', 'Fast turnaround'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-500/30 transition-all duration-300">
                        <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/quote/"
                  className="btn-primary btn-glow block w-full py-4 text-center"
                >
                  Request Free Quote
                </Link>
                <p className="text-center text-gray-500 mt-4">
                  Or call <a href={`tel:${companyInfo.phone}`} className="text-accent-400 font-medium hover:underline">{companyInfo.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas with Animations */}
      <section className="py-24 bg-dark-950" ref={areasAnim.ref}>
        <div className="container-custom">
          <div className={`text-center mb-16 transition-all duration-700 ${areasAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-sm font-medium rounded-full mb-4 border border-accent-500/20">Coverage Area</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Serving All 67 Florida Counties
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From Miami to Pensacola, we&apos;re your local title experts
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${areasAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {popularRegions.map((region, regionIndex) => (
              <div
                key={region.name}
                className="bg-dark-900 rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 border border-dark-800 hover:border-accent-500/30"
                style={{ transitionDelay: `${regionIndex * 100}ms` }}
              >
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
                  {region.name}
                </h3>
                <ul className="space-y-2">
                  {region.counties.map((county) => {
                    const countyData = floridaCounties.find(c => c.name === county);
                    return (
                      <li key={county}>
                        <Link
                          href={`/locations/${countyData?.slug}/`}
                          className="text-gray-400 hover:text-accent-400 text-sm flex items-center gap-1 group"
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

          <div className={`text-center mt-12 transition-all duration-700 delay-400 ${areasAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/locations/"
              className="btn-primary btn-glow inline-flex items-center gap-2 px-6 py-3"
            >
              View All 67 Counties
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Design with Animations */}
      <section className="py-24 bg-dark-900" ref={testimonialsAnim.ref}>
        <div className="container-custom">
          <div className={`text-center mb-16 transition-all duration-700 ${testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-sm font-medium rounded-full mb-4 border border-accent-500/20">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Loved by Florida Homeowners
            </h2>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { quote: 'Town & Country made our first home purchase so smooth. They came to our house for the closing and explained everything clearly.', name: 'Maria S.', role: 'First-Time Homebuyer', location: 'Miami-Dade County' },
              { quote: 'As a realtor, I\'ve worked with many title companies. Town & Country stands out for their professionalism and quick turnaround.', name: 'Robert T.', role: 'Real Estate Agent', location: 'Broward County' },
              { quote: 'They found an old lien that could have caused major problems. Their thorough title search saved us thousands!', name: 'James K.', role: 'Property Investor', location: 'Palm Beach County' },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-accent-500/30 hover:shadow-glow hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-dark-950 font-bold group-hover:scale-110 transition-transform shadow-glow">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Enhanced Animation */}
      <section className="py-24 bg-gradient-to-br from-accent-600 via-accent-700 to-accent-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-dark-950/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl animate-pulse-soft"></div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark-950 mb-6">
            Ready to Close?
          </h2>
          <p className="text-xl text-dark-950/80 mb-10 max-w-2xl mx-auto">
            Get your free title insurance quote today. No obligations, just expert guidance for your Florida real estate transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-950 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-dark-950/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-950/10 backdrop-blur-sm text-dark-950 font-semibold rounded-xl border border-dark-950/20 hover:bg-dark-950/20 transition-all duration-300 hover:-translate-y-1"
            >
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
