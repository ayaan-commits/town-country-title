import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { services } from '@/data/services';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

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
    <footer className="bg-primary-900 text-primary-200" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-soft">
                TC
              </div>
              <div>
                <div className="font-heading text-xl font-semibold text-white">Town & Country</div>
                <div className="text-sm text-primary-300">Title Guaranty</div>
              </div>
            </div>
            <p className="text-primary-300 mb-6 leading-relaxed">
              Florida&apos;s trusted title insurance and closing services company since {companyInfo.founded}.
              Over 99 years of combined experience serving all 67 Florida counties.
            </p>
            <div className="space-y-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-300 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="group-hover:underline">{companyInfo.address.full}</span>
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                {companyInfo.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-primary-300 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{service.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {popularCounties.map((county) => (
                <li key={county.name}>
                  <Link
                    href={county.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {county.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/locations/"
                  className="text-accent-400 hover:text-accent-300 font-medium inline-flex items-center gap-1"
                >
                  View All 67 Counties <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about/" className="text-primary-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/quote/" className="text-primary-300 hover:text-white transition-colors">Get a Quote</Link></li>
              <li><Link href="/calculator/" className="text-primary-300 hover:text-white transition-colors">Cost Calculator</Link></li>
              <li><Link href="/order/" className="text-primary-300 hover:text-white transition-colors">Order Online</Link></li>
              <li><Link href="/faq/" className="text-primary-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact/" className="text-primary-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/glossary/" className="text-primary-300 hover:text-white transition-colors">Glossary</Link></li>
            </ul>

            {/* Business Hours */}
            <div className="mt-8 p-4 bg-primary-800/50 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-accent-400" />
                <h4 className="font-medium text-white">Business Hours</h4>
              </div>
              <div className="space-y-1 text-sm text-primary-300">
                <p>{companyInfo.hours.weekdays}</p>
                <p>{companyInfo.hours.saturday}</p>
                <p>{companyInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-primary-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
              <span>Licensed Florida Title Agency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
              <span>Member of FLTA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
              <span>BBB Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
              <span>E&O Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800 bg-primary-950">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-400">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-400">
              <Link href="/privacy-policy/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service/" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
