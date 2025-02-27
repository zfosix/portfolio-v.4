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
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-cover bg-center z-0 rounded-t-lg"
            style={{
              backgroundImage: "url('/image/bg.jpg')",
              margin: "10px",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-black/50 z-0 rounded-t-lg"
            style={{ margin: "10px" }}
          />
        </>
      )}

      <AnimatePresence>
        {(isHovered || isSidebarOpen) && (
          <motion.div
            className="absolute top-4 left-4 flex items-center space-x-1 z-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: "transparent",
              border: showText ? "1px solid white" : "none",
              padding: showText ? "4px 8px" : "0",
              borderRadius: "9999px",
            }}
            exit={{ opacity: 0 }}
            whileHover={{
              backgroundColor: showText ? "white" : "transparent",
              color: showText ? "black" : "white",
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <FaCircle className="text-green-500" size={12} />
            </motion.div>

            <AnimatePresence>
              {showText && (
                <motion.span
                  className="text-sm whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    width: { duration: 0.2 },
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