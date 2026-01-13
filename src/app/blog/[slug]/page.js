import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogBySlug, getRecentBlogs } from '@/data/blogs';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return {};

  return {
    title: blog.metaTitle || `${blog.title} | Cosmetic Treatments London`,
    description: blog.metaDescription || blog.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }

  const recentBlogs = getRecentBlogs(3).filter(b => b.slug !== blog.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-primary-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">→</span>
            <span className="text-white">{blog.category}</span>
          </nav>

          <div className="flex items-center gap-4 text-sm text-primary-200 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded">{blog.category}</span>
            <span>{blog.readTime}</span>
            <span>
              {new Date(blog.date).toLocaleDateString('en-GB', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            {blog.title}
          </h1>
          
          <p className="text-lg text-primary-100">
            By {blog.author}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content - renders HTML */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:mb-4 prose-p:leading-relaxed
              prose-a:text-primary-600 prose-a:underline hover:prose-a:text-primary-700
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-600 prose-li:mb-2
              prose-table:w-full prose-table:my-6
              prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
              prose-td:p-3 prose-td:border-b prose-td:border-gray-200 prose-td:text-gray-600
              prose-img:rounded-lg prose-img:my-6 prose-img:mx-auto"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Find a Provider?
          </h2>
          <p className="text-gray-600 mb-6">
            Compare verified aesthetic practitioners and get free, no-obligation quotes.
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Get Free Quotes →
          </Link>
        </div>
      </section>

      {/* More Articles */}
      {recentBlogs.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {recentBlogs.map((relatedBlog) => (
                <article 
                  key={relatedBlog.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition"
                >
                  <Link href={`/blog/${relatedBlog.slug}`}>
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img 
                        src={relatedBlog.image} 
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded">
                        {relatedBlog.category}
                      </span>
                      <span>{relatedBlog.readTime}</span>
                    </div>
                    <Link href={`/blog/${relatedBlog.slug}`}>
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition">
                        {relatedBlog.title}
                      </h3>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                View All Articles →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
