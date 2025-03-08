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
            className={`fixed left-0 top-0 h-screen flex flex-col transition-all duration-500 ease-in-out ${
              isDarkMode
                ? "bg-neutral-950/20 text-stone-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.1)] border-stone-700"
                : "bg-neutral-100/20 text-stone-800 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] border-stone-300"
            } border-r backdrop-blur-md rounded-tr-xl rounded-br-xl z-50`}
            initial={{ x: -300 }}
            animate={{ x: 0, width: "240px" }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Profile Section */}
            <div className="flex-shrink-0 relative mb-9">
              <ProfileItem
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                isSidebarOpen={true}
              />
              <div
                className="absolute bottom-0 left-4 right-4 h-px bg-neutral-700"
                style={{ width: "calc(100% - 32px)" }}
              />
            </div>

            {/* Menu Section */}
            <motion.nav
              className="flex-grow py-4 px-3"
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <motion.div
                className="space-y-3"
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
            <div className="flex-shrink-1">
              <FooterItem isSidebarOpen={true} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}