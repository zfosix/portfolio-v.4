"use client";

import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import Profile from "@/components/sidebar/profile";
import Footer from "@/components/sidebar/footer";
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
} from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Sidebar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: Feather, href: "/about" },
    { name: "Blog", icon: PenTool, href: "/blog" },
    { name: "Projects", icon: ClipboardList, href: "/projects" },
    { name: "Roadmap", icon: MapPin, href: "/roadmap" },
    { name: "Chat Room", icon: MessageCircle, href: "/chatroom" },
    { name: "Contact", icon: Mail, href: "/contact" },
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  ];

  return (
    <>
      {/* 🔹 HAMBURGER MENU BUTTON (Hanya Muncul di Mobile) */}
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

      {/* 🔹 SIDEBAR (Mode Website) */}
      <motion.div
        className={`fixed left-0 top-0 h-screen hidden md:flex flex-col p-3 transition-all duration-500 ease-in-out ${
          isDarkMode
            ? "bg-neutral-950/20 text-stone-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.1)] border-stone-700"
            : "bg-neutral-100/20 text-stone-800 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] border-stone-300"
        } ${isSidebarOpen ? "w-60" : "w-16"} border-b backdrop-blur-md`} // Tambahkan backdrop-blur-md dan bg-opacity-50
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
            <motion.a
              key={index}
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded-xl transition-colors duration-300 ease-in-out ${
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
                  isSidebarOpen ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 whitespace-nowrap`}
              >
                {item.name}
              </span>
            </motion.a>
          ))}
        </div>
        <Footer isSidebarOpen={isSidebarOpen} />
      </motion.div>

      {/* 🔹 SIDEBAR (Mode Mobile) */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        >
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-0 top-0 h-screen w-60 p-3 flex flex-col bg-neutral-100/50 dark:bg-[#0B0A0A]/50 text-stone-800 dark:text-stone-200 shadow-lg z-50 backdrop-blur-md`} // Tambahkan backdrop-blur-md dan bg-opacity-50
            onClick={(e) => e.stopPropagation()}
          >
            {/* TOMBOL CLOSE */}
            <button
              className="absolute top-4 right-4 text-stone-800 dark:text-stone-200"
              onClick={() => setIsMobileOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* PROFILE */}
            <Profile
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              isSidebarOpen={true}
            />

            {/* MENU LIST */}
            <div className="space-y-3 flex-grow py-7">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-3 p-2 rounded-xl transition-colors duration-300 ease-in-out ${
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
                  onClick={() => setIsMobileOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>

            {/* FOOTER */}
            <Footer isSidebarOpen={true} />
          </motion.div>
        </div>
      )}
    </>
  );
}
