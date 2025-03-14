// MobileMenu.tsx
"use client";

import { useEffect } from "react";
import ProfileItem from "@/components/sidebar/ProfileItem"; 
import FooterItem from "@/components/sidebar/FooterItem";
import MenuItem from "@/components/sidebar/MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineHome } from "react-icons/hi";
import { PiLeaf } from "react-icons/pi";
import { LuPencil } from "react-icons/lu";
import { HiOutlineInbox } from "react-icons/hi2";
import { LuLayoutGrid } from "react-icons/lu";
import { BsChatSquare } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { LuLayoutGrid as Apps } from "react-icons/lu";
import { MenuItem as MenuItemType } from "./index";

interface MobileMenuProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
  menuItems: MenuItemType[];
  pathname: string;
  prefetchNextPages?: () => void;
}

interface IconMap {
  [key: string]: React.ComponentType<{ className?: string }>;
}

export default function MobileMenu({
  isDarkMode,
  toggleDarkMode,
  isMobileOpen,
  setIsMobileOpen,
  menuItems,
  pathname,
  prefetchNextPages
}: MobileMenuProps) {
  
  const iconMap: IconMap = {
    HiOutlineHome,
    PiLeaf,
    LuPencil,
    HiOutlineInbox,
    LuLayoutGrid,
    BsChatSquare,
    HiOutlinePaperAirplane,
    Apps
  };
  
  const processedMenuItems = menuItems.map(item => ({
    ...item,
    icon: iconMap[item.icon]
  }));

  // Add the prefetch effect similar to desktop menu
  useEffect(() => {
    if (isMobileOpen && prefetchNextPages) {
      prefetchNextPages();
    }
  }, [isMobileOpen, prefetchNextPages]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileOpen, setIsMobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <AnimatePresence>
      {isMobileOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Mobile Sidebar - now styled more like desktop */}
          <motion.div
            key="mobile-sidebar"
            className={`fixed left-0 top-0 h-screen w-[60vw] max-w-[300px] flex flex-col transition-all duration-500 ease-in-out ${
              isDarkMode
                ? "bg-neutral-950/90 text-stone-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] border-stone-700"
                : "bg-neutral-100/95 text-stone-800 shadow-[0_0_15px_rgba(0,0,0,0.1)] border-stone-300"
            } border-r backdrop-blur-md rounded-tr-xl rounded-br-xl z-50 overflow-y-auto`}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Profile Section */}
            <div className="flex-shrink-0 relative mb-6">
              <ProfileItem
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                isSidebarOpen={true}
              />
              <div
                className="absolute bottom-0 left-4 right-4 h-px bg-neutral-700/50"
                style={{ width: "calc(100% - 32px)" }}
              />
            </div>

            {/* Menu Section */}
            <motion.nav
              className="flex-grow py-2 px-3 overflow-y-auto"
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <motion.div
                className="space-y-2"
                initial={false}
                animate={{
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1,
                  },
                }}
              >
                {processedMenuItems.map((item) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <MenuItem 
                      item={item}
                      isOpen={true}
                      isDarkMode={isDarkMode}
                      pathname={pathname}
                      setIsMobileOpen={setIsMobileOpen}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.nav>

            {/* Footer Section */}
            <div className="flex-shrink-0 mt-auto py-2">
              <FooterItem isSidebarOpen={true} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}