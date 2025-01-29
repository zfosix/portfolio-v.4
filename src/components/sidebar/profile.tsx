"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaCloudMoon, FaCloudSun, FaCheckCircle, FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProfileProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isSidebarOpen: boolean;
}

export default function Profile({
  isDarkMode,
  toggleDarkMode,
  isSidebarOpen,
}: ProfileProps) {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex flex-col items-center justify-center py-6 border-b border-black dark:border-white relative transition-all">
      {isSidebarOpen && (
        <>
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-cover bg-center z-0 rounded-lg"
            style={{ backgroundImage: "url('/image/bg.jpg')" }}
          ></div>
          <div className="absolute inset-x-0 top-0 h-1/2 bg-black opacity-50 z-0 rounded-lg"></div>
        </>
      )}

      <div className="bg-gray-200 dark:bg-gray-700 mt-12 rounded-full overflow-hidden border-2 border-black transition-all h-30 w-30 z-10">
        <Image
          src="/image/profile2.jpg"
          alt="zfosix"
          width={100}
          height={100}
        />
      </div>

      {isSidebarOpen && (
        <button
          className="absolute top-3 left-3 flex items-center space-x-1 px-1 py-0 bg-transparent border border-white text-white rounded-full z-10 hover:bg-white hover:text-black transition-all"
        >
          <FaCircle className="text-green-500" size={12} />
          <span className="text-sm">Hire Me.</span>
        </button>
      )}

      {isSidebarOpen ? (
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-neutral-200 dark:bg-neutral-800 text-gray-800 dark:text-white rounded-xl flex items-center justify-center z-10"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <FaCloudSun size={16} color="#FFD700" />
          ) : (
            <FaCloudMoon size={16} color="#2E4053" />
          )}
        </button>
      ) : (
        <button
          className="mt-4 w-8 h-8 bg-neutral-200 dark:bg-neutral-800 text-gray-800 dark:text-white rounded-xl flex items-center justify-center z-10"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <FaCloudSun size={16} color="#FFD700" />
          ) : (
            <FaCloudMoon size={16} color="#2E4053" />
          )}
        </button>
      )}

      {isSidebarOpen && (
        <motion.div
          className="text-center mt-4 z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="font-normal text-lg text-gray-800 dark:text-white flex items-center justify-center">
            Fajar Fauzian
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              <FaCheckCircle className="text-blue-500" />
            </motion.div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            @zfosix
          </div>
        </motion.div>
      )}
    </div>
  );
}