"use client";

import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
  isSidebarOpen: boolean;
}

export default function Footer({ isSidebarOpen }: FooterProps) {
  return (
    <div className="border-t border-gray-700 py-4 text-stone-400 mt-auto text-center">
      <AnimatePresence mode="wait">
        {isSidebarOpen ? (
          <motion.span
            key="full-text"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            © 2025 with{" "}
            <motion.span
              style={{ color: "red" }}
              animate={{
                opacity: [1, 0.5, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            >
              ❤
            </motion.span>{" "}
            by zfosix
          </motion.span>
        ) : (
          <motion.span
            key="heart-icon"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [1, 0.5, 1],
              y: [0, -10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            exit={{ opacity: 0, y: -20 }}
            style={{ color: "red" }}
          >
            ❤
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}