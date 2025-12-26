import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { services } from '@/data/services';

const popularCounties = [
  { name: 'Miami-Dade County', href: '/locations/miami-dade-county/' },
  { name: 'Broward County', href: '/locations/broward-county/' },
  { name: 'Palm Beach County', href: '/locations/palm-beach-county/' },
  { name: 'Hillsborough County', href: '/locations/hillsborough-county/' },
  { name: 'Orange County', href: '/locations/orange-county/' },
  { name: 'Duval County', href: '/locations/duval-county/' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-gray-300 border-t border-dark-800">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-dark-950 font-bold text-xl shadow-glow">
                TC
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-white">Town & Country</div>
                <div className="text-sm text-gray-500">Title Guaranty</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Florida&apos;s trusted title insurance and closing services company since {companyInfo.founded}.
              Over 99 years of combined experience serving all 67 Florida counties.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {companyInfo.address.full}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${companyInfo.phone}`} className="hover:text-accent-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-accent-400 transition-colors">
                  {companyInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="hover:text-accent-400 transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {popularCounties.map((county) => (
                <li key={county.name}>
                  <Link
                    href={county.href}
                    className="hover:text-accent-400 transition-colors"
                  >
                    {county.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" className="text-accent-400 hover:text-accent-300 font-medium">
                  View All 67 Counties →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="hover:text-accent-400 transition-colors">About Us</Link></li>
              <li><Link href="/quote/" className="hover:text-accent-400 transition-colors">Get a Quote</Link></li>
              <li><Link href="/faq/" className="hover:text-accent-400 transition-colors">FAQ</Link></li>
              <li><Link href="/blog/" className="hover:text-accent-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact/" className="hover:text-accent-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/glossary/" className="hover:text-accent-400 transition-colors">Glossary</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-accent-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service/" className="hover:text-accent-400 transition-colors">Terms of Service</Link></li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="font-medium text-white mb-2">Business Hours</h4>
              <p className="text-sm text-gray-400">{companyInfo.hours.weekdays}</p>
              <p className="text-sm text-gray-400">{companyInfo.hours.saturday}</p>
              <p className="text-sm text-gray-400">{companyInfo.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Licensed Title Insurance Agency | Serving Florida Since {companyInfo.founded}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
