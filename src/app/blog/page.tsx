import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Title Insurance Blog | Expert Guides & Tips',
  description: 'Expert articles about title insurance, closing costs, and real estate transactions in Florida. Learn from Town & Country Title Guaranty\'s experienced team.',
  alternates: {
    canonical: '/blog/'
  }
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog/' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

        {/* Gold Accent Orbs */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white animate-fade-in-up">
              Title Insurance Blog
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in-up">
              Expert guides, tips, and insights about title insurance, closing costs,
              and real estate transactions in Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-dark-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-dark-900 border border-dark-800 rounded-xl overflow-hidden group hover:border-accent-500/30 hover:shadow-glow transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}/`} className="block relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                </Link>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-accent-400 font-medium">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors mb-3">
                    <Link href={`/blog/${post.slug}/`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <span>{new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="mt-4 inline-flex items-center text-accent-400 font-medium group-hover:gap-2 transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent-600 via-accent-500 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-dark-950 mb-4">
            Have Questions About Title Insurance?
          </h2>
          <p className="text-xl text-dark-950/80 mb-8 max-w-2xl mx-auto">
            Our team is here to help answer your questions and provide guidance for your Florida real estate transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq/"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-950 text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 shadow-lg"
            >
              View FAQ
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-dark-950 text-dark-950 font-bold rounded-lg hover:bg-dark-950/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
