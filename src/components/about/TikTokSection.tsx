import React from "react";
import { FaTiktok as FaTiktokIcon } from "react-icons/fa";
import { TikTokAuth } from "@/components/about/TikTokAuth";
import { TikTokProfile } from "@/components/about/TikTokProfile";
interface TikTokSectionProps {
    isDarkMode: boolean;
    isAuthenticated: boolean;
  }
  const TikTokSection = ({ isDarkMode, isAuthenticated }: TikTokSectionProps) => {
    return (
    <section className="py-6">
      <div className="flex items-center space-x-3">
        <FaTiktokIcon
          className={`text-2xl ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        />
        <h3
          className={`text-xl font-bold ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        >
          Tiktok
        </h3>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <p
          className={`text-sm md:text-base ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          Find me on Tiktok
        </p>
      </div>
      <div className="container mx-auto p-4">
        {!isAuthenticated ? <TikTokAuth /> : <TikTokProfile />}
      </div>
      <div className="mt-2 flex justify-between items-center">
        <a
          href="https://www.tiktok.com/@zfosix"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm ${
            isDarkMode
              ? "text-stone-300 hover:text-stone-100"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          @zfosix
        </a>
        <a
          href="https://www.instagram.com/zfosix/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm ${
            isDarkMode
              ? "text-stone-300 hover:text-stone-100"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          zfosix
        </a>
      </div>
    </section>
  );
};

export default TikTokSection;