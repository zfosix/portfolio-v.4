"use client";

import Image from "next/image";
import { useDarkMode } from "@/context/DarkModeContext";

interface Project {
  src: string;
  title: string;
  date: string;
  isNew?: boolean;
}

interface LatestProjectCardProps {
  project: Project;
  windowWidth: number | null;
  index: number;
}

const LatestProjectCard = ({ project, windowWidth, index }: LatestProjectCardProps) => {
  const { isDarkMode } = useDarkMode();
  const isMobile = windowWidth !== null && windowWidth < 768;

  const truncateTitle = (title: string) => {
    const limit = windowWidth && windowWidth < 640 ? 20 : 30;
    return title.length > limit ? title.slice(0, limit) + "..." : title;
  };

  return (
    <button 
      className={`relative animate-slide-card transition hover:scale-95 hover:duration-500 ${
        isMobile ? 'w-full min-w-[10px]' : 'min-w-[250px]'
      }`}
    >
      <div className="relative z-10 flex h-max flex-col items-start space-y-1">
        <div className="h-28 w-full overflow-hidden rounded-md relative">
          <Image
            src={project.src}
            alt={project.title}
            width={200}
            height={200}
            className="h-full w-full rounded-md object-cover"
            priority
          />
          {(project.isNew || index === 0) && (
            <div className="absolute top-0 right-0 origin-top-right">
              <div className="bg-yellow-400 text-black text-xs font-bold py-1 px-9 transform rotate-45 translate-y-3 translate-x-6 shadow-md">
                NEW
              </div>
            </div>
          )}
        </div>
        <p className={`text-sm ${isDarkMode ? "text-neutral-300" : "text-neutral-800"}`}>
          {truncateTitle(project.title)}
        </p>
        <span className={`text-[10px] ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
          Started on: {project.date}
        </span>
      </div>
    </button>
  );
};

export default LatestProjectCard;