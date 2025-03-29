"use client";

import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
  isSidebarOpen: boolean;
}

export default function FooterItem({ isSidebarOpen }: FooterProps) {
  return (
    <div className=" py-9 text-stone-400 mt-auto text-center backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {isSidebarOpen ? (
          <motion.div
            key="full-text"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <span className="text-sm font-medium">© 2025</span>
            <motion.div
              className="flex items-center gap-1"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>with</span>
              <motion.span
                className="text-red-500 text-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 1.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
              >
                ❤
              </motion.span>
              <span>by</span>
            </motion.div>
            <motion.span
              className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              zfosix
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="heart-icon"
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              className="text-red-500 text-xl"
              animate={{
                scale: [1, 1.3, 1],
                y: [0, -5, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            >
              ❤
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}