import React, { useEffect, useRef } from 'react';
import styles from '@/styles/ParticleStars.module.css';

const ParticleStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const stars: Array<{ x: number; y: number; radius: number; speed: number; opacity: number }> = [];

    // Fungsi untuk membuat bintang
    const createStars = () => {
      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.3, // Improved opacity range
        });
      }
    };

    // Fungsi untuk menggambar bintang
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Gerakkan bintang ke kanan bawah
        star.x += star.speed;
        star.y += star.speed;

        // Reset posisi bintang jika sudah keluar dari layar
        if (star.x > canvas.width || star.y > canvas.height) {
          star.x = Math.random() * -100; // Prevent stars from clustering
          star.y = Math.random() * -100;
        }
      });
    };

    createStars();

    let animationFrameId: number;
    const animate = () => {
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      stars.length = 0;
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default ParticleStars;