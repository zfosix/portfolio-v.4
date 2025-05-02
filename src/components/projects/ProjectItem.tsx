import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  isDarkMode: boolean;
}

const ProjectItem = ({ id, title, description, technologies, image, link, isDarkMode }: ProjectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl overflow-hidden backdrop-blur-sm ${
        isDarkMode
          ? "bg-neutral-900/90 hover:bg-neutral-800/90"
          : "bg-white/90 hover:bg-gray-50/90"
      } transition-all duration-300 border-[0.5px] ${
        isDarkMode ? "border-neutral-700" : "border-gray-200"
      } shadow-xl hover:shadow-2xl`}
    >
      <div className="w-full h-72 relative group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2"
        >
          <motion.div
            whileHover={{ rotate: 45 }}
            className="bg-white/20 backdrop-blur-md p-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.div>
        </a>
      </div>
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-3 tracking-tight">{title}</h2>
        <div className="flex flex-row items-center justify-between mb-4">
          <p className={`text-xs ${!isExpanded && 'line-clamp-1'} flex-1 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {description}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-xs ml-2 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            } hover:underline whitespace-nowrap`}
          >
            {isExpanded ? 'Less' : 'More'}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                isDarkMode
                  ? "bg-gray-800 text-gray-200 border border-gray-700"
                  : "bg-gray-100 text-gray-800 border border-gray-200"
              } transition-colors duration-200`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;