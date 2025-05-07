import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  slug: string;
  isDarkMode: boolean;
}

const ProjectItem = ({
  id,
  title,
  description,
  technologies,
  image,
  slug,
  isDarkMode,
}: ProjectProps) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`rounded-2xl overflow-hidden backdrop-blur-md ${
        isDarkMode
          ? "bg-neutral-900/80 hover:bg-neutral-800/80"
          : "bg-white/80 hover:bg-gray-50/80"
      } transition-all duration-300 ${
        isDarkMode
          ? "shadow-[0_4px_20px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.35)]"
          : "shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
      }`}
    >
      <div className="w-full h-56 relative group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover p-2 rounded-2xl transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 gap-4">
          <Link href={`/projects/${slug}`}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-white/30 backdrop-blur-lg p-3 rounded-xl hover:bg-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 tracking-tight">{title}</h2>
        <p
          className={`text-sm leading-relaxed mb-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-medium rounded-lg ${
                isDarkMode
                  ? "bg-gray-800/50 text-gray-200 backdrop-blur-sm"
                  : "bg-gray-100/70 text-gray-800 backdrop-blur-sm"
              } transition-all duration-300 hover:scale-105`}
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
