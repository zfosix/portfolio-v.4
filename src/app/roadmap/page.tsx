"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import RoadmapHeader from "@/components/roadmap/RoadmapHeader";
import CategorySelector from "@/components/roadmap/CategorySelector";
import RoadmapItems from "@/components/roadmap/RoadmapItems";
import { skillCategories } from "@/data/resume";

type CategoryKey = keyof typeof skillCategories;

export default function RoadmapPage() {
  const { isDarkMode } = useDarkMode();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("frontend");
  
  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center pt-8 md:pt-12 px-4 md:px-8 lg:px-12 ml-0 md:ml-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex-1 p-4">
            <RoadmapHeader isDarkMode={isDarkMode} />

            <div className="space-y-6">
              <CategorySelector 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
                isDarkMode={isDarkMode}
              />
              
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <RoadmapItems 
                  category={activeCategory} 
                  isDarkMode={isDarkMode} 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}