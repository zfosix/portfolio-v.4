import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
const YouTubeSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [embedError, setEmbedError] = useState(false);
  const videoId = "prViRqgo4BM"; // Your YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handleEmbedError = () => {
    setEmbedError(true);
  };

  return (
    <section
      className={`${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } py-6`}
    >
      <div className="flex items-center space-x-3">
        <FaYoutube
          className={`text-2xl ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        />
        <h3
          className={`text-xl font-bold ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        >
          YouTube Channel
        </h3>
      </div>
      <div
        className="p-4 rounded-lg shadow-md mt-4"
        style={{ backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF" }}
      >
        <p
          className={`text-sm md:text-base ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          My YouTube channel in 2023
        </p>
        
        <div className="mt-4 w-full overflow-hidden">
          {embedError ? (
            // Fallback when embed fails
            <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 left-0 w-full h-full"
              >
                <Image
                  src={thumbnailUrl}
                  alt="YouTube video thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-10 transition-all">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <FaYoutube className="text-white text-2xl" />
                  </div>
                </div>
              </a>
            </div>
          ) : (
            // YouTube embed
            <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                onError={handleEmbedError}
                loading="lazy"
              />
            </div>
          )}
        </div>

        <p
          className={`mt-2 text-sm md:text-base ${
            isDarkMode ? "text-stone-300" : "text-gray-700"
          }`}
        >
          THANKS 2024!! THIS IS MY #youtubechannel
        </p>

        {/* Direct link as fallback */}
        <div className="mt-4">
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 py-2 rounded-md ${
              isDarkMode ? "bg-neutral-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"
            } text-white text-sm`}
          >
            <FaYoutube className="mr-2" />
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;