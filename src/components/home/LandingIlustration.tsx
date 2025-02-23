"use client";

import { motion } from "framer-motion";
import LandingContainer from "@/components/home/LandingContainer";

export default function LandingIlustration() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <LandingContainer>
      <div className="flex flex-col gap-1 w-full py-2">
        <motion.div
          className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800"
          initial={{ width: 0 }}
          animate={{ 
            width: "100%",
            y: [0, 5] // Hanya dua keyframes
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            type: "tween" // Ganti ke tween
          }}
        />
        
        <motion.div
          className="w-3/4 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: 1, 
            scaleX: 1,
            x: [0, 5] // Hanya dua keyframes
          }}
          transition={{ 
            delay: 0.5,
            duration: 0.6,
            type: "tween", // Ganti ke tween
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        
        <motion.div
          className="w-16 h-4 rounded-lg bg-blue-500 mx-auto mt-1"
          animate={{
            scale: [1, 1.05], // Hanya dua keyframes
            boxShadow: [
              "0 2px 8px rgba(0,0,0,0.1)",
              "0 4px 12px rgba(59,130,246,0.4)"
            ],
            y: [0, 3] // Hanya dua keyframes
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            type: "tween", // Ganti ke tween
            hover: { duration: 0.2 }
          }}
        />
        
        <div className="grid grid-cols-3 gap-1 mt-2">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="h-8 rounded-lg border border-neutral-300 dark:border-neutral-700"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                delay: item * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 10
              }}
            >
              <motion.div
                className="w-full h-full bg-neutral-100 dark:bg-neutral-800 rounded-[inherit]"
                animate={{
                  opacity: [1, 0.8], // Hanya dua keyframes
                  y: [0, 2] // Hanya dua keyframes
                }}
                transition={{
                  duration: 2 + item * 0.3,
                  repeat: Infinity,
                  type: "tween" // Ganti ke tween
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-purple-400/20 blur-md"
        animate={{
          x: [0, 10], // Hanya dua keyframes
          y: [0, 15], // Hanya dua keyframes
          rotate: [0, 180], // Hanya dua keyframes
          scale: [1, 1.2] // Hanya dua keyframes
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween" // Ganti ke tween
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-blue-400/20 blur-sm"
        animate={{
          y: [0, 10], // Hanya dua keyframes
          x: [0, 15], // Hanya dua keyframes
          rotate: [180, 360], // Hanya dua keyframes
          scale: [1, 1.1] // Hanya dua keyframes
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 0.5,
          type: "tween" // Ganti ke tween
        }}
      />
    </LandingContainer>
  );
}