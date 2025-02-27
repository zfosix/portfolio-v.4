"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProcessedMenuItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

interface MenuItemProps {
  item: ProcessedMenuItem;
  isMobile?: boolean;
  isOpen: boolean;
  isDarkMode: boolean;
  pathname: string;
  setIsMobileOpen?: (isOpen: boolean) => void;
}

export default function MenuItem({ 
  item, 
  isMobile = false, 
  isOpen, 
  isDarkMode, 
  pathname,
  setIsMobileOpen 
}: MenuItemProps) {
  return (
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
        onClick={() => isMobile && setIsMobileOpen && setIsMobileOpen(false)}
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
}