import { skillCategories } from "@/data/resume";

type CategoryKey = keyof typeof skillCategories;

interface CategorySelectorProps {
  activeCategory: CategoryKey;
  setActiveCategory: (category: CategoryKey) => void;
  isDarkMode: boolean;
}

export default function CategorySelector({ 
  activeCategory, 
  setActiveCategory,
  isDarkMode
}: CategorySelectorProps) {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={() => setActiveCategory("frontend")}
        className={`px-4 py-2 rounded-full transition-colors text-sm sm:text-base ${
          activeCategory === "frontend"
            ? "bg-blue-950 text-white"
            : isDarkMode
              ? "bg-neutral-900 text-white hover:bg-neutral-700"
              : "bg-gray-200 hover:bg-gray-700"
        }`}
      >
        Frontend
      </button>
      <button
        onClick={() => setActiveCategory("backend")}
        className={`px-4 py-2 rounded-full transition-colors text-sm sm:text-base ${
          activeCategory === "backend"
            ? "bg-blue-950 text-white"
            : isDarkMode
              ? "bg-neutral-900 text-white hover:bg-neutral-700"
              : "bg-gray-200 hover:bg-gray-700"
        }`}
      >
        Backend
      </button>
    </div>
  );
}