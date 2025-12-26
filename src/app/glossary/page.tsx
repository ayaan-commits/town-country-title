import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Title Insurance Glossary | Real Estate Terms Explained',
  description: 'Comprehensive glossary of title insurance and real estate terms. Understand the terminology used in Florida real estate transactions.',
  alternates: {
    canonical: '/glossary/'
  }
};

const glossaryTerms = [
  { term: 'Abstract of Title', definition: 'A condensed history of the title to a property, consisting of a summary of all links in the chain of title and all recorded encumbrances affecting the property.' },
  { term: 'Chain of Title', definition: 'The chronological order of conveyance of a property from the original owner to the current owner. A clear chain shows unbroken ownership transfer.' },
  { term: 'Clear Title', definition: 'A title free of liens, defects, or other legal encumbrances that could challenge ownership rights.' },
  { term: 'Closing', definition: 'The final step in a real estate transaction where documents are signed, funds are transferred, and ownership is legally transferred from seller to buyer.' },
  { term: 'Closing Costs', definition: 'Fees and expenses, beyond the property price, that buyers and sellers incur to complete a real estate transaction.' },
  { term: 'Cloud on Title', definition: 'Any condition revealed by a title search that adversely affects the title to real estate. Usually, clouds cannot be removed except by a quitclaim deed, release, or court action.' },
  { term: 'Conveyance', definition: 'A written document that transfers property from one person to another, such as a deed.' },
  { term: 'Deed', definition: 'A legal document that transfers ownership of real property from one party to another.' },
  { term: 'Documentary Stamps', definition: 'A state tax in Florida imposed on documents that transfer an interest in real property. The tax rate is $0.70 per $100 of consideration.' },
  { term: 'Easement', definition: 'A right to use another person\'s land for a specific purpose, such as a utility company\'s right to run power lines across your property.' },
  { term: 'Encumbrance', definition: 'Any claim, lien, charge, or liability attached to real property that may diminish the value of the property but does not prevent transfer of title.' },
  { term: 'Escrow', definition: 'The process by which a neutral third party holds funds and documents until all conditions of a real estate transaction are met.' },
  { term: 'Estoppel Letter', definition: 'A document from an HOA or condo association stating the current status of assessments, fees, and any violations on a property.' },
  { term: 'Fee Simple', definition: 'The highest form of ownership interest in real property, giving the owner full rights to the property.' },
  { term: 'Grantee', definition: 'The person receiving title to property through a deed; the buyer.' },
  { term: 'Grantor', definition: 'The person conveying title to property through a deed; the seller.' },
  { term: 'Intangible Tax', definition: 'A Florida tax of $0.20 per $100 charged on the mortgage amount when recording a new mortgage.' },
  { term: 'Lien', definition: 'A legal claim against property that must be paid when the property is sold. Common types include mortgage liens, tax liens, and mechanic\'s liens.' },
  { term: 'Lis Pendens', definition: 'A recorded notice indicating pending litigation affecting title to a property.' },
  { term: 'Marketable Title', definition: 'A title that is free from reasonable doubt as to its validity; one that a prudent person would accept.' },
  { term: 'Mechanic\'s Lien', definition: 'A lien filed by contractors, subcontractors, or suppliers who have not been paid for work performed or materials provided.' },
  { term: 'Mortgage', definition: 'A security instrument that pledges real property as collateral for a loan.' },
  { term: 'Municipal Lien Search', definition: 'A search of local government records to identify any outstanding utility bills, code violations, or special assessments against a property.' },
  { term: 'Owner\'s Title Insurance', definition: 'Title insurance that protects the property owner against loss due to title defects. Coverage lasts as long as the owner or their heirs own the property.' },
  { term: 'Plat', definition: 'A map of a subdivision or community showing the location and boundaries of individual properties.' },
  { term: 'Quitclaim Deed', definition: 'A deed that transfers whatever interest the grantor has in the property without making any warranties about the title.' },
  { term: 'Recording', definition: 'The act of entering documents affecting title to property in the public records at the county courthouse.' },
  { term: 'Survey', definition: 'A drawing showing the exact boundaries, dimensions, and location of a property along with any improvements and encroachments.' },
  { term: 'Title', definition: 'The right to ownership of property, including the right to possession, use, and transfer of that property.' },
  { term: 'Title Commitment', definition: 'A preliminary report issued by a title company that commits to issue a title insurance policy subject to certain requirements and exceptions.' },
  { term: 'Title Defect', definition: 'An issue with the title that could prevent an owner from having clear ownership, such as a lien, encumbrance, or ownership dispute.' },
  { term: 'Title Examination', definition: 'The process of reviewing all recorded documents relating to a property to determine its ownership status and any encumbrances.' },
  { term: 'Title Insurance', definition: 'Insurance that protects the policyholder against financial loss from defects in title and from the invalidity or unenforceability of mortgage liens.' },
  { term: 'Title Search', definition: 'An examination of public records to determine the ownership history of a property and identify any claims, liens, or encumbrances.' },
  { term: 'Warranty Deed', definition: 'A deed in which the grantor warrants that they have good title to the property and the right to convey it, and that the title is free from encumbrances except as noted.' },
];

export default function GlossaryPage() {
  // Group terms by first letter
  const groupedTerms = glossaryTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const letters = Object.keys(groupedTerms).sort();

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Glossary', url: '/glossary/' }
      ]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Title Insurance Glossary
            </h1>
            <p className="text-xl text-primary-100">
              Understanding the terminology used in real estate transactions and title insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Letter Navigation */}
      <section className="py-6 bg-gray-50 border-b sticky top-[72px] z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-primary-500 font-bold hover:bg-primary-500 hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-32">
                <h2 className="text-3xl font-heading font-bold text-primary-500 mb-6 pb-2 border-b-2 border-primary-500">
                  {letter}
                </h2>
                <dl className="space-y-6">
                  {groupedTerms[letter].map((item) => (
                    <div key={item.term} className="bg-white rounded-lg p-6 shadow-sm">
                      <dt className="text-lg font-bold text-gray-900 mb-2">{item.term}</dt>
                      <dd className="text-gray-600">{item.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
