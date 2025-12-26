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
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Title Insurance Across All 67 Florida Counties
            </h1>
            <p className="text-xl text-primary-100">
              From the Keys to the Panhandle, Town & Country Title Guaranty provides
              professional title insurance and closing services throughout Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Map/Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-500">67</div>
              <div className="text-gray-600">Counties Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500">400+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500">100%</div>
              <div className="text-gray-600">Florida Coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500">24hr</div>
              <div className="text-gray-600">Quote Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Find Your Florida County</h2>
            <p className="section-subheading">
              Select your county below to learn more about our title services in your area.
            </p>
          </div>

          {regions.map((region, regionIndex) => (
            <div key={regionIndex} className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-500">
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
                      className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-primary-500 hover:shadow-md transition-all text-center group"
                    >
                      <span className="text-gray-700 group-hover:text-primary-500 font-medium">
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
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Complete List of Florida Counties</h2>
            <p className="section-subheading">
              Alphabetical listing of all 67 Florida counties we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {floridaCounties.sort((a, b) => a.name.localeCompare(b.name)).map((county) => (
              <Link
                key={county.slug}
                href={`/locations/${county.slug}/`}
                className="text-gray-600 hover:text-primary-500 transition-colors text-sm py-1"
              >
                {county.name} County →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Need Title Services in Florida?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            No matter where in Florida your property is located, we can help with your
            title insurance and closing needs.
          </p>
          <Link href="/quote/" className="btn-primary bg-white text-primary-500 hover:bg-primary-50">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
