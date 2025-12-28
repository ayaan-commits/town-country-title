'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { companyInfo } from '@/data/company';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';

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
    ]
  },
  { name: 'Calculator', href: '/calculator/' },
  { name: 'Locations', href: '/locations/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-soft'
          : 'bg-cream'
      }`}
      role="banner"
    >
      {/* Top bar with contact info */}
      <div className="bg-primary-900 text-primary-200 text-sm py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
              aria-label={`Call us at ${companyInfo.phone}`}
            >
              <Phone className="w-4 h-4 text-accent-300" />
              <span>{companyInfo.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="hidden md:flex items-center gap-2 hover:text-white transition-colors"
              aria-label={`Email us at ${companyInfo.email}`}
            >
              <Mail className="w-4 h-4 text-accent-300" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 bg-sage-300 rounded-full"></span>
            <span>Serving All 67 Florida Counties</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Town & Country Title Guaranty - Home">
            <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-soft group-hover:bg-primary-800 transition-colors">
              TC
            </div>
            <div className="hidden sm:block">
              <div className="font-heading text-xl font-semibold text-primary-900 group-hover:text-accent-500 transition-colors">Town & Country</div>
              <div className="text-sm text-primary-600">Title Guaranty</div>
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
                  className="px-4 py-2 text-primary-700 hover:text-primary-900 font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-primary-50"
                  role="menuitem"
                  aria-haspopup={item.submenu ? 'true' : undefined}
                  aria-expanded={item.submenu ? activeDropdown === item.name : undefined}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white border border-primary-100 shadow-elevated rounded-xl py-2 min-w-[220px] animate-fade-in"
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2.5 text-primary-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                        role="menuitem"
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
          <div className="hidden md:flex items-center gap-3">
            <Link href="/quote/" className="btn-primary">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-primary-900/50 z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Navigation Panel */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-out shadow-elevated ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-primary-100">
            <span className="font-heading text-lg font-semibold text-primary-900">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
            <nav role="navigation" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-3 text-primary-700 hover:text-accent-500 font-medium transition-colors border-b border-primary-100"
                        onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.name ? null : item.name)}
                        aria-expanded={mobileSubmenuOpen === item.name}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenuOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === item.name ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="pl-4 border-l-2 border-accent-200 ml-2 py-2">
                          <Link
                            href={item.href}
                            className="block py-2 text-primary-600 hover:text-accent-500 text-sm transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            All Services
                          </Link>
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block py-2 text-primary-600 hover:text-accent-500 text-sm transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-primary-700 hover:text-accent-500 font-medium transition-colors border-b border-primary-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-primary-100">
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
                  className="flex items-center gap-3 text-primary-600 hover:text-accent-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent-400" />
                  {companyInfo.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-primary-600 hover:text-accent-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent-400" />
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
