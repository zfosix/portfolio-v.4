"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaCloudMoon,
  FaCloudSun,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ProfileHeader from "@/components/sidebar/ProfileHeader";

interface ProfileProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isSidebarOpen: boolean;
}

export default function ProfileItem({
  isDarkMode,
  toggleDarkMode,
  isSidebarOpen,
}: ProfileProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSidebarOpen) {
      timer = setTimeout(() => {
        setShowText(true);
      }, 300);
    } else {
      setShowText(false);
    }
    return () => clearTimeout(timer);
  }, [isSidebarOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  
  return (
    <div
      className="flex flex-col items-center justify-center py-6 relative transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProfileHeader 
        isSidebarOpen={isSidebarOpen} 
        isHovered={isHovered} 
        showText={showText} 
      />

      <motion.div
        className="relative mt-12 rounded-full overflow-hidden border-2 border-neutral-700 transition-all z-10"
        initial={false}
        animate={{
          width: isSidebarOpen ? "100px" : "40px",
          height: isSidebarOpen ? "100px" : "40px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/image/profile2.jpg"
          alt="zfosix"
          width={100}
          height={100}
          priority
          className="object-cover w-full h-full"
        />
      </motion.div>

      <button
        className={`${
          isSidebarOpen ? "absolute top-4 right-4" : "mt-4"
        } w-8 h-8 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white rounded-xl flex items-center justify-center z-10 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-700`}
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <FaCloudMoon size={16} className="text-neutral-800 dark:text-white" />
        ) : (
          <FaCloudSun size={16} className="text-yellow-500" />
        )}
      </button>

      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            className="text-center mt-4 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0,
              y: -10,
              transition: {
                duration: 0.2,
                ease: "easeInOut"
              }
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="font-medium text-lg text-neutral-800 dark:text-white flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="flex items-center gap-2">
                Fajar Fauzian
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ 
                    scale: [0.8, 1, 0.8],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaCheckCircle className="text-blue-500" size={16} />
                </motion.div>
              </span>
            </motion.div>
            <motion.div
              className="text-neutral-600 dark:text-neutral-300 text-sm mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              @zfosix
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}