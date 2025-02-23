"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import Profile from "@/components/sidebar/profile";
import Footer from "@/components/sidebar/footer";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { PiLeaf } from "react-icons/pi";
import { LuPencil } from "react-icons/lu";
import { HiOutlineInbox } from "react-icons/hi2";
import { LuLayoutGrid } from "react-icons/lu";
import { BsChatSquare } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { LuLayoutGrid as Apps } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

interface MenuItemProps {
  item: MenuItem;
  isMobile?: boolean;
  isOpen: boolean;
}

export default function Sidebar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = useMemo(
    () => [
      { name: "Home", icon: HiOutlineHome, href: "/" },
      { name: "About", icon: PiLeaf, href: "/about" },
      { name: "Blog", icon: LuPencil, href: "/blog" },
      { name: "Projects", icon: HiOutlineInbox, href: "/projects" },
      { name: "Roadmap", icon: LuLayoutGrid, href: "/roadmap" },
      { name: "Chat Room", icon: BsChatSquare, href: "/chatroom" },
      { name: "Contact", icon: HiOutlinePaperAirplane, href: "/contact" },
      { name: "Dashboard", icon: Apps, href: "/dashboard" },
    ],
    []
  );

  const prefetchNextPages = useCallback(() => {
    menuItems.forEach((item) => {
      if (item.href !== pathname) {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = item.href;
        document.head.appendChild(link);
      }
    });
  }, [pathname, menuItems]);

  useEffect(() => {
    if (isSidebarOpen || isMobileOpen) {
      prefetchNextPages();
    }
  }, [isSidebarOpen, isMobileOpen, prefetchNextPages]);

  const MenuItem = ({ item, isMobile = false, isOpen }: MenuItemProps) => (
    <Link href={item.href} className="text-decoration-none w-full block">
      <motion.div
        className={`flex items-center gap-3 p-2 rounded-xl transition-colors duration-300 ease-in-out cursor-pointer relative overflow-hidden ${
          pathname === item.href
            ? isDarkMode
              ? "bg-neutral-800 text-white"
              : "bg-neutral-500 text-white"
            : isDarkMode
            ? "hover:bg-neutral-700 hover:text-white"
            : "hover:bg-neutral-300 hover:text-stone-800"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => isMobile && setIsMobileOpen(false)}
      >
        <div
          className={`${
            pathname === item.href
              ? "text-white"
              : isDarkMode
              ? "text-stone-400"
              : "text-stone-600"
          } flex-shrink-0`}
        >
          <item.icon className="h-5 w-5" />
        </div>
        <motion.span
          initial={false}
          animate={{
            opacity: !isMobile && !isOpen ? 0 : 1,
            x: !isMobile && !isOpen ? -20 : 0,
            width: !isMobile && !isOpen ? 0 : "auto",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={`${
            pathname === item.href
              ? "text-white"
              : isDarkMode
              ? "text-stone-400"
              : "text-stone-600"
          } whitespace-nowrap overflow-hidden`}
        >
          {item.name}
        </motion.span>
      </motion.div>
    </Link>
  );

  return (
    <>
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

      {/* Desktop Sidebar */}
      <motion.div
        className={`fixed left-0 top-0 h-screen hidden md:flex flex-col transition-all duration-500 ease-in-out ${
          isDarkMode
            ? "bg-neutral-950/20 text-stone-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.1)] border-stone-700"
            : "bg-neutral-100/20 text-stone-800 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] border-stone-300"
        } border-r backdrop-blur-md rounded-tr-xl rounded-br-xl`}
        initial={false}
        animate={{
          width: isSidebarOpen ? "240px" : "64px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        {/* Profile Section */}
        <div className="flex-shrink-0 relative mb-9">
          <Profile
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            isSidebarOpen={isSidebarOpen}
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
            {menuItems.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MenuItem item={item} isOpen={isSidebarOpen} />
              </motion.div>
            ))}
          </motion.div>
        </motion.nav>

        {/* Footer Section */}
        <div className="flex-shrink-1">
          <Footer isSidebarOpen={isSidebarOpen} />
        </div>
      </motion.div>

      {/* Mobile Menu */}
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

            {/* Mobile Sidebar */}
            <motion.div
              key="mobile-sidebar"
              className={`fixed left-0 top-0 h-screen w-64 p-3 flex flex-col ${
                isDarkMode
                  ? "bg-neutral-950/20 text-stone-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.1)] border-stone-700"
                  : "bg-neutral-100/20 text-stone-800 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] border-stone-300"
              } border-r backdrop-blur-md rounded-tr-xl rounded-br-xl z-50`}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile Section */}
              <div className="flex-shrink-0 relative mb-9">
                <Profile
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
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuItem item={item} isMobile={true} isOpen={true} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.nav>

              {/* Footer Section */}
              <div className="flex-shrink-1">
                <Footer isSidebarOpen={true} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}