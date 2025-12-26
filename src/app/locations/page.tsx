import { Metadata } from 'next';
import Link from 'next/link';
import { floridaCounties } from '@/data/counties';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Title Insurance in All 67 Florida Counties | Service Areas',
  description: 'Town & Country Title Guaranty serves all 67 Florida counties with title insurance, closing services, and title searches. Find your local Florida county for service.',
  alternates: {
    canonical: '/locations/'
  }
};

// Group counties by region for better organization
const regions = [
  {
    name: 'South Florida',
    counties: ['Miami-Dade', 'Broward', 'Palm Beach', 'Monroe']
  },
  {
    name: 'Southwest Florida',
    counties: ['Collier', 'Lee', 'Charlotte', 'Sarasota', 'Manatee', 'DeSoto', 'Glades', 'Hendry']
  },
  {
    name: 'Tampa Bay Area',
    counties: ['Hillsborough', 'Pinellas', 'Pasco', 'Hernando', 'Citrus']
  },
  {
    name: 'Central Florida',
    counties: ['Orange', 'Osceola', 'Seminole', 'Lake', 'Polk', 'Volusia', 'Brevard', 'Sumter', 'Marion']
  },
  {
    name: 'Northeast Florida',
    counties: ['Duval', 'St. Johns', 'Clay', 'Nassau', 'Baker', 'Flagler', 'Putnam']
  },
  {
    name: 'North Central Florida',
    counties: ['Alachua', 'Marion', 'Columbia', 'Levy', 'Gilchrist', 'Union', 'Bradford', 'Suwannee', 'Lafayette', 'Dixie']
  },
  {
    name: 'Treasure Coast',
    counties: ['Martin', 'St. Lucie', 'Indian River', 'Okeechobee']
  },
  {
    name: 'Florida Panhandle',
    counties: ['Escambia', 'Santa Rosa', 'Okaloosa', 'Walton', 'Bay', 'Gulf', 'Franklin', 'Calhoun', 'Jackson', 'Washington', 'Holmes', 'Liberty', 'Gadsden', 'Leon', 'Wakulla', 'Jefferson', 'Madison', 'Taylor', 'Hamilton']
  }
];

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Service Areas', url: '/locations/' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

        {/* Gold Accent Orbs */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white animate-fade-in-up">
              Title Insurance Across All 67 Florida Counties
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in-up">
              From the Keys to the Panhandle, Town & Country Title Guaranty provides
              professional title insurance and closing services throughout Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Map/Stats Section */}
      <section className="py-12 bg-dark-900 border-b border-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-accent-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-accent-400">67</div>
              <div className="text-gray-500">Counties Served</div>
            </div>
            <div className="p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-accent-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-accent-400">400+</div>
              <div className="text-gray-500">Cities Covered</div>
            </div>
            <div className="p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-accent-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-accent-400">100%</div>
              <div className="text-gray-500">Florida Coverage</div>
            </div>
            <div className="p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-accent-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-accent-400">24hr</div>
              <div className="text-gray-500">Quote Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Find Your Florida County</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select your county below to learn more about our title services in your area.
            </p>
          </div>

          {regions.map((region, regionIndex) => (
            <div key={regionIndex} className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-white mb-6 pb-2 border-b-2 border-accent-500/50">
                {region.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {region.counties.map((countyName) => {
                  const county = floridaCounties.find(c => c.name === countyName);
                  if (!county) return null;
                  return (
                    <Link
                      key={county.slug}
                      href={`/locations/${county.slug}/`}
                      className="p-4 bg-dark-900 rounded-lg border border-dark-800 hover:border-accent-500/50 hover:shadow-glow transition-all duration-300 text-center group"
                    >
                      <span className="text-gray-400 group-hover:text-accent-400 font-medium transition-colors">
                        {county.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Counties List */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Complete List of Florida Counties</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Alphabetical listing of all 67 Florida counties we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {floridaCounties.sort((a, b) => a.name.localeCompare(b.name)).map((county) => (
              <Link
                key={county.slug}
                href={`/locations/${county.slug}/`}
                className="text-gray-500 hover:text-accent-400 transition-colors text-sm py-1"
              >
                {county.name} County →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent-600 via-accent-500 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-dark-950 mb-4">
            Need Title Services in Florida?
          </h2>
          <p className="text-xl text-dark-950/80 mb-8 max-w-2xl mx-auto">
            No matter where in Florida your property is located, we can help with your
            title insurance and closing needs.
          </p>
          <Link
            href="/quote/"
            className="inline-flex items-center justify-center px-8 py-4 bg-dark-950 text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
