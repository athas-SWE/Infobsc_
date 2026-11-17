import React, { useEffect, useState } from 'react';

interface MediumPost {
  title: string;
  link: string;
  thumbnail?: string;
  description?: string;
  content?: string;
  pubDate: string;
  categories?: string[];
}

const fallbackPosts = [
  {
    title: 'Latest Web Development Trends for 2024',
    date: 'December 15, 2024',
    minutes: 5,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Discover the cutting-edge technologies and frameworks that are shaping the future of web development in 2024. From AI integration to performance optimization.',
  },
  {
    title: 'React Development Best Practices',
    date: 'December 10, 2024',
    minutes: 7,
    category: 'React',
    image: 'https://images.unsplash.com/photo-1516321318287-5bf6151a9372?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Learn essential React patterns and best practices that will make your applications more maintainable, performant, and scalable.',
  },
  {
    title: 'Complete Guide to API Development',
    date: 'December 5, 2024',
    minutes: 10,
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'A comprehensive guide to building robust, scalable APIs using modern technologies and best practices for security and performance.',
  },
];

const fallbackImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';

const readingMinutes = (content?: string) => Math.ceil((content?.split(' ').length || 0) / 200) || 5;

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@infobsc12'
        );
        const data = await response.json();

        if (data.status === 'ok' && data.items) {
          setPosts(data.items.slice(0, 3));
        } else {
          console.error('Failed to fetch Medium posts:', data);
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <section id="blog" className="scroll-mt-24 bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest <span className="text-blue-900">Blog</span> <span className="text-yellow-500">Posts</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest insights, tutorials, and industry trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-6 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded" />
                  </div>
                </article>
              ))
            : posts.length > 0
              ? posts.map((post) => {
                  const minutes = readingMinutes(post.content);
                  return (
                    <article
                      key={post.link}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={post.thumbnail || fallbackImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.src = fallbackImage;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-sm font-medium bg-blue-900/90 text-white px-3 py-1 rounded-full">
                          {post.categories?.[0] || 'Technology'}
                        </span>
                        <span className="absolute top-4 right-4 text-xs font-medium bg-white/90 text-gray-800 px-2 py-1 rounded-full">
                          {minutes} min
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3 text-sm text-gray-500">
                          <span>
                            {new Date(post.pubDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="mx-2">•</span>
                          <span className="text-blue-600 font-medium">{minutes} min read</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.description?.replace(/<[^>]*>/g, '').substring(0, 150)}...
                        </p>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-500"
                        >
                          Read More
                        </a>
                      </div>
                    </article>
                  );
                })
              : fallbackPosts.map((post) => (
                  <article
                    key={post.title}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-sm font-medium bg-blue-900/90 text-white px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="absolute top-4 right-4 text-xs font-medium bg-white/90 text-gray-800 px-2 py-1 rounded-full">
                        {post.minutes} min
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span className="text-blue-600 font-medium">{post.minutes} min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <a
                        href="https://medium.com/@infobsc12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-500"
                      >
                        Read More
                      </a>
                    </div>
                  </article>
                ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@infobsc12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-900 to-yellow-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            View All Posts on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
