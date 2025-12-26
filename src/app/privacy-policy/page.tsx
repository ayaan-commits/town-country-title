import { Metadata } from 'next';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Town & Country Title Guaranty. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy/'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Privacy Policy', url: '/privacy-policy/' }
      ]} />

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">Last updated: December 2024</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p>
                {companyInfo.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Property information for title services</li>
                <li>Financial information necessary for transactions</li>
                <li>Social Security Numbers when required for real estate transactions</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Provide title insurance and closing services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Title insurance underwriters</li>
                <li>Lenders and real estate professionals involved in your transaction</li>
                <li>Government agencies as required by law</li>
                <li>Service providers who assist in our operations</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control
                cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly
                collect personal information from children.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                any changes by posting the new policy on this page and updating the date above.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
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
