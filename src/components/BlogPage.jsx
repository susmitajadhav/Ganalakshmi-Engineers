import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const blogPosts = [
  {
    title: 'Engineering techniques & implementation',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX5veVBt-VZVcx7pQ6P6BAyiuWU1E7IBecQ&s',
    description: 'Learn about the latest techniques in engineering and their practical implementation.',
    id: 1,
  },
  {
    title: 'Innovative Solutions for Modern Challenges',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX5veVBt-VZVcx7pQ6P6BAyiuWU1E7IBecQ&s',
    description: 'Explore creative solutions for contemporary engineering problems.',
    id: 2,
  },
  {
    title: 'Sustainable Engineering Practices',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX5veVBt-VZVcx7pQ6P6BAyiuWU1E7IBecQ&s',
    description: 'Understand how sustainable practices are transforming the engineering industry.',
    id: 3,
  },
];

function BlogPage() {
  return (
    <div className="blog-page">
      <h1>Blogs</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={`Blog ${post.id}`} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              {/* <Link to={`/blog/${post.id}`} className="read-more-link">Read More +</Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
