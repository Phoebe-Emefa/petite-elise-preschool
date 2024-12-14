/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, imageUrl, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{date}</p>
        <p className="text-gray-700 mt-4">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
