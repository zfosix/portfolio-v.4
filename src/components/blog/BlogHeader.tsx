// components/blog/BlogHeader.tsx
"use client";

import { motion } from "framer-motion";
import { FaBlog } from "react-icons/fa";

interface BlogHeaderProps {
  isDarkMode: boolean;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ isDarkMode }) => {
  return (
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
  );
};

export default BlogHeader;