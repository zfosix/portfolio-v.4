"use client";

import React, { useMemo, useEffect, useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";

const SolarSystem = () => {
  const { isDarkMode } = useDarkMode();
  // Add client-side only rendering to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize stars to avoid regenerating on every render
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
  }, []);

  // Planet data
  const planets = useMemo(
    () => [
      { name: "Mercury", color: "#A0522D", size: 12, orbit: 80, speed: 8 },
      { name: "Venus", color: "#DEB887", size: 16, orbit: 120, speed: 7 },
      { name: "Earth", color: "#4169E1", size: 18, orbit: 160, speed: 6 },
      { name: "Mars", color: "#CD5C5C", size: 14, orbit: 200, speed: 5 },
      { name: "Jupiter", color: "#DAA520", size: 32, orbit: 260, speed: 4 },
      { name: "Saturn", color: "#F4A460", size: 28, orbit: 320, speed: 3 },
      { name: "Uranus", color: "#87CEEB", size: 24, orbit: 380, speed: 2.5 },
      { name: "Neptune", color: "#1E90FF", size: 22, orbit: 440, speed: 2 },
    ],
    []
  );

  // If not client yet, return a placeholder or nothing to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-white dark:bg-black">
        {/* Simple loading placeholder */}
      </div>
    );
  }

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden ${
        isDarkMode
          ? "bg-[radial-gradient(circle_at_center,rgb(7,7,7)_0%,rgb(7,7,7)_100%)]"
          : "bg-[radial-gradient(circle_at_center,#ffffff_0%,#f0f0f0_100%)]"
      }`}
    >
      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${isDarkMode ? "bg-white" : "bg-[#333]"}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.7,
            // Fix: Separate animation properties instead of using the shorthand
            animationName: "twinkle",
            animationDuration: `${star.duration}s`,
            animationIterationCount: "infinite",
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Sun */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffff00,#ffaa00)] shadow-[0_0_50px_#ffaa00] animate-sun-pulse"
      />

      {/* Orbits and Planets */}
      {planets.map((planet) => (
        <div
          key={planet.name}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${planet.orbit * 1.5}px`,
            height: `${planet.orbit * 1.5}px`,
            border: `1px solid ${
              isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }`,
            // Fix: Separate animation properties
            animationName: "orbit",
            animationDuration: `${planet.speed}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <div
            className="absolute top-[-5px] left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              background: `radial-gradient(circle at 30% 30%, ${planet.color}, #000000)`,
              boxShadow: `0 0 20px ${
                isDarkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"
              }`,
              // Fix: Separate animation properties
              animationName: "rotate",
              animationDuration: `${planet.speed * 2}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {/* Saturn's Ring */}
            {planet.name === "Saturn" && (
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-x-[60deg] w-[150%] h-[150%] rounded-full border-[4px] border-t-transparent border-b-transparent"
                style={{
                  borderColor: "rgba(210, 180, 140, 0.5)",
                }}
              />
            )}
          </div>
        </div>
      ))}

      {/* CSS Keyframes */}
      <style jsx global>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes rotate {
          from {
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        @keyframes sun-pulse {
          from {
            box-shadow: 0 0 50px #ffaa00;
          }
          to {
            box-shadow: 0 0 70px #ffaa00;
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default SolarSystem;