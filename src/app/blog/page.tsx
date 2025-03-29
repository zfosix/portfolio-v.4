"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";
import { categories } from "@/data/resume";
import { BlogPost } from "@/types/blog";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogSearch from "@/components/blog/BlogSearch";
import CategoryFilter from "@/components/blog/CategoryFilter";
import BlogPostCard from "@/components/blog/BlogPostCard";

const BlogPage = () => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Maintenance mode state
  const [isUnderMaintenance] = useState(true);

  const allPosts = Object.values(categories).flatMap(
    (category) => category.posts
  );

  const filteredPosts: BlogPost[] =
    selectedCategory === "All"
      ? allPosts
      : (categories as { [key: string]: { posts: BlogPost[] } })[
          selectedCategory
        ]?.posts || [];

  const displayedPosts = filteredPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Redirect to home page
  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      {/* Maintenance Overlay */}
      {isUnderMaintenance && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md ${
            isDarkMode ? "bg-black" : "bg-gray-100"
          }`}
        >
          <div
            className={`p-8 rounded-xl max-w-md text-center ${
              isDarkMode
                ? "bg-neutral-900 border border-neutral-700"
                : "bg-white shadow-xl"
            }`}
          >
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-16 w-16 ${
                  isDarkMode ? "text-yellow-400" : "text-yellow-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Sedang Dalam Perbaikan</h2>
            <p className="mb-4">
              Halaman blog ini sedang dalam perbaikan. Mohon kembali lagi nanti.
              Terima kasih atas pengertian Anda.
            </p>
            <p className="text-sm text-gray-500">Maintenance in progress</p>

            <button
              onClick={redirectToHome}
              className={`mt-6 px-4 py-2 rounded-lg ${
                isDarkMode
                  ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-black"
              }`}
            >
              Continue Anyway (Home)
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 flex justify-center pt-8 md:pt-12 px-4 md:px-8 lg:px-12 ml-0 md:ml-8">
        <div className="max-w-4xl mx-auto w-full">
          <BlogHeader isDarkMode={isDarkMode} />

          <BlogSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isDarkMode={isDarkMode}
          />

          <CategoryFilter
            categories={Object.keys(categories)}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isDarkMode={isDarkMode}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {displayedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
