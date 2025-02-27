import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { skillCategories } from "@/data/resume";

type CategoryKey = keyof typeof skillCategories;

interface RoadmapItemsProps {
  category: CategoryKey;
  isDarkMode: boolean;
}

export default function RoadmapItems({ category, isDarkMode }: RoadmapItemsProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {skillCategories[category]?.map((item, index) => (
        <RoadmapItem 
          key={index}
          item={item}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}

interface RoadmapItemProps {
  item: {
    icon: React.ReactNode;
    title: string;
    level: string;
    link: string;
  };
  isDarkMode: boolean;
}

function RoadmapItem({ item, isDarkMode }: RoadmapItemProps) {
  return (
    <Link
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
          <LevelBadge level={item.level} />
        </div>
        <FaLink className="text-xl text-gray-600 dark:text-gray-300" />
      </div>
    </Link>
  );
}

interface LevelBadgeProps {
  level: string;
}

function LevelBadge({ level }: LevelBadgeProps) {
  let badgeClass = "";
  
  switch (level) {
    case "(Beginner)":
      badgeClass = "bg-blue-500 text-white";
      break;
    case "(Intermediate)":
      badgeClass = "bg-green-500 text-white";
      break;
    case "(Advanced)":
      badgeClass = "bg-yellow-500 text-black";
      break;
    case "(Expert)":
      badgeClass = "bg-purple-500 text-white";
      break;
    default:
      badgeClass = "bg-red-500 text-white";
  }
  
  return (
    <span className={`px-2 py-1 text-xs sm:text-sm font-semibold rounded-full ${badgeClass}`}>
      {level}
    </span>
  );
}