"use client";

import { useState, useEffect } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import DesktopMenu from "@/components/sidebar/DesktopMenu";
import MobileMenu from "@/components/sidebar/MobileMenu";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { MENU_ITEMS } from "@/data/resume";

export default function Sidebar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Optional: Implement prefetch function for both menus
  const prefetchNextPages = () => {
    // Your prefetch logic here
    console.log("Prefetching next pages...");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="sticky top-0 z-10 flex flex-col"></div>;
  }

  return (
    <div className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8" suppressHydrationWarning={true}>
      {/* Hamburger Button for Mobile */}
      <motion.button
        className="fixed top-4 right-4 z-50 md:hidden p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-stone-800 dark:text-stone-200"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        initial={false}
        animate={isMobileOpen ? "open" : "closed"}
        variants={{
          open: { rotate: 90 },
          closed: { rotate: 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        {isMobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </motion.button>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <DesktopMenu
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          menuItems={MENU_ITEMS}
          pathname={pathname}
          prefetchNextPages={prefetchNextPages}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        menuItems={MENU_ITEMS}
        pathname={pathname}
        prefetchNextPages={prefetchNextPages}
      />
    </div>
  );
}