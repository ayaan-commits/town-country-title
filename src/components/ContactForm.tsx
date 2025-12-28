'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, Send, Loader2 } from 'lucide-react';

// Web3Forms Access Key - Get yours at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Contact Message - Town & Country Title');
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
      <div className="bg-sage-50 rounded-xl border border-sage-200 p-8 text-center">
        <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-sage-500" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-primary-900 mb-2">
          Message Sent!
        </h2>
        <p className="text-primary-600 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot for spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="label-light">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="input-light"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="label-light">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="input-light"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="label-light">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input-light"
          />
        </div>

        <div>
          <label htmlFor="phone" className="label-light">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="input-light"
          />
        </div>

        <div>
          <label htmlFor="subject" className="label-light">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="input-light"
          >
            <option value="">Select a subject</option>
            <option value="Request a Quote">Request a Quote</option>
            <option value="Title Search Inquiry">Title Search Inquiry</option>
            <option value="Closing Services">Closing Services</option>
            <option value="General Question">General Question</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="label-light">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="input-light"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Send Message
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
