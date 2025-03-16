"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import ProfileHeader from "@/components/sidebar/ProfileHeader";
import Link from "next/link";
import { DEVTO_PROFILE } from "@/common/constant";

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
        className="relative mt-12 rounded-full overflow-hidden border-2 border-neutral-700/50 transition-all z-10 shadow-lg"
        initial={false}
        animate={{
          width: isSidebarOpen ? "100px" : "40px",
          height: isSidebarOpen ? "100px" : "40px",
          borderWidth: isSidebarOpen ? "3px" : "2px",
        }}
        whileHover={{
          scale: 1.05,
          borderColor: isDarkMode
            ? "rgba(59, 130, 246, 0.5)"
            : "rgba(219, 39, 119, 0.5)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/image/profile1.jpeg"
          alt="zfosix"
          width={100}
          height={100}
          priority
          className="object-cover w-full h-full"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.button
        className={`
        ${isSidebarOpen ? "absolute top-4 right-4" : "mt-4"}
        w-8 h-8 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white
        rounded-xl flex items-center justify-center z-10 transition-all
        hover:bg-neutral-100 dark:hover:bg-neutral-700 shadow-md
      `}
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? (
          <BsCloudMoon size={16} className="text-neutral-100" />
        ) : (
          <BsCloudSun size={16} className="text-yellow-500" />
        )}
      </motion.button>

      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            className="text-center mt-4 z-10 w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -10,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
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
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: isDarkMode ? 0 : 0 }}
                  className="text-neutral-900 dark:text-neutral-200 font-semibold"
                >
                  <Link href="/" passHref>
                    <h2 className="font-sora flex-grow whitespace-nowrap text-lg font-medium lg:text-xl">
                      Fajar Fauzian
                    </h2>
                  </Link>
                </motion.span>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{
                    scale: [0.8, 1, 0.8],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <RiVerifiedBadgeFill className="text-blue-500" size={16} />
                </motion.div>
              </span>
            </motion.div>
            <motion.div
              className="text-neutral-600 dark:text-white text-sm mt-1 font-medium w-full flex justify-center" // Tambahkan flex dan justify-center
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link
                href={DEVTO_PROFILE}
                target="_blank"
                className="font-sora text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400"
              >
                @zianscode
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
