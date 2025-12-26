import { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo, founder, statistics } from '@/data/company';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

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
    icon: '💬'
  },
  {
    title: 'Get It Right',
    description: 'Every title search, every document, every closing. We triple-check because your property matters.',
    icon: '🎯'
  },
  {
    title: 'Show Up',
    description: 'Kitchen table, coffee shop, your office—we close where it works for you. Convenience isn\'t optional.',
    icon: '🚗'
  },
  {
    title: 'Know Our Stuff',
    description: 'Decades in Florida real estate means we\'ve seen it all. Complex titles don\'t scare us.',
    icon: '📚'
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
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

        {/* Gold Accent Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white animate-fade-in-up">
              About Town & Country Title Guaranty
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in-up">
              Since 1976, we&apos;ve been Florida&apos;s trusted partner for title insurance and closing services.
              Not because we have the fanciest office—but because we actually care about getting it right.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-400 mb-6">
                Here&apos;s the thing about title insurance: it&apos;s not exciting until you need it.
                A lien you didn&apos;t know about. A boundary dispute that pops up years later.
                An heir who suddenly appears. We&apos;ve seen it all—and we&apos;re here to make sure
                you never have to deal with it.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Whether you&apos;re buying your first condo or closing on your twentieth investment property,
                we treat every transaction like it&apos;s the most important one we&apos;ll do today.
                Because to you, it is.
              </p>
              <p className="text-lg text-gray-400">
                We&apos;ve become the go-to for real estate pros across Florida—not through fancy marketing,
                but through word of mouth. People tell their friends when you treat them right.
              </p>
            </div>
            <div className="bg-dark-900 border border-dark-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">The Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-accent-500/30 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-accent-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-950 border border-dark-800 rounded-2xl overflow-hidden hover:border-accent-500/30 transition-all duration-300">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Meet Our Founder
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-full flex items-center justify-center border-2 border-accent-500/30">
                      <span className="text-4xl font-bold text-accent-400">PG</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                    <p className="text-accent-400 font-medium mb-4">{founder.title}</p>
                    <p className="text-gray-400 text-lg leading-relaxed">{founder.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">How We Work</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Forget corporate mission statements. Here&apos;s what we actually stand for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-dark-900 border border-dark-800 rounded-xl p-6 text-center hover:border-accent-500/30 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Our Story</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Nearly five decades. Thousands of closings. Here are the highlights.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500/50 via-accent-500/30 to-accent-500/10 transform md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-12 md:pl-0`}>
                    <div className="bg-dark-950 border border-dark-800 rounded-lg p-6 hover:border-accent-500/30 transition-all duration-300">
                      <div className="text-accent-400 font-bold text-lg mb-1">{item.year}</div>
                      <p className="text-gray-400">{item.event}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full transform -translate-x-1/2 border-4 border-dark-900 shadow-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent-600 via-accent-500 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-dark-950 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-dark-950/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s get your transaction done right. No stress, no surprises—just a smooth closing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-950 text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-dark-950 text-dark-950 font-bold rounded-lg hover:bg-dark-950/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
