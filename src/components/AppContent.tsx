"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// Import Sidebar dengan rendering hanya di sisi klien
const ClientOnlySidebar = dynamic(() => import("@/components/sidebar/index"), {
  ssr: false,
});

interface AppContentProps {
  isLoading: boolean;
  isInitialLoad: boolean;
  children: React.ReactNode;
}

function AppContent({ isLoading, isInitialLoad, children }: AppContentProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {/* Animasi untuk loading state */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            style={{
              backgroundColor: isDarkMode ? "#171717" : "#ffffff",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten utama */}
      <div
        className="flex flex-1 overflow-hidden pt-12 md:pt-0"
        style={{
          backgroundColor: isDarkMode ? "bg-neutral-950" : "bg-white",
        }}
      >
        {/* Sidebar dengan animasi masuk/keluar */}
        <AnimatePresence>
          <motion.div
            className="relative z-[1001]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ClientOnlySidebar isLoading={isLoading} />
          </motion.div>
        </AnimatePresence>

        {/* Konten anak (children) dengan animasi */}
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

export default AppContent;