import { Metadata } from 'next';
import Link from 'next/link';
import { OrderForm } from '@/components/OrderForm';
import { companyInfo } from '@/data/company';
import { Phone, Clock, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Place New Order | Title Insurance & Closing Services | Town & Country Title',
  description: 'Submit a new title insurance or closing order online. Fast, secure ordering for Florida real estate transactions. Get started in minutes.',
  openGraph: {
    title: 'Place New Order - Town & Country Title Guaranty',
    description: 'Submit your title insurance or closing order online. Serving all 67 Florida counties.',
  },
};

const benefits = [
  {
    icon: Clock,
    title: 'Quick Processing',
    description: 'Orders reviewed within 1 business day',
  },
  {
    icon: Shield,
    title: 'Secure & Confidential',
    description: 'Your information is protected',
  },
  {
    icon: CheckCircle,
    title: 'Expert Team',
    description: '49 years of Florida experience',
  },
];

export default function OrderPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Place Order</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Place a New Order
              </h1>
              <p className="text-gray-400 mb-8">
                Complete the form to submit a new title insurance or closing order.
                Our team will review and contact you within 1 business day.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{benefit.title}</div>
                      <div className="text-sm text-gray-500">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Alternative */}
              <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
                <p className="text-gray-400 text-sm mb-4">
                  Prefer to speak with someone? Call us directly:
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center gap-2 text-accent-500 font-medium hover:text-accent-400"
                >
                  <Phone className="w-5 h-5" />
                  {companyInfo.phone}
                </a>
                <p className="text-gray-500 text-xs mt-2">
                  Mon-Fri 9am-5pm EST
                </p>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-2">
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
}
