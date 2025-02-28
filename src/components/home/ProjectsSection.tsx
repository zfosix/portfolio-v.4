"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FaCode, FaBullhorn } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import { projects } from "@/data/resume";
import "react-multi-carousel/lib/styles.css";

const ProjectsSection = () => {
  const { isDarkMode } = useDarkMode();
  const [windowWidth, setWindowWidth] = useState(0);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (windowWidth > 0 && carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth / 2;
      controls.start({
        x: [0, -carouselWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: windowWidth < 768 ? 15 : 20,
            ease: "linear",
          },
        },
      });
    }
  }, [windowWidth, controls]);

  const truncateTitle = (title: string) => {
    const limit = windowWidth < 640 ? 20 : 30;
    return title.length > limit ? title.slice(0, limit) + "..." : title;
  };

  // Define card width percentages with spacing considered
  const getCardWidthClass = () => {
    // Slightly reduce width to accommodate for margin/padding
    return "w-[calc(100%-32px)] sm:w-[calc(33.333%-24px)] md:w-[calc(33.333%-32px)]";
  };

  const renderProject = (
    project: (typeof projects)[0],
    index: number,
    offset: number = 0
  ) => (
    <div
      key={index + offset}
      className={`transition hover:scale-95 hover:duration-500 flex-shrink-0 relative ${getCardWidthClass()}`}
    >
      <div className="flex flex-col items-start space-y-1">
        <div className="h-44 sm:h-32 md:h-36 w-full overflow-hidden rounded-md">
          <Image
            src={project.src}
            alt={project.title}
            width={250}
            height={250}
            className="h-32 w-lvh rounded-md object-cover"
            priority
          />
        </div>
        <p
          className={`text-sm ${
            isDarkMode ? "text-neutral-300" : "text-neutral-800"
          }`}
        >
          {truncateTitle(project.title)}
        </p>
        <span
          className={`text-[10px] ${
            isDarkMode ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Started on: {project.date}
        </span>
      </div>
      {project.isNew && (
        <div className="absolute -right-6 sm:-right-5 top-4 w-20 sm:w-16 md:w-20 bg-yellow-400 text-center text-black text-xs font-bold py-1 transform rotate-45 z-10 shadow-md pointer-events-none">
          <span className="relative">
            NEW
            <div className="absolute -left-4 top-0 w-4 h-full bg-yellow-500/30 transform skew-x-45"></div>
          </span>
        </div>
      )}
    </div>
  );

  return (
    <section
      className={`flex flex-col text-start border-b ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } py-6 w-full`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start ">
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
            course by dicoding.com
          </p>
        </div>
        <Link
          href="https://www.dicoding.com/academies/my"
          passHref
          legacyBehavior
        >
          <motion.a
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-400 dark:border-neutral-800 text-xs sm:text-sm flex items-center gap-2 ${
              isDarkMode
                ? "bg-neutral-950 text-stone-200 hover:bg-neutral-800"
                : "bg-neutral-200 text-stone-800 hover:bg-neutral-300"
            } transition-colors shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBullhorn className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
            <span>Projects from dicoding.com</span>
          </motion.a>
        </Link>
      </div>

      <div className="mt-4 overflow-hidden relative w-full">
        <motion.div ref={carouselRef} className="flex" animate={controls}>
          {projects.map((project, index) => renderProject(project, index))}

          {projects.map((project, index) =>
            renderProject(project, index, projects.length)
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
