// File: components/ClientOnlyAppContent.tsx
"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import LoadingSpinner from "@/components/LoadingSpinner"; // Pastikan nama file dan import benar
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// Import Sidebar dengan rendering hanya di sisi klien
const ClientOnlySidebar = dynamic(() => import("@/components/sidebar/index"), {
  ssr: false,
});

interface AppContentProps {
  isLoading: boolean; // Prop untuk menampilkan loading state
  isInitialLoad: boolean; // Prop untuk animasi awal
  children: React.ReactNode; // Konten utama
}

function AppContent({ isLoading, isInitialLoad, children }: AppContentProps) {
  const { isDarkMode } = useDarkMode(); // Ambil tema gelap/terang dari context

  return (
    <>
      {/* Animasi untuk loading state */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            style={{
              backgroundColor: isDarkMode ? "#0B0A0A" : "#FFFFFF", // Sesuaikan dengan tema
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
        className="flex flex-1 overflow-hidden pt-12 md:pt-0 "
        style={{
          backgroundColor: isDarkMode ? "#0B0A0A" : "#FFFFFF", // Sesuaikan dengan tema
        }}
      >
        {/* Sidebar */}
        <div className="relative z-[1001]">
          <ClientOnlySidebar />
        </div>

        {/* Konten anak (children) dengan animasi */}
        <motion.div
          className="flex-1"
          initial={{ opacity: isInitialLoad ? 0 : 1 }} // Animasi opacity saat awal load
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}

// Ekspor langsung sebagai client component (tidak perlu dynamic)
export default AppContent;