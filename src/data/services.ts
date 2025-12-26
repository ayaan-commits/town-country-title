export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "title-insurance",
    title: "Title Insurance Services",
    shortTitle: "Title Insurance",
    description: "Protect your property investment with comprehensive title insurance coverage that safeguards against ownership disputes and hidden claims.",
    longDescription: "Title insurance is a crucial safeguard for any real estate transaction. At Town & Country Title Guaranty, we provide both owner's and lender's title insurance policies that protect against financial loss from defects in title to real property. Our thorough title searches and comprehensive coverage give you peace of mind knowing your investment is protected.",
    icon: "🛡️",
    image: "/images/services/title-insurance.jpg",
    features: [
      "Owner's Title Insurance Policies",
      "Lender's Title Insurance Policies",
      "Enhanced Coverage Options",
      "Commercial Title Insurance",
      "Residential Title Insurance",
      "Refinance Title Insurance"
    ],
    benefits: [
      "Protection against ownership claims",
      "Coverage for legal defense costs",
      "One-time premium payment",
      "Lifetime coverage for owners",
      "Peace of mind for your investment"
    ],
    faqs: [
      {
        question: "What does title insurance cover?",
        answer: "Title insurance protects against financial loss from defects in title, including unknown liens, encumbrances, fraud, forgery, and errors in public records."
      },
      {
        question: "How long does title insurance last?",
        answer: "Owner's title insurance lasts as long as you or your heirs own the property. Lender's title insurance remains in effect until the mortgage is paid off."
      },
      {
        question: "Is title insurance required?",
        answer: "While lender's title insurance is typically required by mortgage companies, owner's title insurance is optional but highly recommended to protect your investment."
      }
    ],
    metaTitle: "Title Insurance Services in Florida | Town & Country Title Guaranty",
    metaDescription: "Comprehensive title insurance services protecting Florida homeowners and lenders. Get owner's and lender's title insurance policies. Free quotes available."
  },
  {
    slug: "title-search",
    title: "Title Search Services",
    shortTitle: "Title Search",
    description: "Comprehensive title searches to uncover any issues that could affect your property ownership before closing.",
    longDescription: "A thorough title search is the foundation of a secure real estate transaction. Our experienced team examines public records, court filings, and historical documents to identify any liens, encumbrances, or ownership issues that could affect your property rights. We leave no stone unturned in ensuring your title is clear.",
    icon: "🔍",
    image: "/images/services/title-search.jpg",
    features: [
      "Full Title Examination",
      "Lien Search",
      "Judgment Search",
      "Tax Search",
      "Municipal Lien Search",
      "HOA/Condo Association Search"
    ],
    benefits: [
      "Identify potential issues early",
      "Prevent closing delays",
      "Protect against hidden claims",
      "Ensure clear property ownership",
      "Comprehensive documentation"
    ],
    faqs: [
      {
        question: "How long does a title search take?",
        answer: "A standard title search typically takes 3-5 business days. Complex properties or those with extensive history may require additional time."
      },
      {
        question: "What records are searched?",
        answer: "We search county records, court filings, tax records, municipal liens, HOA documents, and other public records that may affect property ownership."
      },
      {
        question: "What happens if issues are found?",
        answer: "If issues are discovered, we work with all parties to resolve them before closing. This may include paying off liens, obtaining releases, or negotiating solutions."
      }
    ],
    metaTitle: "Title Search Services Florida | Comprehensive Property Title Searches",
    metaDescription: "Professional title search services in Florida. Thorough examination of property records, liens, and encumbrances. Protect your real estate investment."
  },
  {
    slug: "closing-services",
    title: "Real Estate Closing Services",
    shortTitle: "Closing Services",
    description: "Professional closing services that ensure smooth, hassle-free real estate transactions from contract to keys.",
    longDescription: "Our closing services provide comprehensive support throughout your real estate transaction. From document preparation to fund disbursement, we handle every detail to ensure a smooth closing experience. We offer flexible scheduling including on-location closings at your convenience.",
    icon: "🏠",
    image: "/images/services/closing-services.jpg",
    features: [
      "On-Location Closings",
      "Document Preparation",
      "Fund Disbursement",
      "Recording Services",
      "Post-Closing Services",
      "Mobile Closing Options"
    ],
    benefits: [
      "Convenient location options",
      "Expert guidance throughout",
      "Accurate document preparation",
      "Timely fund handling",
      "Professional representation"
    ],
    faqs: [
      {
        question: "What documents do I need for closing?",
        answer: "You'll typically need valid government-issued ID, proof of homeowners insurance, and any documents requested by your lender. We'll provide a complete checklist before closing."
      },
      {
        question: "Can you come to my location for closing?",
        answer: "Yes! We offer on-location closings throughout Florida. We can meet at your home, office, or another convenient location."
      },
      {
        question: "How long does a closing take?",
        answer: "Most closings take 30-60 minutes. Complex transactions or those with multiple parties may take longer."
      }
    ],
    metaTitle: "Real Estate Closing Services Florida | Mobile & On-Location Closings",
    metaDescription: "Professional real estate closing services in Florida. On-location closings, document preparation, and fund disbursement. Smooth transactions guaranteed."
  },
  {
    slug: "refinancing-services",
    title: "Refinancing Title Services",
    shortTitle: "Refinancing",
    description: "Streamlined title services for refinancing transactions with competitive rates and fast turnaround times.",
    longDescription: "Refinancing your home? We provide efficient title services specifically designed for refinance transactions. Our streamlined process ensures quick turnaround times while maintaining the thorough standards that protect your investment.",
    icon: "💰",
    image: "/images/services/refinancing.jpg",
    features: [
      "Refinance Title Search",
      "Lender's Title Insurance",
      "Rate Calculation",
      "Document Preparation",
      "Fast Closing Process",
      "Competitive Pricing"
    ],
    benefits: [
      "Faster processing times",
      "Competitive refinance rates",
      "Streamlined documentation",
      "Coordination with lenders",
      "Flexible scheduling"
    ],
    faqs: [
      {
        question: "Do I need new title insurance when refinancing?",
        answer: "Yes, your lender will require a new lender's title insurance policy. However, you may qualify for a discounted reissue rate if refinancing within a certain timeframe."
      },
      {
        question: "How long does a refinance closing take?",
        answer: "Refinance closings typically take 30-45 minutes as there are fewer parties involved compared to a purchase transaction."
      },
      {
        question: "What are the title costs for refinancing?",
        answer: "Refinance title costs vary based on the loan amount and property location. Contact us for a free quote specific to your transaction."
      }
    ],
    metaTitle: "Refinancing Title Services Florida | Fast & Affordable Refinance Closings",
    metaDescription: "Streamlined refinancing title services in Florida. Competitive rates, fast turnaround, and expert service. Get your free refinance title quote today."
  },
  {
    slug: "escrow-services",
    title: "Escrow Services",
    shortTitle: "Escrow",
    description: "Secure escrow services ensuring safe handling of funds throughout your real estate transaction.",
    longDescription: "As a neutral third party, we provide secure escrow services that protect both buyers and sellers during real estate transactions. Our escrow accounts are fully insured and audited, giving you confidence that your funds are handled with the utmost care and professionalism.",
    icon: "🔐",
    image: "/images/services/escrow.jpg",
    features: [
      "Earnest Money Deposits",
      "Secure Fund Holding",
      "Disbursement Services",
      "Transaction Coordination",
      "Insured Accounts",
      "Regular Auditing"
    ],
    benefits: [
      "Neutral third-party protection",
      "Secure fund handling",
      "Transparent transactions",
      "Professional oversight",
      "Regulatory compliance"
    ],
    faqs: [
      {
        question: "How is earnest money held?",
        answer: "Earnest money is held in our escrow account, a separate trust account that is insured and regularly audited to ensure the safety of your funds."
      },
      {
        question: "When is the escrow deposit released?",
        answer: "Escrow funds are released according to the terms of your purchase contract, typically at closing or upon specific contract contingencies being met."
      },
      {
        question: "Is my earnest money protected?",
        answer: "Yes, all escrow funds are held in insured accounts and are protected under Florida real estate regulations."
      }
    ],
    metaTitle: "Escrow Services Florida | Secure Real Estate Escrow Company",
    metaDescription: "Trusted escrow services in Florida. Secure handling of earnest money and transaction funds. Insured accounts and professional oversight. Contact us today."
  },
  {
    slug: "commercial-title-services",
    title: "Commercial Title Services",
    shortTitle: "Commercial",
    description: "Specialized title services for commercial real estate transactions of all sizes and complexity levels.",
    longDescription: "Commercial real estate transactions require specialized expertise and attention to detail. Our commercial title services team handles everything from small retail spaces to large multi-property portfolios. We understand the unique challenges of commercial transactions and provide tailored solutions to meet your needs.",
    icon: "🏢",
    image: "/images/services/commercial.jpg",
    features: [
      "Commercial Title Insurance",
      "Complex Transaction Handling",
      "Multi-Property Closings",
      "1031 Exchange Support",
      "Due Diligence Services",
      "Entity Documentation"
    ],
    benefits: [
      "Specialized expertise",
      "Complex deal navigation",
      "Multi-party coordination",
      "Investment protection",
      "Experienced professionals"
    ],
    faqs: [
      {
        question: "What makes commercial title different?",
        answer: "Commercial transactions often involve more complex ownership structures, larger sums, multiple parties, and require more extensive due diligence and specialized documentation."
      },
      {
        question: "Can you handle 1031 exchanges?",
        answer: "Yes, we work with qualified intermediaries to facilitate 1031 exchange transactions and ensure proper coordination of all title requirements."
      },
      {
        question: "What commercial property types do you service?",
        answer: "We handle all commercial property types including retail, office, industrial, multi-family, hospitality, and mixed-use properties."
      }
    ],
    metaTitle: "Commercial Title Services Florida | Business & Investment Property Closings",
    metaDescription: "Expert commercial title services in Florida. Specialized handling for business properties, 1031 exchanges, and complex transactions. Professional service guaranteed."
  },
  {
    slug: "residential-title-services",
    title: "Residential Title Services",
    shortTitle: "Residential",
    description: "Complete title services for home purchases, including single-family homes, condos, and townhomes.",
    longDescription: "Whether you're buying your first home or your fifth, our residential title services ensure a smooth path to homeownership. We handle all aspects of residential transactions including single-family homes, condominiums, townhouses, and vacant land purchases.",
    icon: "🏡",
    image: "/images/services/residential.jpg",
    features: [
      "Single-Family Home Closings",
      "Condo & Townhome Closings",
      "New Construction Closings",
      "For Sale By Owner Support",
      "First-Time Buyer Assistance",
      "Vacant Land Transactions"
    ],
    benefits: [
      "Personalized service",
      "Clear communication",
      "Step-by-step guidance",
      "Flexible scheduling",
      "Family-friendly approach"
    ],
    faqs: [
      {
        question: "What's different about a condo closing?",
        answer: "Condo closings require additional documentation including HOA estoppel letters, condo association documents, and verification of assessment status."
      },
      {
        question: "Do you help first-time homebuyers?",
        answer: "Absolutely! We provide extra guidance and clear explanations throughout the process to ensure first-time buyers understand every step of their closing."
      },
      {
        question: "Can you handle FSBO transactions?",
        answer: "Yes, we regularly work with For Sale By Owner transactions and can provide additional support to ensure a successful closing without a real estate agent."
      }
    ],
    metaTitle: "Residential Title Services Florida | Home Purchase Closing Services",
    metaDescription: "Trusted residential title services in Florida. Expert closings for homes, condos, and townhomes. First-time buyer friendly. Get your free quote today."
  },
  {
    slug: "lien-search-services",
    title: "Lien Search Services",
    shortTitle: "Lien Search",
    description: "Thorough lien searches to identify any outstanding debts or claims against a property before purchase.",
    longDescription: "A comprehensive lien search is essential to protecting your real estate investment. Our team conducts thorough searches of all relevant records to identify any liens, judgments, or claims that could affect your property ownership. We search municipal records, court filings, and other sources to ensure nothing is missed.",
    icon: "📋",
    image: "/images/services/lien-search.jpg",
    features: [
      "Municipal Lien Search",
      "Judgment Lien Search",
      "Tax Lien Search",
      "HOA Lien Search",
      "Federal Tax Lien Search",
      "Code Violation Search"
    ],
    benefits: [
      "Comprehensive coverage",
      "Fast turnaround",
      "Detailed reporting",
      "Risk identification",
      "Clear documentation"
    ],
    faqs: [
      {
        question: "What types of liens do you search for?",
        answer: "We search for all lien types including municipal liens, HOA liens, tax liens, judgment liens, mechanics liens, and federal tax liens."
      },
      {
        question: "How far back does a lien search go?",
        answer: "Lien searches typically examine records for the past several decades, depending on the type of lien and local requirements."
      },
      {
        question: "What if a lien is found?",
        answer: "If liens are discovered, we work with all parties to resolve them before closing, either through payoff, negotiation, or other legal means."
      }
    ],
    metaTitle: "Lien Search Services Florida | Municipal & Property Lien Searches",
    metaDescription: "Comprehensive lien search services in Florida. Municipal, tax, HOA, and judgment lien searches. Protect your property investment with thorough searches."
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
