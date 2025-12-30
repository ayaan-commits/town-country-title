'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { companyInfo } from '@/data/company';

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar md:hidden">
      <div className="flex gap-2">
        <a
          href={`tel:${companyInfo.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-primary-900 text-white py-3 rounded-lg font-semibold text-base hover:bg-primary-800 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <Link
          href="/quote/"
          className="flex-1 flex items-center justify-center gap-2 bg-accent-400 text-white py-3 rounded-lg font-semibold text-base hover:bg-accent-500 transition-colors"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
