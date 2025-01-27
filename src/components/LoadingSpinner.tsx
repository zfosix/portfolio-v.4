// components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '150px',
        height: '150px',
      }}
    >
      {/* Planet (Bumi - Desain Manual) */}
      <div
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle at 30% 40%, #0077be, #005f8c 40%, #003366 70%, #001f3f), ' + // Gradien untuk efek laut
            'linear-gradient(145deg, rgba(34, 139, 34, 0.6) 10%, transparent 30%), ' + // Efek daratan hijau 1
            'linear-gradient(45deg, rgba(50, 205, 50, 0.6) 10%, transparent 30%), ' + // Efek daratan hijau 2
            'linear-gradient(225deg, rgba(0, 100, 0, 0.6) 10%, transparent 30%)', // Efek daratan hijau 3
          boxShadow:
            'inset 0 0 20px rgba(255, 255, 255, 0.3), ' + // Efek cahaya dalam
            '0 0 30px rgba(0, 119, 190, 0.8)', // Efek cahaya luar
          border: '2px solid rgba(255, 255, 255, 0.1)', // Garis tepi halus
        }}
      ></div>

      {/* Orbit */}
      <div
        style={{
          width: '140px',
          height: '140px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'orbit-spin 4s linear infinite',
        }}
      >
        {/* Moon */}
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, #ffffff, #cccccc)',
            boxShadow:
              '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)',
            animation: 'moon-glow 2s infinite alternate, moon-rotate 5s linear infinite',
          }}
        ></div>
      </div>

      {/* Keyframes untuk animasi orbit-spin, moon-glow, dan moon-rotate */}
      <style>
        {`
          @keyframes orbit-spin {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes moon-glow {
            0% {
              box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
            }
            100% {
              box-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6);
            }
          }

          @keyframes moon-rotate {
            0% {
              transform: translateX(-50%) rotate(0deg);
            }
            100% {
              transform: translateX(-50%) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;