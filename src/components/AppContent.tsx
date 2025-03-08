// File: components/ClientOnlyAppContent.tsx
"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// Import Sidebar with client-side only rendering
const ClientOnlySidebar = dynamic(() => import("@/components/sidebar/index"), { 
  ssr: false 
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
      <AnimatePresence>
        {isLoading && (
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

      <div className="flex" style={{ backgroundColor: isDarkMode ? "#0B0A0A" : "#FFFFFF" }}>
        <div className="relative z-[1001]">
          <ClientOnlySidebar />
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

// Export as a client-only component
export default dynamic(() => Promise.resolve(AppContent), { ssr: false });