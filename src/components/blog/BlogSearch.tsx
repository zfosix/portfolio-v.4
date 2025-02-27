// components/blog/BlogSearch.tsx
"use client";

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDarkMode: boolean;
}

const BlogSearch: React.FC<BlogSearchProps> = ({
  searchQuery,
  setSearchQuery,
  isDarkMode,
}) => {
  return (
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
  );
};

export default BlogSearch;