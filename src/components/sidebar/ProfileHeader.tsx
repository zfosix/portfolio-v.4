"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaCircle } from "react-icons/fa";

interface ProfileHeaderProps {
  isSidebarOpen: boolean;
  isHovered: boolean;
  showText: boolean;
}

export default function ProfileHeader({
  isSidebarOpen,
  isHovered,
  showText,
}: ProfileHeaderProps) {
  return (
    <>
      {isSidebarOpen && (
        <>
          {/* Background Image */}
          <motion.div
            className="absolute inset-x-0 top-0 h-20 bg-cover bg-center z-0 rounded-lg overflow-hidden" // Ganti h-1/2 ke h-20
            style={{
              backgroundImage: "url('/image/backdrop.webp')",
              margin: "8px", // Kurangi margin dari 12px ke 8px
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-x-0 top-0 h-20 bg-black/50 z-0 rounded-lg"
            style={{ margin: "8px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </>
      )}
      <AnimatePresence>
        {(isHovered || isSidebarOpen) && (
          <motion.div
            className="absolute top-2 left-2 flex items-center space-x-1 z-10 m-2" 
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundColor: showText ? "rgba(0, 0, 0, 0.3)" : "transparent",
              border: showText ? "1px solid rgba(255, 255, 255, 0.6)" : "none",
              padding: showText ? "3px 8px" : "0", 
              borderRadius: "9999px",
              color: "white",
              boxShadow: showText ? "0 2px 8px rgba(0, 0, 0, 0.15)" : "none", 
            }}
            exit={{ opacity: 0, y: -10 }}
            whileHover={{
              backgroundColor: showText
                ? "rgba(255, 255, 255, 0.9)"
                : "transparent",
              color: showText ? "black" : "white",
              scale: 1.05,
              boxShadow: showText ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "none",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <FaCircle className="text-green-500" size={10} /> 
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full bg-green-500/40"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </motion.div>

            <AnimatePresence>
              {showText && (
                <motion.span
                  className="text-xs font-medium whitespace-nowrap" 
                  initial={{ opacity: 0, width: 0, x: -10 }}
                  animate={{ opacity: 1, width: "auto", x: 0 }}
                  exit={{ opacity: 0, width: 0, x: -10 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    width: { duration: 0.3 },
                    x: { duration: 0.3 },
                  }}
                >
                  Hire Me
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}