"use client";

import { useEffect } from "react";
import ProfileItem from "@/components/sidebar/ProfileItem";
import FooterItem from "@/components/sidebar/FooterItem";
import MenuItem from "@/components/sidebar/MenuItem";
import { motion } from "framer-motion";
import Breakline from "@/components/Breakline";
import { DesktopMenuProps } from "@/types/menu";

export default function DesktopMenu({
  isDarkMode,
  toggleDarkMode,
  isSidebarOpen,
  setIsSidebarOpen,
  menuItems,
  pathname,
  prefetchNextPages,
}: DesktopMenuProps) {
  useEffect(() => {
    if (isSidebarOpen && prefetchNextPages) {
      prefetchNextPages();
    }
  }, [isSidebarOpen, prefetchNextPages]);

  return (
    <motion.div
      className={`fixed left-0 top-0 h-[100dvh] flex flex-col transition-all duration-500 ease-in-out ${
        isDarkMode
          ? "bg-neutral-950/20 text-stone-200 shadow-[0_0_3px_2px_rgba(255,255,255,0.1)]"
          : "bg-neutral-100/20 text-stone-800 shadow-[0_0_3px_2px_rgba(0,0,0,0.1)]"
      } backdrop-blur-md rounded-tr-xl rounded-br-xl overflow-hidden`}
      initial={false}
      animate={{
        width: isSidebarOpen ? "250px" : "68px",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <ProfileItem
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isSidebarOpen={isSidebarOpen}
      />
      {/* Profile Section */}
      <div className="flex-shrink-0 relative mb-12">
        <div
          className="absolute bottom-0 left-4 right-4 h-0 bg-transparent"
          style={{ width: "calc(100% - 32px)" }}
        />
      </div>

      <Breakline className="mx-3" />

      {/* Menu Section */}
      <motion.nav
        className="flex-grow px-3"
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
          {menuItems.map((item) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MenuItem
                item={item}
                isOpen={isSidebarOpen}
                isDarkMode={isDarkMode}
                pathname={pathname}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>

      {/* Footer Section */}
      <div className="flex-shrink-0 px-3 pb-4">
        <FooterItem isSidebarOpen={isSidebarOpen} />
      </div>
    </motion.div>
  );
}