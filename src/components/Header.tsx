'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior - hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add scrolled state for shadow
      setScrolled(currentScrollY > 10);

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`bg-dark-950/95 backdrop-blur-lg border-b border-dark-800 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-dark-950/50' : ''
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      role="banner"
    >
      {/* Top bar with contact info */}
      <div className="bg-dark-900 text-gray-400 text-sm py-2 border-b border-dark-800">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-accent-400 transition-colors icon-bounce"
              aria-label={`Call us at ${companyInfo.phone}`}
            >
              <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{companyInfo.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-accent-400 transition-colors icon-bounce"
              aria-label={`Email us at ${companyInfo.email}`}
            >
              <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{companyInfo.email}</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" aria-hidden="true"></span>
            <span>Serving All 67 Florida Counties</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Town & Country Title Guaranty - Home">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-dark-950 font-bold text-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-105">
              TC
            </div>
            <div className="hidden sm:block">
              <div className="font-heading text-xl font-bold text-white group-hover:text-accent-400 transition-colors">Town & Country</div>
              <div className="text-sm text-gray-500">Title Guaranty</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                role="none"
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-dark-800 link-underline"
                  role="menuitem"
                  aria-haspopup={item.submenu ? 'true' : undefined}
                  aria-expanded={item.submenu ? activeDropdown === item.name : undefined}
                >
                  {item.name}
                </Link>

                {/* Dropdown menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-dark-900 border border-dark-700 shadow-xl rounded-xl py-2 min-w-[220px] animate-fade-in"
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.submenu.map((subitem, index) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2.5 text-gray-300 hover:bg-dark-800 hover:text-accent-400 transition-colors"
                        role="menuitem"
                        style={{ animationDelay: `${index * 50}ms` }}
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
            <Link href="/quote/" className="btn-primary btn-glow ripple">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Navigation Panel */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-dark-900 z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-dark-700">
            <span className="font-heading text-lg font-bold text-white">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
            <nav role="navigation" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-300 hover:text-accent-400 font-medium transition-colors border-b border-dark-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 border-l-2 border-accent-500/30 ml-2 mb-2">
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
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-dark-700">
              <Link
                href="/quote/"
                className="btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>

              {/* Contact info in mobile */}
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors"
                >
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {companyInfo.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors"
                >
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
