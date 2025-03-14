"use client";

import { motion } from "framer-motion";
import LandingContainer from "@/components/LandingContainer";

export default function LandingIlustration() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <LandingContainer>
      <div className="flex flex-col gap-1 w-full py-2">
        {/* Baris 1 */}
        <motion.div
          className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 1,
            ease: "easeInOut",
          }}
        />
        
        {/* Baris 2 */}
        <motion.div
          className="w-3/4 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
        
        {/* Tombol */}
        <motion.div
          className="w-16 h-4 rounded-lg bg-neutral-500 dark:bg-neutral-600 mx-auto mt-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [1, 0.9, 1], // Animasi kedap-kedip
            scale: 1 
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            delay: 0.6,
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity, // Mengulang animasi
            repeatType: "mirror"
          }}
        />
        
        {/* Grid Items */}
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
                delay: item * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 10
              }}
            >
              <motion.div
                className="w-full h-full bg-neutral-100 dark:bg-neutral-800 rounded-[inherit]"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [1, 0.8, 1], // Animasi kedap-kedip
                  scale: [1, 1.02, 1] // Sedikit scaling untuk efek dinamis
                }}
                transition={{ 
                  delay: item * 0.3,
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity, // Mengulang animasi
                  repeatType: "mirror"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </LandingContainer>
  );
}