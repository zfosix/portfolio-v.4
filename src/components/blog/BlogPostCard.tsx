// components/blog/BlogPostCard.tsx
"use client";

import { motion } from "framer-motion";
import { BlogPost, categoryColors } from "@/types/blog";

interface BlogPostCardProps {
  post: BlogPost;
  isDarkMode: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, isDarkMode }) => {
  return (
    <motion.article
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
  );
};

export default BlogPostCard;