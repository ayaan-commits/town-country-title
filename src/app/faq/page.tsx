import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Title Insurance & Closing FAQs',
  description: 'Get answers to common questions about title insurance, title searches, closing services, and real estate transactions in Florida. Expert answers from Town & Country Title Guaranty.',
  alternates: {
    canonical: '/faq/'
  }
};

const faqCategories = [
  {
    name: 'Title Insurance Basics',
    faqs: [
      {
        question: 'What is title insurance?',
        answer: 'Title insurance is a type of insurance that protects property buyers and lenders against financial loss due to defects in the title of a property. Unlike other insurance that protects against future events, title insurance protects against issues from the past, such as liens, encumbrances, or ownership disputes that may not have been discovered during the title search.'
      },
      {
        question: 'What\'s the difference between owner\'s and lender\'s title insurance?',
        answer: 'Lender\'s title insurance protects the mortgage lender\'s interest in the property and is typically required when you take out a mortgage. Owner\'s title insurance protects your equity in the property as the buyer and is optional but highly recommended. While lender\'s insurance only covers the loan amount, owner\'s insurance protects your full investment.'
      },
      {
        question: 'How much does title insurance cost in Florida?',
        answer: 'Florida title insurance rates are regulated by the state and are based on the property\'s purchase price or loan amount. For a $300,000 home, you can expect to pay approximately $1,725 for owner\'s coverage and around $575 for lender\'s coverage. Use our free quote calculator for an exact estimate for your transaction.'
      },
      {
        question: 'Do I need title insurance if I\'m paying cash?',
        answer: 'While not legally required for cash purchases, owner\'s title insurance is strongly recommended. Without a lender requiring a title search and insurance, you have less protection against hidden title defects. Title insurance is a one-time purchase that protects your investment for as long as you own the property.'
      },
      {
        question: 'How long does title insurance last?',
        answer: 'Owner\'s title insurance lasts for as long as you or your heirs own the property. It\'s a one-time premium paid at closing with no ongoing payments required. Lender\'s title insurance remains in effect until the mortgage is paid off or refinanced.'
      }
    ]
  },
  {
    name: 'Title Search Process',
    faqs: [
      {
        question: 'What is a title search?',
        answer: 'A title search is a comprehensive examination of public records to verify the legal ownership of a property and identify any claims, liens, or encumbrances against it. This includes searching county records, court documents, tax records, and other public filings to ensure the seller has the right to transfer ownership.'
      },
      {
        question: 'How long does a title search take?',
        answer: 'A standard title search typically takes 3-5 business days. However, complex properties, those with extensive ownership history, or properties with unusual circumstances may require additional time. We also offer expedited title search services when time is critical.'
      },
      {
        question: 'What can be discovered during a title search?',
        answer: 'A title search may uncover various issues including: outstanding mortgages or liens, unpaid property taxes, judgments against the property owner, easements or restrictions, boundary disputes, forgery or fraud in previous transfers, undisclosed heirs, or errors in public records.'
      },
      {
        question: 'What happens if a problem is found during the title search?',
        answer: 'If issues are discovered, we work with all parties to resolve them before closing. This may involve paying off liens, obtaining releases from creditors, correcting errors in records, or negotiating solutions between buyers and sellers. Many issues can be resolved; others may be covered by title insurance.'
      }
    ]
  },
  {
    name: 'Closing Process',
    faqs: [
      {
        question: 'What happens at a real estate closing?',
        answer: 'At closing, all parties meet to finalize the real estate transaction. Documents are reviewed and signed, funds are transferred, and ownership of the property is officially transferred from seller to buyer. The process typically takes 30-60 minutes and includes signing the deed, mortgage documents, and other required paperwork.'
      },
      {
        question: 'What documents do I need to bring to closing?',
        answer: 'You\'ll need to bring: a valid government-issued photo ID (driver\'s license or passport), proof of homeowner\'s insurance, certified or cashier\'s check for closing costs (or wire transfer confirmation), and any documents requested by your lender. We\'ll provide a complete checklist before your closing date.'
      },
      {
        question: 'Can you close at my home or office?',
        answer: 'Yes! We offer on-location closings throughout Florida at no additional charge. Our mobile closing services allow us to meet you at your home, office, or any other convenient location. This is especially helpful for busy professionals or those with mobility concerns.'
      },
      {
        question: 'Who attends the closing?',
        answer: 'Typically, the buyer, seller, real estate agents, and a closing agent attend the closing. Lender representatives may participate remotely. Attorneys may be present depending on the complexity of the transaction. We coordinate schedules to make the process as convenient as possible for all parties.'
      }
    ]
  },
  {
    name: 'Costs & Payments',
    faqs: [
      {
        question: 'What are closing costs?',
        answer: 'Closing costs are fees associated with finalizing a real estate transaction. They typically include: title insurance premiums, title search fees, document preparation, recording fees, escrow fees, and various taxes. In Florida, closing costs typically range from 2-5% of the purchase price.'
      },
      {
        question: 'Who pays for title insurance in Florida?',
        answer: 'In Florida, the party who pays for title insurance varies by county. In most counties, the seller pays for the owner\'s title insurance. However, in Miami-Dade, Broward, Sarasota, and Collier counties, the buyer traditionally pays. This is negotiable between parties regardless of local custom.'
      },
      {
        question: 'Can I shop around for title insurance?',
        answer: 'Yes, you have the right to choose your title insurance company. While Florida regulates title insurance rates, you can still compare services, experience, and customer reviews. Choosing an experienced, reputable title company like Town & Country Title Guaranty ensures a smooth transaction.'
      }
    ]
  },
  {
    name: 'Special Situations',
    faqs: [
      {
        question: 'Do I need new title insurance when refinancing?',
        answer: 'Yes, your new lender will require a new lender\'s title insurance policy when you refinance. However, you may qualify for a discounted "reissue rate" if you\'re refinancing within a certain timeframe of your original purchase. Owner\'s title insurance from your original purchase remains in effect.'
      },
      {
        question: 'What about title insurance for new construction?',
        answer: 'New construction properties require title insurance just like existing homes. In fact, new construction may have additional title risks such as mechanics\' liens from contractors or suppliers. We conduct thorough searches to ensure your new home is free of any encumbrances.'
      },
      {
        question: 'Do you handle commercial property closings?',
        answer: 'Yes, we provide comprehensive title services for commercial properties of all types and sizes. Commercial transactions often involve more complex ownership structures and require specialized expertise. Our team has extensive experience with office buildings, retail spaces, industrial properties, and multi-family investments.'
      },
      {
        question: 'What is a municipal lien search?',
        answer: 'A municipal lien search examines local government records for any outstanding liens or violations against a property. This includes unpaid utility bills, code violations, unpaid permit fees, and special assessments. These liens can transfer with the property if not discovered and resolved before closing.'
      }
    ]
  }
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap(category => category.faqs);

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'FAQ', url: '/faq/' }
      ]} />
      <FAQSchema faqs={allFaqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100">
              Get answers to common questions about title insurance, title searches,
              and the closing process in Florida.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-500">
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <details key={faqIndex} className="card group">
                      <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg text-gray-900">
                        {faq.question}
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team of title insurance experts is here to help. Contact us for personalized
                answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact/" className="btn-primary">
                  Contact Us
                </Link>
                <Link href="/quote/" className="btn-secondary">
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
