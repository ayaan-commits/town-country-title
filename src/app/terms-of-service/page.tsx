import { Metadata } from 'next';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Town & Country Title Guaranty. Read our terms and conditions for using our website and services.',
  alternates: {
    canonical: '/terms-of-service/'
  }
};

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Terms of Service', url: '/terms-of-service/' }
      ]} />

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Terms of Service</h1>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">Last updated: December 2024</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the website of {companyInfo.name} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
                you agree to be bound by these Terms of Service. If you do not agree with any part of these terms,
                you may not access the website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services Description</h2>
              <p>
                {companyInfo.name} provides title insurance and real estate closing services in Florida, including:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Title insurance policies (owner&apos;s and lender&apos;s)</li>
                <li>Title searches and examinations</li>
                <li>Real estate closing services</li>
                <li>Escrow services</li>
                <li>Related real estate transaction services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Website</h2>
              <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Use the website in any way that violates applicable laws</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Transmit any malware or harmful code</li>
                <li>Collect or harvest any information from the website without permission</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quote Requests</h2>
              <p>
                Quote requests submitted through our website are for informational purposes only and do not
                constitute a binding agreement. Final rates and terms will be determined based on complete
                transaction information and applicable Florida regulations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
              <p>
                The content on this website, including text, graphics, logos, and images, is the property of
                {companyInfo.name} and is protected by copyright and other intellectual property laws.
                You may not reproduce, distribute, or create derivative works without our written permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer of Warranties</h2>
              <p>
                The information on this website is provided &quot;as is&quot; without warranties of any kind.
                We do not warrant that the website will be uninterrupted, secure, or error-free.
                The content is for general informational purposes and should not be considered legal advice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {companyInfo.name} shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your use
                of the website or reliance on any information provided herein.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Services</h2>
              <p>
                Our title insurance and closing services are subject to separate agreements and are governed
                by applicable Florida laws and regulations. Title insurance policies are subject to the terms,
                conditions, and exclusions contained in the policy documents.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content
                or privacy practices of these external sites. Linking to a third-party website does not
                constitute an endorsement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida,
                without regard to its conflict of law provisions. Any disputes shall be resolved in the courts
                of Broward County, Florida.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately
                upon posting to the website. Your continued use of the website after changes constitutes
                acceptance of the modified Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <p className="mt-4">
                <strong>{companyInfo.name}</strong><br />
                {companyInfo.address.full}<br />
                Phone: {companyInfo.phone}<br />
                Email: {companyInfo.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
