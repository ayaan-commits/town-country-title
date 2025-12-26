'use client';

import Link from 'next/link';
import { useState } from 'react';
import { companyInfo } from '@/data/company';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  {
    name: 'Services',
    href: '/services/',
    submenu: [
      { name: 'Title Insurance', href: '/services/title-insurance/' },
      { name: 'Title Search', href: '/services/title-search/' },
      { name: 'Closing Services', href: '/services/closing-services/' },
      { name: 'Refinancing', href: '/services/refinancing-services/' },
      { name: 'Escrow Services', href: '/services/escrow-services/' },
      { name: 'Commercial Title', href: '/services/commercial-title-services/' },
      { name: 'Residential Title', href: '/services/residential-title-services/' },
      { name: 'Lien Search', href: '/services/lien-search-services/' },
    ]
  },
  { name: 'Locations', href: '/locations/' },
  { name: 'FAQ', href: '/faq/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-dark-950/95 backdrop-blur-lg border-b border-dark-800 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-dark-900 text-gray-400 text-sm py-2 border-b border-dark-800">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
              <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {companyInfo.phone}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="hidden md:flex items-center gap-1.5 hover:text-accent-400 transition-colors">
              <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {companyInfo.email}
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            <span>Serving All 67 Florida Counties</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-dark-950 font-bold text-xl shadow-glow group-hover:shadow-glow-lg transition-shadow">
              TC
            </div>
            <div className="hidden sm:block">
              <div className="font-heading text-xl font-bold text-white group-hover:text-accent-400 transition-colors">Town & Country</div>
              <div className="text-sm text-gray-500">Title Guaranty</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-dark-800"
                >
                  {item.name}
                  {item.submenu && (
                    <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 bg-dark-900 border border-dark-700 shadow-xl rounded-xl py-2 min-w-[220px] animate-fade-in">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2.5 text-gray-300 hover:bg-dark-800 hover:text-accent-400 transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/quote/" className="btn-primary btn-glow">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-dark-800 pt-4 animate-fade-in">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-accent-400 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 border-l border-dark-700 ml-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-2 text-gray-400 hover:text-accent-400 text-sm transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/quote/"
              className="btn-primary w-full text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
