"use client";

import { useEffect } from "react";
import MenuItem from "@/components/sidebar/MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenuProps } from "@/types/menu";

export default function MobileMenu({
  isDarkMode,
  isMobileOpen,
  setIsMobileOpen,
  menuItems,
  pathname,
  prefetchNextPages,
}: MobileMenuProps) {
  // Prefetch halaman saat menu mobile terbuka
  useEffect(() => {
    if (isMobileOpen && prefetchNextPages) {
      prefetchNextPages();
    }
  }, [isMobileOpen, prefetchNextPages]);

  // Tutup menu mobile saat ukuran layar berubah ke desktop (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileOpen, setIsMobileOpen]);

  // Cegah scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <AnimatePresence>
      {isMobileOpen && (
        <motion.div
          key="mobile-sidebar"
          className={`fixed left-0 right-0 top-[64px] w-full flex rounded-b-xl flex-col transition-all duration-500 ease-in-out ${
            isDarkMode
              ? "bg-neutral-950/95 text-stone-200 opacity-100"
              : "bg-neutral-100/95 text-stone-800 opacity-100"
          } backdrop-blur-sm z-40 overflow-y-auto`}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }} 
          exit={{ y: "-100%" }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          role="navigation"
          aria-label="Mobile Navigation"
        >
          {/* Menu Section */}
          <motion.nav
            className="flex-grow my-6 px-3 overflow-y-auto"
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
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
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}