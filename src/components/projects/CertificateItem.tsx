import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl overflow-hidden shadow-lg ${
        isDarkMode
          ? "bg-neutral-900 hover:bg-neutral-800"
          : "bg-white hover:bg-gray-50"
      } transition-all duration-300 border ${
        isDarkMode ? "border-neutral-800" : "border-gray-200"
      }`}
    >
      <div className="w-full h-48 relative group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
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
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Issued by: {issuedBy}
          </span>
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Date: {date}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateItem;