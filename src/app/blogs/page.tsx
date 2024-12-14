import BlogCard from '@/components/blogs/BlogCard';
import HeroSection from '@/components/shared/HeroSection';
import React from 'react';

const Blogs: React.FC = () => {
  // Example data for blog posts
  const blogs = [
    {
      title: "The Future of Web Development",
      excerpt: "A deep dive into the emerging trends in web development and how they will shape the future of the internet.",
      imageUrl: "https://via.placeholder.com/500x300",
      date: "Dec 13, 2024",
    },
    {
      title: "JavaScript ES2024 Features",
      excerpt: "Exploring the new features of JavaScript and how they improve developer productivity and code readability.",
      imageUrl: "https://via.placeholder.com/500x300",
      date: "Dec 10, 2024",
    },
    {
      title: "Designing for Mobile First",
      excerpt: "A guide on how to design modern websites that are optimized for mobile first, with best practices and tips.",
      imageUrl: "https://via.placeholder.com/500x300",
      date: "Dec 5, 2024",
    },
    // Add more blog data as needed
  ];

  return (
   <>
   <HeroSection image="https://images.unsplash.com/photo-1701889297494-16eb5bc8dca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Let's Talk" subTitle='My Insightful Blogs' />
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            excerpt={blog.excerpt}
            imageUrl={blog.imageUrl}
            date={blog.date}
          />
        ))}
      </div>
    </div>
   </>
  );
};

export default Blogs;
