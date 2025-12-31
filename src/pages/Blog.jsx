import SEO from '../components/SEO'
import './Blog.css'

const Blog = () => {
  const categories = [
    'AI Experiments',
    'Robotics Devlogs',
    'Learning Logs',
    'System Architecture Notes',
    'Product Design Philosophy'
  ]

  const samplePosts = [
    {
      title: 'Building AI With Just an i3 Laptop',
      category: 'AI Experiments',
      excerpt: 'Coming soon...',
      date: '2025'
    },
    {
      title: 'Why Offline AI Matters More Than Cloud AI',
      category: 'System Architecture Notes',
      excerpt: 'Coming soon...',
      date: '2025'
    },
    {
      title: 'Early Thoughts on DupliVerse OS',
      category: 'Product Design Philosophy',
      excerpt: 'Coming soon...',
      date: '2025'
    },
    {
      title: 'How I Designed My Bluetooth Mesh Network',
      category: 'Robotics Devlogs',
      excerpt: 'Coming soon...',
      date: '2025'
    }
  ]

  return (
    <div className="blog section">
      <SEO
        title="Blog"
        description="Insights from Rusith Welisara on AI experiments, robotics devlogs, system architecture, and product design philosophy."
        url="/blog"
      />
      <div className="container">
        <h2 className="section-title">Blog</h2>

        <div className="blog-content">
          <div className="categories-section">
            <h3 className="subsection-title">Categories</h3>
            <div className="categories-grid">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="category-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="category-name">{category}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="posts-section">
            <h3 className="subsection-title">Recent Posts</h3>
            <div className="posts-grid">
              {samplePosts.map((post, index) => (
                <article
                  key={index}
                  className="post-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h4 className="post-title">{post.title}</h4>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <button className="post-link" disabled>
                    Coming Soon
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

