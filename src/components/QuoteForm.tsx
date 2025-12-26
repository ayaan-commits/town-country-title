'use client';

import { useState, FormEvent } from 'react';

// Web3Forms Access Key - Get yours at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedTransaction, setSelectedTransaction] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Quote Request - Town & Country Title');
    formData.append('from_name', 'Town & Country Title Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setSelectedTransaction('');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-dark-900 rounded-2xl border border-dark-700 p-8 text-center">
        <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-heading font-bold text-white mb-2">
          Quote Request Received!
        </h2>
        <p className="text-gray-400 mb-6">
          Thank you for your interest. We&apos;ll review your information and send you a detailed quote within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-primary"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-dark-900 rounded-2xl border border-dark-700 p-8">
      <h2 className="text-2xl font-heading font-bold text-white mb-6">
        Request Your Quote
      </h2>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot for spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        {/* Transaction Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Transaction Type *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'purchase', icon: '🏠', label: 'Purchase' },
              { value: 'refinance', icon: '💰', label: 'Refinance' },
              { value: 'sale', icon: '🔑', label: 'Sale' },
            ].map((option) => (
              <label
                key={option.value}
                className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedTransaction === option.value
                    ? 'border-accent-500 bg-accent-500/10 shadow-glow'
                    : 'border-dark-700 hover:border-accent-500/50 bg-dark-800'
                }`}
              >
                <input
                  type="radio"
                  name="transactionType"
                  value={option.value}
                  required
                  className="sr-only"
                  onChange={(e) => setSelectedTransaction(e.target.value)}
                />
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{option.icon}</div>
                  <span className="font-medium text-white">{option.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="propertyType" className="label-dark">
            Property Type *
          </label>
          <select
            id="propertyType"
            name="propertyType"
            required
            className="input-dark"
          >
            <option value="">Select property type</option>
            <option value="Single Family Home">Single Family Home</option>
            <option value="Condominium">Condominium</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Multi-Family (2-4 Units)">Multi-Family (2-4 Units)</option>
            <option value="Vacant Land">Vacant Land</option>
            <option value="Commercial Property">Commercial Property</option>
          </select>
        </div>

        {/* Property Value & Loan Amount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="propertyValue" className="label-dark">
              Property Value/Purchase Price *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                id="propertyValue"
                name="propertyValue"
                required
                placeholder="300,000"
                className="input-dark pl-8"
              />
            </div>
          </div>
          <div>
            <label htmlFor="loanAmount" className="label-dark">
              Loan Amount (if applicable)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                id="loanAmount"
                name="loanAmount"
                placeholder="240,000"
                className="input-dark pl-8"
              />
            </div>
          </div>
        </div>

        {/* Property Address */}
        <div>
          <label htmlFor="propertyAddress" className="label-dark">
            Property Address
          </label>
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            placeholder="123 Main Street, Miami, FL 33101"
            className="input-dark"
          />
        </div>

        {/* County */}
        <div>
          <label htmlFor="county" className="label-dark">
            Florida County *
          </label>
          <select
            id="county"
            name="county"
            required
            className="input-dark"
          >
            <option value="">Select county</option>
            <option value="Miami-Dade County">Miami-Dade County</option>
            <option value="Broward County">Broward County</option>
            <option value="Palm Beach County">Palm Beach County</option>
            <option value="Hillsborough County">Hillsborough County</option>
            <option value="Orange County">Orange County</option>
            <option value="Other Florida County">Other Florida County</option>
          </select>
        </div>

        <hr className="border-dark-700 my-8" />

        {/* Contact Information */}
        <h3 className="text-lg font-bold text-white">Your Contact Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="label-dark">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="input-dark"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="label-dark">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="input-dark"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="label-dark">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-dark"
            />
          </div>
          <div>
            <label htmlFor="phone" className="label-dark">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="input-dark"
            />
          </div>
        </div>

        <div>
          <label htmlFor="role" className="label-dark">
            I am a *
          </label>
          <select
            id="role"
            name="role"
            required
            className="input-dark"
          >
            <option value="">Select your role</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
            <option value="Real Estate Agent">Real Estate Agent</option>
            <option value="Lender">Lender</option>
            <option value="Attorney">Attorney</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="label-dark">
            Additional Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Any additional information about your transaction..."
            className="input-dark"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary btn-glow w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Get My Free Quote'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy.
          We&apos;ll respond within 24 hours.
        </p>
      </form>
    </div>
  );
}
