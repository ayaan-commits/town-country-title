import { Metadata } from 'next';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get Your Free Title Insurance Quote - Instant Florida Title Quote',
  description: 'Get your free Florida title insurance quote in minutes. Calculate title insurance costs for your home purchase, refinance, or sale. No obligation, instant estimates.',
  alternates: {
    canonical: '/quote/'
  }
};

export default function QuotePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Get a Quote', url: '/quote/' }
      ]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 block">Free Quote</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
              Get Your Free Title Insurance Quote
            </h1>
            <p className="text-xl text-primary-200">
              Receive a comprehensive, no-obligation quote for your Florida real estate
              transaction. Fast, accurate, and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Why Get a Quote */}
                <div className="bg-white rounded-2xl border border-primary-100 p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-primary-900 mb-4">Why Get a Quote?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sage-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-600">No obligation, 100% free</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sage-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-600">Transparent, itemized pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sage-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-600">Response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sage-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-600">Expert consultation included</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Box */}
                <div className="bg-accent-400 text-white rounded-2xl p-6 shadow-elevated">
                  <h3 className="text-lg font-bold mb-4">Prefer to Talk?</h3>
                  <p className="text-white/90 mb-4">
                    Call us directly for immediate assistance with your title insurance needs.
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary-900 text-white py-3 rounded-lg font-bold hover:bg-primary-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {companyInfo.phone}
                  </a>
                  <p className="text-white/70 text-sm text-center mt-3">
                    {companyInfo.hours.weekdays}
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="bg-white rounded-2xl border border-primary-100 p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-primary-900 mb-4">Trusted Since 1976</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-cream rounded-lg border border-primary-100">
                      <div className="text-2xl font-bold text-accent-500">99+</div>
                      <div className="text-xs text-primary-500">Years Experience</div>
                    </div>
                    <div className="p-3 bg-cream rounded-lg border border-primary-100">
                      <div className="text-2xl font-bold text-accent-500">67</div>
                      <div className="text-xs text-primary-500">Counties Served</div>
                    </div>
                    <div className="p-3 bg-cream rounded-lg border border-primary-100">
                      <div className="text-2xl font-bold text-accent-500">10K+</div>
                      <div className="text-xs text-primary-500">Closings</div>
                    </div>
                    <div className="p-3 bg-cream rounded-lg border border-primary-100">
                      <div className="text-2xl font-bold text-accent-500">4.9</div>
                      <div className="text-xs text-primary-500">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
