"use client";

import React, { useEffect, useState } from "react";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0); // Reset progress ke 0 saat komponen dimount

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10; // Naikkan progress setiap 100ms
      });
    }, 100);

    return () => {
      clearInterval(interval); // Bersihkan interval saat komponen di-unmount
    };
  }, []); // Jalankan efek hanya sekali saat komponen dimount

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        backgroundColor: "#e0e0e0", // Warna latar belakang loading bar
        zIndex: 1001, // Pastikan LoadingBar muncul di atas LoadingSpinner
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#3b82f6", // Warna progress bar (biru)
          transition: "width 0.2s ease", // Animasi smooth
        }}
      ></div>
    </div>
  );
};

export default LoadingBar;