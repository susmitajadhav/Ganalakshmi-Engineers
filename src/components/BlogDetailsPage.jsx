import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetailsPage.css';

const blogPosts = [
  {
    title: 'Engineering techniques & implementation',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX5veVBt-VZVcx7pQ6P6BAyiuWU1E7IBecQ&s',
    description: 'Learn about the latest techniques in engineering and their practical implementation.',
    content: 'Full content of the first blog post goes here...',
    id: 1,
  },
  {
    title: 'Innovative Solutions for Modern Challenges',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX5veVBt-VZVcx7pQ6P6BAyiuWU1E7IBecQ&s',
    description: 'Explore creative solutions for contemporary engineering problems.',
    content: 'Full content of the second blog post goes here...',
    id: 2,
  },
  {
    title: 'Sustainable Engineering Practices',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX5veVBt-VZVcx7pQ6P6BAyiuWU1E7IBecQ&s',
    description: 'Understand how sustainable practices are transforming the engineering industry.',
    content: 'Full content of the third blog post goes here...',
    id: 3,
  },
];

function BlogDetailsPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail-page">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} className="blog-detail-image" />
      <p>{post.content}</p>
    </div>
  );
}

export default BlogDetailsPage;
