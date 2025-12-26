import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
      <section className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

        {/* Gold Accent Orbs */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-gray-400 mb-4">
              <span className="text-accent-400">{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white animate-fade-in-up">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500/30 to-accent-600/30 rounded-full flex items-center justify-center font-bold text-accent-400 border border-accent-500/30">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium text-white">{post.author}</div>
                <div className="text-gray-500 text-sm">
                  Published {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container-custom -mt-8">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-dark-800">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg prose-invert max-w-none prose-headings:font-heading prose-headings:text-white prose-p:text-gray-400 prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-ul:text-gray-400 prose-ol:text-gray-400">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/## /g, '</p><h2>').replace(/### /g, '</p><h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- \*\*(.*?)\*\*:/g, '<li><strong>$1</strong>:') }} />
              </article>

              {/* CTA After Article */}
              <div className="mt-12 p-8 bg-gradient-to-br from-accent-500 to-accent-600 text-dark-950 rounded-2xl shadow-glow">
                <h3 className="text-2xl font-bold mb-4">
                  Need Help With Your Title Insurance?
                </h3>
                <p className="text-dark-950/80 mb-6">
                  Town & Country Title Guaranty has been helping Florida homeowners since 1976.
                  Contact us for a free consultation or quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-dark-950 text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-dark-950 text-dark-950 font-bold rounded-lg hover:bg-dark-950/10 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quote CTA */}
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-dark-950 rounded-2xl p-6 shadow-glow">
                  <h3 className="text-xl font-bold mb-3">Free Title Insurance Quote</h3>
                  <p className="text-dark-950/80 mb-4">
                    Get a no-obligation quote for your Florida transaction.
                  </p>
                  <Link
                    href="/quote/"
                    className="block w-full bg-dark-950 text-white text-center py-3 rounded-lg font-bold hover:bg-dark-900 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Contact */}
                <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Questions?</h3>
                  <p className="text-gray-400 mb-4">
                    Our team is ready to help with your title insurance questions.
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-3 text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center border border-accent-500/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    {companyInfo.phone}
                  </a>
                </div>

                {/* Related Posts */}
                <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/blog/${related.slug}/`}
                          className="text-gray-400 hover:text-accent-400 transition-colors text-sm leading-snug block"
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
