import { Metadata } from 'next';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Our Title Insurance Experts',
  description: 'Contact Town & Country Title Guaranty for title insurance quotes, closing services, and real estate questions. Located in Pembroke Pines, FL. Call (954) 914-5343.',
  alternates: {
    canonical: '/contact/'
  }
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact Us', url: '/contact/' }
      ]} />

      {/* Hero Section */}
      <section className="bg-primary-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-primary-200">
              Have questions about title insurance or need a quote? Our team is here to help.
              Reach out today and experience our commitment to exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-primary-100 p-8 shadow-soft">
              <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Office Address</h3>
                    <p className="text-primary-600">
                      {companyInfo.address.street}<br />
                      {companyInfo.address.suite}<br />
                      {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Phone</h3>
                    <a href={`tel:${companyInfo.phone}`} className="text-accent-500 hover:text-accent-600 font-medium">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Email</h3>
                    <a href={`mailto:${companyInfo.email}`} className="text-accent-500 hover:text-accent-600 font-medium">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">Business Hours</h3>
                    <p className="text-primary-600">
                      {companyInfo.hours.weekdays}<br />
                      {companyInfo.hours.saturday}<br />
                      {companyInfo.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-primary-900 mb-4">Find Us</h3>
                <div className="bg-primary-100 rounded-xl h-64 flex items-center justify-center border border-primary-200">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-primary-400" />
                    <p className="text-primary-600 font-medium">Google Maps Integration</p>
                    <p className="text-sm text-primary-500">Pembroke Pines, FL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
