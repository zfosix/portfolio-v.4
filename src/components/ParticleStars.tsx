import React, { useEffect, useRef } from 'react';
import styles from '@/styles/ParticleStars.module.css'; 

const ParticleStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: Array<{ x: number; y: number; radius: number; speed: number; opacity: number }> = [];

    // Fungsi untuk membuat bintang
    const createStars = () => {
      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random(),
        });
      }
    };

    // Fungsi untuk menggambar bintang
    const drawStars = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Gerakkan bintang ke kanan bawah
        star.x += star.speed;
        star.y += star.speed;

        // Reset posisi bintang jika sudah keluar dari layar
        if (star.x > width || star.y > height) {
          star.x = Math.random() * -width;
          star.y = Math.random() * -height;
        }
      });
    };

    createStars();

    const animate = () => {
      drawStars();
      requestAnimationFrame(animate);
    };

    animate();

    // Bersihkan animasi saat komponen di-unmount
    return () => {
      stars.length = 0;
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default ParticleStars;