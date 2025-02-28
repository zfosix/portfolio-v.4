import React from "react";
import { motion } from "framer-motion";
import DashboardContainer from "@/components/home/LandingContainer";

export default function DashboardIllustration() {
  const sidebarItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const contentItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <DashboardContainer>
      <motion.div
        className="flex h-48 w-80 bg-neutral-100 dark:bg-neutral-900 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border dark:border-neutral-700  border-neutral-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-1/4 bg-neutral-200 dark:bg-neutral-800 p-2 flex flex-col space-y-2"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-4 bg-neutral-300 dark:bg-neutral-600 rounded cursor-pointer"
              variants={sidebarItemVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.2 + i * 0.15,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex-1 p-3 text-white"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded mb-2"
            variants={contentItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, type: "spring" }}
            whileHover={{ scaleX: 1.05 }}
          />
          
          <motion.div
            className="h-16 bg-neutral-300 dark:bg-neutral-700 rounded p-2 space-y-1"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-2 bg-neutral-400 dark:bg-neutral-800 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{
                  delay: 0.8 + i * 0.2,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  type: "tween"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-2 right-2 w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            y: [0, 3],  
            scale: [0.9, 1.1]  
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween" 
          }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full"
          animate={{
            rotate: [0, 360],  
            scale: [0.8, 1.2]  
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </DashboardContainer>
  );
}