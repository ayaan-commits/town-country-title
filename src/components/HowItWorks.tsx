'use client';

import Link from 'next/link';
import { FileText, Search, ClipboardCheck, Key, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Order Placed',
    description: 'Submit your order online or give us a call. We will collect property and transaction details to get started.',
    duration: '5 min',
  },
  {
    number: '02',
    icon: Search,
    title: 'Title Search',
    description: 'Our team conducts a comprehensive search of public records to verify ownership and identify any liens or encumbrances.',
    duration: '3-5 days',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Title Review',
    description: 'We review the search results, resolve any issues found, and prepare the title commitment for your review.',
    duration: '1-2 days',
  },
  {
    number: '04',
    icon: Key,
    title: 'Closing Day',
    description: 'Sign your documents at our office or we come to you. We handle all the paperwork and issue your title policy.',
    duration: '1-2 hours',
  },
];

interface HowItWorksProps {
  variant?: 'default' | 'compact';
  showCTA?: boolean;
}

export function HowItWorks({ variant = 'default', showCTA = true }: HowItWorksProps) {
  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary-200" />
            )}
            <div className="relative z-10 text-center p-4">
              <div className="w-12 h-12 bg-accent-400 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                {step.number}
              </div>
              <h3 className="font-semibold text-primary-900 text-sm">{step.title}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-20 bg-sand">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4">
            How It Works
          </h2>
          <p className="text-primary-600">
            From your first call to getting your keys, we make the title and closing process
            simple and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-primary-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 border border-primary-100 h-full shadow-soft hover:shadow-elevated transition-all duration-300">
                  {/* Step number with icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-accent-400 text-white rounded-xl flex items-center justify-center font-bold text-xl">
                        {step.number}
                      </div>
                      {/* Connector dot (desktop) */}
                      <div className="hidden lg:block absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-400 rounded-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-semibold text-primary-900 mb-1">{step.title}</h3>
                      <span className="text-xs text-accent-500 font-medium">{step.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-primary-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between cards (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-accent-400 rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link href="/order/" className="btn-primary inline-flex items-center gap-2">
                Start Your Order
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/quote/" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
            <p className="text-primary-500 text-sm mt-4">
              Questions? Call us at <a href="tel:(954) 914-5343" className="text-accent-500 hover:underline">(954) 914-5343</a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default HowItWorks;
