"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MenuItemType } from "@/types/menu";

interface MenuItemProps {
  item: MenuItemType;
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
  const { title, href, icon: Icon, isExternal } = item;
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  
  // Handle special case for blog route with query params
  const isBlogActive = href.startsWith('/blog') && pathname.startsWith('/blog');
  const isCurrentActive = isActive || isBlogActive;

  // Force text to always show in mobile view
  const shouldShowText = isMobile || isOpen;

  return (
    <Link 
      href={href} 
      className="text-decoration-none w-full block"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <motion.div
        className={`flex items-center gap-3 py-2 px-3 rounded-xl transition-colors duration-300 ease-in-out cursor-pointer relative overflow-hidden ${
          isCurrentActive
            ? isDarkMode
              ? "bg-neutral-800 text-white"
              : "bg-neutral-500 text-white"
            : isDarkMode
            ? "hover:bg-neutral-700 hover:text-white text-neutral-300"
            : "hover:bg-neutral-200 hover:text-stone-800 text-stone-600"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => isMobile && setIsMobileOpen && setIsMobileOpen(false)}
      >
        {/* Icon */}
        <div
          className={`${
            isCurrentActive
              ? "text-white"
              : isDarkMode
              ? "text-neutral-300"
              : "text-stone-600"
          } flex-shrink-0`}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Menu Name - Force display on mobile */}
        {shouldShowText && (
          <span
            className={`${
              isCurrentActive
                ? "text-white"
                : isDarkMode
                ? "text-neutral-300"
                : "text-stone-600"
            } whitespace-nowrap font-medium`}
          >
            {title}
          </span>
        )}
      </motion.div>
    </Link>
  );
}