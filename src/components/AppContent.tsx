"use client";

import { useState, useEffect } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import Sidebar from "@/components/sidebar/index";
import { motion, AnimatePresence } from "framer-motion";

interface AppContentProps {
  isLoading: boolean;
  isInitialLoad: boolean;
  children: React.ReactNode;
}

export default function AppContent({ isLoading, isInitialLoad, children }: AppContentProps) {
  const { isDarkMode } = useDarkMode();
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  useEffect(() => {
    setBackgroundColor(isDarkMode ? "#0B0A0A" : "#FFFFFF");
  }, [isDarkMode]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            style={{ backgroundColor }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex" style={{ backgroundColor }}>
        <div className="relative z-[1001]">
          <Sidebar />
        </div>
        <motion.div
          className="flex-1"
          initial={{ opacity: isInitialLoad ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}