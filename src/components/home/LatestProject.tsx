"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCode, FaBullhorn } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import { projects } from "@/data/resume";
import LatestProjectCard from "@/components/home/LatestProjectCard";
import Link from "next/link";

const LatestProject = () => {
  const { isDarkMode } = useDarkMode();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth !== null && carouselRef.current) {
      const isMobile = windowWidth < 640;
      if (!isMobile) {
        // Optional: Add subtle animation for desktop if desired
        controls.start({
          x: 0, // No infinite scroll, but could be customized
          transition: { duration: 0 },
        });
      } else {
        controls.start({
          x: 0,
          transition: { duration: 0 },
        });
      }
    }
  }, [windowWidth, controls]);

  const isMobile = windowWidth !== null && windowWidth < 640;

  return (
    <section
      className={`space-y-2 ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } py-6 w-full`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:px-0">
        <div>
          <div className="flex items-center gap-2">
            <FaCode
              className={`text-xl ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`}
            />
            <h2
              className={`text-xl font-bold ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`}
            >
              Recent Projects
            </h2>
          </div>
          <p
            className={`text-sm pt-2 ${
              isDarkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            The project I created
          </p>
        </div>
        <Link href="/projects" passHref>
          <motion.div
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-400 dark:border-neutral-800 text-xs sm:text-sm flex items-center gap-2 ${
              isDarkMode
                ? "bg-neutral-950 text-stone-200 hover:bg-neutral-800"
                : "bg-neutral-200 text-stone-800 hover:bg-neutral-300"
            } transition-colors shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap cursor-pointer`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBullhorn className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>The project I created</span>
          </motion.div>
        </Link>
      </div>

      {isMobile ? (
        // Mobile View - Single card with horizontal scroll
        <div className="no-scrollbar mt-4 h-40 overflow-y-hidden overflow-x-scroll snap-x snap-mandatory pt-2">
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="min-w-full snap-center px-2"
              >
                <LatestProjectCard
                  project={project}
                  windowWidth={windowWidth}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop View - Enhanced horizontal scroll
        <div
          ref={carouselRef}
          className="no-scrollbar mt-4 flex h-40 flex-row space-x-4 overflow-y-hidden overflow-x-auto pt-2 snap-x snap-proximity"
        >
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="snap-start">
              <LatestProjectCard
                project={project}
                windowWidth={windowWidth}
                index={index}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestProject;