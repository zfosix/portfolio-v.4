import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCode, FaBullhorn } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import { projects } from "@/data/resume";
import "react-multi-carousel/lib/styles.css";

const ProjectsSection = () => {
  const { isDarkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  const visibleCards = 3;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (projects.length - visibleCards + 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className={`flex flex-col text-start border-b ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } py-6`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start">
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
              isDarkMode ? "text-stone-400" : "text-stone-600"
            }`}
          >
            course by dicoding.com
          </p>
        </div>
        <Link href="https://www.dicoding.com/academies/my" passHref>
          <motion.button
            className={`px-4 py-2 rounded-full border border-neutral-400 dark:border-neutral-800 text-sm flex items-center gap-2 mt-4 md:mt-0 ${
              isDarkMode
                ? "bg-neutral-950 text-stone-200 hover:bg-neutral-800"
                : "bg-neutral-200 text-stone-800 hover:bg-neutral-300"
            } transition-colors shadow-lg hover:shadow-xl active:scale-95`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBullhorn className="w-5 h-5" />{" "}
            <span>Projects from dicoding.com</span>
          </motion.button>
        </Link>
      </div>

      <div
        className="relative overflow-hidden mt-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / visibleCards)
            }%)`,
            width: `${(projects.length / visibleCards) * 50}%`,
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              windowWidth={windowWidth} 
              visibleCards={visibleCards} 
              isDarkMode={isDarkMode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    date: string;
    src: string;
    isNew?: boolean;
  };
  windowWidth: number;
  visibleCards: number;
  isDarkMode: boolean;
}

const ProjectCard = ({ project, windowWidth, visibleCards, isDarkMode }: ProjectCardProps) => (
  <div
    className="w-full flex-shrink-0 px-2"
    style={{
      width: `${
        windowWidth < 350
          ? 300 / visibleCards
          : 100 / visibleCards
      }%`,
    }}
  >
    <div
      className={`rounded-sm relative overflow-hidden ${
        isDarkMode ? "bg-neutral-950" : "bg-neutral"
      }`}
    >
      {project.isNew && (
        <div className="absolute -right-7 top-5 w-28 bg-yellow-400 text-center text-black text-xs font-bold py-1 transform rotate-45 z-10 shadow-md">
          <span className="relative">
            NEW
            <div className="absolute -left-4 top-0 w-4 h-full bg-yellow-500/30 transform skew-x-45"></div>
          </span>
        </div>
      )}
      <div className="relative w-full h-28 overflow-hidden">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="pt-3">
        <h3
          className={`font-bold ${
            isDarkMode ? "text-stone-200" : "text-stone-800"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-xs mt-2 ${
            isDarkMode ? "text-stone-400" : "text-stone-600"
          }`}
        >
          Started on: {project.date}
        </p>
      </div>
    </div>
  </div>
);

export default ProjectsSection;