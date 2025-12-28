'use client';

import { useState } from 'react';
import { floridaCounties } from '@/data/counties';
import { companyInfo } from '@/data/company';
import { Check, ChevronRight, ChevronLeft, User, Home, FileText, Send, Loader2 } from 'lucide-react';

type TransactionType = 'purchase' | 'refinance' | 'sale' | 'other';
type PropertyType = 'residential' | 'condo' | 'commercial' | 'vacant-land' | 'multi-family';
type Step = 1 | 2 | 3 | 4;

interface FormData {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  company: string;
  role: 'buyer' | 'seller' | 'agent' | 'lender' | 'attorney' | 'other';
  transactionType: TransactionType;
  propertyType: PropertyType;
  purchasePrice: string;
  loanAmount: string;
  closingDate: string;
  propertyAddress: string;
  propertyCity: string;
  propertyCounty: string;
  propertyZip: string;
  buyerName: string;
  sellerName: string;
  lenderName: string;
  additionalNotes: string;
  referralSource: string;
}

const initialFormData: FormData = {
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  company: '',
  role: 'buyer',
  transactionType: 'purchase',
  propertyType: 'residential',
  purchasePrice: '',
  loanAmount: '',
  closingDate: '',
  propertyAddress: '',
  propertyCity: '',
  propertyCounty: '',
  propertyZip: '',
  buyerName: '',
  sellerName: '',
  lenderName: '',
  additionalNotes: '',
  referralSource: '',
};

const steps = [
  { id: 1, name: 'Contact', icon: User },
  { id: 2, name: 'Transaction', icon: FileText },
  { id: 3, name: 'Property', icon: Home },
  { id: 4, name: 'Submit', icon: Send },
];

export function OrderForm() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const formatCurrency = (value: string) => {
    const num = value.replace(/[^0-9]/g, '');
    if (!num) return '';
    return new Intl.NumberFormat('en-US').format(parseInt(num));
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (step: Step): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.contactName.trim()) newErrors.contactName = 'Name is required';
      if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) newErrors.contactEmail = 'Invalid email';
      if (!formData.contactPhone.trim()) newErrors.contactPhone = 'Phone is required';
    }

    if (step === 2) {
      if (!formData.purchasePrice.trim()) newErrors.purchasePrice = 'Price is required';
    }

    if (step === 3) {
      if (!formData.propertyAddress.trim()) newErrors.propertyAddress = 'Address is required';
      if (!formData.propertyCity.trim()) newErrors.propertyCity = 'City is required';
      if (!formData.propertyCounty) newErrors.propertyCounty = 'County is required';
      if (!formData.propertyZip.trim()) newErrors.propertyZip = 'ZIP is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-sage-50 rounded-2xl border border-sage-200 p-8 lg:p-12 text-center">
        <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-sage-500" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-primary-900 mb-4">Order Submitted Successfully</h2>
        <p className="text-primary-600 mb-6 max-w-md mx-auto">
          Thank you for your order. Our team will review your information and contact you
          within 1 business day to confirm details and next steps.
        </p>
        <div className="bg-white rounded-xl p-6 max-w-sm mx-auto mb-8 border border-primary-100">
          <p className="text-sm text-primary-500 mb-2">Reference Number</p>
          <p className="text-xl font-mono text-primary-900">
            TC-{Date.now().toString().slice(-8)}
          </p>
        </div>
        <p className="text-sm text-primary-500">
          Questions? Call us at{' '}
          <a href={`tel:${companyInfo.phone}`} className="text-accent-500 hover:underline">
            {companyInfo.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-primary-100 overflow-hidden shadow-soft">
      {/* Progress Steps */}
      <div className="bg-primary-900 px-6 py-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                    currentStep > step.id
                      ? 'bg-sage-400 text-white'
                      : currentStep === step.id
                      ? 'bg-accent-400 text-white'
                      : 'bg-primary-700 text-primary-400'
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`ml-2 text-sm font-medium hidden sm:block ${
                    currentStep >= step.id ? 'text-white' : 'text-primary-400'
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 lg:w-24 h-0.5 mx-2 ${
                    currentStep > step.id ? 'bg-sage-400' : 'bg-primary-700'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 lg:p-8">
        {/* Step 1: Contact Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-heading font-bold text-primary-900 mb-2">Contact Information</h2>
              <p className="text-primary-600">Please provide your contact details.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label-light">Your Name *</label>
                <input
                  type="text"
                  value={formData.contactName}
                  onChange={(e) => updateField('contactName', e.target.value)}
                  className={`input-light ${errors.contactName ? 'border-red-500' : ''}`}
                  placeholder="John Smith"
                />
                {errors.contactName && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>
                )}
              </div>

              <div>
                <label className="label-light">Company (Optional)</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  className="input-light"
                  placeholder="ABC Realty"
                />
              </div>

              <div>
                <label className="label-light">Email Address *</label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => updateField('contactEmail', e.target.value)}
                  className={`input-light ${errors.contactEmail ? 'border-red-500' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.contactEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactEmail}</p>
                )}
              </div>

              <div>
                <label className="label-light">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => updateField('contactPhone', e.target.value)}
                  className={`input-light ${errors.contactPhone ? 'border-red-500' : ''}`}
                  placeholder="(555) 123-4567"
                />
                {errors.contactPhone && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactPhone}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="label-light">Your Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  className="input-light"
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="agent">Real Estate Agent</option>
                  <option value="lender">Lender</option>
                  <option value="attorney">Attorney</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Transaction Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-heading font-bold text-primary-900 mb-2">Transaction Details</h2>
              <p className="text-primary-600">Tell us about the transaction.</p>
            </div>

            <div>
              <label className="label-light mb-3">Transaction Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'purchase', label: 'Purchase' },
                  { value: 'refinance', label: 'Refinance' },
                  { value: 'sale', label: 'Sale Only' },
                  { value: 'other', label: 'Other' },
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => updateField('transactionType', type.value)}
                    className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                      formData.transactionType === type.value
                        ? 'bg-accent-400 text-white'
                        : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label-light mb-3">Property Type</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { value: 'residential', label: 'Residential' },
                  { value: 'condo', label: 'Condo/Townhome' },
                  { value: 'commercial', label: 'Commercial' },
                  { value: 'vacant-land', label: 'Vacant Land' },
                  { value: 'multi-family', label: 'Multi-Family' },
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => updateField('propertyType', type.value)}
                    className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                      formData.propertyType === type.value
                        ? 'bg-accent-400 text-white'
                        : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label-light">
                  {formData.transactionType === 'purchase' ? 'Purchase Price' : 'Property Value'} *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400">$</span>
                  <input
                    type="text"
                    value={formData.purchasePrice}
                    onChange={(e) => updateField('purchasePrice', formatCurrency(e.target.value))}
                    className={`input-light pl-8 ${errors.purchasePrice ? 'border-red-500' : ''}`}
                    placeholder="350,000"
                  />
                </div>
                {errors.purchasePrice && (
                  <p className="text-red-500 text-sm mt-1">{errors.purchasePrice}</p>
                )}
              </div>

              <div>
                <label className="label-light">Loan Amount (if financing)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400">$</span>
                  <input
                    type="text"
                    value={formData.loanAmount}
                    onChange={(e) => updateField('loanAmount', formatCurrency(e.target.value))}
                    className="input-light pl-8"
                    placeholder="280,000"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="label-light">Estimated Closing Date</label>
                <input
                  type="date"
                  value={formData.closingDate}
                  onChange={(e) => updateField('closingDate', e.target.value)}
                  className="input-light"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Property Information */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-heading font-bold text-primary-900 mb-2">Property Information</h2>
              <p className="text-primary-600">Where is the property located?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="label-light">Property Address *</label>
                <input
                  type="text"
                  value={formData.propertyAddress}
                  onChange={(e) => updateField('propertyAddress', e.target.value)}
                  className={`input-light ${errors.propertyAddress ? 'border-red-500' : ''}`}
                  placeholder="123 Main Street"
                />
                {errors.propertyAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyAddress}</p>
                )}
              </div>

              <div>
                <label className="label-light">City *</label>
                <input
                  type="text"
                  value={formData.propertyCity}
                  onChange={(e) => updateField('propertyCity', e.target.value)}
                  className={`input-light ${errors.propertyCity ? 'border-red-500' : ''}`}
                  placeholder="Miami"
                />
                {errors.propertyCity && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyCity}</p>
                )}
              </div>

              <div>
                <label className="label-light">County *</label>
                <select
                  value={formData.propertyCounty}
                  onChange={(e) => updateField('propertyCounty', e.target.value)}
                  className={`input-light ${errors.propertyCounty ? 'border-red-500' : ''}`}
                >
                  <option value="">Select County</option>
                  {floridaCounties.map((county) => (
                    <option key={county.slug} value={county.slug}>
                      {county.name} County
                    </option>
                  ))}
                </select>
                {errors.propertyCounty && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyCounty}</p>
                )}
              </div>

              <div>
                <label className="label-light">ZIP Code *</label>
                <input
                  type="text"
                  value={formData.propertyZip}
                  onChange={(e) => updateField('propertyZip', e.target.value)}
                  className={`input-light ${errors.propertyZip ? 'border-red-500' : ''}`}
                  placeholder="33101"
                  maxLength={5}
                />
                {errors.propertyZip && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyZip}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review & Submit */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-heading font-bold text-primary-900 mb-2">Additional Information</h2>
              <p className="text-primary-600">Any other details that would help us process your order.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label-light">Buyer Name(s)</label>
                <input
                  type="text"
                  value={formData.buyerName}
                  onChange={(e) => updateField('buyerName', e.target.value)}
                  className="input-light"
                  placeholder="If known"
                />
              </div>

              <div>
                <label className="label-light">Seller Name(s)</label>
                <input
                  type="text"
                  value={formData.sellerName}
                  onChange={(e) => updateField('sellerName', e.target.value)}
                  className="input-light"
                  placeholder="If known"
                />
              </div>

              <div>
                <label className="label-light">Lender Name</label>
                <input
                  type="text"
                  value={formData.lenderName}
                  onChange={(e) => updateField('lenderName', e.target.value)}
                  className="input-light"
                  placeholder="If financing"
                />
              </div>

              <div>
                <label className="label-light">How did you hear about us?</label>
                <select
                  value={formData.referralSource}
                  onChange={(e) => updateField('referralSource', e.target.value)}
                  className="input-light"
                >
                  <option value="">Select...</option>
                  <option value="referral">Referral</option>
                  <option value="google">Google Search</option>
                  <option value="repeat">Repeat Client</option>
                  <option value="agent">Real Estate Agent</option>
                  <option value="lender">Lender</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="label-light">Additional Notes</label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => updateField('additionalNotes', e.target.value)}
                  className="input-light min-h-[100px]"
                  placeholder="Any special instructions or additional information..."
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-cream rounded-xl p-6 mt-8 border border-primary-100">
              <h3 className="text-lg font-heading font-semibold text-primary-900 mb-4">Order Summary</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-primary-500">Contact</p>
                  <p className="text-primary-900 font-medium">{formData.contactName}</p>
                  <p className="text-primary-600">{formData.contactEmail}</p>
                </div>
                <div>
                  <p className="text-primary-500">Transaction</p>
                  <p className="text-primary-900 font-medium capitalize">{formData.transactionType} - {formData.propertyType.replace('-', ' ')}</p>
                  <p className="text-primary-600">${formData.purchasePrice}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-primary-500">Property</p>
                  <p className="text-primary-900 font-medium">{formData.propertyAddress}</p>
                  <p className="text-primary-600">
                    {formData.propertyCity}, FL {formData.propertyZip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-primary-100">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="btn-ghost inline-flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary inline-flex items-center gap-2"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary inline-flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Order
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
