"use client";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
// import { useMediaQuery } from "react-responsive";
import "@/styles/globals.css";
import IntroductionSection from "@/components/about/IntroductionSection";
import CareerSection from "@/components/about/CareerSection";
import SkillList from "@/components/about/SkillList";
import YouTubeSection from "@/components/about/YouTubeSection";
import TikTokSection from "@/components/about/TikTokSection";
import Breakline from "@/components/Breakline";

export default function AboutPage() {
  const { isDarkMode } = useDarkMode();
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tiktok_token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16 overflow-hidden">
        <div className="max-w-4xl w-full mx-auto">
          <IntroductionSection isDarkMode={isDarkMode} />
          <Breakline/>
          <CareerSection isDarkMode={isDarkMode} />
          <Breakline/>
          <SkillList isDarkMode={isDarkMode}  />
          <Breakline/>
          <YouTubeSection isDarkMode={isDarkMode} />          
          <Breakline/>
          <TikTokSection 
            isDarkMode={isDarkMode} 
            isAuthenticated={isAuthenticated} 
          />
        </div>
      </main>
    </div>
  );
}