// components/blog/CategoryFilter.tsx
"use client";

import { motion } from "framer-motion";
import { categoryColors } from "@/types/blog";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isDarkMode: boolean;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  isDarkMode,
}) => {
  return (
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
        {categories.map((category) => (
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
  );
};

export default CategoryFilter;