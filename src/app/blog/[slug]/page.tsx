import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { companyInfo } from '@/data/company';
import { BreadcrumbSchema, ArticleSchema } from '@/components/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${slug}/`
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog/' },
        { name: post.title, url: `/blog/${slug}/` }
      ]} />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        author={post.author}
        url={`/blog/${slug}/`}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-primary-200 mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-primary-200 text-sm">
                  Published {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-table:text-gray-600">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/## /g, '</p><h2>').replace(/### /g, '</p><h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- \*\*(.*?)\*\*:/g, '<li><strong>$1</strong>:') }} />
              </article>

              {/* CTA After Article */}
              <div className="mt-12 p-8 bg-primary-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Help With Your Title Insurance?
                </h3>
                <p className="text-gray-600 mb-6">
                  Town & Country Title Guaranty has been helping Florida homeowners since 1976.
                  Contact us for a free consultation or quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote/" className="btn-primary">
                    Get Free Quote
                  </Link>
                  <Link href="/contact/" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quote CTA */}
                <div className="bg-primary-500 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Free Title Insurance Quote</h3>
                  <p className="text-primary-100 mb-4">
                    Get a no-obligation quote for your Florida transaction.
                  </p>
                  <Link
                    href="/quote/"
                    className="block w-full bg-white text-primary-500 text-center py-3 rounded-lg font-bold hover:bg-primary-50 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Contact */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Questions?</h3>
                  <p className="text-gray-600 mb-4">
                    Our team is ready to help with your title insurance questions.
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-2 text-primary-500 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {companyInfo.phone}
                  </a>
                </div>

                {/* Related Posts */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/blog/${related.slug}/`}
                          className="text-gray-700 hover:text-primary-500 transition-colors text-sm leading-snug block"
                        >
                          {related.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
