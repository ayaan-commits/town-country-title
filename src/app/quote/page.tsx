import { Metadata } from 'next';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

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
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Get Your Free Title Insurance Quote
            </h1>
            <p className="text-xl text-primary-100">
              Receive a comprehensive, no-obligation quote for your Florida real estate
              transaction. Fast, accurate, and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Request Your Quote
                </h2>

                <form className="space-y-6">
                  {/* Transaction Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="relative flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                        <input type="radio" name="transactionType" value="purchase" className="sr-only" />
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">🏠</div>
                          <span className="font-medium">Purchase</span>
                        </div>
                      </label>
                      <label className="relative flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                        <input type="radio" name="transactionType" value="refinance" className="sr-only" />
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">💰</div>
                          <span className="font-medium">Refinance</span>
                        </div>
                      </label>
                      <label className="relative flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                        <input type="radio" name="transactionType" value="sale" className="sr-only" />
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">🔑</div>
                          <span className="font-medium">Sale</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="single-family">Single Family Home</option>
                      <option value="condo">Condominium</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="multi-family">Multi-Family (2-4 Units)</option>
                      <option value="vacant-land">Vacant Land</option>
                      <option value="commercial">Commercial Property</option>
                    </select>
                  </div>

                  {/* Property Value & Loan Amount */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Value/Purchase Price *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          id="propertyValue"
                          name="propertyValue"
                          required
                          placeholder="300,000"
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                        Loan Amount (if applicable)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          id="loanAmount"
                          name="loanAmount"
                          placeholder="240,000"
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Property Address */}
                  <div>
                    <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      placeholder="123 Main Street, Miami, FL 33101"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  {/* County */}
                  <div>
                    <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-1">
                      Florida County *
                    </label>
                    <select
                      id="county"
                      name="county"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select county</option>
                      <option value="miami-dade">Miami-Dade County</option>
                      <option value="broward">Broward County</option>
                      <option value="palm-beach">Palm Beach County</option>
                      <option value="hillsborough">Hillsborough County</option>
                      <option value="orange">Orange County</option>
                      <option value="other">Other Florida County</option>
                    </select>
                  </div>

                  <hr className="my-8" />

                  {/* Contact Information */}
                  <h3 className="text-lg font-bold text-gray-900">Your Contact Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      I am a *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select your role</option>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                      <option value="agent">Real Estate Agent</option>
                      <option value="lender">Lender</option>
                      <option value="attorney">Attorney</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Any additional information about your transaction..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Get My Free Quote
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy.
                    We&apos;ll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Why Get a Quote */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Get a Quote?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">No obligation, 100% free</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Transparent, itemized pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Expert consultation included</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Box */}
                <div className="bg-gray-900 text-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Prefer to Talk?</h3>
                  <p className="text-gray-300 mb-4">
                    Call us directly for immediate assistance with your title insurance needs.
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {companyInfo.phone}
                  </a>
                  <p className="text-gray-400 text-sm text-center mt-3">
                    {companyInfo.hours.weekdays}
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Trusted Since 1976</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-500">99+</div>
                      <div className="text-xs text-gray-500">Years Experience</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-500">67</div>
                      <div className="text-xs text-gray-500">Counties Served</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-500">10K+</div>
                      <div className="text-xs text-gray-500">Closings</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-500">4.9</div>
                      <div className="text-xs text-gray-500">Rating</div>
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
