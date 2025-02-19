"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import Profile from "@/components/sidebar/profile";
import Footer from "@/components/sidebar/footer";
import Link from "next/link";
import {
  Home,
  Feather,
  PenTool,
  ClipboardList,
  MessageCircle,
  Mail,
  LayoutDashboard,
  MapPin,
  Menu,
  X,
  LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface MenuItemProps {
  item: MenuItem;
  isMobile?: boolean;
}

export default function Sidebar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = useMemo(
    () => [
      { name: "Home", icon: Home, href: "/" },
      { name: "About", icon: Feather, href: "/about" },
      { name: "Blog", icon: PenTool, href: "/blog" },
      { name: "Projects", icon: ClipboardList, href: "/projects" },
      { name: "Roadmap", icon: MapPin, href: "/roadmap" },
      { name: "Chat Room", icon: MessageCircle, href: "/chatroom" },
      { name: "Contact", icon: Mail, href: "/contact" },
      { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    ],
    []
  );

  const prefetchNextPages = useCallback(() => {
    menuItems.forEach((item) => {
      if (item.href !== pathname) {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = item.href;
        link.as = "document"; 
      }
    });
  }, [pathname, menuItems]);

  useEffect(() => {
    if (isSidebarOpen || isMobileOpen) {
      prefetchNextPages();
    }
  }, [isSidebarOpen, isMobileOpen, prefetchNextPages]);

  const MenuItem = ({ item, isMobile = false }: MenuItemProps) => (
    <Link href={item.href} className="text-decoration-none">
      <motion.div
        className={`flex items-center gap-3 p-2 rounded-xl transition-colors duration-300 ease-in-out cursor-pointer ${
          pathname === item.href
            ? isDarkMode
              ? "bg-neutral-800 text-white"
              : "bg-neutral-500 text-stone-800"
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
        <span
          className={`${
            pathname === item.href
              ? "text-white"
              : isDarkMode
              ? "text-stone-400"
              : "text-stone-600"
          } ${
            !isMobile && !isSidebarOpen ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300 whitespace-nowrap`}
        >
          {item.name}
        </span>
      </motion.div>
    </Link>
  );

  return (
    <>
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
        {isMobileOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </motion.button>

      <motion.div
        className={`fixed left-0 top-0 h-screen hidden md:flex flex-col p-3 transition-all duration-500 ease-in-out ${
          isDarkMode
            ? "bg-neutral-950/20 text-stone-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.1)] border-stone-700"
            : "bg-neutral-100/20 text-stone-800 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] border-stone-300"
        } ${isSidebarOpen ? "w-60" : "w-16"} border-r backdrop-blur-md`}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <Profile
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="space-y-3 flex-grow py-7">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-4">
              {" "}
              {/* Tambahkan margin-bottom */}
              <MenuItem item={item} />
            </div>
          ))}
        </div>
        <Footer isSidebarOpen={isSidebarOpen} />
      </motion.div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              key="mobile-sidebar"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 h-screen w-60 p-3 flex flex-col bg-neutral-100/50 dark:bg-[#0B0A0A]/50 text-stone-800 dark:text-stone-200 shadow-lg z-50 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-stone-800 dark:text-stone-200"
                onClick={() => setIsMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>

              <Profile
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                isSidebarOpen={true}
              />

              <div className="space-y-3 flex-grow py-7">
                {menuItems.map((item, index) => (
                  <MenuItem key={index} item={item} isMobile={true} />
                ))}
              </div>

              <Footer isSidebarOpen={true} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
