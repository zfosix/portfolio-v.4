import React from 'react';
import { useDarkMode } from '@/context/DarkModeContext'; // Sesuaikan path

const SolarSystem = () => {
  const { isDarkMode } = useDarkMode(); // Ambil nilai isDarkMode dari konteks

  const stars = Array.from({ length: 150 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3,
    delay: Math.random() * 5
  }));

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      background: isDarkMode 
        ? 'radial-gradient(circle at center, rgb(7, 7, 7) 0%, rgb(7, 7, 7) 100%)' 
        : 'radial-gradient(circle at center, #ffffff 0%, #f0f0f0 100%)',
      overflow: 'hidden',
    }}>
      {/* Bintang-bintang */}
      {stars.map((star, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          borderRadius: '50%',
          background: isDarkMode ? 'white' : '#333',
          animation: `twinkle ${2 + Math.random() * 3}s infinite`,
          animationDelay: `${star.delay}s`,
          opacity: 0.7
        }} />
      ))}

      {/* Matahari */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #ffff00, #ffaa00)',
        boxShadow: '0 0 50px #ffaa00',
        animation: 'sun-pulse 2s infinite alternate'
      }} />

      {/* Planet-planet */}
      {[
        { name: 'Mercury', color: '#A0522D', size: 12, orbit: 80, speed: 8 },
        { name: 'Venus', color: '#DEB887', size: 16, orbit: 120, speed: 7 },
        { name: 'Earth', color: '#4169E1', size: 18, orbit: 160, speed: 6 },
        { name: 'Mars', color: '#CD5C5C', size: 14, orbit: 200, speed: 5 },
        { name: 'Jupiter', color: '#DAA520', size: 32, orbit: 260, speed: 4 },
        { name: 'Saturn', color: '#F4A460', size: 28, orbit: 320, speed: 3 },
        { name: 'Uranus', color: '#87CEEB', size: 24, orbit: 380, speed: 2.5 },
        { name: 'Neptune', color: '#1E90FF', size: 22, orbit: 440, speed: 2 }
      ].map((planet) => (
        <div key={planet.name} style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: `${planet.orbit * 2}px`,
          height: `${planet.orbit * 2}px`,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          animation: `orbit ${planet.speed}s linear infinite`
        }}>
          <div style={{
            position: 'absolute',
            top: '-5px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${planet.color}, #000000)`,
            boxShadow: `0 0 20px ${isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'}`,
            animation: `rotate ${planet.speed * 2}s linear infinite`
          }}>
            {/* Cincin Saturnus */}
            {planet.name === 'Saturn' && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotateX(60deg)',
                width: '150%',
                height: '150%',
                borderRadius: '50%',
                border: `4px solid ${isDarkMode ? 'rgba(210, 180, 140, 0.5)' : 'rgba(210, 180, 140, 0.5)'}`,
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent'
              }} />
            )}
          </div>
        </div>
      ))}

      {/* Keyframes */}
      <style>
        {`
          @keyframes orbit {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes rotate {
            from { transform: translateX(-50%) rotate(0deg); }
            to { transform: translateX(-50%) rotate(360deg); }
          }

          @keyframes sun-pulse {
            from { box-shadow: 0 0 50px #ffaa00; }
            to { box-shadow: 0 0 70px #ffaa00; }
          }

          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}
      </style>
    </div>
  );
};

export default SolarSystem;