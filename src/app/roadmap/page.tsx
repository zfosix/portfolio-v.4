"use client";

import { motion } from "framer-motion";
import { RiRoadMapLine } from "react-icons/ri";
import { useDarkMode } from "@/context/DarkModeContext";
import { useState } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa"; 
import { skillCategories } from "@/data/resume"; 

type CategoryKey = keyof typeof skillCategories; 

export default function RoadmapPage() {
  const { isDarkMode } = useDarkMode();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("frontend");

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 sm:p-6 md:p-8 px-4 sm:px-6 md:px-12 lg:px-24 ml-0 md:ml-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex-1 p-4">
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
                  <RiRoadMapLine
                    className={`text-2xl sm:text-3xl ${
                      isDarkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                  />
                  <h1
                    className={`text-2xl sm:text-3xl font-bold ${
                      isDarkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                  >
                    Roadmap
                  </h1>
                </div>
                <p
                  className={`mt-2 text-sm sm:text-base ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Learning path recommendation and free course playlist
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setActiveCategory("frontend")}
                  className={`px-4 py-2 rounded-full transition-colors text-sm sm:text-base ${
                    activeCategory === "frontend"
                      ? "bg-blue-950 text-white"
                      : "bg-gray-200 dark:bg-neutral-800 hover:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                >
                  Frontend Developer
                </button>
                <button
                  onClick={() => setActiveCategory("backend")}
                  className={`px-4 py-2 rounded-full transition-colors text-sm sm:text-base ${
                    activeCategory === "backend"
                      ? "bg-blue-950 text-white"
                      : "bg-gray-200 dark:bg-neutral-800 hover:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                >
                  Backend Developer
                </button>
              </div>

              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 gap-4">
                  {skillCategories[activeCategory].map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl shadow-md border border-neutral-700 transition-transform transform hover:scale-105 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-4 mb-1">
                          <div className="text-xl sm:text-2xl md:text-3xl">
                            {item.icon}
                          </div>
                          <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                            {item.title}
                          </h3>
                          <span
                            className={`px-2 py-1 text-xs sm:text-sm font-semibold rounded-full ${
                              item.level === "(Beginner)"
                                ? "bg-blue-500 text-white"
                                : item.level === "(Intermediate)"
                                ? "bg-green-500 text-white"
                                : item.level === "(Advanced)"
                                ? "bg-yellow-500 text-black"
                                : item.level === "(Expert)"
                                ? "bg-purple-500 text-white"
                                : "bg-red-500 text-white"
                            }`}
                          >
                            {item.level}
                          </span>
                        </div>
                        <FaLink className="text-xl text-gray-600 dark:text-gray-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}