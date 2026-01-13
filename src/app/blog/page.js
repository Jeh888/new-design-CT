import Link from 'next/link';
import { getAllBlogs } from '@/data/blogs';

export const metadata = {
  title: 'Blog | Cosmetic Treatments London',
  description: 'Expert guides, tips, and insights on aesthetic treatments including Botox, fillers, and skin rejuvenation from London practitioners.',
};

export default function BlogPage() {
  const blogs = getAllBlogs();
  const featuredBlog = blogs[0];
  const recentBlogs = blogs.slice(1, 7);
  const olderBlogs = blogs.slice(7);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Aesthetic Treatment Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Expert guides, tips, and insights on Botox, fillers, and skin treatments from London's top practitioners.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredBlog && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">Featured Article</h2>
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Link href={`/blog/${featuredBlog.slug}`}>
                  <div className="aspect-video md:aspect-auto md:h-full bg-gray-100 overflow-hidden">
                    <img 
                      src={featuredBlog.image} 
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium">
                      {featuredBlog.category}
                    </span>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                  <Link href={`/blog/${featuredBlog.slug}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-primary-600 transition mb-4">
                      {featuredBlog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {featuredBlog.author}</span>
                    <Link 
                      href={`/blog/${featuredBlog.slug}`}
                      className="text-primary-600 font-semibold hover:text-primary-700"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <article 
                key={blog.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition group"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                      {blog.category}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="text-xs text-gray-400">
                    {new Date(blog.date).toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      {olderBlogs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles ({olderBlogs.length + 7} total)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {olderBlogs.map((blog) => (
                <article 
                  key={blog.slug}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group"
                >
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <span className="text-xs text-primary-600 font-medium">{blog.category}</span>
                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition line-clamp-2 mt-1">
                        {blog.title}
                      </h3>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Treatment Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Compare verified practitioners and get free quotes today.
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-accent-600 transition text-lg shadow-lg"
          >
            Get Free Quotes →
          </Link>
        </div>
      </section>
    </>
  );
}
