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
    title: 'Integrity',
    description: 'We conduct every transaction with honesty and transparency, earning the trust of our clients.',
    icon: '🤝'
  },
  {
    title: 'Excellence',
    description: 'We strive for perfection in every title search, closing, and client interaction.',
    icon: '⭐'
  },
  {
    title: 'Service',
    description: 'We go above and beyond to meet our clients\' needs, including on-location closings.',
    icon: '💼'
  },
  {
    title: 'Expertise',
    description: 'Our team brings decades of combined experience in Florida real estate.',
    icon: '🎓'
  }
];

const timeline = [
  { year: '1976', event: 'Town & Country Title Guaranty founded in South Florida' },
  { year: '1985', event: 'Expanded services to cover all 67 Florida counties' },
  { year: '1995', event: 'Introduced mobile closing services' },
  { year: '2005', event: 'Achieved 10,000+ successful closings milestone' },
  { year: '2015', event: 'Modernized with digital document processing' },
  { year: '2024', event: 'Continuing our legacy of trusted service' }
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about/' }
      ]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Town & Country Title Guaranty
            </h1>
            <p className="text-xl text-primary-100">
              Since 1976, we&apos;ve been Florida&apos;s trusted partner for title insurance and closing services,
              built on a foundation of integrity, expertise, and dedication to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Town & Country Title Guaranty, our mission is simple: to protect Florida homebuyers
                and property owners with comprehensive title insurance and seamless closing experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every real estate transaction deserves the same level of care and attention,
                whether it&apos;s a first-time homebuyer purchasing a condo or a seasoned investor acquiring
                commercial property.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence has made us the preferred choice for thousands of Florida
                residents, real estate professionals, and lenders across all 67 counties.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Numbers Speak</h3>
              <div className="grid grid-cols-2 gap-6">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary-500 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Meet Our Founder
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-500">PG</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                    <p className="text-primary-500 font-medium mb-4">{founder.title}</p>
                    <p className="text-gray-600 text-lg">{founder.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subheading">
              The principles that guide everything we do at Town & Country Title Guaranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Journey</h2>
            <p className="section-subheading">
              Nearly five decades of serving Florida&apos;s real estate community.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-12 md:pl-0`}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="text-primary-500 font-bold text-lg mb-1">{item.year}</div>
                      <p className="text-gray-600">{item.event}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Experience the Town & Country Difference
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Ready to work with Florida&apos;s most trusted title insurance company?
            Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote/" className="btn-primary bg-white text-primary-500 hover:bg-primary-50">
              Get Free Quote
            </Link>
            <Link href="/contact/" className="btn-secondary border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
