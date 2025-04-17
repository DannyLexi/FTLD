import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "how-to-land-your-dream-job",
      title: "How to Land Your Dream Job",
      date: "April 15, 2025",
      description: "Discover effective strategies to secure your dream job in a competitive job market...",
    },
    {
      id: "the-future-of-recruitment",
      title: "The Future of Recruitment: Trends to Watch",
      date: "April 10, 2025",
      description: "Stay ahead of the curve with the latest recruitment trends. Learn how technology, diversity...",
    },
    {
      id: "top-skills-employers-look-for",
      title: "Top Skills Employers Look for in 2025",
      date: "April 5, 2025",
      description: "With 2025 just around the corner, find out which skills are in demand...",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Our Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
