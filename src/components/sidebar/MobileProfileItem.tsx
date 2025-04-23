"use client";

import { useEffect } from "react";
import Image from "next/image";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { DEVTO_PROFILE } from "@/common/constant";

interface ProfileProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export default function MobileProfileItem({
  isDarkMode,
  toggleDarkMode,
  isMobileOpen,
  setIsMobileOpen,
}: ProfileProps) {
  // Toggle dark mode on document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full h-16 py-3 px-3 bg-white dark:bg-neutral-950"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Profile Section */}
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <motion.div
          className="relative rounded-full overflow-hidden border-2 border-neutral-300 dark:border-neutral-700 transition-all shadow-sm"
          initial={false}
          animate={{
            width: "36px",
            height: "36px",
            borderWidth: "2px",
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
            width={36}
            height={36}
            priority
            sizes="36px"
            className="object-cover w-full h-full"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Name and Handle */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <Link href="/" passHref>
              <h2 className="font-sora text-base font-medium text-neutral-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Fajar Fauzian
              </h2>
            </Link>
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
              <RiVerifiedBadgeFill className="text-blue-500" size={14} />
            </motion.div>
          </div>
          <Link
            href={DEVTO_PROFILE}
            target="_blank"
            className="font-sora text-xs text-neutral-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors"
          >
            @zianscode
          </Link>
        </div>
      </div>

      {/* Dark Mode and Hamburger Buttons */}
      <div className="flex items-center gap-2">
        {/* Toggle Dark Mode */}
        <motion.button
          className="w-9 h-9 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white rounded-lg flex items-center justify-center transition-all hover:bg-neutral-200 dark:hover:bg-neutral-700 shadow-sm"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDarkMode ? (
            <BsCloudMoon size={18} className="text-neutral-100" />
          ) : (
            <BsCloudSun size={18} className="text-yellow-500" />
          )}
        </motion.button>

        {/* Hamburger Button */}
        <motion.button
          className="w-9 h-9 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white rounded-lg flex items-center justify-center transition-all hover:bg-neutral-200 dark:hover:bg-neutral-700 shadow-sm"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          initial={false}
          animate={isMobileOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          {isMobileOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
