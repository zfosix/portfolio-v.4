import React from "react";
import { FaYoutube } from "react-icons/fa";

const YouTubeSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
    <section
      className={`border-b ${
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
          My channel YouTube on 2023
        </p>
        <div className="mt-4 w-full overflow-hidden">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://www.youtube.com/embed/prViRqgo4BM?si=Smct-RKNDrVLY0G4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
        <p
          className={`mt-2 text-sm md:text-base ${
            isDarkMode ? "text-stone-300" : "text-gray-700"
          }`}
        >
          THANKS 2024!! THIS IS MY #youtubechannel
        </p>
      </div>
    </section>
  );
};

export default YouTubeSection;