import { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo, statistics } from '@/data/company';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import { TeamSection } from '@/components/TeamSection';
import { MessageCircle, Target, Car, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Florida Title Insurance Experts Since 1976',
  description: 'Learn about Town & Country Title Guaranty, Florida\'s trusted title insurance company since 1976. Meet our team and discover why clients trust us with their real estate transactions.',
  alternates: {
    canonical: '/about/'
  }
};

const values = [
  {
    title: 'Straight Talk',
    description: 'No legal jargon, no runaround. We explain everything in plain English so you know exactly what you\'re getting.',
    Icon: MessageCircle
  },
  {
    title: 'Get It Right',
    description: 'Every title search, every document, every closing. We triple-check because your property matters.',
    Icon: Target
  },
  {
    title: 'Show Up',
    description: 'Kitchen table, coffee shop, your office—we close where it works for you. Convenience isn\'t optional.',
    Icon: Car
  },
  {
    title: 'Know Our Stuff',
    description: 'Decades in Florida real estate means we\'ve seen it all. Complex titles don\'t scare us.',
    Icon: BookOpen
  }
];

const timeline = [
  { year: '1976', event: 'Started with one office and a simple promise: protect every client like family' },
  { year: '1985', event: 'Grew to cover all 67 Florida counties—because our clients kept moving around' },
  { year: '1995', event: 'Launched mobile closings. Why make you come to us when we can come to you?' },
  { year: '2005', event: 'Crossed 10,000 closings. That\'s a lot of happy homeowners' },
  { year: '2015', event: 'Went digital. Same personal service, less paper cuts' },
  { year: '2024', event: 'Still here, still family-owned, still doing things the right way' }
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about/' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              About Town & Country Title Guaranty
            </h1>
            <p className="text-xl text-primary-200">
              Since 1976, we&apos;ve been Florida&apos;s trusted partner for title insurance and closing services.
              Not because we have the fanciest office—but because we actually care about getting it right.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow mb-4 block">Our Mission</span>
              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">
                Protecting Your Property Investment
              </h2>
              <p className="text-lg text-primary-600 mb-6">
                Here&apos;s the thing about title insurance: it&apos;s not exciting until you need it.
                A lien you didn&apos;t know about. A boundary dispute that pops up years later.
                An heir who suddenly appears. We&apos;ve seen it all—and we&apos;re here to make sure
                you never have to deal with it.
              </p>
              <p className="text-lg text-primary-600 mb-6">
                Whether you&apos;re buying your first condo or closing on your twentieth investment property,
                we treat every transaction like it&apos;s the most important one we&apos;ll do today.
                Because to you, it is.
              </p>
              <p className="text-lg text-primary-600">
                We&apos;ve become the go-to for real estate pros across Florida—not through fancy marketing,
                but through word of mouth. People tell their friends when you treat them right.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-primary-100">
              <h3 className="text-2xl font-heading font-bold text-primary-900 mb-6">The Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-cream rounded-xl"
                  >
                    <div className="stat-number text-3xl mb-2">{stat.value}</div>
                    <div className="text-sm text-primary-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Values Section */}
      <section className="py-20 bg-sand">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4">How We Work</h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Forget corporate mission statements. Here&apos;s what we actually stand for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300 border border-primary-100"
              >
                <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.Icon className="w-7 h-7 text-accent-500" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-2">{value.title}</h3>
                <p className="text-primary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4">Our Story</h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Nearly five decades. Thousands of closings. Here are the highlights.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-400 via-accent-300 to-accent-100 transform md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-12 md:pl-0`}>
                    <div className="bg-cream border border-primary-100 rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300">
                      <div className="text-accent-500 font-heading font-bold text-lg mb-1">{item.year}</div>
                      <p className="text-primary-700">{item.event}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-400 rounded-full transform -translate-x-1/2 border-4 border-white shadow-soft" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-400">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s get your transaction done right. No stress, no surprises—just a smooth closing.
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
