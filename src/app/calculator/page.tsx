import { Metadata } from 'next';
import { ClosingCostCalculator } from '@/components/ClosingCostCalculator';
import Link from 'next/link';
import { Phone, FileText, Shield, Clock } from 'lucide-react';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Florida Closing Cost Calculator | Title Insurance Estimator | Town & Country Title',
  description: 'Calculate your Florida closing costs instantly. Free title insurance estimator for purchases and refinances. Get accurate estimates for all 67 Florida counties.',
  openGraph: {
    title: 'Florida Closing Cost Calculator',
    description: 'Calculate your Florida closing costs instantly with our free title insurance estimator.',
  },
};

const faqs = [
  {
    question: 'How accurate is this closing cost calculator?',
    answer: 'Our calculator uses Florida\'s regulated title insurance rates set by the Florida Department of Financial Services. While the title insurance estimates are very accurate, other costs like recording fees may vary slightly by county. For an exact quote, contact us directly.',
  },
  {
    question: 'What is included in closing costs?',
    answer: 'Closing costs typically include title insurance (owner\'s and lender\'s policies), title search fees, settlement/closing fees, documentary stamps, intangible taxes, recording fees, and other miscellaneous charges. Our calculator covers the major title-related costs.',
  },
  {
    question: 'Who pays closing costs in Florida?',
    answer: 'In Florida, closing costs are typically split between buyer and seller, though this is negotiable. Generally, the seller pays for the owner\'s title insurance policy (except in Miami-Dade, Broward, Sarasota, and Collier counties), while the buyer pays for the lender\'s policy and most other fees.',
  },
  {
    question: 'What are documentary stamps in Florida?',
    answer: 'Documentary stamps are a state tax on the transfer of real property in Florida. The rate is $0.70 per $100 of the sale price ($0.60 in Miami-Dade County). For a $300,000 home, documentary stamps would be approximately $2,100.',
  },
  {
    question: 'What is intangible tax?',
    answer: 'Florida charges an intangible tax on new mortgages at a rate of $0.002 (2 mills) per dollar borrowed. For a $250,000 mortgage, the intangible tax would be $500. This only applies to new loans, not refinances of existing debt.',
  },
];

export default function CalculatorPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Closing Cost Calculator</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Florida Closing Cost Calculator
          </h1>
          <p className="text-xl text-gray-400">
            Get an instant estimate of your title insurance and closing costs.
            Our calculator uses Florida&apos;s official regulated rates.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-5xl mx-auto mb-16">
          <ClosingCostCalculator variant="full" />
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Shield, title: 'Regulated Rates', desc: 'Florida DFS approved rates' },
            { icon: Clock, title: 'Instant Results', desc: 'No waiting required' },
            { icon: FileText, title: 'Detailed Breakdown', desc: 'See all costs itemized' },
            { icon: Phone, title: 'Expert Support', desc: 'Questions? Call us' },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 bg-dark-900 rounded-xl border border-dark-800">
              <item.icon className="w-8 h-8 text-accent-500 mx-auto mb-3" />
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-dark-900 rounded-xl border border-dark-800"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium text-white pr-8">{faq.question}</span>
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-400">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-800 rounded-2xl p-8 lg:p-12 text-center border border-dark-700">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need an Exact Quote?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our calculator provides estimates based on standard rates. For a precise quote
            tailored to your specific transaction, contact our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote/" className="btn-primary px-8 py-4">
              Request Detailed Quote
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="btn-secondary px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {companyInfo.phone}
            </a>
          </div>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </div>
  );
}
