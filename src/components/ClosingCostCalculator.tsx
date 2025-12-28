'use client';

import { useState } from 'react';
import { calculateClosingCosts, ClosingCostEstimate } from '@/lib/florida-rates';
import { floridaCounties } from '@/data/counties';
import { Calculator, DollarSign, Home, FileText, ArrowRight } from 'lucide-react';

interface ClosingCostCalculatorProps {
  variant?: 'full' | 'mini';
  onCalculate?: (estimate: ClosingCostEstimate) => void;
}

export function ClosingCostCalculator({ variant = 'full', onCalculate }: ClosingCostCalculatorProps) {
  const [purchasePrice, setPurchasePrice] = useState<string>('');
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [county, setCounty] = useState<string>('');
  const [transactionType, setTransactionType] = useState<'purchase' | 'refinance'>('purchase');
  const [propertyType, setPropertyType] = useState<string>('residential');
  const [estimate, setEstimate] = useState<ClosingCostEstimate | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatInputValue = (value: string) => {
    const num = value.replace(/[^0-9]/g, '');
    if (!num) return '';
    return new Intl.NumberFormat('en-US').format(parseInt(num));
  };

  const parseInputValue = (value: string) => {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
  };

  const handleCalculate = () => {
    const price = parseInputValue(purchasePrice);
    const loan = parseInputValue(loanAmount);

    if (price <= 0) return;

    const result = calculateClosingCosts(price, loan, transactionType === 'refinance');
    setEstimate(result);
    setShowLeadForm(true);
    onCalculate?.(result);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  if (variant === 'mini') {
    return (
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
            <Calculator className="w-5 h-5 text-accent-500" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-900">Quick Estimate</h3>
            <p className="text-sm text-primary-500">Florida closing costs</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="label-light">Purchase Price</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
              <input
                type="text"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(formatInputValue(e.target.value))}
                placeholder="350,000"
                className="input-light pl-9"
              />
            </div>
          </div>

          <div>
            <label className="label-light">County</label>
            <select
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className="input-light"
            >
              <option value="">Select County</option>
              {floridaCounties.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} County
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCalculate}
            className="btn-primary w-full"
          >
            Get Instant Estimate
          </button>

          {estimate && (
            <div className="mt-4 p-4 bg-sage-50 border border-sage-200 rounded-xl">
              <div className="text-sm text-primary-600 mb-1">Estimated Closing Costs</div>
              <div className="text-2xl font-bold text-primary-900">
                {formatCurrency(estimate.grandTotal)}
              </div>
              <a
                href="/calculator/"
                className="text-sm text-accent-500 hover:underline mt-2 inline-flex items-center gap-1"
              >
                See full breakdown <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-primary-100 overflow-hidden shadow-soft">
      {/* Header */}
      <div className="bg-primary-900 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-400 rounded-lg flex items-center justify-center">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Florida Closing Cost Calculator</h2>
            <p className="text-sm text-primary-200">Get an instant estimate for your transaction</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="space-y-6">
            {/* Transaction Type */}
            <div>
              <label className="label-light mb-2">Transaction Type</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setTransactionType('purchase')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    transactionType === 'purchase'
                      ? 'bg-accent-400 text-white'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  Purchase
                </button>
                <button
                  onClick={() => setTransactionType('refinance')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    transactionType === 'refinance'
                      ? 'bg-accent-400 text-white'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  Refinance
                </button>
              </div>
            </div>

            {/* Purchase Price */}
            <div>
              <label className="label-light">
                {transactionType === 'purchase' ? 'Purchase Price' : 'Property Value'}
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                <input
                  type="text"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(formatInputValue(e.target.value))}
                  placeholder="350,000"
                  className="input-light pl-10 text-lg"
                />
              </div>
            </div>

            {/* Loan Amount */}
            <div>
              <label className="label-light">Loan Amount (if financing)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                <input
                  type="text"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(formatInputValue(e.target.value))}
                  placeholder="280,000"
                  className="input-light pl-10 text-lg"
                />
              </div>
              <p className="text-xs text-primary-500 mt-1">Leave empty for cash transaction</p>
            </div>

            {/* Property Type */}
            <div>
              <label className="label-light">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="input-light"
              >
                <option value="residential">Residential</option>
                <option value="condo">Condo/Townhome</option>
                <option value="commercial">Commercial</option>
                <option value="vacant-land">Vacant Land</option>
              </select>
            </div>

            {/* County */}
            <div>
              <label className="label-light">County</label>
              <select
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                className="input-light"
              >
                <option value="">Select Florida County</option>
                {floridaCounties.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name} County
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleCalculate}
              disabled={!purchasePrice}
              className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Calculate Closing Costs
            </button>
          </div>

          {/* Right: Results */}
          <div>
            {!estimate ? (
              <div className="h-full flex items-center justify-center bg-cream rounded-xl p-8">
                <div className="text-center">
                  <Home className="w-12 h-12 text-primary-300 mx-auto mb-4" />
                  <p className="text-primary-500">
                    Enter your transaction details to see an instant estimate
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-cream rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">Estimated Closing Costs</h3>

                {/* Grand Total */}
                <div className="bg-accent-400 rounded-lg p-4 mb-6">
                  <div className="text-white/80 text-sm">Total Estimated Costs</div>
                  <div className="text-3xl font-bold text-white">
                    {formatCurrency(estimate.grandTotal)}
                  </div>
                </div>

                {/* Title Charges */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary-500 mb-3 uppercase tracking-wide">
                    Title Company Charges
                  </h4>
                  <div className="space-y-2">
                    {transactionType === 'purchase' && (
                      <div className="flex justify-between text-primary-700">
                        <span>Owner&apos;s Title Insurance</span>
                        <span className="font-medium">{formatCurrency(estimate.ownersTitleInsurance)}</span>
                      </div>
                    )}
                    {estimate.lendersTitleInsurance > 0 && (
                      <div className="flex justify-between text-primary-700">
                        <span>Lender&apos;s Title Insurance</span>
                        <span className="font-medium">{formatCurrency(estimate.lendersTitleInsurance)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-primary-700">
                      <span>Settlement Fee</span>
                      <span className="font-medium">{formatCurrency(estimate.settlementFee)}</span>
                    </div>
                    <div className="flex justify-between text-primary-700">
                      <span>Title Search</span>
                      <span className="font-medium">{formatCurrency(estimate.titleSearchFee)}</span>
                    </div>
                    <div className="flex justify-between text-primary-900 font-medium pt-2 border-t border-primary-200">
                      <span>Subtotal</span>
                      <span>{formatCurrency(estimate.totalTitleCharges)}</span>
                    </div>
                  </div>
                </div>

                {/* Government Fees */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary-500 mb-3 uppercase tracking-wide">
                    Government Fees & Taxes
                  </h4>
                  <div className="space-y-2">
                    {transactionType === 'purchase' && (
                      <div className="flex justify-between text-primary-700">
                        <span>Documentary Stamps</span>
                        <span className="font-medium">{formatCurrency(estimate.documentaryStamps)}</span>
                      </div>
                    )}
                    {estimate.intangibleTax > 0 && (
                      <div className="flex justify-between text-primary-700">
                        <span>Intangible Tax</span>
                        <span className="font-medium">{formatCurrency(estimate.intangibleTax)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-primary-700">
                      <span>Recording Fees</span>
                      <span className="font-medium">{formatCurrency(estimate.recordingFees)}</span>
                    </div>
                    <div className="flex justify-between text-primary-900 font-medium pt-2 border-t border-primary-200">
                      <span>Subtotal</span>
                      <span>{formatCurrency(estimate.totalGovernmentFees)}</span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-primary-500">
                  * This is an estimate only. Actual costs may vary based on specific transaction details.
                  Contact us for an accurate quote.
                </p>

                {/* Lead Capture */}
                {showLeadForm && !leadSubmitted && (
                  <div className="mt-6 pt-6 border-t border-primary-200">
                    <h4 className="text-sm font-medium text-primary-900 mb-3">
                      Get a detailed quote emailed to you
                    </h4>
                    <form onSubmit={handleLeadSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="input-light text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="input-light text-sm"
                      />
                      <input
                        type="tel"
                        placeholder="Phone (optional)"
                        className="input-light text-sm"
                      />
                      <button type="submit" className="btn-secondary w-full">
                        Email My Quote
                      </button>
                    </form>
                  </div>
                )}

                {leadSubmitted && (
                  <div className="mt-6 p-4 bg-sage-50 border border-sage-200 rounded-lg">
                    <p className="text-sage-700 text-sm">
                      Thank you! We&apos;ll email your detailed quote shortly.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosingCostCalculator;
