import { Metadata } from 'next';
import Link from 'next/link';
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
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Title Insurance Blog
            </h1>
            <p className="text-xl text-primary-100">
              Expert guides, tips, and insights about title insurance, closing costs,
              and real estate transactions in Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card group">
                <div className="mb-4">
                  <span className="text-sm text-primary-500 font-medium">{post.category}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors mb-3">
                  <Link href={`/blog/${post.slug}/`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.readTime}</span>
                  <span>{new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="mt-4 inline-flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Have Questions About Title Insurance?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help answer your questions and provide guidance for your Florida real estate transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq/" className="btn-primary">
              View FAQ
            </Link>
            <Link href="/contact/" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
