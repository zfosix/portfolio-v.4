import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface CertificateProps {
  id: number;
  title: string;
  description: string;
  issuedBy: string;
  date: string;
  image: string;
  link: string;
  isDarkMode: boolean;
}

const CertificateItem = ({ id, title, description, issuedBy, date, image, link, isDarkMode }: CertificateProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMultiline, setIsMultiline] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      setIsMultiline(descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight);
    }
  }, [description]);

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl overflow-hidden shadow-xl ${
        isDarkMode
          ? "bg-neutral-900 hover:bg-neutral-800"
          : "bg-white hover:bg-gray-50"
      } transition-all duration-300 border ${
        isDarkMode ? "border-neutral-800" : "border-gray-200"
      }`}
    >
      <div className="w-full h-64 relative group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
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
        </a>
      </div>
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-1 line-clamp-1">{title}</h2>
        <div className="flex items-start gap-1 mb-2">
          <p 
            ref={descriptionRef}
            className={`text-xs text-gray-500 dark:text-gray-400 ${!showFullDescription && 'line-clamp-1'}`}
          >
            {description}
          </p>
          {isMultiline && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {showFullDescription ? 'Less' : 'More'}
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          <span
            className={`px-2 py-0.5 text-[10px] rounded-full ${
              isDarkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {issuedBy}
          </span>
          <span
            className={`px-2 py-0.5 text-[10px] rounded-full ${
              isDarkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {date}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateItem;