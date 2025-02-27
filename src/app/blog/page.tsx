"use client";
import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { categories } from "@/data/resume";
import { BlogPost } from "@/types/blog"; 
import BlogHeader from "@/components/blog/BlogHeader";
import BlogSearch from "@/components/blog/BlogSearch";
import CategoryFilter from "@/components/blog/CategoryFilter";
import BlogPostCard from "@/components/blog/BlogPostCard";

const BlogPage = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allPosts = Object.values(categories).flatMap(
    (category) => category.posts
  );

  const filteredPosts: BlogPost[] = selectedCategory === "All"
    ? allPosts
    : (categories as { [key: string]: { posts: BlogPost[] } })[selectedCategory]?.posts || [];

  // Alternative approach with type guard
  /* 
  const filteredPosts: BlogPost[] = selectedCategory === "All"
    ? allPosts
    : (Object.keys(categories).includes(selectedCategory) 
        ? categories[selectedCategory as keyof typeof categories].posts 
        : []);
  */

  const displayedPosts = filteredPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16">
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
              <BlogPostCard 
                key={post.id} 
                post={post} 
                isDarkMode={isDarkMode} 
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;