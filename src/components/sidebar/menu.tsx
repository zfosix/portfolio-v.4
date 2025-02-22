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
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  icon: LucideIcon;
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
            width: !isMobile && !isOpen ? 0 : "auto"
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
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
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>

      <motion.div
        className={`fixed left-0 top-0 h-screen hidden md:flex flex-col transition-all duration-500 ease-in-out ${
          isDarkMode
            ? "bg-neutral-950/20 text-stone-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.1)] border-stone-700"
            : "bg-neutral-100/20 text-stone-800 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] border-stone-300"
        } border-r backdrop-blur-md`}
        initial={false}
        animate={{
          width: isSidebarOpen ? "240px" : "64px"
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
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
          {/* Border Bawah Tidak Full */}
          <div
            className="absolute bottom-0 left-4 right-4 h-px bg-neutral-700"
            style={{ width: "calc(100% - 32px)" }} 
          />
        </div>

        {/* Menu Section */}
        <motion.nav 
          className="flex-grow py-4 px-3" // Mengurangi padding-top dan padding-bottom
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.1
          }}
        >
          <motion.div
            className="space-y-3"
            initial={false}
            animate={{
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
              }
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
    </>
  );
}