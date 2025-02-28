"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import Sidebar from "@/components/sidebar/index";
import { motion, AnimatePresence } from "framer-motion";
// import ParticleBackground from "@/components/ParticleBackground";

interface AppContentProps {
  isLoading: boolean;
  isInitialLoad: boolean;
  children: React.ReactNode;
}

export default function AppContent({ isLoading, isInitialLoad, children }: AppContentProps) {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode ? "#0B0A0A" : "#FFFFFF";

  return (
    <>
      <AnimatePresence>
        {!isInitialLoad && isLoading && (
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

      {/* <ParticleBackground /> */}

      <div className="flex" style={{ backgroundColor }}>
        <div className="relative z-[1001]">
          <Sidebar />
        </div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}