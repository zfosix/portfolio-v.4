"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
}

const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 50; // Jumlah bintang
      const newStars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        const star = {
          id: i,
          top: Math.random() * 100, // Posisi vertikal acak
          left: Math.random() * 50 + 50, // Posisi horizontal acak (di bagian kanan)
          size: Math.random() * 3 + 1, // Ukuran bintang acak
          opacity: Math.random() * 0.5 + 0.5, // Opasitas acak
        };
        newStars.push(star);
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      {stars.map((star) => (
        <Star key={star.id} star={star} />
      ))}
    </div>
  );
};

const Star = ({ star }: { star: Star }) => {
    const controls = useAnimation();
  
    useEffect(() => {
      const animateStar = async () => {
        while (true) {
          // Animasi kedipan (opacity) dan gerakan (translateY)
          await controls.start({
            opacity: [star.opacity, star.opacity * 0.5, star.opacity],
            y: [0, Math.random() * 5 - 2.5, 0], // Gerakan naik turun sedikit
            scale: [0, 1], // Add scale animation here
            transition: {
              duration: Math.random() * 2 + 1, // Durasi acak antara 1-3 detik
              repeat: Infinity, // Mengulang animasi tanpa batas
              repeatType: "reverse", // Membalik animasi setelah selesai
              ease: "easeInOut",
            },
          });
        }
      };
  
      animateStar();
    }, [controls, star.opacity]);
  
    return (
      <motion.div
        style={{
          position: "absolute",
          top: `${star.top}%`,
          left: `${star.left}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          backgroundColor: "white",
          borderRadius: "50%",
          opacity: star.opacity,
        }}
        initial={{ scale: 0 }}
        animate={controls} // Use a single `animate` prop
        transition={{ duration: 0.5, delay: star.id * 0.01 }}
      />
    );
  };

export default StarryBackground;