"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import Sidebar from "@/components/sidebar/index";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface AppContentProps {
  isLoading: boolean;
  isInitialLoad: boolean;
  children: React.ReactNode;
}

export default function AppContent({ isLoading, isInitialLoad, children }: AppContentProps) {
  const { isDarkMode } = useDarkMode();
  // Use internal state to avoid SSR/CSR mismatches
  const [mounted, setMounted] = useState(false);

  // Only enable functionality after component has mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render content when mounted (client-side only)
  if (!mounted) {
    return <div className="min-h-screen"></div>; // Empty placeholder for SSR
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && mounted && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            style={{ 
              backgroundColor: isDarkMode ? "#0B0A0A" : "#FFFFFF",
              opacity: 1
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="flex" 
        style={{ backgroundColor: isDarkMode ? "#0B0A0A" : "#FFFFFF" }}
        suppressHydrationWarning={true}  // Add this to suppress hydration warnings
      >
        <div className="relative z-[1001]">
          <Sidebar />
        </div>
        <motion.div
          className="flex-1"
          initial={{ opacity: isInitialLoad && mounted ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          suppressHydrationWarning={true}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}