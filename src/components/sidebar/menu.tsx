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
  // ListChecks,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Sidebar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    <motion.div
      className={`fixed left-0 top-0 h-screen ${
        isDarkMode
          ? "bg-[#0B0A0A] text-stone-200"
          : "bg-neutral-100 text-stone-800"
      } p-3 flex flex-col transition-all duration-500 ease-in-out ${
        isSidebarOpen ? "w-60" : "w-16"
      } overflow-hidden ${
        isDarkMode
          ? "shadow-[0_0_10px_2px_rgba(255,255,255,0.1)]"
          : "shadow-[0_0_10px_2px_rgba(0,0,0,0.1)]"
      } border-b ${isDarkMode ? "border-stone-700" : "border-stone-300"}`}
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
  );
}
