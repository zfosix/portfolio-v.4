"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import Sidebar from "@/components/sidebar/menu";
import { useState } from "react";
import { FaBlog } from "react-icons/fa";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  views: number;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
}

interface CategoryData {
  color: string;
  posts: BlogPost[];
}

interface Categories {
  [key: string]: CategoryData;
}

const BlogPage = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories: Categories = {
    React: {
      color: "blue",
      posts: [
        {
          id: 1,
          title: "React Server Components: The Future of React",
          excerpt:
            "Discover how React Server Components are revolutionizing the way we build React applications with improved performance and better user experience.",
          date: "June 23, 2023",
          views: 2519,
          category: "React",
          readTime: "10 min read",
          author: "John Doe",
          authorRole: "React Expert",
        },
        {
          id: 2,
          title: "React 19 Features You Need to Know",
          excerpt:
            "An in-depth look at the upcoming features in React 19 and how they will change the way we develop applications.",
          date: "June 25, 2023",
          views: 1850,
          category: "React",
          readTime: "8 min read",
          author: "Sarah Wilson",
          authorRole: "Frontend Developer",
        },
      ],
    },
    TypeScript: {
      color: "indigo",
      posts: [
        {
          id: 3,
          title: "Advanced TypeScript Patterns in React",
          excerpt:
            "Learn how to leverage TypeScript's powerful type system to write more maintainable React applications.",
          date: "June 28, 2023",
          views: 1982,
          category: "TypeScript",
          readTime: "12 min read",
          author: "Mike Johnson",
          authorRole: "TypeScript Advocate",
        },
      ],
    },
    Performance: {
      color: "green",
      posts: [
        {
          id: 4,
          title: "Web Vitals Optimization in React",
          excerpt:
            "A comprehensive guide to optimizing Core Web Vitals in your React applications for better performance and SEO.",
          date: "July 1, 2023",
          views: 1567,
          category: "Performance",
          readTime: "15 min read",
          author: "Emily Chen",
          authorRole: "Performance Engineer",
        },
      ],
    },
    "State Management": {
      color: "purple",
      posts: [
        {
          id: 5,
          title: "Understanding Zustand vs Redux",
          excerpt:
            "A detailed comparison of Zustand and Redux for state management in React applications.",
          date: "July 3, 2023",
          views: 2102,
          category: "State Management",
          readTime: "10 min read",
          author: "Alex Turner",
          authorRole: "Frontend Architect",
        },
      ],
    },
    Testing: {
      color: "rose",
      posts: [
        {
          id: 6,
          title: "Testing React Components with Vitest",
          excerpt:
            "Learn how to effectively test your React components using Vitest and React Testing Library.",
          date: "July 5, 2023",
          views: 1345,
          category: "Testing",
          readTime: "8 min read",
          author: "David Kim",
          authorRole: "Test Engineer",
        },
      ],
    },
    "Next.js": {
      color: "yellow",
      posts: [
        {
          id: 7,
          title: "Next.js 14 Server Actions Guide",
          excerpt:
            "A comprehensive guide to using Server Actions in Next.js 14 for better performance and user experience.",
          date: "July 7, 2023",
          views: 2890,
          category: "Next.js",
          readTime: "12 min read",
          author: "Lisa Wang",
          authorRole: "Next.js Developer",
        },
      ],
    },
  };

  const allPosts = Object.values(categories).flatMap(
    (category) => category.posts
  );

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : categories[selectedCategory]?.posts || [];

  const displayedPosts = filteredPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryColors: Record<string, string> = {
    React: "bg-blue-500 text-white",
    TypeScript: "bg-indigo-500 text-white",
    Performance: "bg-green-500 text-white",
    "State Management": "bg-purple-500 text-white",
    Testing: "bg-rose-500 text-white",
    "Next.js": "bg-yellow-500 text-white",
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar />
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-start mb-8"
          >
            <div
              className={`border-b ${
                isDarkMode ? "border-stone-700" : "border-stone-300"
              } border-dotted pb-4`}
            >
              <div className="flex items-center space-x-3">
                {/* Tambahkan ikon blog di sini */}
                <FaBlog
                  className={`text-3xl ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                />
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  Blog
                </h1>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                Welcome to my blog! Your Source for Expert Tips and Insights!{" "}
              </p>
            </div>
          </motion.div>
          <div className="mb-6 md:mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full p-2 md:p-3 rounded-lg border ${
                isDarkMode
                  ? "bg-neutral-900 border-neutral-700 text-white"
                  : "bg-white border-gray-300 text-black"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              Browse by Category
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <motion.button
                key="All"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory("All")}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full transition-colors ${
                  selectedCategory === "All"
                    ? "bg-blue-500 text-white"
                    : isDarkMode
                    ? "bg-neutral-900 hover:bg-gray-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                All
              </motion.button>
              {Object.keys(categories).map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? categoryColors[category]
                      : isDarkMode
                      ? "bg-neutral-900 hover:bg-gray-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {displayedPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode
                    ? "bg-neutral-950 hover:bg-neutral-700"
                    : "bg-white hover:bg-gray-50"
                } shadow-lg transition-all duration-300 border border-gray-200 dark:border-neutral-700`}
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span
                      className={`px-2 py-1 text-xs md:text-sm rounded-full ${
                        isDarkMode
                          ? categoryColors[post.category]
                              .replace("bg-", "bg-")
                              .replace("text-", "text-")
                          : categoryColors[post.category]
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-3 md:pt-4 border-t border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="flex flex-col">
                          <span className="text-sm md:text-base font-medium">
                            {post.author}
                          </span>
                          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                            {post.authorRole}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        <span className="mr-2 md:mr-3">📅 {post.date}</span>
                        <span>👁 {post.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
