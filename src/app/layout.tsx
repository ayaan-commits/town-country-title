import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { LocalBusinessSchema, WebsiteSchema } from '@/components/SchemaMarkup';
import { companyInfo } from '@/data/company';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.url),
  title: {
    default: companyInfo.seo.defaultTitle,
    template: companyInfo.seo.titleTemplate
  },
  description: companyInfo.seo.defaultDescription,
  keywords: companyInfo.seo.keywords,
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: companyInfo.url,
    siteName: companyInfo.name,
    title: companyInfo.seo.defaultTitle,
    description: companyInfo.seo.defaultDescription,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: companyInfo.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: companyInfo.seo.defaultTitle,
    description: companyInfo.seo.defaultDescription,
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: companyInfo.url
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logos/logo-square.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f0f0f" />

        {/* Schema markup */}
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
